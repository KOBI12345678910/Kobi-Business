#!/usr/bin/env node
// QA for a build directory: node qa.js dist
const fs = require('fs');
const path = require('path');
const dir = path.resolve(process.argv[2] || 'dist');
const manifest = JSON.parse(fs.readFileSync(path.join(dir, 'manifest.json'), 'utf8'));
const files = new Set(manifest.map((m) => m.file));
const issues = [];
const titles = new Map(), descs = new Map(), urls = new Set();
let words = 0, minWords = 1e9, minFile = '', links = 0;
const hreflang = new Map();
for (const m of manifest) {
  const html = fs.readFileSync(path.join(dir, m.file), 'utf8');
  const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1] || '';
  const desc = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '';
  const key = m.lang + '|';
  if (!title) issues.push(['no-title', m.file]);
  if (titles.has(key + title)) issues.push(['dup-title', m.file + ' = ' + titles.get(key + title)]); else titles.set(key + title, m.file);
  if (descs.has(key + desc)) issues.push(['dup-desc', m.file + ' = ' + descs.get(key + desc)]); else descs.set(key + desc, m.file);
  if (title.length > 110) issues.push(['long-title ' + title.length, m.file]);
  if (desc.length < 70 || desc.length > 230) issues.push(['desc-length ' + desc.length, m.file]);
  if ((html.match(/<h1[ >]/g) || []).length !== 1) issues.push(['h1-count', m.file]);
  if (/\{\{|\}\}|\[\[|\]\]|undefined|NaN|\[object/.test(html.replace(/<script[\s\S]*?<\/script>/g, ''))) issues.push(['unresolved-token', m.file]);
  if (urls.has(m.url)) issues.push(['dup-url', m.url]); urls.add(m.url);
  const canon = (html.match(/<link rel="canonical" href="([^"]*)"/) || [])[1];
  if (canon !== m.url) issues.push(['canonical-mismatch', m.file]);
  const alts = [...html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)].map((a) => a[1] + '=' + a[2]);
  hreflang.set(m.url, alts);
  for (const a of html.matchAll(/<a [^>]*href="([^"#]+)"/g)) {
    const h = a[1];
    if (/^(https?:|mailto:|tel:)/.test(h)) continue;
    links++;
    const target = path.posix.normalize(path.posix.join(path.posix.dirname(m.file), h));
    if (!files.has(target) && target !== 'index.html') issues.push(['broken-link', m.file + ' -> ' + h]);
  }
  for (const ld of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) { try { JSON.parse(ld[1]); } catch (e) { issues.push(['bad-jsonld', m.file]); } }
  const text = html.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<header[\s\S]*?<\/header>/, ' ').replace(/<footer[\s\S]*?<\/footer>/, ' ').replace(/<[^>]+>/g, ' ');
  const w = text.split(/\s+/).filter(Boolean).length;
  words += w; if (w < minWords) { minWords = w; minFile = m.file; }
}
// hreflang reciprocity: every alternate target must list this page back
for (const [url, alts] of hreflang) for (const a of alts) { const [lang, target] = a.split(/=(.*)/s); if (lang === 'x-default') continue; const back = hreflang.get(target); if (!back) issues.push(['hreflang-target-missing', url + ' -> ' + target]); else if (!back.some((b) => b.endsWith('=' + url))) issues.push(['hreflang-not-reciprocal', url + ' -> ' + target]); }
const byType = {};
for (const i of issues) byType[i[0].split(' ')[0]] = (byType[i[0].split(' ')[0]] || 0) + 1;
console.log(JSON.stringify({ pages: manifest.length, internalLinks: links, avgWords: Math.round(words / manifest.length), minWords, minFile, issueCounts: byType }, null, 1));
for (const i of issues.slice(0, 25)) console.log(i.join(' | '));
process.exit(issues.length ? 1 : 0);

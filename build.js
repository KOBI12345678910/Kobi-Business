#!/usr/bin/env node
// Static generator for the international buyer site.
//   node build.js            -> preview build (relative .html links, noindex) in dist/
//   node build.js --prod     -> production build (clean absolute URLs, indexable)
// Pages are composed only from data/*.js. A page is built only when all of its data exists.
const fs = require('fs');
const path = require('path');
const taxLib = require('./data/tax.js');
const { CITIES, SRC, CITY_VERIFIED } = require('./data/cities.js');

const PROD = process.argv.includes('--prod');
const SITE = (process.env.SITE_URL || 'https://global.kobielkayamrealestateltd.com').replace(/\/$/, '');
const arg = (n, d) => { const m = process.argv.find((x) => x.startsWith('--' + n + '=')); return m ? m.split('=')[1] : d; };
const STEP = +arg('step', 100000);
const OUT = path.join(__dirname, arg('out', PROD ? 'dist-prod' : 'dist'));
const LANGS = ['en', 'fr', 'ru'].map((c) => require(`./data/i18n-${c}.js`));
const X_DEFAULT = 'en';
const PHONE = '+972-53-658-4252';
const TEL = '+972536584252';
const WA = '972536584252';
const MAIL = 'support@kobielkayamrealestateltd.com';
const PRICES = [];
for (let p = 1500000; p <= 10000000; p += STEP) PRICES.push(p);
const STATUSES = ['foreign', 'oleh'];
const INTENTS = ['foreign', 'oleh'];
const CITY_EXAMPLES = [2000000, 3000000, 5000000];

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const taxes = (p) => ({ foreign: taxLib.tax('foreign', p), oleh: taxLib.tax('oleh', p), resident: taxLib.tax('resident', p) });
const nearestPrice = (p) => Math.min(10000000, Math.max(1500000, Math.round(p / STEP) * STEP));

// ---------- registry ----------
const pages = [];            // { key, lang, path, type, ... }
const byKey = new Map();     // `${lang}|${key}` -> page
function reg(page) { pages.push(page); byKey.set(page.lang + '|' + page.key, page); return page; }

for (const L of LANGS) {
  const l = L.code;
  reg({ key: 'hub', lang: l, type: 'hub', path: `${l}/index` });
  reg({ key: 'service', lang: l, type: 'service', path: `${l}/${L.service.slug}` });
  reg({ key: 'guidesIndex', lang: l, type: 'index', path: `${l}/${L.guidesBase}/index` });
  for (const g of L.guides) reg({ key: 'guide:' + g.id, lang: l, type: 'guide', path: `${l}/${L.guidesBase}/${g.slug}`, guide: g });
  reg({ key: 'calcIndex', lang: l, type: 'index', path: `${l}/${L.calc.base}/index` });
  for (const st of STATUSES) for (const p of PRICES) reg({ key: `calc:${st}:${p}`, lang: l, type: 'calc', path: `${l}/${L.calc.base}/${L.statuses[st].slug}/${p}`, st, price: p });
  reg({ key: 'cityIndex', lang: l, type: 'index', path: `${l}/${L.city.base}/index` });
  for (const c of CITIES) for (const it of INTENTS) reg({ key: `city:${c.id}:${it}`, lang: l, type: 'city', path: `${l}/${L.city.base}/${c.id}/${L.city.intents[it].slug}`, city: c, intent: it });
}

// ---------- urls ----------
const clean = (p) => (p === 'index' ? '' : p.endsWith('/index') ? p.slice(0, -6) : p);
const prodUrl = (p) => SITE + '/' + clean(p);
function href(from, to) {
  if (PROD) return '/' + clean(to);
  return path.posix.relative(path.posix.dirname(from), to) + '.html';
}
const get = (lang, key) => { const p = byKey.get(lang + '|' + key); if (!p) throw new Error(`missing page ${lang}|${key}`); return p; };

// ---------- text helpers ----------
function typo(L, s) { return L.code === 'fr' ? s.replace(/ ([%:;?!])/g, '\u00a0$1') : s; }
function tokens(L, s) {
  return String(s)
    .replace(/\{\{ils:(\d+)\}\}/g, (_, n) => L.ils(+n))
    .replace(/\{\{tax:(\w+):(\d+)\}\}/g, (_, st, n) => L.ils(taxLib.tax(st, +n)));
}
const plain = (L, s) => typo(L, tokens(L, s)).replace(/\[\[[^|\]]+\|([^\]]+)\]\]/g, '$1');
function rich(L, page, s) {
  const t = typo(L, tokens(L, s));
  let out = '';
  let last = 0;
  const re = /\[\[([^|\]]+)\|([^\]]+)\]\]/g;
  let m;
  while ((m = re.exec(t))) {
    out += esc(t.slice(last, m.index)) + `<a href="${href(page.path, get(L.code, m[1]).path)}">${esc(m[2])}</a>`;
    last = m.index + m[0].length;
  }
  return out + esc(t.slice(last));
}
function blocks(L, page, list) {
  return list.map(([tag, v]) => {
    if (tag === 'ul' || tag === 'ol') return `<${tag}>` + v.map((i) => `<li>${rich(L, page, i)}</li>`).join('') + `</${tag}>`;
    return `<${tag}>${rich(L, page, v)}</${tag}>`;
  }).join('\n');
}
const fmtDate = (L, iso) => new Intl.DateTimeFormat(L.code, { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(iso + 'T12:00:00Z'));
const link = (L, page, key, text) => `<a href="${href(page.path, get(L.code, key).path)}">${esc(typo(L, text))}</a>`;

// ---------- page models ----------
function model(L, page) {
  const l = L.code;
  const m = { faq: [], sources: [], related: [], crumbs: [['hub', L.nav.home]] };
  if (page.type === 'hub') {
    Object.assign(m, { title: L.hub.title, desc: L.hub.desc, h1: L.hub.h1, lead: L.hub.lead, body: blocks(L, page, L.hub.blocks), crumbs: [] });
    m.sources = ['tax', 'boi'];
  } else if (page.type === 'service') {
    const s = L.service;
    Object.assign(m, { title: s.title, desc: s.desc, h1: s.h1, body: blocks(L, page, s.blocks), faq: s.faq });
    m.related = L.guides.map((g) => ['guide:' + g.id, g.title]).concat([['calcIndex', L.calc.index.h1], ['cityIndex', L.city.index.h1]]);
    m.crumbs.push([null, L.nav.service]);
  } else if (page.type === 'guide') {
    const g = page.guide;
    Object.assign(m, { title: g.title, desc: g.desc, h1: g.h1, body: blocks(L, page, g.blocks), faq: g.faq, sources: g.sources });
    m.related = L.guides.filter((x) => x.id !== g.id).map((x) => ['guide:' + x.id, x.title]).concat([['service', L.service.h1], ['calcIndex', L.calc.index.h1], ['cityIndex', L.city.index.h1]]);
    m.crumbs.push(['guidesIndex', L.nav.guides], [null, g.h1]);
  } else if (page.type === 'calc') {
    const { st, price } = page;
    const b = taxLib.breakdown(st, price);
    const x = taxes(price);
    const C = L.calc;
    const i = PRICES.indexOf(price);
    let body = `<h2>${esc(C.breakdownTitle)}</h2><ul>` + b.rows.map((r) => `<li>${esc(typo(L, C.row(r)))}</li>`).join('') + `</ul><p><strong>${esc(typo(L, C.total(b.total)))}</strong></p>`;
    body += `<h2>${esc(C.compareTitle)}</h2><ul>` + C.compare(price, x).map((t) => `<li>${esc(typo(L, t))}</li>`).join('') + '</ul>';
    body += `<h2>${esc(C.notesTitle)}</h2><ul>` + C.notes[st].concat(C.notes.common).map((t) => `<li>${esc(typo(L, t))}</li>`).join('') + '</ul>';
    const nav = [];
    if (i > 0) nav.push(`${esc(L.ui.prev)}: ${link(L, page, `calc:${st}:${PRICES[i - 1]}`, L.ils(PRICES[i - 1]))}`);
    if (i < PRICES.length - 1) nav.push(`${esc(L.ui.next)}: ${link(L, page, `calc:${st}:${PRICES[i + 1]}`, L.ils(PRICES[i + 1]))}`);
    body += `<p class="pager">${nav.join(' · ')}</p>`;
    const other = st === 'foreign' ? 'oleh' : 'foreign';
    Object.assign(m, { title: C.title(st, price), desc: C.desc(st, price, b.total), h1: C.h1(st, price), lead: C.intro(st, price, b.total), body, faq: C.faq(st, price, x), sources: st === 'foreign' ? ['tax', 'nbn', 'order'] : ['tax', 'nbn'] });
    m.related = [[`calc:${other}:${price}`, C.h1(other, price)], ['guide:purchase-tax', L.guides.find((g) => g.id === 'purchase-tax').title], ['guide:' + (st === 'foreign' ? 'foreign-buyer' : 'oleh'), L.guides.find((g) => g.id === (st === 'foreign' ? 'foreign-buyer' : 'oleh')).title], ['service', L.service.h1]];
    m.crumbs.push(['calcIndex', L.nav.tax], [null, `${L.statuses[st].cap}, ${L.ils(price)}`]);
  } else if (page.type === 'city') {
    const c = page.city;
    const it = page.intent;
    const name = c.names[l];
    const K = L.city;
    const I = K.intents[it];
    const d = L.districts[c.district];
    const facts = [K.facts.where(name, c.kind, d, c.founded), K.facts.pop(c.pop)];
    if (c.cluster) facts.push(K.facts.cluster(c.cluster, c.clusterYear));
    if (c.price && c.price.scope === 'city') facts.push(K.facts.priceCity(name, c.price.q2_2026, c.price.y2025));
    else if (c.price) facts.push(K.facts.priceDistrict(name, d, c.price.q2_2026));
    else facts.push(K.facts.noPrice(name));
    if (c.rent && c.rent.scope === 'city') facts.push(K.facts.rentCity(c.rent.q2_2026, c.rent.y2025));
    else if (c.rent) facts.push(K.facts.rentDistrict(d, c.rent.q2_2026));
    if (c.renewal !== null) facts.push(K.facts.renewal(name, c.renewal));
    if (c.train) facts.push(K.facts.train(name));
    let body = `<h2>${esc(typo(L, K.factsTitle(name)))}</h2><ul>` + facts.map((t) => `<li>${esc(typo(L, t))}</li>`).join('') + '</ul>';
    if (c.price) body += `<p>${esc(typo(L, K.facts.caveat))}</p>`;
    const cityPrice = c.price && c.price.scope === 'city' ? c.price.q2_2026 : null;
    const ex = cityPrice ? nearestPrice(cityPrice) : 3000000;
    body += `<h2>${esc(typo(L, K.taxTitle(name)))}</h2>`;
    if (cityPrice) body += `<p>${esc(typo(L, K.taxAtAvg(name, cityPrice)))}</p><ul>` + L.calc.compare(cityPrice, taxes(cityPrice)).map((t) => `<li>${esc(typo(L, t))}</li>`).join('') + '</ul>';
    else body += `<p>${esc(typo(L, K.taxExamples))}</p><ul>` + CITY_EXAMPLES.map((p) => `<li>${esc(typo(L, K.taxLine(p, taxes(p))))}</li>`).join('') + '</ul>';
    body += `<p>${link(L, page, `calc:${it}:${ex}`, L.calc.h1(it, ex))} · ${link(L, page, 'calcIndex', K.taxMore)}</p>`;
    body += `<h2>${esc(typo(L, K.stepsTitle[it]))}</h2><ol>` + K.steps[it].map((t) => `<li>${esc(typo(L, t))}</li>`).join('') + '</ol>';
    const src = ['cbsLocalities'];
    if (c.cluster) src.push('cbsLocalities');
    if (c.price) src.push('cbsPrices');
    if (c.rent) src.push('cbsRent');
    if (c.renewal !== null) src.push('renewal');
    if (c.train) src.push('rail');
    src.push('tax', 'boi');
    const otherIt = it === 'foreign' ? 'oleh' : 'foreign';
    Object.assign(m, { title: I.title(name), desc: I.desc(name), h1: I.h1(name), lead: I.intro(name), body, faq: K.faq(name, it, ex, taxes(ex)), sources: [...new Set(src)] });
    m.related = [[`city:${c.id}:${otherIt}`, K.intents[otherIt].h1(name)]]
      .concat(CITIES.filter((o) => o.id !== c.id).map((o) => [`city:${o.id}:${it}`, I.h1(o.names[l])]))
      .concat([['guide:' + (it === 'foreign' ? 'foreign-buyer' : 'oleh'), L.guides.find((g) => g.id === (it === 'foreign' ? 'foreign-buyer' : 'oleh')).title], ['service', L.service.h1]]);
    m.crumbs.push(['cityIndex', L.nav.cities], [null, `${name} \u2013 ${I.label}`]);
  } else if (page.key === 'guidesIndex') {
    const G = L.guidesIndex;
    Object.assign(m, { title: G.title, desc: G.desc, h1: G.h1, lead: G.lead, body: '<ul class="list">' + L.guides.map((g) => `<li>${link(L, page, 'guide:' + g.id, g.title)}<br><span>${esc(plain(L, g.desc))}</span></li>`).join('') + '</ul>' });
    m.crumbs.push([null, L.nav.guides]);
  } else if (page.key === 'calcIndex') {
    const C = L.calc;
    const rows = PRICES.map((p) => `<tr><th scope="row">${esc(L.ils(p))}</th>` + STATUSES.map((st) => `<td>${link(L, page, `calc:${st}:${p}`, L.ils(taxLib.tax(st, p)))}</td>`).join('') + '</tr>').join('');
    Object.assign(m, { title: C.index.title, desc: C.index.desc, h1: C.index.h1, lead: C.index.lead, sources: ['tax', 'nbn'], body: `<table><thead><tr><th>${esc(C.index.colPrice)}</th>${STATUSES.map((st) => `<th>${esc(L.statuses[st].cap)}</th>`).join('')}</tr></thead><tbody>${rows}</tbody></table>` });
    m.related = [['guide:purchase-tax', L.guides.find((g) => g.id === 'purchase-tax').title]];
    m.crumbs.push([null, L.nav.tax]);
  } else if (page.key === 'cityIndex') {
    const K = L.city;
    Object.assign(m, { title: K.index.title, desc: K.index.desc, h1: K.index.h1, lead: K.index.lead, sources: ['cbsLocalities'], body: '<ul class="list">' + CITIES.map((c) => `<li><strong>${esc(c.names[l])}</strong><br>` + INTENTS.map((it) => link(L, page, `city:${c.id}:${it}`, K.intents[it].label)).join(' · ') + '</li>').join('') + '</ul>' });
    m.crumbs.push([null, L.nav.cities]);
  }
  m.title = plain(L, m.title); m.desc = plain(L, m.desc); m.h1 = plain(L, m.h1); if (m.lead) m.lead = plain(L, m.lead);
  m.faq = m.faq.map(([q, a]) => [plain(L, q), plain(L, a)]);
  return m;
}

// ---------- html ----------
function render(L, page) {
  const m = model(L, page);
  const url = prodUrl(page.path);
  const alts = LANGS.filter((x) => byKey.has(x.code + '|' + page.key));
  const depthCss = href(page.path, 'assets/site').replace(/\.html$/, '.css').replace(/^\/assets\/site$/, '/assets/site.css');
  const ld = [];
  const crumbs = m.crumbs.map(([k, t]) => ({ t, u: k ? prodUrl(get(L.code, k).path) : url, h: k ? href(page.path, get(L.code, k).path) : null }));
  if (crumbs.length) ld.push({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.t, item: c.u })) });
  if (m.faq.length) ld.push({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: m.faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) });
  if (page.type === 'hub' || page.type === 'service') ld.push({ '@context': 'https://schema.org', '@type': 'RealEstateAgent', name: L.brand, url: 'https://www.kobielkayamrealestateltd.com/', telephone: PHONE, email: MAIL, foundingDate: '2013', address: { '@type': 'PostalAddress', addressLocality: 'Tel Aviv', addressCountry: 'IL' }, areaServed: 'IL', knowsLanguage: ['he', 'en', 'fr'] });
  const noindex = !PROD || page.draft;
  const wa = `https://wa.me/${WA}?text=${encodeURIComponent(L.ui.waMsg(m.h1))}`;
  const srcHtml = m.sources.length ? `<section class="sources"><h2>${esc(L.ui.sources)}</h2><ul>` + m.sources.map((s) => `<li>${SRC[s] ? `<a href="${SRC[s].url}" rel="nofollow noopener">${esc(L.src[s])}</a>` : esc(L.src[s])}</li>`).join('') + `</ul><p>${esc(typo(L, L.ui.lastVerified))} ${esc(fmtDate(L, page.type === 'city' || page.key === 'cityIndex' ? CITY_VERIFIED : taxLib.VERIFIED))}.</p></section>` : '';
  return `<!doctype html>
<html lang="${L.htmlLang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(m.title)}</title>
<meta name="description" content="${esc(m.desc)}">
<link rel="canonical" href="${url}">
${alts.map((x) => `<link rel="alternate" hreflang="${x.code}" href="${prodUrl(get(x.code, page.key).path)}">`).join('\n')}
<link rel="alternate" hreflang="x-default" href="${prodUrl(get(X_DEFAULT, page.key).path)}">
<meta name="robots" content="${noindex ? 'noindex, follow' : 'index, follow'}">
<meta property="og:type" content="website">
<meta property="og:title" content="${esc(m.title)}">
<meta property="og:description" content="${esc(m.desc)}">
<meta property="og:url" content="${url}">
<link rel="stylesheet" href="${depthCss}">
${ld.map((o) => `<script type="application/ld+json">${JSON.stringify(o).replace(/</g, '\\u003c')}</script>`).join('\n')}
</head>
<body>
<header class="top"><div class="wrap">
<a class="brand" href="${href(page.path, get(L.code, 'hub').path)}">${esc(L.brand)}</a>
<nav>${[['service', L.nav.service], ['guidesIndex', L.nav.guides], ['calcIndex', L.nav.tax], ['cityIndex', L.nav.cities]].map(([k, t]) => `<a href="${href(page.path, get(L.code, k).path)}">${esc(t)}</a>`).join('')}</nav>
<div class="langs">${alts.map((x) => x.code === L.code ? `<span aria-current="true">${esc(x.name)}</span>` : `<a href="${href(page.path, get(x.code, page.key).path)}" hreflang="${x.code}" lang="${x.code}">${esc(x.name)}</a>`).join('')}</div>
</div></header>
<main class="wrap">
${crumbs.length ? `<nav class="crumbs" aria-label="breadcrumb">${crumbs.map((c) => c.h ? `<a href="${c.h}">${esc(c.t)}</a>` : `<span>${esc(c.t)}</span>`).join(' › ')}</nav>` : ''}
${page.draft ? `<p class="draft">${esc(L.ui.draft)}</p>` : ''}
<h1>${esc(m.h1)}</h1>
${m.lead ? `<p class="lead">${esc(m.lead)}</p>` : ''}
${m.body}
${m.faq.length ? `<section class="faq"><h2>${esc(L.ui.faq)}</h2>${m.faq.map(([q, a]) => `<h3>${esc(q)}</h3><p>${esc(a)}</p>`).join('')}</section>` : ''}
<section class="cta"><h2>${esc(L.ui.contactTitle)}</h2><p>${esc(typo(L, L.ui.contactText))}</p>
<p class="btns"><a class="btn" href="${wa}" rel="nofollow noopener">${esc(L.ui.whatsapp)}</a><a class="btn alt" href="tel:${TEL}">${esc(L.ui.call)} ${PHONE}</a><a class="btn alt" href="mailto:${MAIL}">${esc(L.ui.email)}</a></p></section>
${m.related.length ? `<section class="related"><h2>${esc(L.ui.related)}</h2><ul>${m.related.map(([k, t]) => `<li>${link(L, page, k, plain(L, t))}</li>`).join('')}</ul></section>` : ''}
${srcHtml}
</main>
<footer><div class="wrap"><p>${esc(L.ui.about)}</p><p>${esc(typo(L, L.ui.disclaimer))}</p><p>${PHONE} · <a href="mailto:${MAIL}">${MAIL}</a> · <a href="https://www.kobielkayamrealestateltd.com/">kobielkayamrealestateltd.com</a></p></div></footer>
</body>
</html>
`;
}

const CSS = `:root{--ink:#16202b;--mut:#5b6875;--line:#dfe5ea;--bg:#f6f8fa;--acc:#0b5d57;--acc2:#e8f3f1}
*{box-sizing:border-box}body{margin:0;font:17px/1.65 system-ui,-apple-system,"Segoe UI",Roboto,Arial,sans-serif;color:var(--ink);background:#fff}
.wrap{max-width:820px;margin:0 auto;padding:0 20px}a{color:var(--acc)}
.top{border-bottom:1px solid var(--line);background:#fff}.top .wrap{display:flex;flex-wrap:wrap;gap:8px 22px;align-items:center;padding-top:14px;padding-bottom:14px}
.brand{font-weight:700;color:var(--ink);text-decoration:none;margin-right:auto}.top nav{display:flex;flex-wrap:wrap;gap:4px 18px}.top nav a{text-decoration:none;font-size:15px}
.langs{display:flex;gap:10px;font-size:14px}.langs span{font-weight:700}
.crumbs{font-size:14px;color:var(--mut);margin:22px 0 0}h1{font-size:34px;line-height:1.2;margin:18px 0 12px}h2{font-size:23px;line-height:1.3;margin:36px 0 10px}h3{font-size:18px;margin:22px 0 4px}
.lead{font-size:19px;color:#2c3a47}li{margin:6px 0}.pager{margin-top:22px}
table{border-collapse:collapse;width:100%;font-size:16px}th,td{border-bottom:1px solid var(--line);padding:8px 10px;text-align:left}thead th{background:var(--bg)}
.list{list-style:none;padding:0}.list li{padding:14px 0;border-bottom:1px solid var(--line)}.list span{color:var(--mut);font-size:15px}
.cta{background:var(--acc2);border-radius:10px;padding:6px 24px 22px;margin:44px 0}.btns{display:flex;flex-wrap:wrap;gap:10px}
.btn{background:var(--acc);color:#fff;text-decoration:none;padding:11px 20px;border-radius:8px;font-weight:600}.btn.alt{background:#fff;color:var(--acc);border:1px solid var(--acc)}
.sources,.related{font-size:15px}.sources p{color:var(--mut)}.draft{background:#fff4d6;border:1px solid #e6c766;padding:10px 14px;border-radius:8px;font-size:15px}
footer{background:var(--bg);border-top:1px solid var(--line);margin-top:56px;padding:26px 0;font-size:14px;color:var(--mut)}
@media(max-width:600px){h1{font-size:27px}body{font-size:16px}}`;

// ---------- write ----------
fs.rmSync(OUT, { recursive: true, force: true });
const write = (rel, data) => { const f = path.join(OUT, rel); fs.mkdirSync(path.dirname(f), { recursive: true }); fs.writeFileSync(f, data); };
write('assets/site.css', CSS);
const byLang = Object.fromEntries(LANGS.map((L) => [L.code, L]));
for (const page of pages) { const html = render(byLang[page.lang], page); page.title = (html.match(/<title>([^<]*)<\/title>/) || [])[1].replace(/&amp;/g, '&').replace(/&quot;/g, '"'); write(page.path + '.html', html); }

// root language chooser
write('index.html', `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Kobi Elkayam Real Estate: buying property in Israel from abroad</title><meta name="robots" content="${PROD ? 'index, follow' : 'noindex, follow'}"><link rel="canonical" href="${SITE}/">${LANGS.map((L) => `<link rel="alternate" hreflang="${L.code}" href="${prodUrl(L.code + '/index')}">`).join('')}<link rel="alternate" hreflang="x-default" href="${SITE}/"><link rel="stylesheet" href="${PROD ? '/' : ''}assets/site.css"></head><body><main class="wrap"><h1>Kobi Elkayam Real Estate Ltd</h1><ul class="list">${LANGS.map((L) => `<li><a href="${PROD ? '/' + L.code : L.code + '/index.html'}" lang="${L.code}">${esc(L.name)}: ${esc(L.hub.h1)}</a></li>`).join('')}</ul></main></body></html>\n`);

// sitemaps (production URLs; drafts excluded)
const live = pages.filter((p) => !p.draft);
for (const L of LANGS) {
  const items = live.filter((p) => p.lang === L.code).map((p) => `<url><loc>${prodUrl(p.path)}</loc>${LANGS.filter((x) => byKey.has(x.code + '|' + p.key)).map((x) => `<xhtml:link rel="alternate" hreflang="${x.code}" href="${prodUrl(get(x.code, p.key).path)}"/>`).join('')}<lastmod>${taxLib.VERIFIED}</lastmod></url>`).join('\n');
  write(`sitemap-${L.code}.xml`, `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${items}\n</urlset>\n`);
}
write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${LANGS.map((L) => `<sitemap><loc>${SITE}/sitemap-${L.code}.xml</loc></sitemap>`).join('\n')}\n</sitemapindex>\n`);
write('robots.txt', PROD ? `User-agent: *\nAllow: /\nSitemap: ${SITE}/sitemap.xml\n` : 'User-agent: *\nDisallow: /\n');
write('manifest.json', JSON.stringify(pages.map((p) => ({ lang: p.lang, key: p.key, type: p.type, title: p.title, url: prodUrl(p.path), file: p.path + '.html', draft: !!p.draft })), null, 1));
write('404.html', `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Page not found | Kobi Elkayam Real Estate</title><meta name="robots" content="noindex"><link rel="stylesheet" href="/assets/site.css"></head><body><main class="wrap"><h1>Page not found</h1><ul class="list">${LANGS.map((L) => `<li><a href="/${L.code}" lang="${L.code}">${esc(L.name)}: ${esc(L.hub.h1)}</a></li>`).join('')}</ul></main></body></html>\n`);

const count = {};
for (const p of pages) { count[p.lang + ' ' + p.type] = (count[p.lang + ' ' + p.type] || 0) + 1; }
console.log(`${PROD ? 'PROD' : 'PREVIEW'} build: ${pages.length} pages -> ${OUT}`);
console.log(JSON.stringify(count));

// Israeli purchase tax (mas rechisha) scales.
// Source: the company's own fact-checked pages on kobielkayamrealestateltd.com
// (mr26-he-chutz, mr26-he-olim, intl26-en-investor, intl26-en-oleh), verified 9-11 Nov 2026 against
// Israel Tax Authority execution directive 1/2025, Kol Zchut and the Nefesh B'Nefesh purchase tax summary.
// Re-verified 22 Nov 2026 against the Tax Authority simulator page (gov.il) and Kol Zchut.
// Thresholds published as valid 16 Jan 2024 - 15 Jan 2028. The 8%/10% rates for foreign residents and
// additional apartments are set by a temporary order extended to 31 Dec 2026 and kept in force until
// 10 Feb 2027 by section 38 of Basic Law: The Knesset. Re-check after that date.
const T1 = 1978745;
const T2 = 2347040;
const T3 = 6055070;
const T4 = 20183565;

const SCALES = {
  // foreign resident, or any additional apartment
  foreign: [
    { upTo: T3, rate: 0.08 },
    { upTo: Infinity, rate: 0.10 },
  ],
  // new immigrant (oleh), contracts signed from 15 Aug 2024, home to live in
  oleh: [
    { upTo: T1, rate: 0 },
    { upTo: T3, rate: 0.005 },
    { upTo: T4, rate: 0.08 },
    { upTo: Infinity, rate: 0.10 },
  ],
  // Israeli resident buying an only home
  resident: [
    { upTo: T1, rate: 0 },
    { upTo: T2, rate: 0.035 },
    { upTo: T3, rate: 0.05 },
    { upTo: T4, rate: 0.08 },
    { upTo: Infinity, rate: 0.10 },
  ],
};

function breakdown(status, price) {
  const rows = [];
  let from = 0;
  let total = 0;
  for (const band of SCALES[status]) {
    if (price <= from) break;
    const slice = Math.min(price, band.upTo) - from;
    const tax = slice * band.rate;
    rows.push({ from, to: Math.min(price, band.upTo), rate: band.rate, slice, tax });
    total += tax;
    from = band.upTo;
  }
  return { rows, total: Math.round(total) };
}

function tax(status, price) {
  return breakdown(status, price).total;
}

module.exports = { SCALES, breakdown, tax, T1, T2, T3, T4, VERIFIED: '2026-11-22' };

// The three large cities and their neighbourhoods.
// Every fact was copied from the "verified local data" section of the matching Hebrew page on
// kobielkayamrealestateltd.com (he-matrix:sale:jlm-*, tlv-*, hfa-*), checked there on 5 November 2026.
// City figures are official city-wide figures: no official average is published for a single neighbourhood.
// The translated sentences live in data/places-<lang>.js; `facts` below is the number of sentences each
// language must provide, so a missing translation stops the build.
//
// Left out on purpose until the company decides how to describe their status to buyers abroad:
// Gilo, Har Homa, Pisgat Ze'ev, Ramot, Ramat Eshkol and French Hill (Jerusalem, built after 1967).

const PLACE_SRC = {
  cbsJlm: { url: 'https://www.maariv.co.il/news/israel/article-1320896' },
  jiis: { url: 'https://jerusaleminstitute.org.il/wp-content/uploads/2026/05/%D7%A2%D7%9C-%D7%A0%D7%AA%D7%95%D7%A0%D7%99%D7%99%D7%9A-2026.pdf' },
  cbsYearbook: { url: 'https://www.cbs.gov.il/he/publications/DocLib/2025/2.ShnatonPopulation/st02_17.pdf' },
  unesco: { url: 'https://whc.unesco.org/en/list/1096' },
};

const BIG_CITIES = [
  {
    id: 'jerusalem', names: { en: 'Jerusalem', fr: 'Jérusalem', ru: 'Иерусалим', es: 'Jerusalén', de: 'Jerusalem', pt: 'Jerusalém' }, ruLoc: 'в Иерусалиме',
    district: 'jerusalem', kind: 'city', founded: null, big: true,
    pop: 1063000, popKey: 'jlm', popSrc: 'cbsJlm', cluster: 2, clusterYear: 2021, clusterSrc: 'cbsSocio',
    price: { scope: 'city', q2_2026: 3058500, y2025: null }, rent: { scope: 'city', q2_2026: 5347.4, y2025: null },
    renewal: null, train: true, extraSrc: ['jiis'],
  },
  {
    id: 'tel-aviv', names: { en: 'Tel Aviv', fr: 'Tel-Aviv', ru: 'Тель-Авив', es: 'Tel Aviv', de: 'Tel Aviv' }, ruLoc: 'в Тель-Авиве',
    district: 'telaviv', kind: 'city', founded: null, big: true,
    pop: 494900, popKey: 'tlv', popSrc: 'cbsYearbook', cluster: 8, clusterYear: 2021, clusterSrc: 'cbsSocio',
    price: { scope: 'city', q2_2026: 4553500, y2025: null }, rent: { scope: 'city', q2_2026: 7421.4, y2025: null },
    renewal: null, train: true, extraSrc: ['comptroller', 'cbsRelease'],
  },
  {
    id: 'haifa', names: { en: 'Haifa', fr: 'Haïfa', ru: 'Хайфа', es: 'Haifa', de: 'Haifa' }, ruLoc: 'в Хайфе',
    district: 'haifa', kind: 'city', founded: null, big: true,
    pop: 297083, cluster: null,
    price: { scope: 'city', q2_2026: 1816400, y2025: 1727000 }, rent: null,
    renewal: 46, train: true, extraSrc: [],
  },
];

// [id, city, default name, sources, number of facts]
const H = [
  ['rehavia', 'jerusalem', 'Rehavia', ['wiki', 'jlmRail'], 4],
  ['talbiya', 'jerusalem', 'Talbiya', ['wiki'], 3],
  ['katamon', 'jerusalem', 'Katamon', ['wiki', 'jlmRail'], 4],
  ['baka', 'jerusalem', 'Baka', ['wiki'], 3],
  ['german-colony', 'jerusalem', 'German Colony', ['wiki'], 3],
  ['talpiot', 'jerusalem', 'Talpiot', ['wiki', 'jlmRail'], 3],
  ['arnona', 'jerusalem', 'Arnona', ['wiki'], 3],
  ['nachlaot', 'jerusalem', 'Nachlaot', ['wiki'], 3],
  ['beit-hakerem', 'jerusalem', 'Beit HaKerem', ['wiki'], 4],
  ['kiryat-hayovel', 'jerusalem', 'Kiryat HaYovel', ['wiki', 'jlmRail'], 4],
  ['malha', 'jerusalem', 'Malha', ['wiki', 'jlmRail'], 3],
  ['ein-kerem', 'jerusalem', 'Ein Kerem', ['wiki'], 3],
  ['har-nof', 'jerusalem', 'Har Nof', ['wiki'], 4],

  ['afeka', 'tel-aviv', 'Afeka', ['wiki'], 3],
  ['ajami', 'tel-aviv', 'Ajami', ['wiki'], 3],
  ['bavli', 'tel-aviv', 'Bavli', ['wiki'], 3],
  ['florentin', 'tel-aviv', 'Florentin', ['wiki'], 3],
  ['hatikva', 'tel-aviv', 'Hatikva', ['wiki'], 3],
  ['jaffa', 'tel-aviv', 'Jaffa', ['wiki'], 4],
  ['kerem-hateimanim', 'tel-aviv', 'Kerem HaTeimanim', ['wiki'], 3],
  ['kochav-hatzafon', 'tel-aviv', 'Kochav HaTzafon', ['wiki'], 3],
  ['montefiore', 'tel-aviv', 'Montefiore', ['wiki'], 3],
  ['nahalat-yitzhak', 'tel-aviv', 'Nahalat Yitzhak', ['wiki'], 3],
  ['neve-avivim', 'tel-aviv', 'Neve Avivim', ['wiki'], 3],
  ['neve-tzedek', 'tel-aviv', 'Neve Tzedek', ['wiki'], 3],
  ['new-north', 'tel-aviv', 'New North', ['wiki', 'tlvPlans'], 3],
  ['old-north', 'tel-aviv', 'Old North', ['wiki', 'tlvPlans'], 3],
  ['ramat-aviv', 'tel-aviv', 'Ramat Aviv', ['wiki'], 3],
  ['ramat-hahayal', 'tel-aviv', 'Ramat HaHayal', ['wiki'], 3],
  ['rothschild-boulevard', 'tel-aviv', 'Rothschild Boulevard', ['wiki', 'unesco', 'nta'], 4],
  ['shapira', 'tel-aviv', 'Shapira', ['wiki', 'nta'], 3],
  ['tzahala', 'tel-aviv', 'Tzahala', ['wiki'], 3],
  ['yad-eliyahu', 'tel-aviv', 'Yad Eliyahu', ['wiki', 'nta'], 4],

  ['ahuza', 'haifa', 'Ahuza', ['wiki'], 3],
  ['bat-galim', 'haifa', 'Bat Galim', ['wiki', 'renewal'], 4],
  ['carmel-center', 'haifa', 'Carmel Center', ['wiki'], 4],
  ['carmelia', 'haifa', 'Carmelia', ['wiki'], 3],
  ['denya', 'haifa', 'Denya', ['wiki'], 4],
  ['downtown', 'haifa', 'Downtown', ['wiki'], 3],
  ['french-carmel', 'haifa', 'French Carmel', ['wiki', 'renewal'], 4],
  ['hadar', 'haifa', 'Hadar', ['wiki'], 4],
  ['kiryat-eliezer', 'haifa', 'Kiryat Eliezer', ['wiki', 'renewal'], 4],
  ['neve-david', 'haifa', 'Neve David', ['wiki', 'renewal'], 3],
  ['neve-shaanan', 'haifa', 'Neve Sha\'anan', ['wiki'], 3],
  ['ramat-almogi', 'haifa', 'Ramat Almogi', ['wiki'], 3],
  ['ramot-remez', 'haifa', 'Ramot Remez', ['wiki'], 3],
  ['romema', 'haifa', 'Romema', ['wiki'], 4],
];
const ORDER = BIG_CITIES.map((c) => c.id);
const HOODS = H.map(([id, city, name, src, facts]) => ({ id, city, name, src, facts }))
  .sort((a, b) => ORDER.indexOf(a.city) - ORDER.indexOf(b.city) || a.name.localeCompare(b.name));

module.exports = { BIG_CITIES, HOODS, PLACE_SRC };

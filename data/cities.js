// Destination facts. Every figure below was copied from the "verified local data" section of the matching
// Hebrew page on kobielkayamrealestateltd.com (he-matrix:sale:<id>), which cites the sources listed in SRC.
// Nothing here is estimated. A missing value means no official figure was available, and the page omits it.
const SRC = {
  cbsLocalities: { id: 'cbsLocalities', url: 'https://www.cbs.gov.il/he/publications/doclib/2019/ishuvim/bycode2024.xlsx' },
  cbsPrices: { id: 'cbsPrices', url: 'https://www.cbs.gov.il/he/publications/Madad/DocLib/2026/price09aa/aa2_2_h.pdf' },
  cbsRent: { id: 'cbsRent', url: 'https://www.cbs.gov.il/he/publications/Madad/DocLib/2026/price09a/a4_9_h.pdf' },
  renewal: { id: 'renewal', url: 'https://data.gov.il/dataset/urban_renewal' },
  rail: { id: 'rail', url: 'https://data.gov.il/dataset/rail_stat' },
  tax: { id: 'tax', url: 'https://www.gov.il/he/service/real_eatate_taxsimulator' },
  boi: { id: 'boi', url: 'https://www.boi.org.il/media/emunmobp/202601.pdf' },
};

// price / rent: { scope: 'city' | 'district', q2_2026, y2025 }  (ILS; price = average apartment, rent = average monthly free-market rent)
const CITIES = [
  {
    id: 'beit-shemesh', names: { en: 'Beit Shemesh', fr: 'Beit Shemesh', ru: 'Бейт-Шемеш' },
    district: 'jerusalem', kind: 'city', founded: 1950, pop: 176786, cluster: null,
    price: { scope: 'city', q2_2026: 2438300, y2025: 2415700 },
    rent: { scope: 'city', q2_2026: 4927.3, y2025: 4454.0 },
    renewal: 8, train: true,
  },
  {
    id: 'rehovot', names: { en: 'Rehovot', fr: 'Rehovot', ru: 'Реховот' },
    district: 'central', kind: 'city', founded: null, pop: 155050, cluster: null,
    price: { scope: 'city', q2_2026: 2673700, y2025: 2581200 },
    rent: { scope: 'city', q2_2026: 4942.5, y2025: 4691.3 },
    renewal: 14, train: true,
  },
  {
    id: 'hadera', names: { en: 'Hadera', fr: 'Hadera', ru: 'Хадера' },
    district: 'haifa', kind: 'city', founded: null, pop: 107974, cluster: 6, clusterYear: 2019,
    price: { scope: 'city', q2_2026: 2097300, y2025: 2076400 },
    rent: { scope: 'city', q2_2026: 4086.6, y2025: 3838.0 },
    renewal: null, train: true,
  },
  {
    id: 'eilat', names: { en: 'Eilat', fr: 'Eilat', ru: 'Эйлат' },
    district: 'southern', kind: 'city', founded: 1951, pop: 56004, cluster: 6, clusterYear: 2021,
    price: { scope: 'district', q2_2026: 1658400, y2025: null },
    rent: { scope: 'district', q2_2026: 3703.3, y2025: null },
    renewal: 6, train: false,
  },
  {
    id: 'nahariya', names: { en: 'Nahariya', fr: 'Nahariya', ru: 'Нагария' },
    district: 'northern', kind: 'city', founded: 1934, pop: 67877, cluster: 6, clusterYear: 2021,
    price: null, rent: null, renewal: 12, train: true,
  },
  {
    id: 'tiberias', names: { en: 'Tiberias', fr: 'Tibériade', ru: 'Тверия' },
    district: 'northern', kind: 'city', founded: null, pop: 52122, cluster: null,
    price: null, rent: null, renewal: 6, train: false,
  },
  {
    id: 'zichron-yaakov', names: { en: 'Zichron Yaakov', fr: 'Zikhron Yaakov', ru: 'Зихрон-Яаков' },
    district: 'haifa', kind: 'council', founded: 1882, pop: 24200, cluster: 8, clusterYear: 2019,
    price: null, rent: null, renewal: 1, train: false,
  },
  {
    id: 'caesarea', names: { en: 'Caesarea', fr: 'Césarée', ru: 'Кейсария' },
    district: 'haifa', kind: 'locality', founded: null, pop: 5633, cluster: null,
    price: null, rent: null, renewal: 0, train: false,
  },
];

// date on which the city figures were checked against the sources on the main site
const CITY_VERIFIED = '2026-11-05';

module.exports = { CITIES, SRC, CITY_VERIFIED, POP_YEAR: 2024, RENEWAL_UPDATED: '2026-08-15' };

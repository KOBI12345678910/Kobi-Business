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

// More cities, same source and same rules. Row format:
// [id, en, fr, ru, ruLoc, district, kind, founded, pop, cluster, clusterYear, districtPriceQ2, districtRentQ2, renewal, train]
// districtPrice / districtRent are the district-wide averages quoted on that city's own source page (the
// Central Bureau of Statistics publishes no city figure below 100,000 residents). null = not stated, line omitted.
const D = { N: 'northern', H: 'haifa', C: 'central', T: 'telaviv', J: 'jerusalem', S: 'southern' };
const ROWS = [
  ['afula', 'Afula', 'Afoula', 'Афула', 'в Афуле', 'N', 'city', 1925, 66362, null, null, null, null, null, true],
  ['akko', 'Akko (Acre)', 'Acre', 'Акко', 'в Акко', 'N', 'city', null, 52884, null, null, null, null, 3, true],
  ['arad', 'Arad', 'Arad', 'Арад', 'в Араде', 'S', 'city', 1961, 29505, null, null, null, null, 0, false],
  ['beer-yaakov', "Be'er Ya'akov", 'Beer Yaakov', 'Беэр-Яаков', 'в Беэр-Яакове', 'C', 'locality', null, 37493, null, null, null, null, 3, true],
  ['beit-shean', "Beit She'an", 'Beit Shéan', 'Бейт-Шеан', 'в Бейт-Шеане', 'N', 'locality', null, 20253, null, null, null, null, 3, true],
  ['binyamina', "Binyamina-Giv'at Ada", 'Binyamina-Guivat Ada', 'Биньямина-Гиват-Ада', 'в Биньямине-Гиват-Аде', 'H', 'council', null, 15566, null, null, null, null, 1, true],
  ['dimona', 'Dimona', 'Dimona', 'Димона', 'в Димоне', 'S', 'city', null, 39590, null, null, null, null, 0, true],
  ['elad', 'Elad', 'Elad', 'Эльад', 'в Эльаде', 'C', 'locality', null, 50845, null, null, null, null, 0, false],
  ['even-yehuda', 'Even Yehuda', 'Even Yehouda', 'Эвен-Йегуда', 'в Эвен-Йегуде', 'C', 'council', 1932, 15370, 9, 2021, 2731500, 5474, 2, false],
  ['gedera', 'Gedera', 'Guedera', 'Гедера', 'в Гедере', 'C', 'council', 1884, 31389, null, null, null, null, 3, false],
  ['givat-shmuel', 'Givat Shmuel', 'Givat Shmouel', 'Гиват-Шмуэль', 'в Гиват-Шмуэле', 'C', 'city', null, 29405, null, null, null, null, 4, false],
  ['hatzor', 'Hatzor HaGlilit', 'Hatsor HaGlilit', 'Хацор-ха-Глилит', 'в Хацор-ха-Глилит', 'N', 'council', 1953, 11013, 4, 2021, null, null, 3, false],
  ['karmiel', 'Karmiel', 'Karmiel', 'Кармиэль', 'в Кармиэле', 'N', 'city', 1964, 47941, null, null, null, null, 2, true],
  ['kfar-yona', 'Kfar Yona', 'Kfar Yona', 'Кфар-Йона', 'в Кфар-Йоне', 'C', 'locality', null, 29820, null, null, 2731500, null, 1, false],
  ['kiryat-ata', 'Kiryat Ata', 'Kiryat Ata', 'Кирьят-Ата', 'в Кирьят-Ате', 'H', 'city', 1925, 62584, null, null, null, null, 1, false],
  ['kiryat-bialik', 'Kiryat Bialik', 'Kiryat Bialik', 'Кирьят-Бялик', 'в Кирьят-Бялике', 'H', 'city', 1934, 47072, null, null, null, null, 5, false],
  ['kiryat-gat', 'Kiryat Gat', 'Kiryat Gat', 'Кирьят-Гат', 'в Кирьят-Гате', 'S', 'locality', null, 72139, null, null, 1658400, null, 8, true],
  ['kiryat-malachi', 'Kiryat Malachi', 'Kiryat Malakhi', 'Кирьят-Малахи', 'в Кирьят-Малахи', 'S', 'city', null, 27957, null, null, null, null, 4, false],
  ['kiryat-motzkin', 'Kiryat Motzkin', 'Kiryat Motzkin', 'Кирьят-Моцкин', 'в Кирьят-Моцкине', 'H', 'city', 1934, 51488, 7, 2021, null, null, 2, true],
  ['kiryat-ono', 'Kiryat Ono', 'Kiryat Ono', 'Кирьят-Оно', 'в Кирьят-Оно', 'T', 'city', null, 45048, null, null, null, null, 17, false],
  ['kiryat-shmona', 'Kiryat Shmona', 'Kiryat Shmona', 'Кирьят-Шмона', 'в Кирьят-Шмоне', 'N', 'locality', null, 24437, null, null, null, null, 7, false],
  ['kiryat-yam', 'Kiryat Yam', 'Kiryat Yam', 'Кирьят-Ям', 'в Кирьят-Яме', 'H', 'city', 1941, 41959, null, null, null, null, 12, false],
  ['lehavim', 'Lehavim', 'Lehavim', 'Леавим', 'в Леавиме', 'S', 'council', null, 8028, null, null, null, null, 0, true],
  ['lod', 'Lod', 'Lod', 'Лод', 'в Лоде', 'C', 'locality', null, 94189, null, null, 2731500, null, 13, true],
  ['maalot', "Ma'alot-Tarshiha", 'Maalot-Tarshiha', 'Маалот-Таршиха', 'в Маалот-Таршихе', 'N', 'city', 1957, 23042, null, null, null, null, 0, false],
  ['meitar', 'Meitar', 'Meitar', 'Мейтар', 'в Мейтаре', 'S', 'council', 1984, 11609, null, null, 1658400, 3703, 0, false],
  ['mevaseret-zion', 'Mevaseret Zion', 'Mevasseret Tsion', 'Мевасерет-Цион', 'в Мевасерет-Ционе', 'J', 'council', 1951, 26534, 8, 2021, null, null, 2, false],
  ['migdal-haemek', 'Migdal HaEmek', 'Migdal HaEmek', 'Мигдаль-ха-Эмек', 'в Мигдаль-ха-Эмеке', 'N', 'city', 1952, 28431, null, null, null, null, 6, false],
  ['mitzpe-ramon', 'Mitzpe Ramon', 'Mitspe Ramon', 'Мицпе-Рамон', 'в Мицпе-Рамоне', 'S', 'council', 1954, 5842, null, null, null, null, null, false],
  ['nesher', 'Nesher', 'Nesher', 'Нешер', 'в Нешере', 'H', 'locality', null, 22897, null, null, 1933300, null, 5, false],
  ['ness-ziona', 'Ness Ziona', 'Ness Tsiona', 'Нес-Циона', 'в Нес-Ционе', 'C', 'locality', null, 47268, null, null, 2731500, null, 10, false],
  ['netivot', 'Netivot', 'Netivot', 'Нетивот', 'в Нетивоте', 'S', 'city', 1956, 56019, 3, 2021, null, null, 1, true],
  ['nof-hagalil', 'Nof HaGalil', 'Nof HaGalil', 'Ноф-ха-Галиль', 'в Ноф-ха-Галиле', 'N', 'city', 1957, 45805, 5, 2019, null, null, null, false],
  ['ofakim', 'Ofakim', 'Ofakim', 'Офаким', 'в Офакиме', 'S', 'locality', null, 39894, null, null, null, null, 0, true],
  ['omer', 'Omer', 'Omer', 'Омер', 'в Омере', 'S', 'council', 1949, 8077, 9, 2021, null, null, 0, false],
  ['or-yehuda', 'Or Yehuda', 'Or Yehouda', 'Ор-Йегуда', 'в Ор-Йегуде', 'T', 'city', 1950, 41130, 5, 2021, 3576800, 6412, 9, false],
  ['pardes-hanna-karkur', 'Pardes Hanna-Karkur', 'Pardes Hanna-Karkour', 'Пардес-Хана-Каркур', 'в Пардес-Хане-Каркуре', 'H', 'council', 1913, 46601, null, null, null, null, 3, true],
  ['ramat-hasharon', 'Ramat HaSharon', 'Ramat HaSharon', 'Рамат-ха-Шарон', 'в Рамат-ха-Шароне', 'T', 'city', null, 48860, null, null, null, null, 8, false],
  ['ramla', 'Ramla', 'Ramla', 'Рамла', 'в Рамле', 'C', 'city', null, 86052, 5, 2019, null, null, null, true],
  ['rosh-haayin', 'Rosh HaAyin', 'Rosh HaAyin', 'Рош-ха-Аин', 'в Рош-ха-Аине', 'C', 'city', 1950, 79023, null, null, null, null, null, true],
  ['safed', 'Safed', 'Safed', 'Цфат', 'в Цфате', 'N', 'city', null, 38687, null, null, null, null, 5, false],
  ['sderot', 'Sderot', 'Sdérot', 'Сдерот', 'в Сдероте', 'S', 'city', 1951, 37239, null, null, 1658400, 3703, 5, false],
  ['shoham', 'Shoham', 'Shoham', 'Шохам', 'в Шохаме', 'C', 'council', 1993, 23592, null, null, null, null, null, false],
  ['tirat-carmel', 'Tirat Carmel', 'Tirat Carmel', 'Тират-Кармель', 'в Тират-Кармеле', 'H', 'city', 1949, 32166, null, null, null, null, 12, false],
  ['yavne', 'Yavne', 'Yavné', 'Явне', 'в Явне', 'C', 'city', null, 58090, null, null, null, null, 15, true],
  ['yehud-monosson', 'Yehud-Monosson', 'Yehoud-Monosson', 'Йегуд-Моноссон', 'в Йегуд-Моноссоне', 'C', 'city', null, 32145, 7, 2019, null, null, null, false],
  ['yeruham', 'Yeruham', 'Yerouham', 'Йерухам', 'в Йерухаме', 'S', 'council', null, 11989, null, null, null, null, 0, false],
  ['yokneam-illit', 'Yokneam Illit', 'Yokneam Illit', 'Йокнеам-Илит', 'в Йокнеам-Илите', 'N', 'city', null, 24928, 7, 2019, null, null, null, false],
];
for (const r of ROWS) {
  CITIES.push({
    id: r[0], names: { en: r[1], fr: r[2], ru: r[3] }, ruLoc: r[4], district: D[r[5]], kind: r[6], founded: r[7], pop: r[8],
    cluster: r[9], clusterYear: r[10],
    price: r[11] ? { scope: 'district', q2_2026: r[11], y2025: null } : null,
    rent: r[12] ? { scope: 'district', q2_2026: r[12], y2025: null } : null,
    renewal: r[13], train: r[14],
  });
}
// Bnei Brak is above 100,000 residents, so the Central Bureau of Statistics publishes a city figure.
CITIES.push({
  id: 'bnei-brak', names: { en: 'Bnei Brak', fr: 'Bnei Brak', ru: 'Бней-Брак' }, ruLoc: 'в Бней-Браке', district: 'telaviv', kind: 'city', founded: null,
  pop: 229995, cluster: null, price: { scope: 'city', q2_2026: 2310300, y2025: 2355100 }, rent: null, renewal: 3, train: false,
});
CITIES.sort((a, b) => a.names.en.localeCompare(b.names.en));

// date on which the city figures were checked against the sources on the main site
const CITY_VERIFIED = '2026-11-05';

module.exports = { CITIES, SRC, CITY_VERIFIED, POP_YEAR: 2024, RENEWAL_UPDATED: '2026-08-15' };

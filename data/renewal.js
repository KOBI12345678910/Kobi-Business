// Urban renewal compounds from the Ministry of Construction and Housing database (data.gov.il, dataset urban_renewal),
// snapshot in data/urban-renewal.json (updated by the ministry 21.11.2026, retrieved 23.11.2026).
// Ma'ale Adumim and Ariel are left out, as on the rest of the site, until the company decides how to describe them.
const DATA = require('./urban-renewal.json');

// Hebrew locality name in the database -> city id on this site
const HE = {
  'אבן יהודה': 'even-yehuda', 'אור יהודה': 'or-yehuda', 'אילת': 'eilat', 'אשדוד': 'ashdod', 'אשקלון': 'ashkelon',
  'באר יעקב': 'beer-yaakov', 'באר שבע': 'beersheba', 'בית שאן': 'beit-shean', 'בית שמש': 'beit-shemesh', 'בני ברק': 'bnei-brak',
  'בנימינה גבעת עדה': 'binyamina', 'בת ים': 'bat-yam', 'גבעת שמואל': 'givat-shmuel', 'גבעתים': 'givatayim', 'גדרה': 'gedera',
  'דימונה': 'dimona', 'הוד השרון': 'hod-hasharon', 'הרצליה': 'herzliya', 'זכרון יעקב': 'zichron-yaakov', 'חדרה': 'hadera',
  'חולון': 'holon', 'חיפה': 'haifa', 'חצור הגלילית': 'hatzor', 'טבריה': 'tiberias', 'טירת כרמל': 'tirat-carmel', 'יבנה': 'yavne',
  'יהוד': 'yehud-monosson', 'יקנעם עילית': 'yokneam-illit', 'ירושלים': 'jerusalem', 'כפר יונה': 'kfar-yona', 'כפר סבא': 'kfar-saba',
  'כרמיאל': 'karmiel', 'לוד': 'lod', 'מבשרת ציון': 'mevaseret-zion', 'מגדל העמק': 'migdal-haemek', 'נהריה': 'nahariya',
  'נוף הגליל': 'nof-hagalil', 'נס ציונה': 'ness-ziona', 'נשר': 'nesher', 'נתיבות': 'netivot', 'נתניה': 'netanya', 'עכו': 'akko',
  'עפולה': 'afula', 'ערד': 'arad', 'פרדס חנה כרכור': 'pardes-hanna-karkur', 'פתח תקוה': 'petah-tikva', 'צפת': 'safed',
  'קרית אונו': 'kiryat-ono', 'קרית אתא': 'kiryat-ata', 'קרית ביאליק': 'kiryat-bialik', 'קרית גת': 'kiryat-gat', 'קרית ים': 'kiryat-yam',
  'קרית מוצקין': 'kiryat-motzkin', 'קרית מלאכי': 'kiryat-malachi', 'קרית שמונה': 'kiryat-shmona', 'ראשון לציון': 'rishon-lezion',
  'רחובות': 'rehovot', 'רמלה': 'ramla', 'רמת גן': 'ramat-gan', 'רמת השרון': 'ramat-hasharon', 'רעננה': 'raanana', 'שדרות': 'sderot',
  'תל אביב יפו': 'tel-aviv',
};

// Localities with compounds but no city page on this site
const EXTRA = {
  'אור עקיבא': { id: 'or-akiva', names: { en: 'Or Akiva', fr: 'Or Akiva', ru: 'Ор-Акива', es: 'Or Akiva', de: 'Or Akiva', pt: 'Or Akiva' } },
  'אזור': { id: 'azor', names: { en: 'Azor', fr: 'Azor', ru: 'Азор', es: 'Azor', de: 'Azor', pt: 'Azor' } },
  'בית דגן': { id: 'beit-dagan', names: { en: 'Beit Dagan', fr: 'Beit Dagan', ru: 'Бейт-Даган', es: 'Beit Dagan', de: 'Beit Dagan', pt: 'Beit Dagan' } },
  'טירה': { id: 'tira', names: { en: 'Tira', fr: 'Tira', ru: 'Тира', es: 'Tira', de: 'Tira', pt: 'Tira' } },
  'כפר קאסם': { id: 'kafr-qasim', names: { en: 'Kafr Qasim', fr: 'Kafr Qassem', ru: 'Кфар-Касем', es: 'Kafr Qasim', de: 'Kafr Qasim', pt: 'Kafr Qasim' } },
  'מזכרת בתיה': { id: 'mazkeret-batya', names: { en: 'Mazkeret Batya', fr: 'Mazkeret Batya', ru: 'Мазкерет-Батья', es: 'Mazkeret Batya', de: 'Mazkeret Batya', pt: 'Mazkeret Batya' } },
  'נצרת': { id: 'nazareth', names: { en: 'Nazareth', fr: 'Nazareth', ru: 'Назарет', es: 'Nazaret', de: 'Nazareth', pt: 'Nazaré' } },
  'סחנין': { id: 'sakhnin', names: { en: 'Sakhnin', fr: 'Sakhnin', ru: 'Сахнин', es: 'Sajnín', de: 'Sachnin', pt: 'Sakhnin' } },
  'עתלית': { id: 'atlit', names: { en: 'Atlit', fr: 'Atlit', ru: 'Атлит', es: 'Atlit', de: 'Atlit', pt: 'Atlit' } },
  'צורן קדימה': { id: 'kadima-zoran', names: { en: 'Kadima-Zoran', fr: 'Kadima-Zoran', ru: 'Кадима-Цоран', es: 'Kadima-Zoran', de: 'Kadima-Zoran', pt: 'Kadima-Zoran' } },
  'קרית טבעון': { id: 'kiryat-tivon', names: { en: 'Kiryat Tivon', fr: 'Kiryat Tivon', ru: 'Кирьят-Тивон', es: 'Kiryat Tivón', de: 'Kiryat Tiv’on', pt: 'Kiryat Tivon' } },
  'קרית עקרון': { id: 'kiryat-ekron', names: { en: 'Kiryat Ekron', fr: 'Kiryat Ekron', ru: 'Кирьят-Экрон', es: 'Kiryat Ekron', de: 'Kiryat Ekron', pt: 'Kiryat Ekron' } },
  'שלומי': { id: 'shlomi', names: { en: 'Shlomi', fr: 'Shlomi', ru: 'Шломи', es: 'Shlomi', de: 'Schlomi', pt: 'Shlomi' } },
  'תל מונד': { id: 'tel-mond', names: { en: 'Tel Mond', fr: 'Tel Mond', ru: 'Тель-Монд', es: 'Tel Mond', de: 'Tel Mond', pt: 'Tel Mond' } },
};

const RENEWAL_VERIFIED = '2026-11-23';
const RENEWAL_SRC = { urDataset: { url: 'https://data.gov.il/dataset/urban_renewal' } };

module.exports = { DATA, HE, EXTRA, RENEWAL_VERIFIED, RENEWAL_SRC };

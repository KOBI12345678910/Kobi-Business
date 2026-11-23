// English texts for the large cities and their neighbourhoods. Facts follow data/places.js.
module.exports = ({ ils }) => ({
  base: 'neighbourhoods',
  inOf: (t) => 'in ' + t,
  src: {
    wiki: 'Wikipedia, Hebrew and English articles on the neighbourhood and the city, checked on 5 November 2026',
    jlmRail: 'Jerusalem light rail plans: Jerusalem Municipality, the Jerusalem Transportation Master Plan team and the District Planning and Building Committee, as reported in the Israeli press (2023 to 2026)',
    nta: 'NTA Metropolitan Mass Transit System, Green Line and Purple Line presentations (2021 and 2022)',
    comptroller: 'State Comptroller of Israel, report on the Gush Dan light rail, December 2025',
    cbsRelease: 'Central Bureau of Statistics, press release 256/2026 of 14 August 2026',
    unesco: 'UNESCO World Heritage List, White City of Tel Aviv: the Modern Movement',
    tlvPlans: 'Tel Aviv-Yafo Municipality, Quarter 3 and Quarter 4 plans and the agenda of the planning subcommittee of 4 December 2024',
    jiis: 'Jerusalem Institute for Policy Research, "Jerusalem: Facts and Trends 2026"',
    cbsJlm: 'Central Bureau of Statistics, selected data for Jerusalem Day 2026, as reported by Maariv on 13 May 2026',
    cbsYearbook: 'Central Bureau of Statistics, Statistical Abstract of Israel 2025, table 2.17 (population at the end of 2024)',
    cbsSocio: 'Central Bureau of Statistics, socio-economic index of local authorities for 2021',
  },
  city: {
    pop: {
      jlm: 'Population: about 1,063,000 residents, the Central Bureau of Statistics estimate published for Jerusalem Day in May 2026. The figure includes foreign nationals.',
      tlv: 'Population: about 494,900 residents at the end of 2024, including foreign nationals.',
    },
    priceQ: (c, q) => `Average price of an apartment sold in ${c}: ${ils(q)} in April to June 2026 (provisional figure).`,
    rentQ: (q) => `Average monthly rent on the free market: ${ils(q)} in April to June 2026.`,
    extra: {
      jerusalem: [
        'At the end of 2025 Jerusalem had 251,900 dwellings, and 32% of them were rented, according to the Jerusalem Institute for Policy Research.',
        `A 3.5 to 4 room apartment sold in Jerusalem in 2025 cost ${ils(3376400)} on average, according to the Jerusalem Institute for Policy Research, and the average monthly rent for that size was ${ils(6179.6)} in April to June 2026. In Israel the living room is counted as a room.`,
      ],
      'tel-aviv': [
        'The Red Line of the light rail opened in August 2023 and links Bat Yam and Petah Tikva through Tel Aviv-Yafo. The Purple Line is expected to start operating in 2028 and the Green Line in 2029, according to a State Comptroller report of December 2025.',
        'The Central Bureau of Statistics reported that the average price in April to June 2026 was 8.4% higher than in the same quarter a year earlier.',
      ],
    },
    hoodsTitle: (c) => `Neighbourhoods in ${c}`,
    hoodsLead: 'Each neighbourhood page adds sourced facts about the area to the city figures.',
  },
  index: {
    nav: 'Neighbourhoods',
    title: 'Neighbourhoods of Jerusalem, Tel Aviv and Haifa for Overseas Buyers',
    desc: 'Neighbourhood pages for foreign residents and olim: sourced facts about each area of Jerusalem, Tel Aviv and Haifa, with the official city figures and the purchase tax.',
    h1: 'Neighbourhood pages for overseas buyers',
    lead: 'The facts about each neighbourhood come from the sources named on its page. Prices and rents are official city figures, because no official average is published for a single neighbourhood.',
  },
  hood: {
    title: {
      foreign: (h, c) => `Buying ${h.in}, ${c}, as a Foreign Resident: Area Facts and Tax (2026)`,
      oleh: (h, c) => `Buying a Home ${h.in}, ${c}, as an Oleh: Area Facts and Tax (2026)`,
    },
    desc: {
      foreign: (h, c) => `${h.n}, ${c}: sourced facts about the neighbourhood, official city figures, the purchase tax a foreign resident pays and how to buy from abroad.`,
      oleh: (h, c) => `${h.n}, ${c}: sourced facts about the neighbourhood, official city figures, the reduced purchase tax for an oleh and the mortgage limits that apply.`,
    },
    h1: {
      foreign: (h, c) => `Buying ${h.in}, ${c}, as a foreign resident`,
      oleh: (h, c) => `Buying a home ${h.in}, ${c}, as an oleh`,
    },
    intro: {
      foreign: (h, c) => `What is documented about ${h.the}, the official figures for ${c}, the purchase tax a foreign resident would pay and how the purchase works when you live abroad.`,
      oleh: (h, c) => `What is documented about ${h.the}, the official figures for ${c}, the reduced purchase tax for an oleh and what a bank will lend on an only home.`,
    },
    aboutTitle: (h) => `${h.n} at a glance`,
    cityTitle: (c) => `${c} in official figures`,
    cityNote: (h, c) => `The Central Bureau of Statistics does not publish average prices for single neighbourhoods. The figures below are for ${c} as a whole, so they are a starting point and not a price for ${h.the}.`,
    advice: (h) => `Before making an offer ${h.in}, compare it with the transactions actually recorded in the nearby streets in the government real estate database (nadlan.gov.il), and check with the local planning committee which plans apply to the building.`,
    taxTitle: (h) => `Purchase tax on an apartment ${h.in}`,
    taxAtAvg: (c, p) => `There is no official average for the neighbourhood. At the official average price for ${c} in April to June 2026 (${p}), the purchase tax would be:`,
    cityLink: (c) => `All figures for ${c}`,
    faq: (h, c, intent, v) => intent === 'foreign' ? [
      [`Can a foreign resident buy an apartment ${h.in}?`, 'Yes. Foreign nationals buy in their own name. Your lawyer checks the type of right being sold: private land registered in the Land Registry, or a lease from the Israel Land Authority, where a transfer to a foreign national may need the Authority\'s approval.'],
      [`Is there an official average price for ${h.the}?`, `No. The Central Bureau of Statistics publishes averages for cities and districts, not for neighbourhoods. The average for ${c} in April to June 2026 was ${v.avg}. For ${h.the}, look at the transactions recorded in the same street.`],
      [`How much purchase tax does a foreign resident pay ${h.in}?`, `8% up to ${v.t3} and 10% above it, wherever the apartment is. On an apartment of ${v.p} that is ${v.foreign}.`],
    ] : [
      [`What purchase tax does an oleh pay on a home ${h.in}?`, `0% up to ${v.t1} and 0.5% up to ${v.t3}, wherever the home is. On a home of ${v.p} that is ${v.oleh}, compared with ${v.foreign} for a foreign resident.`],
      [`Is there an official average price for ${h.the}?`, `No. The Central Bureau of Statistics publishes averages for cities and districts, not for neighbourhoods. The average for ${c} in April to June 2026 was ${v.avg}. For ${h.the}, look at the transactions recorded in the same street.`],
      ['What is the minimum down payment?', '25% of the value for an only home bought by an Israeli citizen, under the Bank of Israel ceiling of 75%. A buyer who is still a foreign resident needs at least 50%.'],
    ],
  },
  names: {
    'german-colony': { the: 'the German Colony' },
    'old-north': { the: 'the Old North' },
    'new-north': { the: 'the New North' },
    'rothschild-boulevard': { in: 'on Rothschild Boulevard' },
    hatikva: { n: 'Hatikva Quarter', the: 'the Hatikva Quarter' },
  },
  facts: {
    // ---------- Jerusalem ----------
    rehavia: [
      'Rehavia was planned by the architect Richard Kauffmann as a garden suburb, inspired by the European garden city and built in the International Style.',
      'It lies south-west of Keren HaYesod and King George streets, bordered by Nachlaot and Sha\'arei Hesed to the north and by Talbiya and Kiryat Shmuel to the south.',
      'Under the original regulations, shops were allowed only on the two main streets at the edge of the neighbourhood, and a green pedestrian avenue crosses it from north to south.',
      'The planned Blue Line of the light rail runs along Keren HaYesod and King George streets, which border Rehavia.',
    ],
    talbiya: [
      'Talbiya, officially named Komemiyut, lies in south-central Jerusalem, with Rehavia and Independence Park to the north, Katamon to the south and Liberty Bell Park to the east.',
      'The President\'s Residence and the Jerusalem Theatre are in the neighbourhood.',
      'Talbiya is regarded as an upscale neighbourhood, and its residents include academics, professionals and foreign diplomats.',
    ],
    katamon: [
      'Katamon, officially named Gonen, lies in south-central Jerusalem. Talbiya, Rehavia and Kiryat Shmuel are to the north, the Greek Colony and the German Colony to the east, and the Katamonim to the south and south-west.',
      'Its main streets are Rachel Imenu, which connects it to Emek Refaim, and Kovshei Katamon, which connects it to HaPalmach Street. The San Simon monastery bounds it on the west.',
      'Historic Katamon is distinct, historically and architecturally, from the Katamonim, the chain of neighbourhoods built to its south-west.',
      'The planned Blue Line of the light rail runs along Emek Refaim Street, which Rachel Imenu Street joins. The Green Line and the approved Purple Line are planned to pass through the adjacent Katamonim.',
    ],
    baka: [
      'Baka, officially named Geulim, is a neighbourhood in south Jerusalem bounded by Rivka Street to the south, Pierre Koenig Street to the west, the old railway line to the north-west and Hebron Road to the east.',
      'The surrounding neighbourhoods are Talpiot, Mekor Haim, the Greek Colony, the German Colony and Abu Tor.',
      'The streetscape mixes old stone houses of one or two storeys with public-housing blocks, many of which were renovated and extended in a municipal neighbourhood renewal project.',
    ],
    'german-colony': [
      'The German Colony is a neighbourhood in central-west Jerusalem, next to the First Station compound, built by members of the German Templer movement.',
      'The original houses are built of Jerusalem stone, most of them with one or two storeys and tiled roofs, and the two main streets are Emek Refaim and Bethlehem Road.',
      'It is a leisure and shopping area with cafés, restaurants, bars and boutiques, and it hosts festivals and a farmers\' market.',
    ],
    talpiot: [
      'Talpiot is a veteran Jerusalem neighbourhood on the south-eastern edge of the city, planned by Richard Kauffmann in the spirit of the garden city.',
      'Next to it grew the Talpiot industrial zone, one of the largest employment and retail areas in the capital.',
      'The planned Blue Line of the light rail passes through Talpiot on its way from the south of the city to the north.',
    ],
    arnona: [
      'Arnona is a neighbourhood in south Jerusalem, between Talpiot to the north, the Talpiot industrial zone and Hebron Road to the west, and Kibbutz Ramat Rachel to the south.',
      'It is built mostly of villas, terraced cottages and low-rise buildings, and almost all of its land reserves have been used.',
      'The United States Embassy compound is located in the neighbourhood.',
    ],
    nachlaot: [
      'Nachlaot is a cluster of old neighbourhoods in the heart of Jerusalem, most of them between Agrippas and Bezalel streets, with a few reaching Jaffa Road.',
      'Most of them are built as courtyard neighbourhoods, typical of the communal Jewish building of the period when Jerusalem expanded beyond the Old City walls.',
      'Nachlaot adjoins the Mahane Yehuda market. Both have changed over the years as new residents moved in and houses were renovated.',
    ],
    'beit-hakerem': [
      'Beit HaKerem is a veteran neighbourhood in west Jerusalem, bordered by Kiryat Moshe to the north, Yefe Nof and Herzl Boulevard to the west, Ramat Beit HaKerem to the south and Begin Road and Givat Ram to the east.',
      'It was planned as a garden suburb by the architect Richard Kauffmann.',
      'The Red Line of the light rail runs through it along Herzl Boulevard, and the Hebrew University\'s Givat Ram campus and the Azrieli College of Engineering are nearby.',
      'An outline plan allowing additional housing units through demolition-and-rebuild and TAMA 38 schemes has been advanced for the neighbourhood, and residents have campaigned against it.',
    ],
    'kiryat-hayovel': [
      'Kiryat HaYovel lies in south-west Jerusalem, on a ridge between Mount Herzl and Ein Kerem, and is one of the highest neighbourhoods in the city.',
      'It is close to the Hadassah Ein Kerem hospital, to the exit towards Tel Aviv and to Herzl Boulevard, which leads to the city centre.',
      'The Jerusalem Municipality is promoting demolition-and-rebuild plans in the neighbourhood, among them the Sderot HaYovel project on Tahon Street.',
      'The District Planning and Building Committee has approved the plan for the Purple Line of the light rail, which passes through Kiryat HaYovel.',
    ],
    malha: [
      'Malha, officially named Manahat, lies in south-west Jerusalem and is divided into Old Malha and New Malha.',
      'The Jerusalem Mall, Teddy Stadium, the Pais Arena and the Malha Technology Park are in or next to the neighbourhood, and the Biblical Zoo is nearby.',
      'According to a report of August 2026, the first section of the light rail\'s Green Line, from Malha to the area of the central bus station, was about to open to passengers. The planned Blue Line includes a southern branch to Malha, and the approved Purple Line also passes through it.',
    ],
    'ein-kerem': [
      'Ein Kerem is a neighbourhood on the south-western outskirts of Jerusalem that has kept a village character, being relatively detached from the city and surrounded by hills, valleys and forests.',
      'It is a holy place and a pilgrimage site for Christians, with active churches and monasteries.',
      'The Hadassah Ein Kerem Medical Center is next to the neighbourhood, and the Red Line of the light rail has been extended and now reaches the hospital.',
    ],
    'har-nof': [
      'Har Nof is a Haredi and religious neighbourhood in west Jerusalem. The Jerusalem Forest lies below it and surrounds it.',
      'It was planned by the architect Ze\'ev Scheinberg.',
      'A light rail branch to the neighbourhood along Kanfei Nesharim Street has been approved and is to be integrated into the plan for the Green Line.',
      'The Israel Land Authority is promoting a new residential plan south of the neighbourhood, partly on Jerusalem Forest land.',
    ],
    // ---------- Tel Aviv ----------
    afeka: [
      'Afeka is a neighbourhood in north Tel Aviv, north of the Yarkon river, and part of the city\'s Quarter 1.',
      'It borders Tel Baruch to the east, Tel Aviv University to the south, Neve Avivim to the west and Ramat Aviv Gimel to the north-west.',
      'It was founded as a housing cooperative of Haganah commanders, and over the years many of the original houses have been replaced by large villas.',
    ],
    ajami: [
      'Ajami is a neighbourhood of Jaffa, in Tel Aviv-Yafo, on the Mediterranean shore south of Old Jaffa and north of the Jabaliya neighbourhood. Its streets run parallel to the coast.',
      'It has traditional stone houses built around courtyards. Its landmarks include the Maronite church, the Ajami mosque and the Peres Center for Peace at its southern end.',
      'The Red Line of the light rail crosses Jaffa from north to south along Jerusalem Boulevard.',
    ],
    bavli: [
      'Bavli is bounded by the Yarkon Park to the north, the Ayalon Highway to the east, Namir Road to the west and Tzameret Park to the south.',
      'It began as a public housing project. The Dekel centre was built later, and more recent construction has focused on luxury residential towers overlooking the Ayalon.',
      'The neighbourhood is regarded as largely upper-middle class, and many older couples and families live there.',
    ],
    florentin: [
      'Florentin is a neighbourhood in south Tel Aviv that borders Neve Tzedek.',
      'It combines housing with an area of industry and workshops and with wholesale trade in clothing and furniture.',
      'Its revival began with an urban renewal programme sponsored by the Tel Aviv municipality, and today it is known for its nightlife, artists\' studios and street art.',
    ],
    hatikva: [
      'The Hatikva Quarter is a neighbourhood in south-east Tel Aviv with a Yemenite Jewish heritage.',
      'It is named after the Har HaTikva farm and was added to Tel Aviv\'s municipal area after the War of Independence.',
      'The Hatikva neighbourhood stadium is in the quarter, and the Angel of Peace monument stands opposite the Beit Dani centre.',
    ],
    jaffa: [
      'Jaffa is an ancient port city on the Mediterranean coast, in the southern part of Tel Aviv-Yafo. When the two municipalities were united, the city was named Tel Aviv-Yafo to preserve the historic name.',
      'Administratively Jaffa is Quarter 7 of the municipality, and it is one of Israel\'s mixed cities, with Jewish, Christian and Muslim residents.',
      'Its landmarks include the historic port, the clock tower, the flea market area and the Jaffa Museum of Antiquities.',
      'The Red Line of the light rail crosses Jaffa from north to south along Jerusalem Boulevard.',
    ],
    'kerem-hateimanim': [
      'Kerem HaTeimanim is a neighbourhood in central Tel Aviv, next to the Carmel Market.',
      'It was founded by Jewish immigrants from Yemen, and many of its original houses were single-storey buildings made of inexpensive materials.',
      'The neighbourhood is largely religious and its eateries close on Shabbat. It has been undergoing gentrification.',
    ],
    'kochav-hatzafon': [
      'Kochav HaTzafon is a neighbourhood in north-west Tel Aviv, the nearest of the neighbourhoods beyond the Yarkon, adjacent to the New North and the Tel Aviv Port.',
      'Its boundaries are Ibn Gabirol Street to the west, the area of the former Sde Dov airport to the north, Namir Road to the east and Rokach Boulevard to the south.',
      'The outer part has mostly tall buildings, and the inner part has lower buildings and a few ground-level houses. A neighbourhood park crosses it from east to west.',
    ],
    montefiore: [
      'The Montefiore neighbourhood stretches from the Azrieli Center in the north to Yitzhak Sadeh Street in the south, and from the Ayalon Highway in the east to HaMasger Street and Begin Road in the west.',
      'It was built on the land of the Montefiore orchard, regarded as the first orchard in the Land of Israel planted and tended by Jews.',
      'Its planning history mixes housing with workshops, light industry and offices, and over the years high-rise construction has been approved there.',
    ],
    'nahalat-yitzhak': [
      'Nahalat Yitzhak is a neighbourhood in east Tel Aviv, east of the Ayalon Highway, next to the Bitzaron and Ramat Yisrael neighbourhoods.',
      'It began as an agricultural colony where factories were also established. The Tel Aviv Towers were built on the site of the former Yitzhar factory.',
      'A military industries plant once operated in the area. According to the Wikipedia article, work began in the 2020s to decontaminate the land so that it can be prepared for housing.',
    ],
    'neve-avivim': [
      'Neve Avivim is in Ramat Aviv in north Tel Aviv, bounded by Haim Levanon Street to the east, Keren Kayemet Boulevard to the north, Namir Road to the west and Einstein Street to the south.',
      'It has high-rise buildings with large apartments, and at its centre a wide public space with a large neighbourhood park, shopping centres, schools and a sports centre.',
      'Like the other Ramat Aviv neighbourhoods, its population has a high socio-economic profile.',
    ],
    'neve-tzedek': [
      'Neve Tzedek was the first official Jewish neighbourhood built outside the walls of Jaffa, before Tel Aviv was founded. Today it is part of the city.',
      'Its boundaries are Pines Street to the north-east, the cutting of the historic Jaffa to Jerusalem railway to the south-east, where the Red Line of the light rail and HaMesila Park now run, the Manshiya car park to the south-west and Shabazi Street to the north-west.',
      'Rothschild Boulevard begins at the eastern edge of Neve Tzedek.',
    ],
    'new-north': [
      'The New North was developed after the establishment of the state, and its name distinguishes it from the Old North.',
      'It belongs to the city\'s Quarter 4, crossed by streets such as Yehuda HaMaccabi, Pinkas, Jabotinsky, Weizmann and Shaul HaMelech, where the Quarter 4 plan (TA/3729a) applies.',
      'On 4 December 2024 the municipal planning subcommittee had on its agenda an amendment to the rules for low-rise building in Quarter 4 (TA/3729b) and a plan adding permitted uses in the quarter (TA/5269).',
    ],
    'old-north': [
      'As defined by the municipality, the Old North (Quarter 3) is the area between the Yarkon river in the north and Arlozorov Street in the south, bounded by Ibn Gabirol Street in the east and the Mediterranean in the west.',
      'It was developed north of the city\'s historic core and was originally called the north of the city. The name Old North distinguishes it from the New North.',
      'The Quarter 3 plan (TA/3616a) was approved on 9 January 2018.',
    ],
    'ramat-aviv': [
      'Ramat Aviv is the name of several neighbourhoods in north Tel Aviv, north of the Yarkon river.',
      'Tel Aviv University, the Eretz Israel Museum, the Yitzhak Rabin Center, the Palmach Museum and the Museum of the Jewish People are in the area, and the Yarkon Park is nearby.',
      'Ramat Aviv Alef, known as the green one, has ground-level houses alongside low apartment buildings set among lawns. The Ramat Aviv Mall is in its north and the Brodetsky centre in the middle.',
    ],
    'ramat-hahayal': [
      'Ramat HaHayal is a neighbourhood in north-east Tel Aviv, one of the neighbourhoods beyond the Yarkon.',
      'Next to it is the Ever HaYarkon industrial zone, a centre for high-tech companies that is sometimes also called Ramat HaHayal.',
      'It was built after the War of Independence by a housing company for demobilised soldiers, war widows and disabled veterans.',
    ],
    'rothschild-boulevard': [
      'Rothschild Boulevard is one of the first streets of Tel Aviv, running from the eastern edge of Neve Tzedek to the Habima compound. It is the spine of the Lev Tel Aviv neighbourhood.',
      'It is part of the city\'s main business district. Since the 1990s low buildings along it have been replaced by residential and office towers, alongside the conservation of buildings in the Eclectic and Bauhaus styles.',
      'The White City, the central part of Tel Aviv built from the 1930s to the 1950s on the urban plan of Sir Patrick Geddes in the style of the Modern Movement, is inscribed on the UNESCO World Heritage List.',
      'According to NTA, the Purple Line of the light rail will meet the Red Line at the junction of Allenby and Yehuda HaLevi streets. Allenby Street crosses Rothschild Boulevard.',
    ],
    shapira: [
      'The Shapira neighbourhood is in south Tel Aviv, south of the new central bus station and Shlomo Road, bounded by Heil HaShiryon Road and the Ayalon Highway to the east, Kibbutz Galuyot Road to the south and Har Zion Boulevard to the west.',
      'It was characterised by low houses in a dense urban fabric. In recent years new construction has been in modern apartment buildings of several storeys.',
      'NTA presented to residents the Green Line works on Har Zion Boulevard, between Kibbutz Galuyot Road and Shlomo Road, along the western edge of the neighbourhood.',
    ],
    tzahala: [
      'Tzahala is a neighbourhood in north-east Tel Aviv-Yafo, on the border with Ramat HaSharon. It was established as a government initiative to house senior army and security personnel and is named after the Israel Defense Forces.',
      'It was built as ground-level houses on large plots. Since the 1990s many of the original houses have been demolished and replaced by villas.',
      'A cooperative association still runs the neighbourhood. Residents pay membership dues, and most of its budget comes from leasing the shops in the commercial centre it owns.',
    ],
    'yad-eliyahu': [
      'Yad Eliyahu is a neighbourhood in south-east Tel Aviv, bounded by Yitzhak Sadeh Street to the north, Moshe Dayan Road to the east, HaHagana Road to the south and the Ayalon Highway to the west. La Guardia Street is its main street.',
      'It is named after Eliyahu Golomb and was built on the initiative of the Tel Aviv municipality to house demobilised soldiers of the British Army.',
      'The Menora Mivtachim Arena, Galit Park and the Reuth rehabilitation medical centre are in the neighbourhood.',
      'The list of Purple Line stations published by NTA includes HaHagana and Moshe Dayan, the names of the roads that bound the neighbourhood to the south and east.',
    ],
    // ---------- Haifa ----------
    ahuza: [
      'Ahuza (Ahuzat Shmuel) is a veteran neighbourhood and the centre of the Ramot HaCarmel residential quarter, on the watershed line of the Carmel ridge.',
      'The main traffic axis is Moriah Boulevard, Horev Street and Abba Hushi Boulevard (Road 672). Horev Square, at the heart of the old neighbourhood, links these arteries.',
      'The master plan for the neighbourhood was prepared by the architect Richard Kauffmann, as a garden-city neighbourhood on the Carmel.',
    ],
    'bat-galim': [
      'Bat Galim, built on the Carmel cape peninsula, is the only neighbourhood in Haifa whose houses reach the seashore.',
      'Within it are the Rambam hospital and the Technion\'s Faculty of Medicine. A promenade runs along the beach, and at its end is the station of the Haifa cable car that climbs to Stella Maris.',
      'The coastal railway passes through the neighbourhood, which has the Haifa Bat Galim railway station.',
      'Two urban renewal compounds on its main streets are listed in the Ministry of Construction and Housing database with an approved plan after licensing: HaAliya HaShniya (175 existing housing units, 715 proposed) and Heil HaYam (119 existing, 467 proposed).',
    ],
    'carmel-center': [
      'Carmel Center (Merkaz HaCarmel) is a neighbourhood and a culture and leisure area on the Carmel ridge.',
      'Its boundaries are Rotary Square to the east, Henrietta Szold and Yefe Nof streets and the Louis Promenade to the north, and the junction of Wolfson and Moriah streets to the south.',
      'The upper terminus of the Carmelit, Haifa\'s underground funicular, is at Carmel Center, and the Carmelit connects it to Hadar and to Downtown.',
      'Houses of the Templer resort suburb Karmelheim have survived and been preserved in the neighbourhood.',
    ],
    carmelia: [
      'Carmelia was built on a western spur of Mount Carmel, between the Moriah axis to the east, Kfar Samir and the cemeteries compound to the west, Kababir to the north and the Shambur neighbourhood to the south.',
      'Its main streets are Tzafririm and Lea, and the bed of the Siah stream breaks out of the neighbourhood towards the west.',
      'The houses on the slopes were built in terraced construction that follows the topography, a style closely identified with Carmelia.',
    ],
    denya: [
      'Denya, also known as Hod HaCarmel, is a neighbourhood in the south of Haifa, in the hilly part of the city.',
      'The area was built in varied styles, with an emphasis on ground-level houses on plots larger than usual.',
      'The main axis is Abba Hushi Boulevard, the road that once connected Haifa with Isfiya.',
      'Most of the remaining open land in the area has been declared part of the Carmel Park.',
    ],
    downtown: [
      'Downtown (HaIr HaTahtit, the Lower City) is the quarter in the lower, central part of Haifa, combining a chain of central neighbourhoods and much of the city\'s business activity.',
      'The district government complex is located there, and in recent years activity has been returning to the quarter.',
      'The lower terminus of the Carmelit, Haifa\'s underground funicular, is at Paris Square in Downtown.',
    ],
    'french-carmel': [
      'French Carmel lies on the north-western slopes of Mount Carmel. Its western boundary is the Stella Maris compound, and Carmel Center and Hadar are to its east.',
      'The road that climbs to the neighbourhood from the west is Tzarfat Road, which joins the main street, Tchernichovsky.',
      'The Carmelite monastery of Our Lady of Mount Carmel, the Gordon Academic College of Education and Beit HaLochem Haifa are located there.',
      'Two urban renewal compounds are listed in the Ministry of Construction and Housing database: Mordot HaCarmel HaTzarfati has an approved plan after licensing, and Derech Tzarfat 24 to 42 is in statutory planning (85 existing housing units, 416 proposed).',
    ],
    hadar: [
      'Hadar HaCarmel is one of Haifa\'s oldest neighbourhoods and a central residential quarter, on the terrace between Downtown and the Carmel.',
      'Hadar was founded as a garden city to the design of the architect Richard Kauffmann.',
      'The Technikum building, the historic home of the Technion, and the Hebrew Reali School were built there.',
      'The Carmelit, Haifa\'s underground funicular, passes through Hadar and connects it to Downtown and to Carmel Center.',
    ],
    'kiryat-eliezer': [
      'Kiryat Eliezer is in the west Haifa quarter and is named after Israel\'s first finance minister, Eliezer Kaplan.',
      'Rothschild Boulevard crosses the neighbourhood, and high-rise residential buildings were built on the site of the demolished Kiryat Eliezer stadium.',
      'Elijah\'s Cave is at the western end of the neighbourhood, next to the Clandestine Immigration and Naval Museum.',
      'Five urban renewal compounds bearing the name Kiryat Eliezer are listed in the Ministry of Construction and Housing database: compound 16 has an approved plan (96 existing housing units, 430 proposed), and compounds 11, 12, 13 and 29 are in statutory planning.',
    ],
    'neve-david': [
      'Neve David is a residential neighbourhood in west Haifa, at the southern entrance to the city, on Road 4 and the coastal road.',
      'It borders the Sha\'ar HaAliya neighbourhood to the north, Ramat HaNasi to the east and Haifa\'s cemeteries to the south.',
      'The urban renewal compound Yehoshafat – Neve David is in statutory planning (102 existing housing units, 417 proposed), according to the Ministry of Construction and Housing database.',
    ],
    'neve-shaanan': [
      'Neve Sha\'anan is a local administration area in south-east Haifa that covers a group of neighbourhoods on the eastern saddle of the mountain.',
      'Construction is varied: single-storey houses on the garden-city principle, two-storey buildings with tiled roofs known as the red roofs, dense housing estates and high-rises.',
      'The cable car line that serves the Technion has eased traffic congestion at Ziv Square.',
    ],
    'ramat-almogi': [
      'Ramat Almogi is a neighbourhood in the south of Haifa, in the hilly part of the city, bordering Ramot Remez, Savyonei Denya, Ahuza and Ramat Golda.',
      'It is named after the mayor Yosef Almogi and combines high-rise and low-rise buildings.',
      'It overlooks Haifa Bay and has a small shopping centre on Einstein Street.',
    ],
    'ramot-remez': [
      'Ramot Remez is a veteran neighbourhood within the Neve Sha\'anan area. Its first houses were built low, along HaInternational Street and Hankin Road, as two-storey buildings with red tiled roofs.',
      'It is popular with students because it lies between the Technion and the University of Haifa, and it is surrounded by woodland on all sides.',
      'A new neighbourhood, Ramat Zemer, is planned between Ramot Remez and Romema, on Givat Ofer.',
    ],
    romema: [
      'Romema is divided into Old Romema and New Romema, also called Ramat Ben-Gurion. Between them runs Pica Road, which links the centre of Ahuza with Neve Sha\'anan.',
      'Old Romema, the northern part, includes the Romema sports arena and the Rosh Maya archaeological site.',
      'New Romema has many high-rise buildings alongside low-rise building in Givat Oranim.',
      'A new neighbourhood, Ramat Zemer, is planned between Romema and Ramot Remez, on Givat Ofer.',
    ],
  },
});

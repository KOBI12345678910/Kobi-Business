// Nederlandse teksten voor de grote steden en hun wijken. De feiten volgen data/places.js.
module.exports = ({ ils, num }) => ({
  base: 'wijken',
  inOf: (t) => 'in ' + t,
  src: {
    wiki: "Wikipedia, Hebreeuwse en Engelse artikelen over de wijk en de stad, geraadpleegd op 5 november 2026",
    jlmRail: "Plannen voor de lightrail van Jeruzalem: gemeente Jeruzalem, het team van het Verkeersmasterplan Jeruzalem en de Districtscommissie voor Planning en Bouw, volgens de Israëlische pers (2023 tot 2026)",
    nta: "NTA (Metropolitan Mass Transit System), presentaties van de groene en de paarse lijn (2021 en 2022)",
    comptroller: "Israëlische Rekenkamer (State Comptroller), rapport over de lightrail van Gush Dan, december 2025",
    cbsRelease: "Centraal Bureau voor de Statistiek van Israël, persbericht 256/2026 van 14 augustus 2026",
    unesco: "UNESCO, Werelderfgoedlijst, Witte Stad van Tel Aviv: de moderne beweging",
    tlvPlans: "Gemeente Tel Aviv-Jaffa, plannen voor kwartier 3 en 4 en agenda van de subcommissie voor planning van 4 december 2024",
    jiis: "Jerusalem Institute for Policy Research, 'Jerusalem: Facts and Trends 2026'",
    cbsJlm: "Centraal Bureau voor de Statistiek van Israël, geselecteerde gegevens voor Jeruzalemdag 2026, volgens Maariv van 13 mei 2026",
    cbsYearbook: "Centraal Bureau voor de Statistiek van Israël, Statistisch Jaarboek van Israël 2025, tabel 2.17 (bevolking eind 2024)",
    cbsSocio: "Centraal Bureau voor de Statistiek van Israël, sociaaleconomische index van de lokale overheden 2021",
  },
  city: {
    pop: {
      jlm: `Inwonertal: ongeveer ${num(1063000)}, volgens de schatting van het Centraal Bureau voor de Statistiek die in mei 2026 voor Jeruzalemdag werd gepubliceerd. Het cijfer omvat buitenlandse staatsburgers.`,
      tlv: `Inwonertal: ongeveer ${num(494900)} eind 2024, inclusief buitenlandse staatsburgers.`,
    },
    priceQ: (c, q) => `Gemiddelde prijs van een verkocht appartement in ${c}: ${ils(q)} van april tot juni 2026 (voorlopig cijfer).`,
    rentQ: (q) => `Gemiddelde maandhuur op de vrije markt: ${ils(q)} van april tot juni 2026.`,
    extra: {
      jerusalem: [
        `Eind 2025 telde Jeruzalem ${num(251900)} woningen, waarvan 32% werd verhuurd, volgens het Jerusalem Institute for Policy Research.`,
        `Een appartement van 3,5 tot 4 kamers dat in 2025 in Jeruzalem werd verkocht, kostte gemiddeld ${ils(3376400)}, volgens het Jerusalem Institute for Policy Research, en de gemiddelde maandhuur voor deze grootte was ${ils(6179.6)} van april tot juni 2026. In Israël telt de woonkamer als een kamer.`,
      ],
      'tel-aviv': [
        "De rode lijn van de lightrail werd in augustus 2023 geopend en verbindt Bat Yam via Tel Aviv-Jaffa met Petah Tikva. De paarse lijn moet in 2028 openen en de groene lijn in 2029, volgens een rapport van de Rekenkamer van december 2025.",
        "Het Centraal Bureau voor de Statistiek meldde dat de gemiddelde prijs van april tot juni 2026 8,4% hoger lag dan in hetzelfde kwartaal een jaar eerder.",
      ],
    },
    hoodsTitle: (c) => `Wijken van ${c}`,
    hoodsLead: "Elke wijkpagina voegt aan de cijfers van de stad gegevens met bron over de buurt toe.",
  },
  index: {
    nav: 'Wijken',
    title: "Wijken van Jeruzalem, Tel Aviv en Haifa voor kopers uit het buitenland",
    desc: "Wijkpagina's voor buitenlandse ingezetenen en olim: gegevens met bron over elke buurt van Jeruzalem, Tel Aviv en Haifa, met de officiële cijfers van de stad en de overdrachtsbelasting.",
    h1: "Wijkpagina's voor kopers uit het buitenland",
    lead: "De gegevens van elke wijk komen uit de bronnen die op de pagina staan. Prijzen en huren zijn officiële cijfers van de stad, omdat er voor een wijk geen officieel gemiddelde wordt gepubliceerd.",
  },
  hood: {
    title: {
      foreign: (h, c) => `Kopen ${h.in} (${c}) als buitenlandse ingezetene: wijk en belasting (2026)`,
      oleh: (h, c) => `Een woning kopen ${h.in} (${c}) na de alia: wijk en belasting (2026)`,
    },
    desc: {
      foreign: (h, c) => `${h.n} (${c}): gegevens met bron over de wijk, officiële cijfers van de stad, de overdrachtsbelasting voor buitenlandse ingezetenen en kopen op afstand.`,
      oleh: (h, c) => `${h.n} (${c}): gegevens met bron over de wijk, officiële cijfers van de stad, de verlaagde overdrachtsbelasting voor een olee en de geldende hypotheekgrenzen.`,
    },
    h1: {
      foreign: (h, c) => `Kopen ${h.in} (${c}) als buitenlandse ingezetene`,
      oleh: (h, c) => `Een woning kopen ${h.in} (${c}) na de alia`,
    },
    intro: {
      foreign: (h, c) => `Wat er over ${h.the} is vastgelegd, de officiële cijfers van ${c}, de overdrachtsbelasting die een buitenlandse ingezetene zou betalen en hoe de aankoop werkt als u in het buitenland woont.`,
      oleh: (h, c) => `Wat er over ${h.the} is vastgelegd, de officiële cijfers van ${c}, de verlaagde overdrachtsbelasting voor een olee en hoeveel een bank financiert voor de enige woning.`,
    },
    aboutTitle: (h) => `${h.n} in het kort`,
    cityTitle: (c) => `${c} in officiële cijfers`,
    cityNote: (h, c) => `Het Centraal Bureau voor de Statistiek publiceert geen gemiddelde prijzen per wijk. De cijfers hieronder gaan over ${c} als geheel: ze zijn een vertrekpunt en geen prijs voor ${h.the}.`,
    advice: (h) => `Vergelijk een bod ${h.in} met de transacties die echt zijn geregistreerd in de straten eromheen in de vastgoeddatabank van de overheid (nadlan.gov.il), en vraag bij de lokale planningscommissie welke plannen voor het gebouw gelden.`,
    taxTitle: (h) => `De overdrachtsbelasting op een appartement ${h.in}`,
    taxAtAvg: (c, p) => `Er is geen officieel gemiddelde voor de wijk. Bij de officiële gemiddelde prijs in ${c} van april tot juni 2026 (${p}) zou de overdrachtsbelasting zijn:`,
    cityLink: (c) => `Alle cijfers van ${c}`,
    faq: (h, c, intent, v) => intent === 'foreign' ? [
      [`Mag een buitenlandse ingezetene een appartement kopen ${h.in}?`, "Ja. Buitenlandse staatsburgers kopen op eigen naam. Uw advocaat controleert het soort recht dat wordt verkocht: particuliere grond die in het kadaster is ingeschreven, of erfpacht van de Israëlische Grondautoriteit, waarbij overdracht aan een buitenlander goedkeuring van de Autoriteit kan vereisen."],
      [`Is er een officiële gemiddelde prijs voor ${h.the}?`, `Nee. Het Centraal Bureau voor de Statistiek publiceert gemiddelden voor steden en districten, niet voor wijken. Het gemiddelde van ${c} was van april tot juni 2026 ${v.avg}. Kijk voor ${h.the} naar de transacties die in dezelfde straat zijn geregistreerd.`],
      [`Hoeveel overdrachtsbelasting betaalt een buitenlandse ingezetene ${h.in}?`, `8% tot ${v.t3} en 10% daarboven, waar het appartement ook ligt. Voor een appartement van ${v.p} is dat ${v.foreign}.`],
    ] : [
      [`Welke overdrachtsbelasting betaalt een olee voor een woning ${h.in}?`, `0% tot ${v.t1} en 0,5% tot ${v.t3}, waar de woning ook ligt. Voor een woning van ${v.p} is dat ${v.oleh}, tegenover ${v.foreign} voor een buitenlandse ingezetene.`],
      [`Is er een officiële gemiddelde prijs voor ${h.the}?`, `Nee. Het Centraal Bureau voor de Statistiek publiceert gemiddelden voor steden en districten, niet voor wijken. Het gemiddelde van ${c} was van april tot juni 2026 ${v.avg}. Kijk voor ${h.the} naar de transacties die in dezelfde straat zijn geregistreerd.`],
      ["Wat is de minimale eigen inbreng?", "25% van de waarde voor de enige woning van een Israëlisch staatsburger, volgens het plafond van 75% van de Bank van Israël. Wie nog buitenlands ingezetene is, heeft minstens 50% nodig."],
    ],
  },
  names: {
    'german-colony': { n: 'Duitse Kolonie', the: 'de Duitse Kolonie' },
    'old-north': { n: 'Oude Noorden', the: 'het Oude Noorden' },
    'new-north': { n: 'Nieuwe Noorden', the: 'het Nieuwe Noorden' },
    'rothschild-boulevard': { n: 'Rothschild Boulevard', the: 'de Rothschild Boulevard', in: 'aan de Rothschild Boulevard' },
    'carmel-center': { n: 'Centraal Karmel', the: 'Centraal Karmel' },
    downtown: { n: 'Benedenstad', the: 'de Benedenstad' },
    'french-carmel': { n: 'Franse Karmel', the: 'de Franse Karmel' },
    hatikva: { n: 'Wijk Hatikva', the: 'de wijk Hatikva' },
    jaffa: { n: 'Jaffa', the: 'Jaffa' },
  },
  facts: {
    // ---------- Jeruzalem ----------
    rehavia: [
      "Rehavia werd door architect Richard Kauffmann ontworpen als tuinwijk, naar het voorbeeld van de Europese tuinstad, en gebouwd in de internationale stijl.",
      "De wijk ligt ten zuidwesten van de Keren HaYesodstraat en de King Georgestraat; ze grenst in het noorden aan Nachlaot en Shaarei Hesed en in het zuiden aan Talbiya en Kiryat Shmuel.",
      "Volgens het oorspronkelijke reglement was handel alleen toegestaan in de twee hoofdstraten aan de rand van de wijk, en een groen voetgangerspad loopt van noord naar zuid door de wijk.",
      "Het geplande tracé van de blauwe lightraillijn loopt via de Keren HaYesodstraat en de King Georgestraat, die langs Rehavia lopen.",
    ],
    talbiya: [
      "Talbiya, officieel Komemiyut, ligt in het zuidelijk centrum van Jeruzalem, met Rehavia en het Onafhankelijkheidspark in het noorden, Katamon in het zuiden en het Vrijheidsklokpark in het oosten.",
      "In de wijk liggen de residentie van de president en het Jerusalem Theatre.",
      "Talbiya geldt als een welgestelde wijk; onder de bewoners zijn academici, vrije beroepen en buitenlandse diplomaten.",
    ],
    katamon: [
      "Katamon, officieel Gonen, ligt in het zuidelijk centrum van Jeruzalem. Talbiya, Rehavia en Kiryat Shmuel liggen in het noorden, de Griekse en de Duitse Kolonie in het oosten, en de Katamonim in het zuiden en zuidwesten.",
      "De hoofdstraten zijn Rachel Imenu, die de wijk met Emek Refaim verbindt, en Kovshei Katamon, die haar met de HaPalmachstraat verbindt. Het Sint-Simeonklooster begrenst de wijk in het westen.",
      "Het historische Katamon verschilt in geschiedenis en architectuur van de Katamonim, de reeks wijken die ten zuidwesten ervan werd gebouwd.",
      "Het geplande tracé van de blauwe lightraillijn loopt via de Emek Refaimstraat, waar de Rachel Imenustraat op uitkomt. De groene lijn en de al goedgekeurde paarse lijn moeten door de naburige Katamonim lopen.",
    ],
    baka: [
      "Baka, officieel Geulim, is een wijk in het zuiden van Jeruzalem, begrensd door de Rivkastraat in het zuiden, de Pierre Koenigstraat in het westen, de oude spoorlijn in het noordwesten en de Hebronweg in het oosten.",
      "De omliggende wijken zijn Talpiot, Mekor Haim, de Griekse Kolonie, de Duitse Kolonie en Abu Tor.",
      "Het straatbeeld combineert oude stenen huizen van één of twee verdiepingen met blokken sociale woningbouw, waarvan er veel zijn vernieuwd en uitgebreid in een gemeentelijk wijkvernieuwingsproject.",
    ],
    'german-colony': [
      "De Duitse Kolonie is een wijk in het westelijk centrum van Jeruzalem, naast het complex van het Eerste Station, gebouwd door Duitse leden van de Tempelgenootschap, de templers.",
      "De oorspronkelijke huizen zijn van Jeruzalemsteen, meestal van één of twee verdiepingen met pannendaken; de twee hoofdstraten zijn Emek Refaim en de Bethlehemweg.",
      "Het is een uitgaans- en winkelgebied met cafés, restaurants, bars en boetieks, en er worden festivals en een boerenmarkt gehouden.",
    ],
    talpiot: [
      "Talpiot is een historische wijk van Jeruzalem aan de zuidoostrand van de stad, door Richard Kauffmann ontworpen in de geest van de tuinstad.",
      "Ernaast is het bedrijventerrein Talpiot gegroeid, een van de grootste werk- en winkelgebieden van de hoofdstad.",
      "Het geplande tracé van de blauwe lightraillijn loopt door Talpiot op de route tussen het zuiden en het noorden van de stad.",
    ],
    arnona: [
      "Arnona is een wijk in het zuiden van Jeruzalem, tussen Talpiot in het noorden, het bedrijventerrein Talpiot en de Hebronweg in het westen, en kibboets Ramat Rachel in het zuiden.",
      "De wijk bestaat vooral uit villa's, rijtjeshuizen en lage gebouwen, en bijna al haar grondreserves zijn al bebouwd.",
      "In de wijk ligt het complex van de Amerikaanse ambassade.",
    ],
    nachlaot: [
      "Nachlaot is een groep oude buurten in het hart van Jeruzalem, vooral tussen de Agripasstraat en de Bezalelstraat; sommige reiken tot de Jaffastraat.",
      "De meeste zijn gebouwd als hofbuurten, typisch voor de Joodse gemeenschapsbouw uit de tijd dat Jeruzalem buiten de muren van de Oude Stad groeide.",
      "Nachlaot grenst aan de Mahane Yehudamarkt. Beide zijn in de loop der jaren veranderd door nieuwe bewoners en renovatie van huizen.",
    ],
    'beit-hakerem': [
      "Beit HaKerem is een historische wijk in het westen van Jeruzalem; ze grenst aan Kiryat Moshe in het noorden, Yefe Nof en de Herzl Boulevard in het westen, Ramat Beit HaKerem in het zuiden en de Beginweg en Givat Ram in het oosten.",
      "De wijk werd door architect Richard Kauffmann als tuinwijk ontworpen.",
      "De rode lightraillijn loopt over de Herzl Boulevard, en vlakbij liggen de campus Givat Ram van de Hebreeuwse Universiteit en het Azrieli College of Engineering.",
      "Voor de wijk werd een structuurplan bevorderd dat extra woningen mogelijk maakt via sloop en nieuwbouw en via TAMA 38, waartegen sommige bewoners bezwaar maakten.",
    ],
    'kiryat-hayovel': [
      "Kiryat HaYovel ligt in het zuidwesten van Jeruzalem, op een bergrug tussen de Herzlberg en Ein Kerem, en is een van de hoogste wijken van de stad.",
      "De wijk ligt dicht bij het Hadassah Ein Kerem-ziekenhuis, de uitvalsweg naar Tel Aviv en de Herzl Boulevard, die naar het centrum leidt.",
      "De gemeente Jeruzalem bevordert in de wijk plannen voor sloop en nieuwbouw, waaronder het project Sderot HaYovel in de Tahonstraat.",
      "De Districtscommissie voor Planning en Bouw keurde het plan goed voor de paarse lightraillijn, die door Kiryat HaYovel loopt.",
    ],
    malha: [
      "Malha, officieel Manahat, ligt in het zuidwesten van Jeruzalem en is verdeeld in Oud-Malha en Nieuw-Malha.",
      "Het winkelcentrum Jerusalem Mall, het Teddystadion, de Pais Arena en het technologiepark Malha liggen in de wijk of ernaast, en de Bijbelse Dierentuin ligt vlakbij.",
      "Volgens een bericht van augustus 2026 stond het eerste deel van de groene lightraillijn, van Malha naar het gebied van het centrale busstation, op het punt open te gaan voor reizigers. De geplande blauwe lijn heeft een zuidelijke tak naar Malha, en ook de goedgekeurde paarse lijn loopt door de wijk.",
    ],
    'ein-kerem': [
      "Ein Kerem is een wijk aan de zuidwestrand van Jeruzalem die een dorps karakter heeft behouden, omdat ze relatief afgelegen is van de stad en omringd door bergen, dalen en bossen.",
      "Het is een heilige plaats en bedevaartsoord voor christenen, met actieve kerken en kloosters.",
      "Het medisch centrum Hadassah Ein Kerem ligt naast de wijk, en de rode lightraillijn is verlengd en rijdt nu tot het ziekenhuis.",
    ],
    'har-nof': [
      "Har Nof is een charedische en religieuze wijk in het westen van Jeruzalem. Het Jeruzalembos strekt zich aan haar voet uit en omringt haar.",
      "De wijk werd ontworpen door architect Zeev Scheinberg.",
      "Een lightrailtak naar de wijk via de Kanfei Nesharimstraat is goedgekeurd en wordt opgenomen in het plan van de groene lijn.",
      "De Israëlische Grondautoriteit bevordert een nieuw woonplan ten zuiden van de wijk, deels op grond van het Jeruzalembos.",
    ],
    // ---------- Tel Aviv ----------
    afeka: [
      "Afeka is een wijk in het noorden van Tel Aviv, ten noorden van de rivier de Yarkon, en hoort bij kwartier 1 van de stad.",
      "De wijk grenst aan Tel Baruch in het oosten, de Universiteit van Tel Aviv in het zuiden, Neve Avivim in het westen en Ramat Aviv Gimel in het noordwesten.",
      "Ze werd opgericht als bouwcoöperatie van commandanten van de Hagana; in de loop der jaren zijn veel oorspronkelijke huizen vervangen door grote villa's.",
    ],
    ajami: [
      "Ajami is een wijk van Jaffa, in Tel Aviv-Jaffa, aan de Middellandse Zee, ten zuiden van Oud-Jaffa en ten noorden van de wijk Jabaliya. De straten lopen evenwijdig aan de kust.",
      "De wijk heeft traditionele stenen huizen rond binnenplaatsen. Herkenningspunten zijn de maronitische kerk, de Ajami-moskee en het Peres Centrum voor Vrede aan de zuidkant.",
      "De rode lightraillijn doorkruist Jaffa van noord naar zuid over de Jeruzalem Boulevard.",
    ],
    bavli: [
      "Bavli wordt begrensd door het Yarkonpark in het noorden, de Ayalon-snelweg in het oosten, de Namirweg in het westen en het Tzameretpark in het zuiden.",
      "De wijk begon als sociaal woningbouwproject. Later werd het Dekelcentrum gebouwd, en de recentste bouw bestaat vooral uit luxe woontorens met uitzicht op de Ayalon.",
      "De wijk geldt grotendeels als hogere middenklasse, met veel oudere stellen en gezinnen.",
    ],
    florentin: [
      "Florentin is een wijk in het zuiden van Tel Aviv die grenst aan Neve Tzedek.",
      "De wijk combineert wonen met een gebied van industrie en werkplaatsen en met groothandel in kleding en meubels.",
      "De opleving begon met een stadsvernieuwingsprogramma van de gemeente Tel Aviv, en vandaag staat de wijk bekend om haar nachtleven, kunstenaarsateliers en straatkunst.",
    ],
    hatikva: [
      "De wijk Hatikva ligt in het zuidoosten van Tel Aviv en heeft een Jemenitisch-Joods erfgoed.",
      "De naam komt van de boerderij Har HaTikva, en de wijk werd na de Onafhankelijkheidsoorlog bij het gemeentelijk grondgebied van Tel Aviv gevoegd.",
      "In de wijk ligt het stadion van de wijk Hatikva, en het monument Engel van de Vrede staat tegenover het centrum Beit Dani.",
    ],
    jaffa: [
      "Jaffa is een oude havenstad aan de Middellandse Zee, in het zuiden van Tel Aviv-Jaffa. Toen de twee gemeenten werden samengevoegd, kreeg de stad de naam Tel Aviv-Jaffa om de historische naam te behouden.",
      "Bestuurlijk is Jaffa kwartier 7 van de gemeente en een van de gemengde steden van Israël, met Joodse, christelijke en islamitische inwoners.",
      "Herkenningspunten zijn de historische haven, de klokkentoren, het vlooienmarktgebied en het Museum van Oudheden van Jaffa.",
      "De rode lightraillijn doorkruist Jaffa van noord naar zuid over de Jeruzalem Boulevard.",
    ],
    'kerem-hateimanim': [
      "Kerem HaTeimanim is een wijk in het centrum van Tel Aviv, naast de Carmelmarkt.",
      "De wijk werd gesticht door Joodse immigranten uit Jemen, en veel oorspronkelijke huizen waren gebouwen van één verdieping van goedkope materialen.",
      "De wijk is grotendeels religieus en de horeca sluit op sjabbat. Er is een gentrificatieproces gaande.",
    ],
    'kochav-hatzafon': [
      "Kochav HaTzafon is een wijk in het noordwesten van Tel Aviv, de dichtstbijzijnde van de wijken voorbij de Yarkon, naast het Nieuwe Noorden en de haven van Tel Aviv.",
      "De grenzen zijn de Ibn Gabirolstraat in het westen, het terrein van het voormalige vliegveld Sde Dov in het noorden, de Namirweg in het oosten en de Rokach Boulevard in het zuiden.",
      "In het buitenste deel overheersen hoge gebouwen, in het binnenste deel lagere gebouwen en enkele eengezinswoningen. Een wijkpark doorkruist de wijk van oost naar west.",
    ],
    montefiore: [
      "De wijk Montefiore strekt zich uit van het Azrielicentrum in het noorden tot de Yitzhak Sadehstraat in het zuiden, en van de Ayalon-snelweg in het oosten tot de HaMasgerstraat en de Beginweg in het westen.",
      "De wijk ontstond op de grond van de boomgaard Montefiore, die geldt als de eerste boomgaard in het Land Israël die door Joden werd geplant en verzorgd.",
      "De planningsgeschiedenis van de wijk mengt wonen met werkplaatsen, kleine industrie en kantoren, en in de loop der jaren is er hoogbouw toegestaan.",
    ],
    'nahalat-yitzhak': [
      "Nahalat Yitzhak is een wijk in het oosten van Tel Aviv, ten oosten van de Ayalon-snelweg, naast de wijken Bitzaron en Ramat Yisrael.",
      "Ze begon als landbouwnederzetting waar zich ook fabrieken vestigden. De Tel Aviv Towers zijn gebouwd op het terrein van de voormalige Yitzhar-fabriek.",
      "In het gebied was een fabriek van de militaire industrie gevestigd. Volgens het Wikipedia-artikel begon in de jaren 2020 de sanering van de grond om die voor woningbouw geschikt te maken.",
    ],
    'neve-avivim': [
      "Neve Avivim ligt in Ramat Aviv, in het noorden van Tel Aviv, begrensd door de Haim Levanonstraat in het oosten, de Keren Kayemet Boulevard in het noorden, de Namirweg in het westen en de Einsteinstraat in het zuiden.",
      "De wijk heeft hoge gebouwen met grote appartementen en in het midden een grote openbare ruimte met een groot wijkpark, winkelcentra, onderwijsinstellingen en een sportcentrum.",
      "Zoals de andere wijken van Ramat Aviv heeft de bevolking een hoog sociaaleconomisch profiel.",
    ],
    'neve-tzedek': [
      "Neve Tzedek was de eerste officiële Joodse wijk die buiten de muren van Jaffa werd gebouwd, vóór de stichting van Tel Aviv. Vandaag hoort ze bij de stad.",
      "De grenzen zijn de Pinesstraat in het noordoosten, de ingegraven historische spoorlijn Jaffa-Jeruzalem in het zuidoosten, waar nu de rode lightraillijn en het HaMesilapark lopen, het parkeerterrein Manshiya in het zuidwesten en de Shabaziestraat in het noordwesten.",
      "De Rothschild Boulevard begint aan de oostgrens van Neve Tzedek.",
    ],
    'new-north': [
      "Het Nieuwe Noorden ontwikkelde zich na de oprichting van de staat, en de naam onderscheidt het van het Oude Noorden.",
      "Het hoort bij kwartier 4 van de stad, doorsneden door straten als Yehuda HaMaccabi, Pinkas, Jabotinsky, Weizmann en Shaul HaMelech, waar het plan voor kwartier 4 (TA/3729a) geldt.",
      "Op 4 december 2024 stonden op de agenda van de gemeentelijke subcommissie voor planning een wijziging van de regels voor laagbouw in kwartier 4 (TA/3729b) en een plan dat toegestane functies in het kwartier toevoegt (TA/5269).",
    ],
    'old-north': [
      "Volgens de definitie van de gemeente is het Oude Noorden (kwartier 3) het gebied tussen de rivier de Yarkon in het noorden en de Arlozorovstraat in het zuiden, begrensd door de Ibn Gabirolstraat in het oosten en de Middellandse Zee in het westen.",
      "Het ontwikkelde zich ten noorden van de historische kern van de stad en heette oorspronkelijk het noorden van de stad. De naam Oude Noorden onderscheidt het van het Nieuwe Noorden.",
      "Het plan voor kwartier 3 (TA/3616a) werd op 9 januari 2018 goedgekeurd.",
    ],
    'ramat-aviv': [
      "Ramat Aviv is de naam van verschillende wijken in het noorden van Tel Aviv, ten noorden van de rivier de Yarkon.",
      "In het gebied liggen de Universiteit van Tel Aviv, het Eretz Israel Museum, het Yitzhak Rabin Centrum, het Palmachmuseum en het Museum van het Joodse Volk, en het Yarkonpark ligt vlakbij.",
      "Ramat Aviv Alef, de groene, combineert eengezinswoningen met lage appartementengebouwen tussen grasvelden. Het winkelcentrum Ramat Aviv ligt in het noordelijke deel en het Brodetskycentrum in het midden.",
    ],
    'ramat-hahayal': [
      "Ramat HaHayal is een wijk in het noordoosten van Tel Aviv, een van de wijken voorbij de Yarkon.",
      "Ernaast ligt het bedrijventerrein Ever HaYarkon, een centrum van hightechbedrijven dat soms ook Ramat HaHayal wordt genoemd.",
      "De wijk werd na de Onafhankelijkheidsoorlog gebouwd door een bouwmaatschappij voor ontslagen soldaten, oorlogsweduwen en veteranen met een handicap.",
    ],
    'rothschild-boulevard': [
      "De Rothschild Boulevard is een van de eerste straten van Tel Aviv en loopt van de oostgrens van Neve Tzedek tot het Habimacomplex. Hij vormt de ruggengraat van de wijk Lev Tel Aviv.",
      "De boulevard hoort bij het belangrijkste zakendistrict van de stad. Sinds de jaren 90 zijn lage gebouwen aan de boulevard vervangen door woon- en kantoortorens, terwijl gebouwen in eclectische stijl en Bauhausstijl bewaard bleven.",
      "De Witte Stad, het centrale deel van Tel Aviv dat tussen de jaren 30 en 50 werd gebouwd volgens het stedenbouwkundig plan van Sir Patrick Geddes in de stijl van de moderne beweging, staat op de Werelderfgoedlijst van UNESCO.",
      "Volgens NTA kruist de paarse lightraillijn de rode lijn op de kruising van de Allenbystraat en de Yehuda HaLevistraat. De Allenbystraat kruist de Rothschild Boulevard.",
    ],
    shapira: [
      "De wijk Shapira ligt in het zuiden van Tel Aviv, ten zuiden van het nieuwe centrale busstation en de Shlomoweg, begrensd door de Heil HaShiryonweg en de Ayalon-snelweg in het oosten, de Kibbutz Galuyotweg in het zuiden en de Har Zion Boulevard in het westen.",
      "De wijk werd gekenmerkt door lage huizen in een dicht stedelijk weefsel. In de afgelopen jaren bestaat de nieuwbouw uit moderne appartementengebouwen van meerdere verdiepingen.",
      "NTA presenteerde aan de bewoners de werkzaamheden voor de groene lijn op de Har Zion Boulevard, tussen de Kibbutz Galuyotweg en de Shlomoweg, langs de westgrens van de wijk.",
    ],
    tzahala: [
      "Tzahala is een wijk in het noordoosten van Tel Aviv-Jaffa, op de grens met Ramat HaSharon. De wijk ontstond op initiatief van de regering voor hoge officieren van het leger en de veiligheidsdiensten, en dankt haar naam aan het Israëlische Defensieleger (Tzahal).",
      "De wijk werd gebouwd als eengezinswoningen op grote kavels. Sinds de jaren 90 zijn veel van de oorspronkelijke huizen gesloopt en vervangen door villa's.",
      "Een coöperatieve vereniging beheert de wijk nog steeds. De bewoners betalen contributie, en het grootste deel van de begroting komt uit de verhuur van de winkels in het winkelcentrum dat de vereniging bezit.",
    ],
    'yad-eliyahu': [
      "Yad Eliyahu is een wijk in het zuidoosten van Tel Aviv, begrensd door de Yitzhak Sadehstraat in het noorden, de Moshe Dayanweg in het oosten, de HaHaganaweg in het zuiden en de Ayalon-snelweg in het westen. De La Guardiastraat is de hoofdstraat.",
      "De wijk is genoemd naar Eliyahu Golomb en werd op initiatief van de gemeente Tel Aviv gebouwd voor ontslagen soldaten van het Britse leger.",
      "In de wijk liggen de Menora Mivtachim Arena, het Galitpark en het medisch revalidatiecentrum Reuth.",
      "De door NTA gepubliceerde lijst van stations van de paarse lijn omvat HaHagana en Moshe Dayan, de namen van de wegen die de wijk in het zuiden en oosten begrenzen.",
    ],
    // ---------- Haifa ----------
    ahuza: [
      "Ahuza (Ahuzat Shmuel) is een historische wijk en het centrum van de woonsector Ramot HaCarmel, op de waterscheiding van de Karmelrug.",
      "De belangrijkste verkeersas wordt gevormd door de Moriah Boulevard, de Horevstraat en de Abba Hushi Boulevard (weg 672). Het Horevplein, in het hart van de oude wijk, verbindt deze verkeersaders.",
      "Het bestemmingsplan van de wijk werd opgesteld door architect Richard Kauffmann, als wijk in tuinstadvorm op de Karmel.",
    ],
    'bat-galim': [
      "Bat Galim, gebouwd op het schiereiland van kaap Karmel, is de enige wijk van Haifa waarvan de huizen tot aan de zee reiken.",
      "Hier liggen het Rambam-ziekenhuis en de medische faculteit van het Technion. Een boulevard loopt langs het strand, en aan het einde ervan ligt het station van de kabelbaan van Haifa die naar Stella Maris omhooggaat.",
      "De kustspoorlijn loopt door de wijk, die het treinstation Haifa Bat Galim heeft.",
      "Twee stadsvernieuwingsgebieden in de hoofdstraten van de wijk staan in de databank van het Ministerie van Bouw en Volkshuisvesting met een goedgekeurd plan, in de fase na de vergunningen: HaAliya HaShniya (175 bestaande woningen, 715 voorgestelde) en Heil HaYam (119 bestaande, 467 voorgestelde).",
    ],
    'carmel-center': [
      "Centraal Karmel (Merkaz HaCarmel) is een wijk en een cultuur- en uitgaansgebied op de Karmelrug.",
      "De grenzen zijn het Rotaryplein in het oosten, de Henrietta Szoldstraat, de Yefe Nofstraat en de Louispromenade in het noorden, en de kruising van de Wolfsonstraat en de Moriahstraat in het zuiden.",
      "Het bovenste station van de Carmelit, de ondergrondse kabelspoorweg van Haifa, ligt in Centraal Karmel, en de Carmelit verbindt de wijk met Hadar en de Benedenstad.",
      "In de wijk zijn huizen van Karmelheim, het vakantiedorp van de templers, bewaard gebleven.",
    ],
    carmelia: [
      "Carmelia is gebouwd op een westelijke uitloper van de berg Karmel, tussen de Moriahas in het oosten, Kfar Samir en het terrein van de begraafplaatsen in het westen, Kababir in het noorden en de wijk Shambur in het zuiden.",
      "De hoofdstraten zijn Tzafririm en Lea, en de bedding van de beek Siah verlaat de wijk naar het westen.",
      "De huizen op de hellingen zijn in terrassen gebouwd die het reliëf volgen, een stijl die sterk met Carmelia wordt geassocieerd.",
    ],
    denya: [
      "Denya, ook bekend als Hod HaCarmel, is een wijk in het zuiden van Haifa, in het bergachtige deel van de stad.",
      "Het gebied is in verschillende stijlen bebouwd, vooral met eengezinswoningen op grotere kavels dan gebruikelijk.",
      "De hoofdas is de Abba Hushi Boulevard, de weg die vroeger Haifa met Isfiya verbond.",
      "Het grootste deel van de resterende open grond in het gebied is tot deel van het Karmelpark verklaard.",
    ],
    downtown: [
      "De Benedenstad (HaIr HaTahtit) is de sector van het lage en centrale deel van Haifa, die een reeks centrale wijken en een groot deel van de economische activiteit van de stad omvat.",
      "Hier ligt het complex van de regeringskantoren van het district, en de laatste jaren keert de activiteit naar de sector terug.",
      "Het onderste station van de Carmelit, de ondergrondse kabelspoorweg van Haifa, ligt op het Parijsplein in de Benedenstad.",
    ],
    'french-carmel': [
      "De Franse Karmel ligt op de noordwestelijke hellingen van de berg Karmel. De westgrens is het complex van Stella Maris, en in het oosten liggen Centraal Karmel en Hadar.",
      "De weg die vanuit het westen naar de wijk klimt, is de Tzarfatweg, die aansluit op de hoofdstraat, Tchernichovsky.",
      "Hier liggen het karmelietenklooster van Onze-Lieve-Vrouw van de Berg Karmel, het Gordon Academic College of Education en Beit HaLochem Haifa.",
      "In de databank van het Ministerie van Bouw en Volkshuisvesting staan twee stadsvernieuwingsgebieden: Mordot HaCarmel HaTzarfati heeft een goedgekeurd plan in de fase na de vergunningen, en Derech Tzarfat 24 tot 42 is in de fase van wettelijke planning (85 bestaande woningen, 416 voorgestelde).",
    ],
    hadar: [
      "Hadar HaCarmel is een van de oudste wijken van Haifa en een centrale woonsector, op het terras tussen de Benedenstad en de Karmel.",
      "Hadar werd opgericht als tuinstad volgens het ontwerp van architect Richard Kauffmann.",
      "Hier werden het Technikumgebouw, het historische gebouw van het Technion, en de Hebreeuwse Reali-school gebouwd.",
      "De Carmelit, de ondergrondse kabelspoorweg van Haifa, loopt door Hadar en verbindt de wijk met de Benedenstad en Centraal Karmel.",
    ],
    'kiryat-eliezer': [
      "Kiryat Eliezer ligt in de westelijke sector van Haifa en is genoemd naar Eliezer Kaplan, de eerste minister van Financiën van Israël.",
      "De Rothschild Boulevard doorkruist de wijk, en op het terrein van het gesloopte Kiryat Eliezer-stadion zijn zeer hoge woongebouwen verrezen.",
      "De grot van Elia ligt aan de westrand van de wijk, naast het Museum van de Clandestiene Immigratie en de Marine.",
      "In de databank van het Ministerie van Bouw en Volkshuisvesting staan vijf stadsvernieuwingsgebieden met de naam Kiryat Eliezer: gebied 16 heeft een goedgekeurd plan (96 bestaande woningen, 430 voorgestelde), en de gebieden 11, 12, 13 en 29 zijn in de fase van wettelijke planning.",
    ],
    'neve-david': [
      "Neve David is een woonwijk in het westen van Haifa, aan de zuidelijke toegang tot de stad, boven weg 4 en de kustweg.",
      "De wijk grenst aan de wijk Shaar HaAliya in het noorden, Ramat HaNasi in het oosten en de begraafplaatsen van Haifa in het zuiden.",
      "Het stadsvernieuwingsgebied Yehoshafat – Neve David is in de fase van wettelijke planning (102 bestaande woningen, 417 voorgestelde), volgens de databank van het Ministerie van Bouw en Volkshuisvesting.",
    ],
    'neve-shaanan': [
      "Neve Shaanan is een lokale administratie in het zuidoosten van Haifa die een groep wijken op het oostelijke zadel van de berg omvat.",
      "De bebouwing is gevarieerd: huizen van één verdieping volgens het tuinstadprincipe, gebouwen van twee verdiepingen met pannendaken, bekend als de rode daken, dichte bouwcomplexen en hoge gebouwen.",
      "De kabelbaan naar het Technion heeft de verkeersdrukte op het Zivplein verminderd.",
    ],
    'ramat-almogi': [
      "Ramat Almogi is een wijk in het zuiden van Haifa, in het bergachtige deel van de stad, die grenst aan Ramot Remez, Savyonei Denya, Ahuza en Ramat Golda.",
      "De wijk is genoemd naar burgemeester Yosef Almogi en combineert hoge en lage gebouwen.",
      "De wijk heeft uitzicht op de baai van Haifa en een klein winkelcentrum in de Einsteinstraat.",
    ],
    'ramot-remez': [
      "Ramot Remez is een historische wijk binnen het gebied van Neve Shaanan. De eerste huizen werden laag gebouwd, langs de HaInternationalstraat en de Hankinweg, als gebouwen van twee verdiepingen met rode pannendaken.",
      "De wijk is populair bij studenten omdat ze tussen het Technion en de Universiteit van Haifa ligt, en ze is aan alle kanten door bos omgeven.",
      "Tussen Ramot Remez en Romema, op Givat Ofer, is een nieuwe wijk gepland: Ramat Zemer.",
    ],
    romema: [
      "Romema is verdeeld in Oud-Romema en Nieuw-Romema, ook wel Ramat Ben-Gurion genoemd. Tussen de twee loopt de Picaweg, die het centrum van Ahuza met Neve Shaanan verbindt.",
      "Oud-Romema, het noordelijke deel, omvat de sporthal van Romema en de archeologische vindplaats Rosh Maya.",
      "Nieuw-Romema heeft veel hoge gebouwen naast de laagbouw van Givat Oranim.",
      "Tussen Romema en Ramot Remez, op Givat Ofer, is een nieuwe wijk gepland: Ramat Zemer.",
    ],
  },
});

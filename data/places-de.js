// Deutsche Texte für die großen Städte und ihre Viertel. Die Fakten folgen data/places.js.
const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);
module.exports = ({ ils, num }) => ({
  base: 'stadtviertel',
  inOf: (t) => 'in ' + t,
  src: {
    wiki: "Wikipedia, hebräische und englische Artikel über das Viertel und die Stadt, abgerufen am 5. November 2026",
    jlmRail: "Pläne für die Jerusalemer Stadtbahn: Stadt Jerusalem, Team des Verkehrs-Masterplans Jerusalem und Bezirksausschuss für Planung und Bau, nach Berichten der israelischen Presse (2023 bis 2026)",
    nta: "NTA (Metropolitan Mass Transit System), Präsentationen zur Grünen und zur Violetten Linie (2021 und 2022)",
    comptroller: "Staatskontrolleur Israels, Bericht zur Stadtbahn im Großraum Tel Aviv (Gusch Dan), Dezember 2025",
    cbsRelease: "Zentralamt für Statistik, Pressemitteilung 256/2026 vom 14. August 2026",
    unesco: "UNESCO-Welterbeliste, Weiße Stadt von Tel Aviv: die Moderne",
    tlvPlans: "Stadt Tel Aviv-Jaffa, Pläne für die Stadtbezirke 3 und 4 und Tagesordnung des Planungsunterausschusses vom 4. Dezember 2024",
    jiis: "Jerusalem Institute for Policy Research, „Jerusalem: Facts and Trends 2026“",
    cbsJlm: "Zentralamt für Statistik, ausgewählte Daten zum Jerusalem-Tag 2026, nach einem Bericht von Maariv vom 13. Mai 2026",
    cbsYearbook: "Zentralamt für Statistik, Statistisches Jahrbuch Israels 2025, Tabelle 2.17 (Bevölkerung Ende 2024)",
    cbsSocio: "Zentralamt für Statistik, sozioökonomischer Index der Gebietskörperschaften für 2021",
  },
  city: {
    pop: {
      jlm: `Einwohnerzahl: rund ${num(1063000)}, nach der Schätzung des Zentralamts für Statistik, die im Mai 2026 zum Jerusalem-Tag veröffentlicht wurde. Die Zahl schließt ausländische Staatsangehörige ein.`,
      tlv: `Einwohnerzahl: rund ${num(494900)} Ende 2024, einschließlich ausländischer Staatsangehöriger.`,
    },
    priceQ: (c, q) => `Durchschnittspreis einer in ${c} verkauften Wohnung: ${ils(q)} von April bis Juni 2026 (vorläufiger Wert).`,
    rentQ: (q) => `Durchschnittliche Monatsmiete auf dem freien Markt: ${ils(q)} von April bis Juni 2026.`,
    extra: {
      jerusalem: [
        `Ende 2025 gab es in Jerusalem ${num(251900)} Wohnungen, von denen 32 % vermietet waren, so das Jerusalem Institute for Policy Research.`,
        `Eine 2025 in Jerusalem verkaufte Wohnung mit 3,5 bis 4 Zimmern kostete nach Angaben des Jerusalem Institute for Policy Research im Durchschnitt ${ils(3376400)}; die durchschnittliche Monatsmiete für diese Größe lag von April bis Juni 2026 bei ${ils(6179.6)}. In Israel zählt das Wohnzimmer als Zimmer.`,
      ],
      'tel-aviv': [
        "Die Rote Linie der Stadtbahn wurde im August 2023 eröffnet und verbindet Bat Yam und Petah Tikva über Tel Aviv-Jaffa. Die Violette Linie soll 2028 und die Grüne Linie 2029 den Betrieb aufnehmen, so ein Bericht des Staatskontrolleurs vom Dezember 2025.",
        "Nach Angaben des Zentralamts für Statistik lag der Durchschnittspreis von April bis Juni 2026 um 8,4 % über dem des Vorjahresquartals.",
      ],
    },
    hoodsTitle: (c) => `Stadtviertel in ${c}`,
    hoodsLead: "Jede Viertelseite ergänzt die Zahlen der Stadt um belegte Fakten zur Lage.",
  },
  index: {
    nav: 'Stadtviertel',
    title: "Stadtviertel in Jerusalem, Tel Aviv und Haifa für Käufer aus dem Ausland",
    desc: "Viertelseiten für Käufer mit Wohnsitz im Ausland und für Olim: belegte Fakten zu jeder Lage in Jerusalem, Tel Aviv und Haifa, mit den amtlichen Zahlen der Stadt und der Kaufsteuer.",
    h1: "Viertelseiten für Käufer aus dem Ausland",
    lead: "Die Fakten zu jedem Viertel stammen aus den Quellen, die auf seiner Seite genannt sind. Preise und Mieten sind amtliche Zahlen der Stadt, weil für einzelne Viertel kein amtlicher Durchschnitt veröffentlicht wird.",
  },
  hood: {
    title: {
      foreign: (h, c) => `Wohnung ${h.in} (${c}) kaufen mit Wohnsitz im Ausland: Viertel und Steuer (2026)`,
      oleh: (h, c) => `Wohnung ${h.in} (${c}) kaufen als Oleh: Viertel und Kaufsteuer (2026)`,
    },
    desc: {
      foreign: (h, c) => `${h.n} (${c}): belegte Fakten zum Viertel, amtliche Zahlen der Stadt, die Kaufsteuer für Käufer mit Wohnsitz im Ausland und der Kauf aus der Ferne.`,
      oleh: (h, c) => `${h.n} (${c}): belegte Fakten zum Viertel, amtliche Zahlen der Stadt, die ermäßigte Kaufsteuer für Olim und die geltenden Kreditgrenzen.`,
    },
    h1: {
      foreign: (h, c) => `${cap(h.in)} (${c}) kaufen mit Wohnsitz im Ausland`,
      oleh: (h, c) => `${cap(h.in)} (${c}) kaufen als Oleh`,
    },
    intro: {
      foreign: (h, c) => `${h.n} (${c}): was über das Viertel belegt ist, die amtlichen Zahlen der Stadt, die Kaufsteuer, die ein Käufer mit Wohnsitz im Ausland zahlen würde, und der Ablauf des Kaufs, wenn Sie im Ausland leben.`,
      oleh: (h, c) => `${h.n} (${c}): was über das Viertel belegt ist, die amtlichen Zahlen der Stadt, die ermäßigte Kaufsteuer für Olim und was eine Bank für die einzige Wohnung finanziert.`,
    },
    aboutTitle: (h) => `${h.n} im Überblick`,
    cityTitle: (c) => `${c} in amtlichen Zahlen`,
    cityNote: (h, c) => `Das Zentralamt für Statistik veröffentlicht keine Durchschnittspreise für einzelne Viertel. Die folgenden Zahlen gelten für ${c} insgesamt. Sie sind ein Ausgangspunkt und kein Preis für das Viertel.`,
    advice: (h) => `Bevor Sie ${h.in} ein Angebot abgeben, vergleichen Sie es mit den tatsächlich registrierten Transaktionen in den umliegenden Straßen in der staatlichen Immobiliendatenbank (nadlan.gov.il), und klären Sie beim örtlichen Planungsausschuss, welche Pläne für das Gebäude gelten.`,
    taxTitle: (h) => `Kaufsteuer für eine Wohnung ${h.in}`,
    taxAtAvg: (c, p) => `Für das Viertel gibt es keinen amtlichen Durchschnitt. Beim amtlichen Durchschnittspreis für ${c} von April bis Juni 2026 (${p}) läge die Kaufsteuer bei:`,
    cityLink: (c) => `Alle Zahlen für ${c}`,
    faq: (h, c, intent, v) => intent === 'foreign' ? [
      [`Kann ein Käufer mit Wohnsitz im Ausland ${h.in} eine Wohnung kaufen?`, "Ja. Ausländische Staatsangehörige kaufen auf eigenen Namen. Ihr Anwalt prüft die Art des verkauften Rechts: privates Land, das im Grundbuch eingetragen ist, oder eine Pacht von der Israelischen Landbehörde, bei der die Übertragung an einen ausländischen Staatsangehörigen die Zustimmung der Behörde erfordern kann."],
      [`Gibt es ${h.in} einen amtlichen Durchschnittspreis?`, `Nein. Das Zentralamt für Statistik veröffentlicht Durchschnitte für Städte und Bezirke, nicht für Viertel. Der Durchschnitt für ${c} lag von April bis Juni 2026 bei ${v.avg}. Sehen Sie sich für das Viertel die registrierten Transaktionen in derselben Straße an.`],
      [`Wie viel Kaufsteuer zahlt ein Käufer mit Wohnsitz im Ausland ${h.in}?`, `8 % bis ${v.t3} und 10 % darüber, unabhängig von der Lage der Wohnung. Bei einer Wohnung zu ${v.p} sind das ${v.foreign}.`],
    ] : [
      [`Welche Kaufsteuer zahlt ein Oleh für seine Wohnung ${h.in}?`, `0 % bis ${v.t1} und 0,5 % bis ${v.t3}, unabhängig von der Lage der Wohnung. Bei einer Wohnung zu ${v.p} sind das ${v.oleh}, gegenüber ${v.foreign} für einen Käufer mit Wohnsitz im Ausland.`],
      [`Gibt es ${h.in} einen amtlichen Durchschnittspreis?`, `Nein. Das Zentralamt für Statistik veröffentlicht Durchschnitte für Städte und Bezirke, nicht für Viertel. Der Durchschnitt für ${c} lag von April bis Juni 2026 bei ${v.avg}. Sehen Sie sich für das Viertel die registrierten Transaktionen in derselben Straße an.`],
      ["Wie hoch ist das Mindesteigenkapital?", "25 % des Wertes für die einzige Wohnung eines israelischen Staatsbürgers, entsprechend der Obergrenze der Bank of Israel von 75 %. Ein Käufer, der noch im Ausland ansässig ist, braucht mindestens 50 %."],
    ],
  },
  names: {
    rehavia: { n: 'Rechavia' },
    'german-colony': { n: 'Deutsche Kolonie', the: 'die Deutsche Kolonie', in: 'in der Deutschen Kolonie' },
    'old-north': { n: 'Alter Norden', the: 'der Alte Norden', in: 'im Alten Norden' },
    'new-north': { n: 'Neuer Norden', the: 'der Neue Norden', in: 'im Neuen Norden' },
    'rothschild-boulevard': { n: 'Rothschild-Boulevard', the: 'der Rothschild-Boulevard', in: 'am Rothschild-Boulevard' },
    'carmel-center': { n: 'Karmel-Zentrum', the: 'das Karmel-Zentrum', in: 'im Karmel-Zentrum' },
    downtown: { n: 'Unterstadt', the: 'die Unterstadt', in: 'in der Unterstadt' },
    'french-carmel': { n: 'Französischer Karmel', the: 'der Französische Karmel', in: 'im Französischen Karmel' },
    hatikva: { n: 'Hatikva-Viertel', the: 'das Hatikva-Viertel', in: 'im Hatikva-Viertel' },
    'neve-shaanan': { n: 'Neve Shaanan' },
  },
  facts: {
    // ---------- Jerusalem ----------
    rehavia: [
      "Rechavia wurde vom Architekten Richard Kauffmann als Gartenvorstadt geplant, nach dem Vorbild der europäischen Gartenstadt und im Internationalen Stil.",
      "Das Viertel liegt südwestlich der Straßen Keren HaYesod und King George; im Norden grenzt es an Nachlaot und Shaarei Hesed, im Süden an Talbiya und Kiryat Shmuel.",
      "Nach den ursprünglichen Vorschriften war Handel nur in den beiden Hauptstraßen am Rand des Viertels erlaubt, und eine grüne Fußgängerallee durchquert es von Norden nach Süden.",
      "Die geplante Blaue Linie der Stadtbahn verläuft durch die Straßen Keren HaYesod und King George, die an Rechavia grenzen.",
    ],
    talbiya: [
      "Talbiya, offiziell Komemiyut, liegt im südlichen Zentrum Jerusalems, mit Rechavia und dem Unabhängigkeitspark im Norden, Katamon im Süden und dem Liberty-Bell-Park im Osten.",
      "Im Viertel liegen die Residenz des Staatspräsidenten und das Jerusalem-Theater.",
      "Talbiya gilt als gehobenes Viertel; zu den Bewohnern zählen Akademiker, Freiberufler und ausländische Diplomaten.",
    ],
    katamon: [
      "Katamon, offiziell Gonen, liegt im südlichen Zentrum Jerusalems. Im Norden liegen Talbiya, Rechavia und Kiryat Shmuel, im Osten die Griechische und die Deutsche Kolonie, im Süden und Südwesten die Katamonim.",
      "Die Hauptstraßen sind Rachel Imenu, die es mit Emek Refaim verbindet, und Kovshei Katamon, die es mit der HaPalmach-Straße verbindet. Im Westen begrenzt das Kloster San Simon das Viertel.",
      "Das historische Katamon unterscheidet sich geschichtlich und architektonisch von den Katamonim, der Reihe von Vierteln, die südwestlich davon gebaut wurden.",
      "Die geplante Blaue Linie der Stadtbahn verläuft durch die Emek-Refaim-Straße, in die die Rachel-Imenu-Straße mündet. Die Grüne Linie und die genehmigte Violette Linie sollen durch die benachbarten Katamonim führen.",
    ],
    baka: [
      "Baka, offiziell Geulim, ist ein Viertel im Süden Jerusalems, begrenzt von der Rivka-Straße im Süden, der Pierre-Koenig-Straße im Westen, der alten Bahntrasse im Nordwesten und der Hebron-Straße im Osten.",
      "Die umliegenden Viertel sind Talpiot, Mekor Haim, die Griechische Kolonie, die Deutsche Kolonie und Abu Tor.",
      "Das Straßenbild verbindet alte ein- bis zweigeschossige Steinhäuser mit Wohnblöcken des öffentlichen Wohnungsbaus, von denen viele in einem städtischen Sanierungsprojekt renoviert und erweitert wurden.",
    ],
    'german-colony': [
      "Die Deutsche Kolonie ist ein Viertel im westlichen Zentrum Jerusalems, neben dem Gelände des Ersten Bahnhofs, erbaut von Mitgliedern der deutschen Tempelgesellschaft, den Templern.",
      "Die ursprünglichen Häuser sind aus Jerusalemer Stein gebaut, die meisten ein- oder zweigeschossig mit Ziegeldächern; die beiden Hauptstraßen sind Emek Refaim und die Bethlehem-Straße.",
      "Es ist ein Ausgeh- und Einkaufsviertel mit Cafés, Restaurants, Bars und Boutiquen; dort finden Festivals und ein Bauernmarkt statt.",
    ],
    talpiot: [
      "Talpiot ist ein alteingesessenes Jerusalemer Viertel am südöstlichen Rand der Stadt, geplant von Richard Kauffmann im Geist der Gartenstadt.",
      "Daneben entstand das Gewerbegebiet Talpiot, eines der größten Arbeits- und Einkaufsgebiete der Hauptstadt.",
      "Die geplante Blaue Linie der Stadtbahn führt auf ihrem Weg vom Süden in den Norden der Stadt durch Talpiot.",
    ],
    arnona: [
      "Arnona ist ein Viertel im Süden Jerusalems, zwischen Talpiot im Norden, dem Gewerbegebiet Talpiot und der Hebron-Straße im Westen und dem Kibbuz Ramat Rachel im Süden.",
      "Es besteht überwiegend aus Villen, Reihenhäusern und niedrigen Gebäuden, und die Baulandreserven sind fast vollständig ausgeschöpft.",
      "Im Viertel liegt das Gelände der Botschaft der Vereinigten Staaten.",
    ],
    nachlaot: [
      "Nachlaot ist eine Gruppe alter Viertel im Herzen Jerusalems, die meisten zwischen der Agrippas- und der Bezalel-Straße, einige reichen bis zur Jaffa-Straße.",
      "Die meisten sind als Hofviertel angelegt, typisch für die gemeinschaftliche jüdische Bauweise der Zeit, als Jerusalem über die Mauern der Altstadt hinauswuchs.",
      "Nachlaot grenzt an den Mahane-Yehuda-Markt. Beide haben sich über die Jahre verändert, als neue Bewohner zuzogen und Häuser renoviert wurden.",
    ],
    'beit-hakerem': [
      "Beit HaKerem ist ein alteingesessenes Viertel im Westen Jerusalems, begrenzt von Kiryat Moshe im Norden, Yefe Nof und dem Herzl-Boulevard im Westen, Ramat Beit HaKerem im Süden sowie der Begin-Straße und Givat Ram im Osten.",
      "Es wurde vom Architekten Richard Kauffmann als Gartenvorstadt geplant.",
      "Die Rote Linie der Stadtbahn führt entlang des Herzl-Boulevards durch das Viertel; in der Nähe liegen der Campus Givat Ram der Hebräischen Universität und das Azrieli College of Engineering.",
      "Für das Viertel wurde ein Rahmenplan vorangetrieben, der zusätzliche Wohneinheiten durch Abriss und Neubau sowie durch TAMA 38 ermöglicht; Bewohner haben sich dagegen gewehrt.",
    ],
    'kiryat-hayovel': [
      "Kiryat HaYovel liegt im Südwesten Jerusalems auf einem Höhenrücken zwischen dem Herzlberg und Ein Kerem und gehört zu den höchstgelegenen Vierteln der Stadt.",
      "Es liegt nahe am Krankenhaus Hadassah Ein Kerem, an der Ausfahrt Richtung Tel Aviv und am Herzl-Boulevard, der ins Stadtzentrum führt.",
      "Die Stadt Jerusalem treibt im Viertel Pläne für Abriss und Neubau voran, darunter das Projekt Sderot HaYovel in der Tahon-Straße.",
      "Der Bezirksausschuss für Planung und Bau hat den Plan für die Violette Linie der Stadtbahn genehmigt, die durch Kiryat HaYovel führt.",
    ],
    malha: [
      "Malha, offiziell Manahat, liegt im Südwesten Jerusalems und gliedert sich in das alte und das neue Malha.",
      "Das Einkaufszentrum Jerusalem Mall, das Teddy-Stadion, die Pais Arena und der Technologiepark Malha liegen im Viertel oder daneben; der Biblische Zoo ist in der Nähe.",
      "Nach einem Bericht vom August 2026 stand der erste Abschnitt der Grünen Linie der Stadtbahn, von Malha bis in die Gegend des zentralen Busbahnhofs, kurz vor der Eröffnung für Fahrgäste. Die geplante Blaue Linie umfasst einen südlichen Ast nach Malha, und auch die genehmigte Violette Linie führt durch das Viertel.",
    ],
    'ein-kerem': [
      "Ein Kerem ist ein Viertel am südwestlichen Stadtrand Jerusalems, das seinen dörflichen Charakter bewahrt hat, weil es von der Stadt relativ abgesetzt und von Bergen, Tälern und Wäldern umgeben ist.",
      "Es ist ein heiliger Ort und ein Pilgerziel für Christen, mit aktiven Kirchen und Klöstern.",
      "Neben dem Viertel liegt das medizinische Zentrum Hadassah Ein Kerem; die Rote Linie der Stadtbahn wurde verlängert und reicht heute bis zum Krankenhaus.",
    ],
    'har-nof': [
      "Har Nof ist ein charedisch-religiöses Viertel im Westen Jerusalems. Der Jerusalem-Wald liegt unterhalb des Viertels und umgibt es.",
      "Es wurde vom Architekten Ze’ev Scheinberg geplant.",
      "Ein Stadtbahnast ins Viertel entlang der Kanfei-Nesharim-Straße wurde genehmigt und soll in den Plan der Grünen Linie aufgenommen werden.",
      "Die Israelische Landbehörde treibt einen neuen Wohnungsbauplan südlich des Viertels voran, teilweise auf Flächen des Jerusalem-Waldes.",
    ],
    // ---------- Tel Aviv ----------
    afeka: [
      "Afeka ist ein Viertel im Norden Tel Avivs, nördlich des Yarkon, und gehört zum Stadtbezirk 1.",
      "Es grenzt im Osten an Tel Baruch, im Süden an die Universität Tel Aviv, im Westen an Neve Avivim und im Nordwesten an Ramat Aviv Gimel.",
      "Es wurde als Wohnungsgenossenschaft von Kommandeuren der Hagana gegründet; im Lauf der Jahre wurden viele der ursprünglichen Häuser durch große Villen ersetzt.",
    ],
    ajami: [
      "Ajami ist ein Viertel von Jaffa in Tel Aviv-Jaffa, an der Mittelmeerküste südlich der Altstadt von Jaffa und nördlich des Viertels Jabaliya. Die Straßen verlaufen parallel zur Küste.",
      "Es hat traditionelle Steinhäuser, die um Innenhöfe gebaut sind. Zu den Wahrzeichen zählen die maronitische Kirche, die Ajami-Moschee und das Peres-Zentrum für Frieden am südlichen Ende.",
      "Die Rote Linie der Stadtbahn durchquert Jaffa von Norden nach Süden entlang des Jerusalem-Boulevards.",
    ],
    bavli: [
      "Bavli wird im Norden vom Yarkon-Park, im Osten von der Ayalon-Autobahn, im Westen von der Namir-Straße und im Süden vom Tzameret-Park begrenzt.",
      "Das Viertel begann als Projekt des öffentlichen Wohnungsbaus. Später entstand das Dekel-Zentrum, und die jüngere Bautätigkeit konzentrierte sich auf hochwertige Wohntürme mit Blick auf den Ayalon.",
      "Das Viertel gilt überwiegend als Gegend der oberen Mittelschicht; dort leben viele ältere Paare und Familien.",
    ],
    florentin: [
      "Florentin ist ein Viertel im Süden Tel Avivs, das an Neve Tzedek grenzt.",
      "Es verbindet Wohnen mit einem Gewerbe- und Werkstättengebiet und mit Großhandel für Kleidung und Möbel.",
      "Seine Wiederbelebung begann mit einem Stadterneuerungsprogramm der Stadt Tel Aviv; heute ist es für sein Nachtleben, seine Künstlerateliers und seine Street-Art bekannt.",
    ],
    hatikva: [
      "Das Hatikva-Viertel liegt im Südosten Tel Avivs und hat ein jemenitisch-jüdisches Erbe.",
      "Es ist nach dem Hof Har HaTikva benannt und wurde nach dem Unabhängigkeitskrieg dem Stadtgebiet von Tel Aviv angegliedert.",
      "Im Viertel liegt das Stadion des Hatikva-Viertels, und gegenüber dem Zentrum Beit Dani steht das Denkmal Engel des Friedens.",
    ],
    jaffa: [
      "Jaffa ist eine alte Hafenstadt an der Mittelmeerküste im südlichen Teil von Tel Aviv-Jaffa. Bei der Vereinigung der beiden Stadtverwaltungen erhielt die Stadt den Namen Tel Aviv-Jaffa, um den historischen Namen zu bewahren.",
      "Verwaltungsmäßig ist Jaffa der Stadtbezirk 7; es ist eine der gemischten Städte Israels, mit jüdischen, christlichen und muslimischen Einwohnern.",
      "Zu den Wahrzeichen zählen der historische Hafen, der Uhrturm, die Gegend des Flohmarkts und das Antikenmuseum von Jaffa.",
      "Die Rote Linie der Stadtbahn durchquert Jaffa von Norden nach Süden entlang des Jerusalem-Boulevards.",
    ],
    'kerem-hateimanim': [
      "Kerem HaTeimanim ist ein Viertel im Zentrum Tel Avivs, neben dem Carmel-Markt.",
      "Es wurde von jüdischen Einwanderern aus dem Jemen gegründet; viele der ursprünglichen Häuser waren eingeschossige Bauten aus einfachen Materialien.",
      "Das Viertel ist überwiegend religiös, und seine Lokale schließen am Schabbat. Es erlebt eine Gentrifizierung.",
    ],
    'kochav-hatzafon': [
      "Kochav HaTzafon ist ein Viertel im Nordwesten Tel Avivs, das nächstgelegene der Viertel jenseits des Yarkon, angrenzend an den Neuen Norden und den Hafen von Tel Aviv.",
      "Die Grenzen sind die Ibn-Gabirol-Straße im Westen, das Gelände des früheren Flughafens Sde Dov im Norden, die Namir-Straße im Osten und der Rokach-Boulevard im Süden.",
      "Im äußeren Teil stehen überwiegend hohe Gebäude, im inneren Teil niedrigere Gebäude und einige Einfamilienhäuser. Ein Quartierspark durchquert das Viertel von Osten nach Westen.",
    ],
    montefiore: [
      "Das Viertel Montefiore erstreckt sich vom Azrieli-Zentrum im Norden bis zur Yitzhak-Sadeh-Straße im Süden und von der Ayalon-Autobahn im Osten bis zur HaMasger-Straße und zur Begin-Straße im Westen.",
      "Es entstand auf dem Land des Montefiore-Obstgartens, der als erster von Juden gepflanzter und gepflegter Obstgarten im Land Israel gilt.",
      "Seine Planungsgeschichte verbindet Wohnen mit Werkstätten, Kleinindustrie und Büros; im Lauf der Jahre wurde dort Hochhausbau genehmigt.",
    ],
    'nahalat-yitzhak': [
      "Nahalat Yitzhak ist ein Viertel im Osten Tel Avivs, östlich der Ayalon-Autobahn, neben den Vierteln Bitzaron und Ramat Yisrael.",
      "Es begann als landwirtschaftliche Siedlung, in der auch Fabriken entstanden. Die Tel Aviv Towers wurden auf dem Gelände der früheren Yitzhar-Fabrik gebaut.",
      "In der Gegend war früher ein Werk der Militärindustrie in Betrieb. Laut dem Wikipedia-Artikel begannen in den 2020er-Jahren Arbeiten zur Sanierung des Bodens, um ihn für den Wohnungsbau vorzubereiten.",
    ],
    'neve-avivim': [
      "Neve Avivim liegt in Ramat Aviv im Norden Tel Avivs, begrenzt von der Haim-Levanon-Straße im Osten, dem Keren-Kayemet-Boulevard im Norden, der Namir-Straße im Westen und der Einstein-Straße im Süden.",
      "Es hat Hochhäuser mit großen Wohnungen und in der Mitte einen weiten öffentlichen Raum mit einem großen Quartierspark, Einkaufszentren, Schulen und einem Sportzentrum.",
      "Wie die anderen Viertel von Ramat Aviv hat es eine Bevölkerung mit hohem sozioökonomischem Profil.",
    ],
    'neve-tzedek': [
      "Neve Tzedek war das erste offizielle jüdische Viertel, das außerhalb der Mauern von Jaffa gebaut wurde, noch vor der Gründung Tel Avivs. Heute gehört es zur Stadt.",
      "Die Grenzen sind die Pines-Straße im Nordosten, der Einschnitt der historischen Bahnlinie Jaffa–Jerusalem im Südosten, in dem heute die Rote Linie der Stadtbahn und der HaMesila-Park verlaufen, der Manshiya-Parkplatz im Südwesten und die Shabazi-Straße im Nordwesten.",
      "Der Rothschild-Boulevard beginnt am östlichen Rand von Neve Tzedek.",
    ],
    'new-north': [
      "Der Neue Norden wurde nach der Staatsgründung entwickelt; der Name unterscheidet ihn vom Alten Norden.",
      "Er gehört zum Stadtbezirk 4, durch den unter anderem die Straßen Yehuda HaMaccabi, Pinkas, Jabotinsky, Weizmann und Shaul HaMelech führen und in dem der Plan für den Stadtbezirk 4 (TA/3729a) gilt.",
      "Am 4. Dezember 2024 standen auf der Tagesordnung des städtischen Planungsunterausschusses eine Änderung der Vorschriften für niedrige Bebauung im Stadtbezirk 4 (TA/3729b) und ein Plan, der zusätzliche Nutzungen im Stadtbezirk zulässt (TA/5269).",
    ],
    'old-north': [
      "Nach der Definition der Stadtverwaltung ist der Alte Norden (Stadtbezirk 3) das Gebiet zwischen dem Yarkon im Norden und der Arlozorov-Straße im Süden, begrenzt von der Ibn-Gabirol-Straße im Osten und dem Mittelmeer im Westen.",
      "Er wurde nördlich des historischen Stadtkerns entwickelt und hieß ursprünglich der Norden der Stadt. Der Name Alter Norden unterscheidet ihn vom Neuen Norden.",
      "Der Plan für den Stadtbezirk 3 (TA/3616a) wurde am 9. Januar 2018 genehmigt.",
    ],
    'ramat-aviv': [
      "Ramat Aviv ist der Name mehrerer Viertel im Norden Tel Avivs, nördlich des Yarkon.",
      "In der Gegend liegen die Universität Tel Aviv, das Eretz-Israel-Museum, das Yitzhak-Rabin-Zentrum, das Palmach-Museum und das Museum des jüdischen Volkes; der Yarkon-Park ist in der Nähe.",
      "Ramat Aviv Alef, die Grüne genannt, hat Einfamilienhäuser neben niedrigen Mehrfamilienhäusern zwischen Rasenflächen. Im Norden liegt das Einkaufszentrum Ramat Aviv, in der Mitte das Brodetsky-Zentrum.",
    ],
    'ramat-hahayal': [
      "Ramat HaHayal ist ein Viertel im Nordosten Tel Avivs, eines der Viertel jenseits des Yarkon.",
      "Daneben liegt das Gewerbegebiet Ever HaYarkon, ein Standort für Hightech-Unternehmen, der manchmal ebenfalls Ramat HaHayal genannt wird.",
      "Es wurde nach dem Unabhängigkeitskrieg von einer Wohnungsbaugesellschaft für entlassene Soldaten, Kriegswitwen und Kriegsversehrte gebaut.",
    ],
    'rothschild-boulevard': [
      "Der Rothschild-Boulevard ist eine der ersten Straßen Tel Avivs und verläuft vom östlichen Rand von Neve Tzedek bis zum Habima-Komplex. Er ist das Rückgrat des Viertels Lev Tel Aviv.",
      "Er gehört zum wichtigsten Geschäftsviertel der Stadt. Seit den 1990er-Jahren werden dort niedrige Gebäude durch Wohn- und Bürotürme ersetzt, während Bauten im eklektischen Stil und im Bauhaus-Stil erhalten werden.",
      "Die Weiße Stadt, der zentrale Teil Tel Avivs, der von den 1930er- bis in die 1950er-Jahre nach dem Stadtplan von Sir Patrick Geddes im Stil der Moderne gebaut wurde, steht auf der Welterbeliste der UNESCO.",
      "Nach Angaben von NTA wird die Violette Linie der Stadtbahn die Rote Linie an der Kreuzung der Allenby-Straße mit der Yehuda-HaLevi-Straße treffen. Die Allenby-Straße kreuzt den Rothschild-Boulevard.",
    ],
    shapira: [
      "Das Viertel Shapira liegt im Süden Tel Avivs, südlich des neuen zentralen Busbahnhofs und der Shlomo-Straße, begrenzt von der Heil-HaShiryon-Straße und der Ayalon-Autobahn im Osten, der Kibbutz-Galuyot-Straße im Süden und dem Har-Zion-Boulevard im Westen.",
      "Es war von niedrigen Häusern in dichter Bebauung geprägt. In den letzten Jahren entstehen als Neubauten moderne mehrgeschossige Wohnhäuser.",
      "NTA hat den Bewohnern die Arbeiten an der Grünen Linie auf dem Har-Zion-Boulevard vorgestellt, zwischen der Kibbutz-Galuyot-Straße und der Shlomo-Straße, entlang des westlichen Rands des Viertels.",
    ],
    tzahala: [
      "Tzahala ist ein Viertel im Nordosten von Tel Aviv-Jaffa, an der Grenze zu Ramat HaSharon. Es entstand auf Initiative der Regierung, um ranghohe Angehörige von Armee und Sicherheitsdiensten unterzubringen, und ist nach den israelischen Streitkräften (Zahal) benannt.",
      "Es wurde mit Einfamilienhäusern auf großen Grundstücken bebaut. Seit den 1990er-Jahren wurden viele der ursprünglichen Häuser abgerissen und durch Villen ersetzt.",
      "Bis heute verwaltet eine Genossenschaft das Viertel. Die Bewohner zahlen Mitgliedsbeiträge, und der größte Teil des Budgets stammt aus der Verpachtung der Läden im Einkaufszentrum, das ihr gehört.",
    ],
    'yad-eliyahu': [
      "Yad Eliyahu ist ein Viertel im Südosten Tel Avivs, begrenzt von der Yitzhak-Sadeh-Straße im Norden, der Moshe-Dayan-Straße im Osten, der HaHagana-Straße im Süden und der Ayalon-Autobahn im Westen. Die La-Guardia-Straße ist die Hauptstraße.",
      "Es ist nach Eliyahu Golomb benannt und wurde auf Initiative der Stadt Tel Aviv gebaut, um entlassene Soldaten der britischen Armee unterzubringen.",
      "Im Viertel liegen die Menora Mivtachim Arena, der Galit-Park und das Rehabilitationszentrum Reuth.",
      "Die von NTA veröffentlichte Liste der Stationen der Violetten Linie nennt HaHagana und Moshe Dayan, die Namen der Straßen, die das Viertel im Süden und Osten begrenzen.",
    ],
    // ---------- Haifa ----------
    ahuza: [
      "Ahuza (Ahuzat Shmuel) ist ein alteingesessenes Viertel und das Zentrum des Wohnbezirks Ramot HaCarmel, auf der Wasserscheide des Karmelrückens.",
      "Die Hauptverkehrsachse bilden der Moriah-Boulevard, die Horev-Straße und der Abba-Hushi-Boulevard (Straße 672). Der Horev-Platz im Herzen des alten Viertels verbindet diese Verkehrsadern.",
      "Den Masterplan für das Viertel erstellte der Architekt Richard Kauffmann, als Gartenstadtviertel auf dem Karmel.",
    ],
    'bat-galim': [
      "Bat Galim, auf der Halbinsel des Karmelkaps gebaut, ist das einzige Viertel Haifas, dessen Häuser bis ans Meeresufer reichen.",
      "Im Viertel liegen das Rambam-Krankenhaus und die medizinische Fakultät des Technion. Am Strand verläuft eine Promenade, an deren Ende die Station der Seilbahn von Haifa liegt, die nach Stella Maris hinaufführt.",
      "Die Küstenbahn führt durch das Viertel, in dem der Bahnhof Haifa Bat Galim liegt.",
      "Zwei Stadterneuerungsgebiete in den Hauptstraßen sind in der Datenbank des Ministeriums für Bau- und Wohnungswesen mit genehmigtem Plan in der Phase nach der Genehmigungserteilung verzeichnet: HaAliya HaShniya (175 bestehende Wohneinheiten, 715 geplante) und Heil HaYam (119 bestehende, 467 geplante).",
    ],
    'carmel-center': [
      "Das Karmel-Zentrum (Merkaz HaCarmel) ist ein Viertel und ein Kultur- und Freizeitgebiet auf dem Karmelrücken.",
      "Die Grenzen sind der Rotary-Platz im Osten, die Straßen Henrietta Szold und Yefe Nof sowie die Louis-Promenade im Norden und die Kreuzung der Wolfson- und der Moriah-Straße im Süden.",
      "Die obere Endstation der Karmelit, der unterirdischen Standseilbahn von Haifa, liegt im Karmel-Zentrum; die Karmelit verbindet es mit Hadar und der Unterstadt.",
      "Im Viertel sind Häuser von Karmelheim, der Erholungsvorstadt der Templer, erhalten geblieben und bewahrt worden.",
    ],
    carmelia: [
      "Carmelia wurde auf einem westlichen Ausläufer des Karmel gebaut, zwischen der Moriah-Achse im Osten, Kfar Samir und dem Friedhofsgelände im Westen, Kababir im Norden und dem Viertel Shambur im Süden.",
      "Die Hauptstraßen sind Tzafririm und Lea, und das Bett des Siah-Bachs tritt aus dem Viertel nach Westen aus.",
      "Die Häuser an den Hängen wurden in Terrassenbauweise errichtet, die dem Gelände folgt, ein Stil, der eng mit Carmelia verbunden wird.",
    ],
    denya: [
      "Denya, auch Hod HaCarmel genannt, ist ein Viertel im Süden Haifas, im bergigen Teil der Stadt.",
      "Die Gegend wurde in unterschiedlichen Stilen bebaut, mit einem Schwerpunkt auf Einfamilienhäusern auf überdurchschnittlich großen Grundstücken.",
      "Die Hauptachse ist der Abba-Hushi-Boulevard, die Straße, die Haifa früher mit Isfiya verband.",
      "Die meisten verbliebenen Freiflächen der Gegend wurden zum Teil des Karmel-Parks erklärt.",
    ],
    downtown: [
      "Die Unterstadt (HaIr HaTahtit) ist der Bezirk im unteren, zentralen Teil Haifas, der eine Reihe zentraler Viertel und einen großen Teil des Geschäftslebens der Stadt umfasst.",
      "Dort liegt der Regierungskomplex des Bezirks, und in den letzten Jahren kehrt das Leben in das Quartier zurück.",
      "Die untere Endstation der Karmelit, der unterirdischen Standseilbahn von Haifa, liegt am Pariser Platz in der Unterstadt.",
    ],
    'french-carmel': [
      "Der Französische Karmel liegt an den nordwestlichen Hängen des Karmel. Im Westen begrenzt ihn das Gelände von Stella Maris, im Osten liegen das Karmel-Zentrum und Hadar.",
      "Die Straße, die von Westen ins Viertel hinaufführt, ist die Tzarfat-Straße, die in die Hauptstraße Tchernichovsky mündet.",
      "Dort liegen das Karmelitenkloster Unserer Lieben Frau vom Berge Karmel, das Gordon Academic College of Education und Beit HaLochem Haifa.",
      "In der Datenbank des Ministeriums für Bau- und Wohnungswesen sind zwei Stadterneuerungsgebiete verzeichnet: Mordot HaCarmel HaTzarfati hat einen genehmigten Plan in der Phase nach der Genehmigungserteilung, und Derech Tzarfat 24 bis 42 befindet sich in der gesetzlichen Planungsphase (85 bestehende Wohneinheiten, 416 geplante).",
    ],
    hadar: [
      "Hadar HaCarmel ist eines der ältesten Viertel Haifas und ein zentraler Wohnbezirk, auf der Geländestufe zwischen der Unterstadt und dem Karmel.",
      "Hadar wurde als Gartenstadt nach dem Entwurf des Architekten Richard Kauffmann gegründet.",
      "Dort wurden das Technikum-Gebäude, der historische Sitz des Technion, und die Hebräische Reali-Schule gebaut.",
      "Die Karmelit, die unterirdische Standseilbahn von Haifa, führt durch Hadar und verbindet es mit der Unterstadt und dem Karmel-Zentrum.",
    ],
    'kiryat-eliezer': [
      "Kiryat Eliezer liegt im Bezirk West-Haifa und ist nach Israels erstem Finanzminister Eliezer Kaplan benannt.",
      "Der Rothschild-Boulevard durchquert das Viertel, und auf dem Gelände des abgerissenen Stadions Kiryat Eliezer wurden Wohnhochhäuser gebaut.",
      "Am westlichen Ende des Viertels liegt die Elija-Höhle, daneben das Museum für illegale Einwanderung und Marine.",
      "In der Datenbank des Ministeriums für Bau- und Wohnungswesen sind fünf Stadterneuerungsgebiete mit dem Namen Kiryat Eliezer verzeichnet: Gebiet 16 hat einen genehmigten Plan (96 bestehende Wohneinheiten, 430 geplante), die Gebiete 11, 12, 13 und 29 befinden sich in der gesetzlichen Planungsphase.",
    ],
    'neve-david': [
      "Neve David ist ein Wohnviertel im Westen Haifas, an der südlichen Einfahrt in die Stadt, an der Straße 4 und der Küstenstraße.",
      "Es grenzt im Norden an das Viertel Shaar HaAliya, im Osten an Ramat HaNasi und im Süden an die Friedhöfe von Haifa.",
      "Das Stadterneuerungsgebiet Yehoshafat – Neve David befindet sich laut der Datenbank des Ministeriums für Bau- und Wohnungswesen in der gesetzlichen Planungsphase (102 bestehende Wohneinheiten, 417 geplante).",
    ],
    'neve-shaanan': [
      "Neve Shaanan ist ein lokaler Verwaltungsbezirk im Südosten Haifas, der eine Gruppe von Vierteln auf dem östlichen Bergsattel umfasst.",
      "Die Bebauung ist vielfältig: eingeschossige Häuser nach dem Gartenstadtprinzip, zweigeschossige Gebäude mit Ziegeldächern, die roten Dächer genannt, dichte Wohnsiedlungen und Hochhäuser.",
      "Die Seilbahnlinie, die das Technion bedient, hat die Verkehrsbelastung am Ziv-Platz verringert.",
    ],
    'ramat-almogi': [
      "Ramat Almogi ist ein Viertel im Süden Haifas, im bergigen Teil der Stadt, und grenzt an Ramot Remez, Savyonei Denya, Ahuza und Ramat Golda.",
      "Es ist nach dem Bürgermeister Yosef Almogi benannt und verbindet Hochhäuser mit niedrigen Gebäuden.",
      "Es bietet einen Blick auf die Bucht von Haifa und hat ein kleines Einkaufszentrum in der Einstein-Straße.",
    ],
    'ramot-remez': [
      "Ramot Remez ist ein alteingesessenes Viertel im Gebiet von Neve Shaanan. Die ersten Häuser wurden niedrig gebaut, entlang der HaInternational-Straße und der Hankin-Straße, als zweigeschossige Gebäude mit roten Ziegeldächern.",
      "Es ist bei Studierenden beliebt, weil es zwischen dem Technion und der Universität Haifa liegt, und es ist auf allen Seiten von Wald umgeben.",
      "Zwischen Ramot Remez und Romema ist auf dem Givat Ofer ein neues Viertel geplant, Ramat Zemer.",
    ],
    romema: [
      "Romema gliedert sich in das alte Romema und das neue Romema, auch Ramat Ben-Gurion genannt. Dazwischen verläuft die Pica-Straße, die das Zentrum von Ahuza mit Neve Shaanan verbindet.",
      "Zum alten Romema, dem nördlichen Teil, gehören die Sporthalle Romema und die archäologische Stätte Rosh Maya.",
      "Im neuen Romema stehen viele Hochhäuser neben niedriger Bebauung in Givat Oranim.",
      "Zwischen Romema und Ramot Remez ist auf dem Givat Ofer ein neues Viertel geplant, Ramat Zemer.",
    ],
  },
});

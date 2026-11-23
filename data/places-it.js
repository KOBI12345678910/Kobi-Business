// Testi in italiano per le grandi città e i loro quartieri. I dati seguono data/places.js.
const su = (h) => /^il /.test(h.the) ? h.the.replace(/^il /, 'sul ') : /^la /.test(h.the) ? h.the.replace(/^la /, 'sulla ') : 'su ' + h.the;
module.exports = ({ ils, num }) => ({
  base: 'quartieri',
  inOf: (t) => 'a ' + t,
  src: {
    wiki: "Wikipedia, voci in ebraico e in inglese sul quartiere e sulla città, consultate il 5 novembre 2026",
    jlmRail: "Progetti della metropolitana leggera di Gerusalemme: Comune di Gerusalemme, team del Piano generale dei trasporti di Gerusalemme e Commissione distrettuale di pianificazione ed edilizia, secondo la stampa israeliana (dal 2023 al 2026)",
    nta: "NTA (Metropolitan Mass Transit System), presentazioni della linea verde e della linea viola (2021 e 2022)",
    comptroller: "Controllore dello Stato di Israele, rapporto sulla metropolitana leggera di Gush Dan, dicembre 2025",
    cbsRelease: "Ufficio centrale di statistica, comunicato 256/2026 del 14 agosto 2026",
    unesco: "UNESCO, Lista del patrimonio mondiale, Città Bianca di Tel Aviv: il Movimento Moderno",
    tlvPlans: "Comune di Tel Aviv-Yafo, piani dei settori 3 e 4 e ordine del giorno della sottocommissione di pianificazione del 4 dicembre 2024",
    jiis: "Istituto di Gerusalemme per la ricerca sulle politiche, «Gerusalemme: fatti e tendenze 2026»",
    cbsJlm: "Ufficio centrale di statistica, dati selezionati per il Giorno di Gerusalemme 2026, secondo Maariv del 13 maggio 2026",
    cbsYearbook: "Ufficio centrale di statistica, Annuario statistico di Israele 2025, tabella 2.17 (popolazione a fine 2024)",
    cbsSocio: "Ufficio centrale di statistica, indice socioeconomico delle autorità locali del 2021",
  },
  city: {
    pop: {
      jlm: `Popolazione: circa ${num(1063000)} abitanti, secondo la stima dell'Ufficio centrale di statistica pubblicata per il Giorno di Gerusalemme nel maggio 2026. Il dato comprende i cittadini stranieri.`,
      tlv: `Popolazione: circa ${num(494900)} abitanti a fine 2024, compresi i cittadini stranieri.`,
    },
    priceQ: (c, q) => `Prezzo medio di un appartamento venduto a ${c}: ${ils(q)} da aprile a giugno 2026 (dato provvisorio).`,
    rentQ: (q) => `Affitto mensile medio sul mercato libero: ${ils(q)} da aprile a giugno 2026.`,
    extra: {
      jerusalem: [
        `A fine 2025 a Gerusalemme c'erano ${num(251900)} abitazioni, e il 32% era in affitto, secondo l'Istituto di Gerusalemme per la ricerca sulle politiche.`,
        `Un appartamento da 3,5 a 4 vani venduto a Gerusalemme nel 2025 è costato in media ${ils(3376400)}, secondo l'Istituto di Gerusalemme per la ricerca sulle politiche, e l'affitto mensile medio per questa dimensione è stato di ${ils(6179.6)} da aprile a giugno 2026. In Israele il soggiorno conta come un vano.`,
      ],
      'tel-aviv': [
        "La linea rossa della metropolitana leggera è stata inaugurata nell'agosto 2023 e collega Bat Yam a Petah Tikva passando per Tel Aviv-Yafo. L'apertura della linea viola è prevista per il 2028 e quella della linea verde per il 2029, secondo un rapporto del Controllore dello Stato del dicembre 2025.",
        "L'Ufficio centrale di statistica ha comunicato che il prezzo medio da aprile a giugno 2026 è stato superiore dell'8,4% rispetto allo stesso trimestre dell'anno precedente.",
      ],
    },
    hoodsTitle: (c) => `Quartieri di ${c}`,
    hoodsLead: "Ogni pagina di quartiere aggiunge ai dati della città informazioni con fonte sulla zona.",
  },
  index: {
    nav: 'Quartieri',
    title: "Quartieri di Gerusalemme, Tel Aviv e Haifa per chi acquista dall'estero",
    desc: "Pagine per quartiere per residenti all'estero e olim: dati con fonte su ogni zona di Gerusalemme, Tel Aviv e Haifa, con le cifre ufficiali della città e l'imposta di acquisto.",
    h1: "Pagine dei quartieri per chi acquista dall'estero",
    lead: "I dati di ogni quartiere provengono dalle fonti citate nella sua pagina. Prezzi e affitti sono cifre ufficiali della città, perché per un quartiere non viene pubblicata una media ufficiale.",
  },
  hood: {
    title: {
      foreign: (h, c) => `Acquistare ${h.in} (${c}) da residente all'estero: quartiere e imposta (2026)`,
      oleh: (h, c) => `Acquistare casa ${h.in} (${c}) dopo l'aliyà: quartiere e imposta (2026)`,
    },
    desc: {
      foreign: (h, c) => `${h.n} (${c}): dati con fonte sul quartiere, cifre ufficiali della città, l'imposta di acquisto per chi risiede all'estero e l'acquisto a distanza.`,
      oleh: (h, c) => `${h.n} (${c}): dati con fonte sul quartiere, cifre ufficiali della città, l'imposta di acquisto ridotta per un olè e i limiti di mutuo applicabili.`,
    },
    h1: {
      foreign: (h, c) => `Acquistare ${h.in} (${c}) da residente all'estero`,
      oleh: (h, c) => `Acquistare casa ${h.in} (${c}) dopo l'aliyà`,
    },
    intro: {
      foreign: (h, c) => `Ciò che è documentato ${su(h)}, le cifre ufficiali di ${c}, l'imposta di acquisto che pagherebbe chi risiede all'estero e come funziona l'acquisto quando vive all'estero.`,
      oleh: (h, c) => `Ciò che è documentato ${su(h)}, le cifre ufficiali di ${c}, l'imposta di acquisto ridotta per un olè e quanto finanzia una banca per l'unica abitazione.`,
    },
    aboutTitle: (h) => `${h.n} in sintesi`,
    cityTitle: (c) => `${c} in cifre ufficiali`,
    cityNote: (h, c) => `L'Ufficio centrale di statistica non pubblica prezzi medi per quartiere. Le cifre seguenti riguardano ${c} nel suo insieme: sono un punto di partenza e non un prezzo per ${h.the}.`,
    advice: (h) => `Prima di fare un'offerta ${h.in}, la confronti con le transazioni effettivamente registrate nelle vie vicine nella banca dati immobiliare del governo (nadlan.gov.il), e verifichi presso la commissione locale di pianificazione quali piani si applicano all'edificio.`,
    taxTitle: (h) => `L'imposta di acquisto su un appartamento ${h.in}`,
    taxAtAvg: (c, p) => `Non esiste una media ufficiale per il quartiere. Al prezzo medio ufficiale di ${c} da aprile a giugno 2026 (${p}), l'imposta di acquisto sarebbe:`,
    cityLink: (c) => `Tutte le cifre di ${c}`,
    faq: (h, c, intent, v) => intent === 'foreign' ? [
      [`Chi risiede all'estero può acquistare un appartamento ${h.in}?`, "Sì. I cittadini stranieri acquistano a proprio nome. Il suo avvocato verifica il tipo di diritto venduto: terreno privato iscritto al registro immobiliare, oppure una concessione dell'Autorità israeliana dei terreni, in cui il trasferimento a uno straniero può richiedere l'approvazione dell'Autorità."],
      [`Esiste un prezzo medio ufficiale per ${h.the}?`, `No. L'Ufficio centrale di statistica pubblica medie per città e distretti, non per quartieri. La media di ${c} da aprile a giugno 2026 è stata di ${v.avg}. Per ${h.the}, consulti le transazioni registrate nella stessa via.`],
      [`Quanta imposta di acquisto paga chi risiede all'estero ${h.in}?`, `L'8% fino a ${v.t3} e il 10% oltre, ovunque si trovi l'appartamento. Per un appartamento da ${v.p} sono ${v.foreign}.`],
    ] : [
      [`Quale imposta di acquisto paga un olè per la casa ${h.in}?`, `Lo 0% fino a ${v.t1} e lo 0,5% fino a ${v.t3}, ovunque si trovi la casa. Per una casa da ${v.p} sono ${v.oleh}, contro ${v.foreign} per chi risiede all'estero.`],
      [`Esiste un prezzo medio ufficiale per ${h.the}?`, `No. L'Ufficio centrale di statistica pubblica medie per città e distretti, non per quartieri. La media di ${c} da aprile a giugno 2026 è stata di ${v.avg}. Per ${h.the}, consulti le transazioni registrate nella stessa via.`],
      ["Qual è l'anticipo minimo?", "Il 25% del valore per l'unica abitazione di un cittadino israeliano, secondo il tetto del 75% della Banca d'Israele. Chi è ancora residente all'estero ha bisogno di almeno il 50%."],
    ],
  },
  names: {
    'german-colony': { n: 'Colonia Tedesca', the: 'la Colonia Tedesca', in: 'nella Colonia Tedesca' },
    'old-north': { n: 'Vecchio Nord', the: 'il Vecchio Nord', in: 'nel Vecchio Nord' },
    'new-north': { n: 'Nuovo Nord', the: 'il Nuovo Nord', in: 'nel Nuovo Nord' },
    'rothschild-boulevard': { n: 'Viale Rothschild', the: 'il viale Rothschild', in: 'sul viale Rothschild' },
    'carmel-center': { n: 'Centro del Carmelo', the: 'il Centro del Carmelo', in: 'nel Centro del Carmelo' },
    downtown: { n: 'Città Bassa', the: 'la Città Bassa', in: 'nella Città Bassa' },
    'french-carmel': { n: 'Carmelo Francese', the: 'il Carmelo Francese', in: 'nel Carmelo Francese' },
    hatikva: { n: 'Quartiere Hatikva', the: 'il quartiere Hatikva', in: 'nel quartiere Hatikva' },
    jaffa: { n: 'Giaffa', the: 'Giaffa', in: 'a Giaffa' },
  },
  facts: {
    // ---------- Gerusalemme ----------
    rehavia: [
      "Rehavia fu progettato dall'architetto Richard Kauffmann come quartiere giardino, ispirato alla città giardino europea e costruito nello stile internazionale.",
      "Si estende a sud-ovest delle vie Keren HaYesod e King George; confina a nord con Nachlaot e Shaarei Hesed e a sud con Talbiya e Kiryat Shmuel.",
      "Secondo il regolamento originario, il commercio era consentito solo nelle due vie principali al margine del quartiere, e un viale pedonale alberato lo attraversa da nord a sud.",
      "Il tracciato previsto della linea blu della metropolitana leggera passa per le vie Keren HaYesod e King George, che costeggiano Rehavia.",
    ],
    talbiya: [
      "Talbiya, il cui nome ufficiale è Komemiyut, si trova nel centro-sud di Gerusalemme, con Rehavia e il parco dell'Indipendenza a nord, Katamon a sud e il parco della Campana della Libertà a est.",
      "Nel quartiere si trovano la residenza del Presidente e il Teatro di Gerusalemme.",
      "Talbiya è considerato un quartiere di alto livello; tra i residenti ci sono accademici, liberi professionisti e diplomatici stranieri.",
    ],
    katamon: [
      "Katamon, il cui nome ufficiale è Gonen, si trova nel centro-sud di Gerusalemme. Talbiya, Rehavia e Kiryat Shmuel sono a nord, la Colonia Greca e la Colonia Tedesca a est, e i Katamonim a sud e a sud-ovest.",
      "Le vie principali sono Rachel Imenu, che lo collega a Emek Refaim, e Kovshei Katamon, che lo collega a via HaPalmach. Il monastero di San Simeone lo delimita a ovest.",
      "Il Katamon storico si distingue, per storia e architettura, dai Katamonim, la serie di quartieri costruiti a sud-ovest.",
      "Il tracciato previsto della linea blu della metropolitana leggera passa per via Emek Refaim, a cui si unisce via Rachel Imenu. La linea verde e la linea viola, già approvata, dovrebbero passare per i vicini Katamonim.",
    ],
    baka: [
      "Baka, il cui nome ufficiale è Geulim, è un quartiere del sud di Gerusalemme delimitato da via Rivka a sud, via Pierre Koenig a ovest, la vecchia ferrovia a nord-ovest e la strada di Hebron a est.",
      "I quartieri circostanti sono Talpiot, Mekor Haim, la Colonia Greca, la Colonia Tedesca e Abu Tor.",
      "Il paesaggio unisce vecchie case in pietra di uno o due piani a blocchi di edilizia pubblica, molti dei quali sono stati rinnovati e ampliati in un progetto comunale di riqualificazione dei quartieri.",
    ],
    'german-colony': [
      "La Colonia Tedesca è un quartiere del centro-ovest di Gerusalemme, accanto al complesso della Prima Stazione, costruito da membri tedeschi della Società del Tempio, i templari.",
      "Le case originali sono in pietra di Gerusalemme, per lo più di uno o due piani con tetti di tegole; le due vie principali sono Emek Refaim e la strada di Betlemme.",
      "È una zona di svago e di commercio con caffè, ristoranti, bar e boutique, e ospita festival e un mercato contadino.",
    ],
    talpiot: [
      "Talpiot è un quartiere storico di Gerusalemme, al limite sud-est della città, progettato da Richard Kauffmann nello spirito della città giardino.",
      "Accanto è cresciuta la zona industriale di Talpiot, una delle maggiori aree di lavoro e di commercio della capitale.",
      "Il tracciato previsto della linea blu della metropolitana leggera attraversa Talpiot nel suo percorso tra il sud e il nord della città.",
    ],
    arnona: [
      "Arnona è un quartiere del sud di Gerusalemme, tra Talpiot a nord, la zona industriale di Talpiot e la strada di Hebron a ovest, e il kibbutz Ramat Rachel a sud.",
      "È composto soprattutto da ville, case a schiera ed edifici bassi, e quasi tutte le sue riserve di terreno sono già utilizzate.",
      "Nel quartiere si trova il complesso dell'Ambasciata degli Stati Uniti.",
    ],
    nachlaot: [
      "Nachlaot è un insieme di quartieri antichi nel cuore di Gerusalemme, per lo più tra le vie Agripas e Bezalel, e alcuni arrivano fino a via Jaffa.",
      "La maggior parte è costruita come quartieri a corte, tipici dell'edilizia comunitaria ebraica dell'epoca in cui Gerusalemme si estese fuori dalle mura della Città Vecchia.",
      "Nachlaot confina con il mercato Mahane Yehuda. Entrambi sono cambiati negli anni, con l'arrivo di nuovi residenti e la ristrutturazione delle case.",
    ],
    'beit-hakerem': [
      "Beit HaKerem è un quartiere storico dell'ovest di Gerusalemme; confina con Kiryat Moshe a nord, Yefe Nof e il viale Herzl a ovest, Ramat Beit HaKerem a sud e la strada Begin e Givat Ram a est.",
      "Fu progettato come quartiere giardino dall'architetto Richard Kauffmann.",
      "La linea rossa della metropolitana leggera lo percorre lungo il viale Herzl, e nelle vicinanze si trovano il campus di Givat Ram dell'Università Ebraica e l'Azrieli College of Engineering.",
      "Per il quartiere è stato promosso un piano generale che consente di aggiungere abitazioni tramite demolizione e ricostruzione e tramite TAMA 38, a cui alcuni residenti si sono opposti.",
    ],
    'kiryat-hayovel': [
      "Kiryat HaYovel si trova nel sud-ovest di Gerusalemme, su un crinale tra il monte Herzl ed Ein Kerem, ed è uno dei quartieri più alti della città.",
      "È vicino all'ospedale Hadassah Ein Kerem, all'uscita verso Tel Aviv e al viale Herzl, che porta al centro della città.",
      "Il Comune di Gerusalemme promuove nel quartiere piani di demolizione e ricostruzione, tra cui il progetto Sderot HaYovel, in via Tahon.",
      "La Commissione distrettuale di pianificazione ed edilizia ha approvato il piano della linea viola della metropolitana leggera, che passa per Kiryat HaYovel.",
    ],
    malha: [
      "Malha, il cui nome ufficiale è Manahat, si trova nel sud-ovest di Gerusalemme ed è divisa in Malha Vecchia e Malha Nuova.",
      "Il centro commerciale di Gerusalemme, lo stadio Teddy, la Pais Arena e il parco tecnologico di Malha sono nel quartiere o accanto, e lo Zoo Biblico è nelle vicinanze.",
      "Secondo una notizia dell'agosto 2026, il primo tratto della linea verde della metropolitana leggera, da Malha alla zona della stazione centrale degli autobus, stava per aprire ai passeggeri. La linea blu prevista comprende una diramazione sud verso Malha, e anche la linea viola approvata passa per il quartiere.",
    ],
    'ein-kerem': [
      "Ein Kerem è un quartiere alla periferia sud-ovest di Gerusalemme che ha conservato un carattere di villaggio, perché relativamente isolato dalla città e circondato da monti, valli e boschi.",
      "È un luogo santo e di pellegrinaggio per i cristiani, con chiese e monasteri attivi.",
      "Il Centro medico Hadassah Ein Kerem si trova accanto al quartiere, e la linea rossa della metropolitana leggera è stata prolungata e ora arriva fino all'ospedale.",
    ],
    'har-nof': [
      "Har Nof è un quartiere haredi e religioso dell'ovest di Gerusalemme. Il bosco di Gerusalemme si estende ai suoi piedi e lo circonda.",
      "Fu progettato dall'architetto Zeev Scheinberg.",
      "È stata approvata una diramazione della metropolitana leggera verso il quartiere lungo via Kanfei Nesharim, che sarà integrata nel piano della linea verde.",
      "L'Autorità israeliana dei terreni promuove un nuovo piano residenziale a sud del quartiere, in parte su terreni del bosco di Gerusalemme.",
    ],
    // ---------- Tel Aviv ----------
    afeka: [
      "Afeka è un quartiere del nord di Tel Aviv, a nord del fiume Yarkon, e fa parte del settore 1 della città.",
      "Confina con Tel Baruch a est, l'Università di Tel Aviv a sud, Neve Avivim a ovest e Ramat Aviv Gimel a nord-ovest.",
      "Fu fondato come cooperativa edilizia di comandanti dell'Haganah; con gli anni, molte delle case originali sono state sostituite da grandi ville.",
    ],
    ajami: [
      "Ajami è un quartiere di Giaffa, a Tel Aviv-Yafo, sul Mediterraneo, a sud della Vecchia Giaffa e a nord del quartiere di Jabaliya. Le sue vie corrono parallele alla costa.",
      "Ha case tradizionali in pietra costruite intorno a cortili. Tra i suoi punti di riferimento ci sono la chiesa maronita, la moschea di Ajami e il Centro Peres per la Pace, all'estremità sud.",
      "La linea rossa della metropolitana leggera attraversa Giaffa da nord a sud lungo il viale Gerusalemme.",
    ],
    bavli: [
      "Bavli è delimitato dal parco Yarkon a nord, dall'autostrada Ayalon a est, dalla strada Namir a ovest e dal parco Tzameret a sud.",
      "Nacque come progetto di edilizia pubblica. In seguito fu costruito il centro Dekel, e l'edilizia più recente si è concentrata su torri residenziali di lusso con vista sull'Ayalon.",
      "Il quartiere è considerato in gran parte di ceto medio-alto, e vi abitano molte coppie anziane e famiglie.",
    ],
    florentin: [
      "Florentin è un quartiere del sud di Tel Aviv che confina con Neve Tzedek.",
      "Unisce abitazioni a una zona di industria e laboratori e al commercio all'ingrosso di abbigliamento e mobili.",
      "La sua rinascita iniziò con un programma di rinnovamento urbano promosso dal Comune di Tel Aviv, e oggi è noto per la vita notturna, gli atelier di artisti e la street art.",
    ],
    hatikva: [
      "Il quartiere Hatikva si trova nel sud-est di Tel Aviv e ha un'eredità ebraica yemenita.",
      "Deve il nome alla fattoria Har HaTikva ed è stato incorporato nel territorio comunale di Tel Aviv dopo la Guerra d'indipendenza.",
      "Nel quartiere si trova lo stadio del quartiere Hatikva, e il monumento dell'Angelo della Pace sorge di fronte al centro Beit Dani.",
    ],
    jaffa: [
      "Giaffa è un'antica città portuale sulla costa mediterranea, nella parte sud di Tel Aviv-Yafo. Quando i due comuni furono uniti, la città prese il nome di Tel Aviv-Yafo per conservare il nome storico.",
      "Dal punto di vista amministrativo, Giaffa è il settore 7 del comune ed è una delle città miste di Israele, con residenti ebrei, cristiani e musulmani.",
      "Tra i suoi punti di riferimento ci sono il porto storico, la torre dell'orologio, la zona del mercato delle pulci e il Museo delle Antichità di Giaffa.",
      "La linea rossa della metropolitana leggera attraversa Giaffa da nord a sud lungo il viale Gerusalemme.",
    ],
    'kerem-hateimanim': [
      "Kerem HaTeimanim è un quartiere del centro di Tel Aviv, accanto al mercato Carmel.",
      "Fu fondato da immigrati ebrei dello Yemen, e molte delle case originali erano costruzioni a un piano realizzate con materiali economici.",
      "Il quartiere è in gran parte religioso e i suoi locali chiudono di Shabbat. È in corso un processo di gentrificazione.",
    ],
    'kochav-hatzafon': [
      "Kochav HaTzafon è un quartiere del nord-ovest di Tel Aviv, il più vicino tra i quartieri oltre lo Yarkon, adiacente al Nuovo Nord e al porto di Tel Aviv.",
      "I suoi confini sono via Ibn Gabirol a ovest, la zona dell'ex aeroporto Sde Dov a nord, la strada Namir a est e il viale Rokach a sud.",
      "Nella parte esterna prevalgono gli edifici alti, in quella interna edifici più bassi e alcune case unifamiliari. Un parco di quartiere lo attraversa da est a ovest.",
    ],
    montefiore: [
      "Il quartiere Montefiore si estende dal Centro Azrieli a nord fino a via Yitzhak Sadeh a sud, e dall'autostrada Ayalon a est fino a via HaMasger e alla strada Begin a ovest.",
      "Sorse sui terreni del frutteto Montefiore, considerato il primo frutteto della Terra d'Israele piantato e curato da ebrei.",
      "La sua storia urbanistica mescola abitazioni a laboratori, piccola industria e uffici, e con gli anni vi è stata approvata l'edilizia in altezza.",
    ],
    'nahalat-yitzhak': [
      "Nahalat Yitzhak è un quartiere dell'est di Tel Aviv, a est dell'autostrada Ayalon, accanto ai quartieri di Bitzaron e Ramat Yisrael.",
      "Nacque come colonia agricola in cui si insediarono anche delle fabbriche. Le Torri di Tel Aviv sono state costruite sull'area dell'ex fabbrica Yitzhar.",
      "Nella zona ha operato uno stabilimento delle industrie militari. Secondo la voce di Wikipedia, negli anni 2020 sono iniziati i lavori di bonifica del terreno per prepararlo alle abitazioni.",
    ],
    'neve-avivim': [
      "Neve Avivim si trova a Ramat Aviv, nel nord di Tel Aviv, delimitato da via Haim Levanon a est, dal viale Keren Kayemet a nord, dalla strada Namir a ovest e da via Einstein a sud.",
      "Ha edifici alti con appartamenti grandi e, al centro, un ampio spazio pubblico con un grande parco di quartiere, centri commerciali, centri educativi e un centro sportivo.",
      "Come gli altri quartieri di Ramat Aviv, la sua popolazione ha un profilo socioeconomico alto.",
    ],
    'neve-tzedek': [
      "Neve Tzedek fu il primo quartiere ebraico ufficiale costruito fuori dalle mura di Giaffa, prima della fondazione di Tel Aviv. Oggi fa parte della città.",
      "I suoi confini sono via Pines a nord-est, la trincea della storica ferrovia Giaffa-Gerusalemme a sud-est, dove oggi passano la linea rossa della metropolitana leggera e il parco HaMesila, il parcheggio di Manshiya a sud-ovest e via Shabazi a nord-ovest.",
      "Il viale Rothschild inizia al confine est di Neve Tzedek.",
    ],
    'new-north': [
      "Il Nuovo Nord si è sviluppato dopo la nascita dello Stato, e il suo nome lo distingue dal Vecchio Nord.",
      "Appartiene al settore 4 della città, attraversato da vie come Yehuda HaMaccabi, Pinkas, Jabotinsky, Weizmann e Shaul HaMelech, dove si applica il piano del settore 4 (TA/3729a).",
      "Il 4 dicembre 2024 la sottocommissione comunale di pianificazione aveva all'ordine del giorno una modifica delle norme sull'edilizia bassa nel settore 4 (TA/3729b) e un piano che aggiunge usi consentiti nel settore (TA/5269).",
    ],
    'old-north': [
      "Secondo la definizione del Comune, il Vecchio Nord (settore 3) è la zona tra il fiume Yarkon a nord e via Arlozorov a sud, delimitata da via Ibn Gabirol a est e dal Mediterraneo a ovest.",
      "Si è sviluppato a nord del nucleo storico della città e in origine era chiamato il nord della città. Il nome Vecchio Nord lo distingue dal Nuovo Nord.",
      "Il piano del settore 3 (TA/3616a) è stato approvato il 9 gennaio 2018.",
    ],
    'ramat-aviv': [
      "Ramat Aviv è il nome di diversi quartieri del nord di Tel Aviv, a nord del fiume Yarkon.",
      "Nella zona si trovano l'Università di Tel Aviv, il Museo Eretz Israel, il Centro Yitzhak Rabin, il Museo del Palmach e il Museo del Popolo Ebraico, e il parco Yarkon è nelle vicinanze.",
      "Ramat Aviv Alef, detta la verde, unisce case unifamiliari a edifici bassi di appartamenti tra i prati. Il centro commerciale Ramat Aviv è nella parte nord e il centro Brodetsky in quella centrale.",
    ],
    'ramat-hahayal': [
      "Ramat HaHayal è un quartiere del nord-est di Tel Aviv, uno dei quartieri oltre lo Yarkon.",
      "Accanto si trova la zona industriale di Ever HaYarkon, un polo di aziende high-tech chiamato a volte anch'esso Ramat HaHayal.",
      "Fu costruito dopo la Guerra d'indipendenza da una società edilizia per soldati congedati, vedove di guerra e veterani con disabilità.",
    ],
    'rothschild-boulevard': [
      "Il viale Rothschild è una delle prime vie di Tel Aviv e va dal confine est di Neve Tzedek fino al complesso Habima. È la spina dorsale del quartiere Lev Tel Aviv.",
      "Fa parte del principale distretto degli affari della città. Dagli anni '90, edifici bassi del viale sono stati sostituiti da torri di abitazioni e uffici, insieme alla conservazione di edifici in stile eclettico e Bauhaus.",
      "La Città Bianca, la parte centrale di Tel Aviv costruita tra gli anni '30 e '50 secondo il piano urbanistico di Sir Patrick Geddes nello stile del Movimento Moderno, è iscritta nella Lista del patrimonio mondiale dell'UNESCO.",
      "Secondo NTA, la linea viola della metropolitana leggera incrocerà la linea rossa all'incrocio tra via Allenby e via Yehuda HaLevi. Via Allenby attraversa il viale Rothschild.",
    ],
    shapira: [
      "Il quartiere Shapira si trova nel sud di Tel Aviv, a sud della nuova stazione centrale degli autobus e della strada Shlomo, delimitato dalla strada Heil HaShiryon e dall'autostrada Ayalon a est, dalla strada Kibbutz Galuyot a sud e dal viale Har Zion a ovest.",
      "Era caratterizzato da case basse in un tessuto urbano denso. Negli ultimi anni, l'edilizia nuova è fatta di moderni condomini di più piani.",
      "NTA ha presentato ai residenti i lavori della linea verde sul viale Har Zion, tra la strada Kibbutz Galuyot e la strada Shlomo, lungo il confine ovest del quartiere.",
    ],
    tzahala: [
      "Tzahala è un quartiere del nord-est di Tel Aviv-Yafo, al confine con Ramat HaSharon. Nacque su iniziativa del governo per ospitare alti ufficiali dell'esercito e della sicurezza, e deve il nome alle Forze di difesa israeliane (Tzahal).",
      "Fu costruito come case unifamiliari su lotti grandi. Dagli anni '90 molte delle case originali sono state demolite e sostituite da ville.",
      "Un'associazione cooperativa gestisce ancora il quartiere. I residenti pagano quote associative, e la maggior parte del bilancio proviene dall'affitto dei negozi del centro commerciale di sua proprietà.",
    ],
    'yad-eliyahu': [
      "Yad Eliyahu è un quartiere del sud-est di Tel Aviv, delimitato da via Yitzhak Sadeh a nord, dalla strada Moshe Dayan a est, dalla strada HaHagana a sud e dall'autostrada Ayalon a ovest. Via La Guardia è la via principale.",
      "Deve il nome a Eliyahu Golomb e fu costruito su iniziativa del Comune di Tel Aviv per ospitare soldati congedati dall'esercito britannico.",
      "Nel quartiere si trovano la Menora Mivtachim Arena, il parco Galit e il centro medico di riabilitazione Reuth.",
      "L'elenco delle stazioni della linea viola pubblicato da NTA comprende HaHagana e Moshe Dayan, i nomi delle strade che delimitano il quartiere a sud e a est.",
    ],
    // ---------- Haifa ----------
    ahuza: [
      "Ahuza (Ahuzat Shmuel) è un quartiere storico e il centro del settore residenziale di Ramot HaCarmel, sullo spartiacque della cresta del Carmelo.",
      "L'asse principale del traffico è formato dal viale Moriah, da via Horev e dal viale Abba Hushi (strada 672). Piazza Horev, nel cuore del vecchio quartiere, unisce queste arterie.",
      "Il piano regolatore del quartiere fu preparato dall'architetto Richard Kauffmann, come quartiere in formato di città giardino sul Carmelo.",
    ],
    'bat-galim': [
      "Bat Galim, costruito sulla penisola di capo Carmelo, è l'unico quartiere di Haifa le cui case arrivano alla riva del mare.",
      "Vi si trovano l'ospedale Rambam e la Facoltà di Medicina del Technion. Una passeggiata percorre la spiaggia e, alla sua estremità, c'è la stazione della funivia di Haifa che sale a Stella Maris.",
      "La ferrovia costiera passa per il quartiere, che ha la stazione ferroviaria Haifa Bat Galim.",
      "Due aree di rinnovamento urbano nelle sue vie principali figurano nella banca dati del Ministero delle Costruzioni e dell'Edilizia abitativa con un piano approvato, nella fase successiva ai permessi: HaAliya HaShniya (175 abitazioni esistenti, 715 proposte) e Heil HaYam (119 esistenti, 467 proposte).",
    ],
    'carmel-center': [
      "Il Centro del Carmelo (Merkaz HaCarmel) è un quartiere e una zona di cultura e svago sulla cresta del Carmelo.",
      "I suoi confini sono piazza Rotary a est, le vie Henrietta Szold e Yefe Nof e la passeggiata Louis a nord, e l'incrocio tra via Wolfson e via Moriah a sud.",
      "Il capolinea superiore del Carmelit, la funicolare sotterranea di Haifa, si trova nel Centro del Carmelo, e il Carmelit lo collega a Hadar e alla Città Bassa.",
      "Nel quartiere sono sopravvissute e sono state conservate case di Karmelheim, il sobborgo di villeggiatura dei templari.",
    ],
    carmelia: [
      "Carmelia è stata costruita su uno sperone occidentale del monte Carmelo, tra l'asse Moriah a est, Kfar Samir e l'area dei cimiteri a ovest, Kababir a nord e il quartiere di Shambur a sud.",
      "Le vie principali sono Tzafririm e Lea, e il letto del torrente Siah esce dal quartiere verso ovest.",
      "Le case sui pendii sono state costruite a terrazze che seguono la topografia, uno stile molto associato a Carmelia.",
    ],
    denya: [
      "Denya, noto anche come Hod HaCarmel, è un quartiere del sud di Haifa, nella parte montuosa della città.",
      "La zona è stata costruita in stili diversi, con prevalenza di case unifamiliari su lotti più grandi del solito.",
      "L'asse principale è il viale Abba Hushi, la strada che anticamente collegava Haifa a Isfiya.",
      "La maggior parte del terreno aperto rimasto nella zona è stata dichiarata parte del parco del Carmelo.",
    ],
    downtown: [
      "La Città Bassa (HaIr HaTahtit) è il settore della parte bassa e centrale di Haifa, che riunisce una serie di quartieri centrali e buona parte dell'attività economica della città.",
      "Vi si trova il complesso degli uffici governativi del distretto, e negli ultimi anni l'attività sta tornando nel settore.",
      "Il capolinea inferiore del Carmelit, la funicolare sotterranea di Haifa, si trova in piazza Parigi, nella Città Bassa.",
    ],
    'french-carmel': [
      "Il Carmelo Francese si trova sui pendii nord-occidentali del monte Carmelo. Il suo confine ovest è il complesso di Stella Maris, e a est ci sono il Centro del Carmelo e Hadar.",
      "La strada che sale al quartiere da ovest è la strada Tzarfat, che si collega alla via principale, Tchernichovsky.",
      "Vi si trovano il monastero carmelitano di Nostra Signora del Monte Carmelo, il Gordon Academic College of Education e Beit HaLochem Haifa.",
      "Nella banca dati del Ministero delle Costruzioni e dell'Edilizia abitativa figurano due aree di rinnovamento urbano: Mordot HaCarmel HaTzarfati ha un piano approvato, nella fase successiva ai permessi, e Derech Tzarfat dal 24 al 42 è in pianificazione urbanistica (85 abitazioni esistenti, 416 proposte).",
    ],
    hadar: [
      "Hadar HaCarmel è uno dei quartieri più antichi di Haifa e un settore residenziale centrale, sulla terrazza tra la Città Bassa e il Carmelo.",
      "Hadar fu fondato come città giardino secondo il progetto dell'architetto Richard Kauffmann.",
      "Vi furono costruiti l'edificio del Technikum, sede storica del Technion, e la Scuola Reali Ebraica.",
      "Il Carmelit, la funicolare sotterranea di Haifa, passa per Hadar e lo collega alla Città Bassa e al Centro del Carmelo.",
    ],
    'kiryat-eliezer': [
      "Kiryat Eliezer si trova nel settore ovest di Haifa e porta il nome di Eliezer Kaplan, il primo titolare del Ministero delle Finanze di Israele.",
      "Il viale Rothschild attraversa il quartiere, e sull'area del demolito stadio di Kiryat Eliezer sono stati costruiti edifici residenziali molto alti.",
      "La grotta di Elia si trova all'estremità ovest del quartiere, accanto al Museo dell'immigrazione clandestina e della Marina.",
      "Nella banca dati del Ministero delle Costruzioni e dell'Edilizia abitativa figurano cinque aree di rinnovamento urbano con il nome di Kiryat Eliezer: l'area 16 ha un piano approvato (96 abitazioni esistenti, 430 proposte), e le aree 11, 12, 13 e 29 sono in pianificazione urbanistica.",
    ],
    'neve-david': [
      "Neve David è un quartiere residenziale dell'ovest di Haifa, all'ingresso sud della città, sopra la strada 4 e la strada costiera.",
      "Confina con il quartiere di Shaar HaAliya a nord, Ramat HaNasi a est e i cimiteri di Haifa a sud.",
      "L'area di rinnovamento urbano Yehoshafat – Neve David è in pianificazione urbanistica (102 abitazioni esistenti, 417 proposte), secondo la banca dati del Ministero delle Costruzioni e dell'Edilizia abitativa.",
    ],
    'neve-shaanan': [
      "Neve Shaanan è un'amministrazione locale del sud-est di Haifa che comprende un insieme di quartieri sulla sella orientale della montagna.",
      "L'edilizia è varia: case a un piano secondo il principio della città giardino, edifici di due piani con tetti di tegole noti come i tetti rossi, complessi di edilizia densa ed edifici alti.",
      "La linea di funivia che serve il Technion ha alleggerito la congestione del traffico in piazza Ziv.",
    ],
    'ramat-almogi': [
      "Ramat Almogi è un quartiere del sud di Haifa, nella parte montuosa della città, che confina con Ramot Remez, Savyonei Denya, Ahuza e Ramat Golda.",
      "Porta il nome del sindaco Yosef Almogi e unisce edifici alti e bassi.",
      "Ha vista sulla baia di Haifa e un piccolo centro commerciale in via Einstein.",
    ],
    'ramot-remez': [
      "Ramot Remez è un quartiere storico all'interno dell'area di Neve Shaanan. Le prime case furono costruite basse, lungo via HaInternational e la strada Hankin, come edifici di due piani con tetti di tegole rosse.",
      "È apprezzato dagli studenti perché si trova tra il Technion e l'Università di Haifa, ed è circondato dal bosco su ogni lato.",
      "Tra Ramot Remez e Romema, a Givat Ofer, è previsto un nuovo quartiere, Ramat Zemer.",
    ],
    romema: [
      "Romema si divide in Romema Vecchia e Romema Nuova, chiamata anche Ramat Ben-Gurion. Tra le due passa la strada Pica, che collega il centro di Ahuza a Neve Shaanan.",
      "Romema Vecchia, la parte nord, comprende il palazzetto dello sport di Romema e il sito archeologico di Rosh Maya.",
      "Romema Nuova ha molti edifici alti accanto all'edilizia bassa di Givat Oranim.",
      "Tra Romema e Ramot Remez, a Givat Ofer, è previsto un nuovo quartiere, Ramat Zemer.",
    ],
  },
});

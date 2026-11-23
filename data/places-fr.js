// Textes français pour les grandes villes et leurs quartiers. Les faits suivent data/places.js.
module.exports = ({ ils, num }) => ({
  base: 'quartiers',
  inOf: (t) => 'à ' + t,
  src: {
    wiki: "Wikipédia, articles en hébreu et en anglais sur le quartier et la ville, consultés le 5 novembre 2026",
    jlmRail: "Plans du tramway de Jérusalem : municipalité de Jérusalem, équipe du plan directeur des transports de Jérusalem et commission de district d'urbanisme et de construction, d'après la presse israélienne (2023 à 2026)",
    nta: "NTA (Metropolitan Mass Transit System), présentations de la ligne verte et de la ligne violette (2021 et 2022)",
    comptroller: "Contrôleur de l'État d'Israël, rapport sur le tramway du Gush Dan, décembre 2025",
    cbsRelease: "Bureau central des statistiques, communiqué 256/2026 du 14 août 2026",
    unesco: "UNESCO, Liste du patrimoine mondial, Ville blanche de Tel-Aviv : le Mouvement moderne",
    tlvPlans: "Municipalité de Tel-Aviv-Jaffa, plans des secteurs 3 et 4 et ordre du jour de la sous-commission d'urbanisme du 4 décembre 2024",
    jiis: "Institut de Jérusalem pour la recherche politique, « Jérusalem : faits et tendances 2026 »",
    cbsJlm: "Bureau central des statistiques, données choisies pour la Journée de Jérusalem 2026, d'après Maariv du 13 mai 2026",
    cbsYearbook: "Bureau central des statistiques, Annuaire statistique d'Israël 2025, tableau 2.17 (population fin 2024)",
    cbsSocio: "Bureau central des statistiques, indice socio-économique des collectivités locales pour 2021",
  },
  city: {
    pop: {
      jlm: `Population : environ ${num(1063000)} habitants, selon l'estimation du Bureau central des statistiques publiée pour la Journée de Jérusalem en mai 2026. Le chiffre inclut les ressortissants étrangers.`,
      tlv: `Population : environ ${num(494900)} habitants fin 2024, ressortissants étrangers compris.`,
    },
    priceQ: (c, q) => `Prix moyen d'un appartement vendu à ${c} : ${ils(q)} d'avril à juin 2026 (chiffre provisoire).`,
    rentQ: (q) => `Loyer mensuel moyen sur le marché libre : ${ils(q)} d'avril à juin 2026.`,
    extra: {
      jerusalem: [
        `Fin 2025, Jérusalem comptait ${num(251900)} logements, dont 32 % en location, selon l'Institut de Jérusalem pour la recherche politique.`,
        `Un appartement de 3,5 à 4 pièces vendu à Jérusalem en 2025 coûtait en moyenne ${ils(3376400)}, selon l'Institut de Jérusalem pour la recherche politique, et le loyer mensuel moyen pour cette taille était de ${ils(6179.6)} d'avril à juin 2026. En Israël, le séjour compte comme une pièce.`,
      ],
      'tel-aviv': [
        "La ligne rouge du tramway a été inaugurée en août 2023 et relie Bat Yam à Petah Tikva en passant par Tel-Aviv-Jaffa. La ligne violette doit entrer en service en 2028 et la ligne verte en 2029, selon un rapport du Contrôleur de l'État de décembre 2025.",
        "Le Bureau central des statistiques indique que le prix moyen d'avril à juin 2026 était supérieur de 8,4 % à celui du même trimestre un an plus tôt.",
      ],
    },
    hoodsTitle: (c) => `Les quartiers de ${c}`,
    hoodsLead: "Chaque page de quartier ajoute aux chiffres de la ville des faits sourcés sur le secteur.",
  },
  index: {
    nav: 'Quartiers',
    title: "Quartiers de Jérusalem, Tel-Aviv et Haïfa pour les acheteurs à l'étranger",
    desc: "Pages par quartier pour les résidents étrangers et les olim : faits sourcés sur chaque secteur de Jérusalem, Tel-Aviv et Haïfa, avec les chiffres officiels de la ville et la taxe d'acquisition.",
    h1: "Pages par quartier pour les acheteurs à l'étranger",
    lead: "Les faits sur chaque quartier proviennent des sources citées sur sa page. Les prix et les loyers sont les chiffres officiels de la ville, car aucune moyenne officielle n'est publiée pour un quartier.",
  },
  hood: {
    title: {
      foreign: (h, c) => `Acheter ${h.in} (${c}) en tant que résident étranger : quartier et taxe (2026)`,
      oleh: (h, c) => `Acheter son logement ${h.in} (${c}) après l'alyah : quartier et taxe (2026)`,
    },
    desc: {
      foreign: (h, c) => `${h.n} (${c}) : faits sourcés sur le quartier, chiffres officiels de la ville, taxe d'acquisition d'un résident étranger et achat à distance.`,
      oleh: (h, c) => `${h.n} (${c}) : faits sourcés sur le quartier, chiffres officiels de la ville, taxe d'acquisition réduite pour un olé et plafonds de crédit applicables.`,
    },
    h1: {
      foreign: (h, c) => `Acheter ${h.in} (${c}) en tant que résident étranger`,
      oleh: (h, c) => `Acheter son logement ${h.in} (${c}) après l'alyah`,
    },
    intro: {
      foreign: (h, c) => `Ce qui est documenté sur ${h.the}, les chiffres officiels de ${c}, la taxe d'acquisition que paierait un résident étranger et le déroulement de l'achat lorsque vous vivez à l'étranger.`,
      oleh: (h, c) => `Ce qui est documenté sur ${h.the}, les chiffres officiels de ${c}, la taxe d'acquisition réduite pour un olé et ce qu'une banque prête pour un logement unique.`,
    },
    aboutTitle: (h) => `${h.n} en bref`,
    cityTitle: (c) => `${c} en chiffres officiels`,
    cityNote: (h, c) => `Le Bureau central des statistiques ne publie pas de prix moyens par quartier. Les chiffres ci-dessous concernent l'ensemble de ${c} : ils servent de point de départ et ne sont pas un prix pour ${h.the}.`,
    advice: (h) => `Avant de faire une offre ${h.in}, comparez-la aux transactions réellement enregistrées dans les rues voisines dans la base immobilière du gouvernement (nadlan.gov.il), et vérifiez auprès de la commission locale d'urbanisme quels plans s'appliquent à l'immeuble.`,
    taxTitle: (h) => `La taxe d'acquisition sur un appartement ${h.in}`,
    taxAtAvg: (c, p) => `Il n'existe pas de moyenne officielle pour le quartier. Au prix moyen officiel à ${c} d'avril à juin 2026 (${p}), la taxe d'acquisition serait de :`,
    cityLink: (c) => `Tous les chiffres de ${c}`,
    faq: (h, c, intent, v) => intent === 'foreign' ? [
      [`Un résident étranger peut-il acheter un appartement ${h.in} ?`, "Oui. Les ressortissants étrangers achètent à leur nom. Votre avocat vérifie le type de droit vendu : un terrain privé inscrit au cadastre, ou un bail de l'Autorité foncière d'Israël, pour lequel la cession à un étranger peut exiger l'accord de l'Autorité."],
      [`Existe-t-il un prix moyen officiel pour ${h.the} ?`, `Non. Le Bureau central des statistiques publie des moyennes pour les villes et les districts, pas pour les quartiers. La moyenne à ${c} d'avril à juin 2026 était de ${v.avg}. Pour ${h.the}, consultez les transactions enregistrées dans la même rue.`],
      [`Combien un résident étranger paie-t-il de taxe d'acquisition ${h.in} ?`, `8 % jusqu'à ${v.t3} et 10 % au-delà, où que se trouve l'appartement. Pour un appartement à ${v.p}, cela représente ${v.foreign}.`],
    ] : [
      [`Quelle taxe d'acquisition un olé paie-t-il pour son logement ${h.in} ?`, `0 % jusqu'à ${v.t1} et 0,5 % jusqu'à ${v.t3}, où que se trouve le logement. Pour un logement à ${v.p}, cela représente ${v.oleh}, contre ${v.foreign} pour un résident étranger.`],
      [`Existe-t-il un prix moyen officiel pour ${h.the} ?`, `Non. Le Bureau central des statistiques publie des moyennes pour les villes et les districts, pas pour les quartiers. La moyenne à ${c} d'avril à juin 2026 était de ${v.avg}. Pour ${h.the}, consultez les transactions enregistrées dans la même rue.`],
      ["Quel est l'apport minimal ?", "25 % de la valeur pour un logement unique acheté par un citoyen israélien, selon le plafond de 75 % fixé par la Banque d'Israël. Un acheteur encore résident étranger doit apporter au moins 50 %."],
    ],
  },
  names: {
    'german-colony': { n: 'Colonie allemande', the: 'la Colonie allemande', in: 'dans la Colonie allemande' },
    'old-north': { n: 'Vieux Nord', the: 'le Vieux Nord', in: 'dans le Vieux Nord' },
    'new-north': { n: 'Nouveau Nord', the: 'le Nouveau Nord', in: 'dans le Nouveau Nord' },
    'rothschild-boulevard': { n: 'Boulevard Rothschild', the: 'le boulevard Rothschild', in: 'sur le boulevard Rothschild' },
    'carmel-center': { n: 'Centre du Carmel', the: 'le Centre du Carmel', in: 'au Centre du Carmel' },
    downtown: { n: 'Ville basse', the: 'la Ville basse', in: 'dans la Ville basse' },
    'french-carmel': { n: 'Carmel français', the: 'le Carmel français', in: 'au Carmel français' },
    hatikva: { n: 'Quartier Hatikva', the: 'le quartier Hatikva', in: 'dans le quartier Hatikva' },
    'neve-shaanan': { n: 'Neve Shaanan' },
  },
  facts: {
    // ---------- Jérusalem ----------
    rehavia: [
      "Rehavia a été conçu par l'architecte Richard Kauffmann comme un quartier-jardin, inspiré de la cité-jardin européenne et bâti dans le style international.",
      "Le quartier s'étend au sud-ouest des rues Keren HaYesod et King George ; il est bordé au nord par Nachlaot et Shaarei Hessed, et au sud par Talbiya et Kiryat Shmuel.",
      "Selon le règlement d'origine, le commerce n'était autorisé que dans les deux rues principales en bordure du quartier, et une allée piétonne arborée le traverse du nord au sud.",
      "Le tracé prévu de la ligne bleue du tramway passe par les rues Keren HaYesod et King George, qui bordent Rehavia.",
    ],
    talbiya: [
      "Talbiya, dont le nom officiel est Komemiyout, se trouve au centre-sud de Jérusalem, avec Rehavia et le parc de l'Indépendance au nord, Katamon au sud et le parc de la Cloche de la Liberté à l'est.",
      "La résidence du président et le Théâtre de Jérusalem se trouvent dans le quartier.",
      "Talbiya est considéré comme un quartier haut de gamme ; on y trouve notamment des universitaires, des membres des professions libérales et des diplomates étrangers.",
    ],
    katamon: [
      "Katamon, dont le nom officiel est Gonen, se trouve au centre-sud de Jérusalem. Talbiya, Rehavia et Kiryat Shmuel sont au nord, la Colonie grecque et la Colonie allemande à l'est, et les Katamonim au sud et au sud-ouest.",
      "Ses rues principales sont Rachel Imenou, qui le relie à Emek Refaïm, et Kovshei Katamon, qui le relie à la rue HaPalmach. Le monastère de San Simon le borde à l'ouest.",
      "Le Katamon historique se distingue, par son histoire et son architecture, des Katamonim, la série de quartiers construits au sud-ouest.",
      "Le tracé prévu de la ligne bleue du tramway passe par la rue Emek Refaïm, que rejoint la rue Rachel Imenou. La ligne verte et la ligne violette, déjà approuvée, doivent passer par les Katamonim voisins.",
    ],
    baka: [
      "Baka, dont le nom officiel est Geoulim, est un quartier du sud de Jérusalem délimité par la rue Rivka au sud, la rue Pierre Koenig à l'ouest, l'ancienne voie ferrée au nord-ouest et la route de Hébron à l'est.",
      "Les quartiers voisins sont Talpiot, Mekor Haïm, la Colonie grecque, la Colonie allemande et Abou Tor.",
      "Le paysage mêle d'anciennes maisons de pierre d'un ou deux niveaux et des immeubles de logements sociaux, dont beaucoup ont été rénovés et agrandis dans le cadre d'un programme municipal de réhabilitation des quartiers.",
    ],
    'german-colony': [
      "La Colonie allemande est un quartier du centre-ouest de Jérusalem, proche du site de la Première Gare, construit par des membres allemands de la Société du Temple, les Templers.",
      "Les maisons d'origine sont en pierre de Jérusalem, la plupart sur un ou deux niveaux avec des toits de tuiles ; les deux rues principales sont Emek Refaïm et la route de Bethléem.",
      "C'est un quartier de sortie et de commerce, avec cafés, restaurants, bars et boutiques ; il accueille des festivals et un marché de producteurs.",
    ],
    talpiot: [
      "Talpiot est un quartier ancien de Jérusalem, à la limite sud-est de la ville, conçu par Richard Kauffmann dans l'esprit de la cité-jardin.",
      "À côté du quartier s'est développée la zone industrielle de Talpiot, l'un des plus grands pôles d'emploi et de commerce de la capitale.",
      "Le tracé prévu de la ligne bleue du tramway traverse Talpiot, entre le sud et le nord de la ville.",
    ],
    arnona: [
      "Arnona est un quartier du sud de Jérusalem, entre Talpiot au nord, la zone industrielle de Talpiot et la route de Hébron à l'ouest, et le kibboutz Ramat Rachel au sud.",
      "Il se compose surtout de villas, de maisons en bande et d'immeubles bas, et ses réserves foncières sont presque entièrement utilisées.",
      "Le complexe de l'ambassade des États-Unis se trouve dans le quartier.",
    ],
    nachlaot: [
      "Nachlaot est un ensemble de quartiers anciens au cœur de Jérusalem, situés pour la plupart entre les rues Agrippas et Bezalel, quelques-uns atteignant la rue de Jaffa.",
      "La plupart sont bâtis sur le modèle des quartiers à cour, caractéristique de la construction communautaire juive de l'époque où Jérusalem s'est étendue hors des murailles de la Vieille Ville.",
      "Nachlaot jouxte le marché Mahané Yehouda. L'un et l'autre ont changé au fil des ans, avec l'arrivée de nouveaux habitants et la rénovation des maisons.",
    ],
    'beit-hakerem': [
      "Beit HaKerem est un quartier ancien de l'ouest de Jérusalem, bordé par Kiryat Moshe au nord, Yefe Nof et le boulevard Herzl à l'ouest, Ramat Beit HaKerem au sud, et la route Begin et Givat Ram à l'est.",
      "Il a été conçu comme un quartier-jardin par l'architecte Richard Kauffmann.",
      "La ligne rouge du tramway le traverse le long du boulevard Herzl ; le campus de Givat Ram de l'Université hébraïque et le collège d'ingénierie Azrieli sont à proximité.",
      "Un plan directeur permettant d'ajouter des logements par démolition-reconstruction et par TAMA 38 a été avancé pour le quartier, et des habitants s'y sont opposés.",
    ],
    'kiryat-hayovel': [
      "Kiryat HaYovel se trouve au sud-ouest de Jérusalem, sur une crête entre le mont Herzl et Ein Kerem ; c'est l'un des quartiers les plus élevés de la ville.",
      "Il est proche de l'hôpital Hadassah Ein Kerem, de la sortie vers Tel-Aviv et du boulevard Herzl, qui mène au centre-ville.",
      "La municipalité de Jérusalem y promeut des plans de démolition-reconstruction, dont le projet Sderot HaYovel, rue Tahon.",
      "La commission de district d'urbanisme et de construction a approuvé le plan de la ligne violette du tramway, qui traverse Kiryat HaYovel.",
    ],
    malha: [
      "Malha, dont le nom officiel est Manahat, se trouve au sud-ouest de Jérusalem et se divise en Vieux Malha et Nouveau Malha.",
      "Le centre commercial de Jérusalem, le stade Teddy, la Pais Arena et le parc technologique de Malha se trouvent dans le quartier ou à côté, et le Zoo biblique est proche.",
      "Selon un article d'août 2026, le premier tronçon de la ligne verte du tramway, de Malha au secteur de la gare routière centrale, était sur le point d'ouvrir aux voyageurs. La ligne bleue prévue comprend une branche sud vers Malha, et la ligne violette approuvée y passe également.",
    ],
    'ein-kerem': [
      "Ein Kerem est un quartier de la périphérie sud-ouest de Jérusalem qui a gardé un caractère villageois, car il est relativement à l'écart de la ville et entouré de collines, de vallées et de forêts.",
      "C'est un lieu saint et un site de pèlerinage pour les chrétiens, avec des églises et des monastères en activité.",
      "Le centre médical Hadassah Ein Kerem est voisin du quartier, et la ligne rouge du tramway, prolongée, arrive désormais jusqu'à l'hôpital.",
    ],
    'har-nof': [
      "Har Nof est un quartier haredi et religieux de l'ouest de Jérusalem. La forêt de Jérusalem s'étend à ses pieds et l'entoure.",
      "Il a été conçu par l'architecte Zeev Scheinberg.",
      "Une branche du tramway vers le quartier, le long de la rue Kanfei Nesharim, a été approuvée et doit être intégrée au plan de la ligne verte.",
      "L'Autorité foncière d'Israël promeut un nouveau plan de logements au sud du quartier, en partie sur des terrains de la forêt de Jérusalem.",
    ],
    // ---------- Tel-Aviv ----------
    afeka: [
      "Afeka est un quartier du nord de Tel-Aviv, au nord du fleuve Yarkon, qui fait partie du secteur 1 de la ville.",
      "Il est bordé par Tel Baruch à l'est, l'université de Tel-Aviv au sud, Neve Avivim à l'ouest et Ramat Aviv Guimel au nord-ouest.",
      "Il a été fondé comme coopérative de logement de commandants de la Haganah ; au fil des ans, beaucoup de maisons d'origine ont été remplacées par de grandes villas.",
    ],
    ajami: [
      "Ajami est un quartier de Jaffa, à Tel-Aviv-Jaffa, sur le rivage de la Méditerranée, au sud du Vieux Jaffa et au nord du quartier de Jabaliya. Ses rues sont parallèles à la côte.",
      "On y trouve des maisons de pierre traditionnelles bâties autour de cours. Parmi ses repères figurent l'église maronite, la mosquée d'Ajami et le Centre Peres pour la paix, à son extrémité sud.",
      "La ligne rouge du tramway traverse Jaffa du nord au sud, le long du boulevard de Jérusalem.",
    ],
    bavli: [
      "Bavli est délimité par le parc du Yarkon au nord, l'autoroute Ayalon à l'est, la route Namir à l'ouest et le parc Tzameret au sud.",
      "Le quartier est né d'un programme de logements publics. Le centre Dekel a été construit ensuite, et la construction plus récente s'est concentrée sur des tours résidentielles de standing donnant sur l'Ayalon.",
      "Le quartier est considéré comme relevant en majorité de la classe moyenne supérieure ; de nombreux couples âgés et familles y vivent.",
    ],
    florentin: [
      "Florentin est un quartier du sud de Tel-Aviv, limitrophe de Neve Tzedek.",
      "Il associe des logements à une zone d'industrie et d'ateliers et au commerce de gros de vêtements et de meubles.",
      "Son renouveau a commencé avec un programme de rénovation urbaine soutenu par la municipalité de Tel-Aviv ; il est aujourd'hui connu pour sa vie nocturne, ses ateliers d'artistes et son art urbain.",
    ],
    hatikva: [
      "Le quartier Hatikva se trouve au sud-est de Tel-Aviv et porte un héritage juif yéménite.",
      "Il tire son nom de la ferme Har HaTikva et a été rattaché au territoire municipal de Tel-Aviv après la guerre d'Indépendance.",
      "Le stade du quartier Hatikva s'y trouve, et le monument de l'Ange de la paix se dresse en face du centre Beit Dani.",
    ],
    jaffa: [
      "Jaffa est une ancienne ville portuaire de la côte méditerranéenne, dans la partie sud de Tel-Aviv-Jaffa. Lors de la réunion des deux municipalités, la ville a été nommée Tel-Aviv-Jaffa pour conserver le nom historique.",
      "Sur le plan administratif, Jaffa est le secteur 7 de la municipalité ; c'est l'une des villes mixtes d'Israël, avec des habitants juifs, chrétiens et musulmans.",
      "Parmi ses repères figurent le port historique, la tour de l'Horloge, le secteur du marché aux puces et le musée des Antiquités de Jaffa.",
      "La ligne rouge du tramway traverse Jaffa du nord au sud, le long du boulevard de Jérusalem.",
    ],
    'kerem-hateimanim': [
      "Kerem HaTeimanim est un quartier du centre de Tel-Aviv, voisin du marché du Carmel.",
      "Il a été fondé par des immigrants juifs du Yémen ; beaucoup de ses maisons d'origine étaient des constructions de plain-pied en matériaux bon marché.",
      "Le quartier est en grande partie religieux et ses restaurants ferment le shabbat. Il connaît une gentrification.",
    ],
    'kochav-hatzafon': [
      "Kochav HaTzafon est un quartier du nord-ouest de Tel-Aviv, le plus proche des quartiers situés au-delà du Yarkon, contigu au Nouveau Nord et au port de Tel-Aviv.",
      "Ses limites sont la rue Ibn Gabirol à l'ouest, le secteur de l'ancien aéroport Sde Dov au nord, la route Namir à l'est et le boulevard Rokach au sud.",
      "La partie extérieure compte surtout des immeubles hauts ; la partie intérieure, des immeubles plus bas et quelques maisons individuelles. Un parc de quartier le traverse d'est en ouest.",
    ],
    montefiore: [
      "Le quartier Montefiore s'étend du centre Azrieli au nord à la rue Yitzhak Sadeh au sud, et de l'autoroute Ayalon à l'est à la rue HaMasger et à la route Begin à l'ouest.",
      "Il a été bâti sur les terres du verger Montefiore, considéré comme le premier verger de la Terre d'Israël planté et entretenu par des Juifs.",
      "Son histoire urbanistique mêle logements, ateliers, petite industrie et bureaux ; au fil des ans, la construction en hauteur y a été approuvée.",
    ],
    'nahalat-yitzhak': [
      "Nahalat Yitzhak est un quartier de l'est de Tel-Aviv, à l'est de l'autoroute Ayalon, voisin des quartiers Bitzaron et Ramat Yisrael.",
      "Il a commencé comme une colonie agricole où des usines se sont aussi installées. Les Tours de Tel-Aviv ont été construites sur le site de l'ancienne usine Yitzhar.",
      "Une usine des industries militaires fonctionnait autrefois dans le secteur. Selon l'article de Wikipédia, des travaux de dépollution du terrain ont commencé dans les années 2020, en vue de le préparer à l'habitat.",
    ],
    'neve-avivim': [
      "Neve Avivim se trouve à Ramat Aviv, au nord de Tel-Aviv ; il est délimité par la rue Haïm Levanon à l'est, le boulevard Keren Kayemet au nord, la route Namir à l'ouest et la rue Einstein au sud.",
      "On y trouve des immeubles de grande hauteur aux grands appartements et, en son centre, un vaste espace public avec un grand jardin de quartier, des centres commerciaux, des établissements scolaires et un centre sportif.",
      "Comme les autres quartiers de Ramat Aviv, sa population présente un profil socio-économique élevé.",
    ],
    'neve-tzedek': [
      "Neve Tzedek a été le premier quartier juif officiel construit hors des murs de Jaffa, avant la fondation de Tel-Aviv. Il fait aujourd'hui partie de la ville.",
      "Ses limites sont la rue Pines au nord-est, la tranchée de l'ancienne voie ferrée Jaffa-Jérusalem au sud-est, où passent aujourd'hui la ligne rouge du tramway et le parc HaMesila, le parking de Manshiya au sud-ouest et la rue Shabazi au nord-ouest.",
      "Le boulevard Rothschild commence à la limite est de Neve Tzedek.",
    ],
    'new-north': [
      "Le Nouveau Nord a été aménagé après la création de l'État, et son nom le distingue du Vieux Nord.",
      "Il relève du secteur 4 de la ville, traversé notamment par les rues Yehuda HaMaccabi, Pinkas, Jabotinsky, Weizmann et Shaul HaMelech, où s'applique le plan du secteur 4 (TA/3729a).",
      "Le 4 décembre 2024, la sous-commission municipale d'urbanisme avait à son ordre du jour une modification des règles de construction basse dans le secteur 4 (TA/3729b) et un plan ajoutant des usages autorisés dans le secteur (TA/5269).",
    ],
    'old-north': [
      "Selon la définition de la municipalité, le Vieux Nord (secteur 3) est la zone comprise entre le fleuve Yarkon au nord et la rue Arlozorov au sud, délimitée par la rue Ibn Gabirol à l'est et la Méditerranée à l'ouest.",
      "Il a été aménagé au nord du noyau historique de la ville et s'appelait à l'origine le nord de la ville. Le nom de Vieux Nord le distingue du Nouveau Nord.",
      "Le plan du secteur 3 (TA/3616a) a été approuvé le 9 janvier 2018.",
    ],
    'ramat-aviv': [
      "Ramat Aviv est le nom de plusieurs quartiers du nord de Tel-Aviv, au nord du fleuve Yarkon.",
      "L'université de Tel-Aviv, le musée Eretz Israël, le centre Yitzhak Rabin, le musée du Palmach et le musée du Peuple juif se trouvent dans le secteur, et le parc du Yarkon est proche.",
      "Ramat Aviv Alef, dit la verte, associe des maisons individuelles à de petits immeubles collectifs entourés de pelouses. Le centre commercial de Ramat Aviv se trouve au nord et le centre Brodetsky au milieu.",
    ],
    'ramat-hahayal': [
      "Ramat HaHayal est un quartier du nord-est de Tel-Aviv, l'un des quartiers situés au-delà du Yarkon.",
      "À côté se trouve la zone industrielle d'Ever HaYarkon, un pôle d'entreprises de haute technologie parfois appelé lui aussi Ramat HaHayal.",
      "Il a été construit après la guerre d'Indépendance par une société de logement destinée aux soldats démobilisés, aux veuves de guerre et aux invalides de guerre.",
    ],
    'rothschild-boulevard': [
      "Le boulevard Rothschild est l'une des premières rues de Tel-Aviv ; il va de la limite est de Neve Tzedek au complexe Habima. C'est l'épine dorsale du quartier Lev Tel-Aviv.",
      "Il fait partie du principal quartier d'affaires de la ville. Depuis les années 1990, des immeubles bas y sont remplacés par des tours de logements et de bureaux, parallèlement à la conservation de bâtiments de style éclectique et Bauhaus.",
      "La Ville blanche, partie centrale de Tel-Aviv construite des années 1930 aux années 1950 d'après le plan d'urbanisme de Sir Patrick Geddes dans le style du Mouvement moderne, est inscrite sur la Liste du patrimoine mondial de l'UNESCO.",
      "Selon NTA, la ligne violette du tramway croisera la ligne rouge au carrefour des rues Allenby et Yehuda HaLevi. La rue Allenby traverse le boulevard Rothschild.",
    ],
    shapira: [
      "Le quartier Shapira se trouve au sud de Tel-Aviv, au sud de la nouvelle gare routière centrale et de la route Shlomo ; il est délimité par la route Heil HaShiryon et l'autoroute Ayalon à l'est, la route Kibboutz Galouyot au sud et le boulevard Har Zion à l'ouest.",
      "Il se caractérisait par des maisons basses dans un tissu urbain dense. Ces dernières années, les constructions neuves sont des immeubles d'appartements modernes de plusieurs étages.",
      "NTA a présenté aux habitants les travaux de la ligne verte sur le boulevard Har Zion, entre la route Kibboutz Galouyot et la route Shlomo, le long de la limite ouest du quartier.",
    ],
    tzahala: [
      "Tzahala est un quartier du nord-est de Tel-Aviv-Jaffa, à la limite de Ramat HaSharon. Il a été créé à l'initiative du gouvernement pour loger des cadres de l'armée et de la sécurité, et porte le nom de Tsahal.",
      "Il a été construit sous forme de maisons individuelles sur de grandes parcelles. Depuis les années 1990, beaucoup de maisons d'origine ont été démolies et remplacées par des villas.",
      "Une association coopérative gère encore le quartier. Les habitants versent une cotisation, et l'essentiel de son budget provient de la location des boutiques du centre commercial qu'elle possède.",
    ],
    'yad-eliyahu': [
      "Yad Eliyahu est un quartier du sud-est de Tel-Aviv, délimité par la rue Yitzhak Sadeh au nord, la route Moshe Dayan à l'est, la route HaHagana au sud et l'autoroute Ayalon à l'ouest. La rue La Guardia en est l'artère principale.",
      "Il porte le nom d'Eliyahu Golomb et a été construit à l'initiative de la municipalité de Tel-Aviv pour loger des soldats démobilisés de l'armée britannique.",
      "La Menora Mivtachim Arena, le parc Galit et le centre médical de rééducation Reuth se trouvent dans le quartier.",
      "La liste des stations de la ligne violette publiée par NTA comprend HaHagana et Moshe Dayan, du nom des routes qui bordent le quartier au sud et à l'est.",
    ],
    // ---------- Haïfa ----------
    ahuza: [
      "Ahuza (Ahuzat Shmuel) est un quartier ancien et le centre du secteur résidentiel de Ramot HaCarmel, sur la ligne de partage des eaux de la crête du Carmel.",
      "L'axe de circulation principal est formé du boulevard Moriah, de la rue Horev et du boulevard Abba Hushi (route 672). La place Horev, au cœur du vieux quartier, relie ces artères.",
      "Le plan directeur du quartier a été établi par l'architecte Richard Kauffmann, sur le modèle d'une cité-jardin sur le Carmel.",
    ],
    'bat-galim': [
      "Bat Galim, bâti sur la presqu'île du cap Carmel, est le seul quartier de Haïfa dont les maisons touchent le bord de mer.",
      "On y trouve l'hôpital Rambam et la faculté de médecine du Technion. Une promenade longe la plage et, à son extrémité, se trouve la station du téléphérique de Haïfa qui monte à Stella Maris.",
      "La voie ferrée du littoral traverse le quartier, qui dispose de la gare de Haïfa Bat Galim.",
      "Deux périmètres de rénovation urbaine dans ses rues principales figurent dans la base du ministère de la Construction et du Logement avec un plan approuvé, au stade postérieur aux permis : HaAliya HaShniya (175 logements existants, 715 proposés) et Heil HaYam (119 existants, 467 proposés).",
    ],
    'carmel-center': [
      "Le Centre du Carmel (Merkaz HaCarmel) est un quartier et un secteur de culture et de loisirs sur la crête du Carmel.",
      "Ses limites sont la place Rotary à l'est, les rues Henrietta Szold et Yefe Nof et la promenade Louis au nord, et le carrefour des rues Wolfson et Moriah au sud.",
      "Le terminus supérieur du Carmelit, le funiculaire souterrain de Haïfa, se trouve au Centre du Carmel ; le Carmelit le relie à Hadar et à la Ville basse.",
      "Des maisons de Karmelheim, le faubourg de villégiature des Templers, y ont subsisté et ont été préservées.",
    ],
    carmelia: [
      "Carmelia a été construit sur un éperon ouest du mont Carmel, entre l'axe Moriah à l'est, Kfar Samir et l'ensemble des cimetières à l'ouest, Kababir au nord et le quartier Shambur au sud.",
      "Ses rues principales sont Tzafririm et Lea, et le lit du ruisseau Siah sort du quartier vers l'ouest.",
      "Les maisons des pentes ont été construites en terrasses qui épousent le relief, un style très associé à Carmelia.",
    ],
    denya: [
      "Denya, aussi appelé Hod HaCarmel, est un quartier du sud de Haïfa, dans la partie montagneuse de la ville.",
      "Le secteur a été construit dans des styles variés, avec une prédominance de maisons individuelles sur des parcelles plus grandes que d'ordinaire.",
      "L'axe principal est le boulevard Abba Hushi, la route qui reliait autrefois Haïfa à Isfiya.",
      "La plupart des espaces ouverts restants du secteur ont été classés dans le parc du Carmel.",
    ],
    downtown: [
      "La Ville basse (HaIr HaTahtit) est le secteur de la partie basse et centrale de Haïfa, qui réunit une série de quartiers centraux et une grande part de l'activité économique de la ville.",
      "Le complexe administratif du district s'y trouve, et l'activité y revient ces dernières années.",
      "Le terminus inférieur du Carmelit, le funiculaire souterrain de Haïfa, se trouve place de Paris, dans la Ville basse.",
    ],
    'french-carmel': [
      "Le Carmel français se trouve sur les pentes nord-ouest du mont Carmel. Sa limite ouest est le site de Stella Maris, et le Centre du Carmel et Hadar sont à l'est.",
      "La route qui monte au quartier depuis l'ouest est la route Tzarfat, qui rejoint la rue principale, Tchernichovsky.",
      "Le monastère carmélite Notre-Dame du Mont-Carmel, le collège universitaire d'éducation Gordon et Beit HaLochem Haïfa s'y trouvent.",
      "Deux périmètres de rénovation urbaine figurent dans la base du ministère de la Construction et du Logement : Mordot HaCarmel HaTzarfati dispose d'un plan approuvé, au stade postérieur aux permis, et Derech Tzarfat 24 à 42 est en planification réglementaire (85 logements existants, 416 proposés).",
    ],
    hadar: [
      "Hadar HaCarmel est l'un des plus anciens quartiers de Haïfa et un secteur résidentiel central, sur le palier situé entre la Ville basse et le Carmel.",
      "Hadar a été fondé comme une cité-jardin d'après les plans de l'architecte Richard Kauffmann.",
      "Le bâtiment du Technikum, siège historique du Technion, et l'école Reali hébraïque y ont été construits.",
      "Le Carmelit, le funiculaire souterrain de Haïfa, traverse Hadar et le relie à la Ville basse et au Centre du Carmel.",
    ],
    'kiryat-eliezer': [
      "Kiryat Eliezer se trouve dans le secteur ouest de Haïfa et porte le nom du premier ministre des Finances d'Israël, Eliezer Kaplan.",
      "Le boulevard Rothschild traverse le quartier, et des immeubles résidentiels de grande hauteur ont été construits à l'emplacement du stade de Kiryat Eliezer, démoli.",
      "La grotte d'Élie se trouve à l'extrémité ouest du quartier, à côté du musée de l'Immigration clandestine et de la Marine.",
      "Cinq périmètres de rénovation urbaine portant le nom de Kiryat Eliezer figurent dans la base du ministère de la Construction et du Logement : le périmètre 16 dispose d'un plan approuvé (96 logements existants, 430 proposés), et les périmètres 11, 12, 13 et 29 sont en planification réglementaire.",
    ],
    'neve-david': [
      "Neve David est un quartier résidentiel de l'ouest de Haïfa, à l'entrée sud de la ville, sur la route 4 et la route du littoral.",
      "Il est bordé par le quartier Shaar HaAliya au nord, Ramat HaNasi à l'est et les cimetières de Haïfa au sud.",
      "Le périmètre de rénovation urbaine Yehoshafat – Neve David est en planification réglementaire (102 logements existants, 417 proposés), selon la base du ministère de la Construction et du Logement.",
    ],
    'neve-shaanan': [
      "Neve Shaanan est une administration locale du sud-est de Haïfa qui couvre un ensemble de quartiers sur le col est de la montagne.",
      "Le bâti est varié : maisons de plain-pied selon le principe de la cité-jardin, bâtiments de deux niveaux à toits de tuiles appelés les toits rouges, ensembles d'habitat dense et immeubles de grande hauteur.",
      "La ligne de téléphérique qui dessert le Technion a allégé la congestion sur la place Ziv.",
    ],
    'ramat-almogi': [
      "Ramat Almogi est un quartier du sud de Haïfa, dans la partie montagneuse de la ville, limitrophe de Ramot Remez, Savyonei Denya, Ahuza et Ramat Golda.",
      "Il porte le nom du maire Yosef Almogi et associe immeubles de grande hauteur et immeubles bas.",
      "Il domine la baie de Haïfa et dispose d'un petit centre commercial rue Einstein.",
    ],
    'ramot-remez': [
      "Ramot Remez est un quartier ancien du secteur de Neve Shaanan. Ses premières maisons, basses, ont été construites le long de la rue HaInternational et de la route Hankin : des bâtiments de deux niveaux à toits de tuiles rouges.",
      "Il est apprécié des étudiants parce qu'il se trouve entre le Technion et l'université de Haïfa, et il est entouré de bois de tous côtés.",
      "Un nouveau quartier, Ramat Zemer, est prévu entre Ramot Remez et Romema, sur Givat Ofer.",
    ],
    romema: [
      "Romema se divise en Vieux Romema et Nouveau Romema, aussi appelé Ramat Ben-Gourion. Entre les deux passe la route Pica, qui relie le centre d'Ahuza à Neve Shaanan.",
      "Le Vieux Romema, au nord, comprend la salle omnisports de Romema et le site archéologique de Rosh Maya.",
      "Le Nouveau Romema compte de nombreux immeubles de grande hauteur à côté de constructions basses à Givat Oranim.",
      "Un nouveau quartier, Ramat Zemer, est prévu entre Romema et Ramot Remez, sur Givat Ofer.",
    ],
  },
});

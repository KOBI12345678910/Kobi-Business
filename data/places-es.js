// Textos en español para las grandes ciudades y sus barrios. Los datos siguen data/places.js.
module.exports = ({ ils, num }) => ({
  base: 'barrios',
  inOf: (t) => 'en ' + t,
  src: {
    wiki: "Wikipedia, artículos en hebreo y en inglés sobre el barrio y la ciudad, consultados el 5 de noviembre de 2026",
    jlmRail: "Planes del tren ligero de Jerusalén: Ayuntamiento de Jerusalén, equipo del Plan Maestro de Transporte de Jerusalén y Comisión de Distrito de Planificación y Construcción, según la prensa israelí (2023 a 2026)",
    nta: "NTA (Metropolitan Mass Transit System), presentaciones de la línea verde y de la línea violeta (2021 y 2022)",
    comptroller: "Contralor del Estado de Israel, informe sobre el tren ligero de Gush Dan, diciembre de 2025",
    cbsRelease: "Oficina Central de Estadísticas, comunicado 256/2026 del 14 de agosto de 2026",
    unesco: "UNESCO, Lista del Patrimonio Mundial, Ciudad Blanca de Tel Aviv: el Movimiento Moderno",
    tlvPlans: "Ayuntamiento de Tel Aviv-Yafo, planes de los sectores 3 y 4 y orden del día de la subcomisión de planificación del 4 de diciembre de 2024",
    jiis: "Instituto de Jerusalén para la Investigación de Políticas, «Jerusalén: hechos y tendencias 2026»",
    cbsJlm: "Oficina Central de Estadísticas, datos seleccionados para el Día de Jerusalén 2026, según Maariv del 13 de mayo de 2026",
    cbsYearbook: "Oficina Central de Estadísticas, Anuario Estadístico de Israel 2025, tabla 2.17 (población a finales de 2024)",
    cbsSocio: "Oficina Central de Estadísticas, índice socioeconómico de las autoridades locales de 2021",
  },
  city: {
    pop: {
      jlm: `Población: unos ${num(1063000)} habitantes, según la estimación de la Oficina Central de Estadísticas publicada para el Día de Jerusalén en mayo de 2026. La cifra incluye a los ciudadanos extranjeros.`,
      tlv: `Población: unos ${num(494900)} habitantes a finales de 2024, incluidos los ciudadanos extranjeros.`,
    },
    priceQ: (c, q) => `Precio medio de un apartamento vendido en ${c}: ${ils(q)} de abril a junio de 2026 (cifra provisional).`,
    rentQ: (q) => `Alquiler mensual medio en el mercado libre: ${ils(q)} de abril a junio de 2026.`,
    extra: {
      jerusalem: [
        `A finales de 2025 había en Jerusalén ${num(251900)} viviendas, y el 32 % de ellas estaban en alquiler, según el Instituto de Jerusalén para la Investigación de Políticas.`,
        `Un apartamento de 3,5 a 4 habitaciones vendido en Jerusalén en 2025 costó de media ${ils(3376400)}, según el Instituto de Jerusalén para la Investigación de Políticas, y el alquiler mensual medio para ese tamaño fue de ${ils(6179.6)} de abril a junio de 2026. En Israel, el salón cuenta como una habitación.`,
      ],
      'tel-aviv': [
        "La línea roja del tren ligero se inauguró en agosto de 2023 y une Bat Yam con Petah Tikva pasando por Tel Aviv-Yafo. Está previsto que la línea violeta empiece a funcionar en 2028 y la línea verde en 2029, según un informe del Contralor del Estado de diciembre de 2025.",
        "La Oficina Central de Estadísticas informó de que el precio medio de abril a junio de 2026 fue un 8,4 % superior al del mismo trimestre del año anterior.",
      ],
    },
    hoodsTitle: (c) => `Barrios de ${c}`,
    hoodsLead: "Cada página de barrio añade a las cifras de la ciudad datos con fuente sobre la zona.",
  },
  index: {
    nav: 'Barrios',
    title: "Barrios de Jerusalén, Tel Aviv y Haifa para compradores del exterior",
    desc: "Páginas por barrio para residentes extranjeros y olim: datos con fuente sobre cada zona de Jerusalén, Tel Aviv y Haifa, con las cifras oficiales de la ciudad y el impuesto de compra.",
    h1: "Páginas de barrios para compradores del exterior",
    lead: "Los datos de cada barrio proceden de las fuentes citadas en su página. Los precios y los alquileres son cifras oficiales de la ciudad, porque no se publica una media oficial para un barrio.",
  },
  hood: {
    title: {
      foreign: (h, c) => `Comprar ${h.in} (${c}) como residente extranjero: barrio e impuesto (2026)`,
      oleh: (h, c) => `Comprar vivienda ${h.in} (${c}) tras la aliá: barrio e impuesto (2026)`,
    },
    desc: {
      foreign: (h, c) => `${h.n} (${c}): datos con fuente sobre el barrio, cifras oficiales de la ciudad, el impuesto de compra de un residente extranjero y la compra desde el exterior.`,
      oleh: (h, c) => `${h.n} (${c}): datos con fuente sobre el barrio, cifras oficiales de la ciudad, el impuesto de compra reducido para un olé y los límites de hipoteca aplicables.`,
    },
    h1: {
      foreign: (h, c) => `Comprar ${h.in} (${c}) como residente extranjero`,
      oleh: (h, c) => `Comprar vivienda ${h.in} (${c}) tras la aliá`,
    },
    intro: {
      foreign: (h, c) => `Lo que está documentado sobre ${h.the}, las cifras oficiales de ${c}, el impuesto de compra que pagaría un residente extranjero y cómo funciona la compra cuando usted vive en el exterior.`,
      oleh: (h, c) => `Lo que está documentado sobre ${h.the}, las cifras oficiales de ${c}, el impuesto de compra reducido para un olé y lo que presta un banco para una vivienda única.`,
    },
    aboutTitle: (h) => `${h.n} en resumen`,
    cityTitle: (c) => `${c} en cifras oficiales`,
    cityNote: (h, c) => `La Oficina Central de Estadísticas no publica precios medios por barrio. Las cifras siguientes corresponden a ${c} en su conjunto: sirven como punto de partida y no son un precio para ${h.the}.`,
    advice: (h) => `Antes de hacer una oferta ${h.in}, compárela con las operaciones realmente registradas en las calles cercanas en la base inmobiliaria del Gobierno (nadlan.gov.il), y compruebe en la comisión local de planificación qué planes se aplican al edificio.`,
    taxTitle: (h) => `El impuesto de compra de un apartamento ${h.in}`,
    taxAtAvg: (c, p) => `No existe una media oficial para el barrio. Al precio medio oficial en ${c} de abril a junio de 2026 (${p}), el impuesto de compra sería:`,
    cityLink: (c) => `Todas las cifras de ${c}`,
    faq: (h, c, intent, v) => intent === 'foreign' ? [
      [`¿Puede un residente extranjero comprar un apartamento ${h.in}?`, "Sí. Los ciudadanos extranjeros compran a su nombre. Su abogado comprueba el tipo de derecho que se vende: suelo privado inscrito en el Registro de Tierras, o un arrendamiento de la Autoridad de Tierras de Israel, en el que la cesión a un extranjero puede requerir la aprobación de la Autoridad."],
      [`¿Existe un precio medio oficial para ${h.the}?`, `No. La Oficina Central de Estadísticas publica medias para ciudades y distritos, no para barrios. La media en ${c} de abril a junio de 2026 fue de ${v.avg}. Para ${h.the}, consulte las operaciones registradas en la misma calle.`],
      [`¿Cuánto impuesto de compra paga un residente extranjero ${h.in}?`, `Un 8 % hasta ${v.t3} y un 10 % por encima, esté donde esté el apartamento. Por un apartamento de ${v.p} son ${v.foreign}.`],
    ] : [
      [`¿Qué impuesto de compra paga un olé por su vivienda ${h.in}?`, `Un 0 % hasta ${v.t1} y un 0,5 % hasta ${v.t3}, esté donde esté la vivienda. Por una vivienda de ${v.p} son ${v.oleh}, frente a ${v.foreign} para un residente extranjero.`],
      [`¿Existe un precio medio oficial para ${h.the}?`, `No. La Oficina Central de Estadísticas publica medias para ciudades y distritos, no para barrios. La media en ${c} de abril a junio de 2026 fue de ${v.avg}. Para ${h.the}, consulte las operaciones registradas en la misma calle.`],
      ["¿Cuál es la entrada mínima?", "El 25 % del valor para una vivienda única comprada por un ciudadano israelí, según el límite del 75 % del Banco de Israel. Un comprador que todavía es residente extranjero necesita al menos el 50 %."],
    ],
  },
  names: {
    'german-colony': { n: 'Colonia Alemana', the: 'la Colonia Alemana' },
    'old-north': { n: 'Viejo Norte', the: 'el Viejo Norte' },
    'new-north': { n: 'Nuevo Norte', the: 'el Nuevo Norte' },
    'rothschild-boulevard': { n: 'Bulevar Rothschild', the: 'el bulevar Rothschild' },
    'carmel-center': { n: 'Centro del Carmelo', the: 'el Centro del Carmelo' },
    downtown: { n: 'Ciudad Baja', the: 'la Ciudad Baja' },
    'french-carmel': { n: 'Carmelo Francés', the: 'el Carmelo Francés' },
    hatikva: { n: 'Barrio Hatikva', the: 'el barrio Hatikva' },
    'neve-shaanan': { n: 'Neve Shaanan' },
  },
  facts: {
    // ---------- Jerusalén ----------
    rehavia: [
      "Rehavia fue proyectado por el arquitecto Richard Kauffmann como un barrio jardín, inspirado en la ciudad jardín europea y construido en el estilo internacional.",
      "Se extiende al suroeste de las calles Keren HaYesod y King George; limita al norte con Nachlaot y Shaarei Hesed y al sur con Talbiya y Kiryat Shmuel.",
      "Según el reglamento original, el comercio solo se permitía en las dos calles principales del borde del barrio, y una avenida peatonal arbolada lo cruza de norte a sur.",
      "El trazado previsto de la línea azul del tren ligero pasa por las calles Keren HaYesod y King George, que bordean Rehavia.",
    ],
    talbiya: [
      "Talbiya, cuyo nombre oficial es Komemiyut, está en el centro-sur de Jerusalén, con Rehavia y el parque de la Independencia al norte, Katamon al sur y el parque de la Campana de la Libertad al este.",
      "La residencia del presidente y el Teatro de Jerusalén están en el barrio.",
      "Talbiya se considera un barrio de alto nivel; entre sus residentes hay académicos, profesionales liberales y diplomáticos extranjeros.",
    ],
    katamon: [
      "Katamon, cuyo nombre oficial es Gonen, está en el centro-sur de Jerusalén. Talbiya, Rehavia y Kiryat Shmuel quedan al norte, la Colonia Griega y la Colonia Alemana al este, y los Katamonim al sur y al suroeste.",
      "Sus calles principales son Rachel Imenu, que lo conecta con Emek Refaim, y Kovshei Katamon, que lo conecta con la calle HaPalmach. El monasterio de San Simón lo limita por el oeste.",
      "El Katamon histórico se distingue, por su historia y su arquitectura, de los Katamonim, la serie de barrios construidos al suroeste.",
      "El trazado previsto de la línea azul del tren ligero pasa por la calle Emek Refaim, a la que se une la calle Rachel Imenu. Está previsto que la línea verde y la línea violeta, ya aprobada, pasen por los Katamonim vecinos.",
    ],
    baka: [
      "Baka, cuyo nombre oficial es Geulim, es un barrio del sur de Jerusalén delimitado por la calle Rivka al sur, la calle Pierre Koenig al oeste, la antigua vía férrea al noroeste y la carretera de Hebrón al este.",
      "Los barrios que lo rodean son Talpiot, Mekor Haim, la Colonia Griega, la Colonia Alemana y Abu Tor.",
      "El paisaje combina antiguas casas de piedra de una o dos plantas con bloques de vivienda pública, muchos de los cuales se renovaron y ampliaron en un proyecto municipal de rehabilitación de barrios.",
    ],
    'german-colony': [
      "La Colonia Alemana es un barrio del centro-oeste de Jerusalén, junto al recinto de la Primera Estación, construido por miembros alemanes de la Sociedad del Templo, los templers.",
      "Las casas originales son de piedra de Jerusalén, la mayoría de una o dos plantas con tejados de tejas; las dos calles principales son Emek Refaim y la carretera de Belén.",
      "Es una zona de ocio y comercio con cafés, restaurantes, bares y boutiques, y acoge festivales y un mercado de agricultores.",
    ],
    talpiot: [
      "Talpiot es un barrio veterano de Jerusalén, en el límite sureste de la ciudad, proyectado por Richard Kauffmann con el espíritu de la ciudad jardín.",
      "Junto a él creció la zona industrial de Talpiot, una de las mayores áreas de empleo y comercio de la capital.",
      "El trazado previsto de la línea azul del tren ligero atraviesa Talpiot en su recorrido entre el sur y el norte de la ciudad.",
    ],
    arnona: [
      "Arnona es un barrio del sur de Jerusalén, entre Talpiot al norte, la zona industrial de Talpiot y la carretera de Hebrón al oeste, y el kibutz Ramat Rachel al sur.",
      "Está formado sobre todo por villas, casas adosadas y edificios bajos, y casi todas sus reservas de suelo están ya utilizadas.",
      "El complejo de la Embajada de Estados Unidos se encuentra en el barrio.",
    ],
    nachlaot: [
      "Nachlaot es un conjunto de barrios antiguos en el corazón de Jerusalén, la mayoría entre las calles Agripas y Bezalel, y unos pocos llegan hasta la calle Jaffa.",
      "La mayoría están construidos como barrios de patio, típicos de la construcción comunitaria judía de la época en que Jerusalén se extendió fuera de las murallas de la Ciudad Vieja.",
      "Nachlaot linda con el mercado Mahane Yehuda. Ambos han cambiado con los años, con la llegada de nuevos residentes y la renovación de casas.",
    ],
    'beit-hakerem': [
      "Beit HaKerem es un barrio veterano del oeste de Jerusalén; limita con Kiryat Moshe al norte, Yefe Nof y el bulevar Herzl al oeste, Ramat Beit HaKerem al sur y la carretera Begin y Givat Ram al este.",
      "Fue proyectado como barrio jardín por el arquitecto Richard Kauffmann.",
      "La línea roja del tren ligero lo recorre por el bulevar Herzl, y cerca están el campus de Givat Ram de la Universidad Hebrea y el Colegio Azrieli de Ingeniería.",
      "Se ha promovido para el barrio un plan general que permite añadir viviendas mediante demolición y reconstrucción y mediante TAMA 38, y hay residentes que se han opuesto.",
    ],
    'kiryat-hayovel': [
      "Kiryat HaYovel está en el suroeste de Jerusalén, en una cresta entre el monte Herzl y Ein Kerem, y es uno de los barrios más altos de la ciudad.",
      "Queda cerca del hospital Hadassah Ein Kerem, de la salida hacia Tel Aviv y del bulevar Herzl, que lleva al centro de la ciudad.",
      "El Ayuntamiento de Jerusalén promueve en el barrio planes de demolición y reconstrucción, entre ellos el proyecto Sderot HaYovel, en la calle Tahon.",
      "La Comisión de Distrito de Planificación y Construcción aprobó el plan de la línea violeta del tren ligero, que pasa por Kiryat HaYovel.",
    ],
    malha: [
      "Malha, cuyo nombre oficial es Manahat, está en el suroeste de Jerusalén y se divide en Malha Vieja y Malha Nueva.",
      "El centro comercial de Jerusalén, el estadio Teddy, el Pais Arena y el parque tecnológico de Malha están en el barrio o junto a él, y el Zoológico Bíblico queda cerca.",
      "Según una información de agosto de 2026, el primer tramo de la línea verde del tren ligero, de Malha a la zona de la estación central de autobuses, estaba a punto de abrirse a los pasajeros. La línea azul prevista incluye un ramal sur hacia Malha, y la línea violeta aprobada también pasa por el barrio.",
    ],
    'ein-kerem': [
      "Ein Kerem es un barrio de las afueras del suroeste de Jerusalén que ha conservado un carácter de aldea, por estar relativamente apartado de la ciudad y rodeado de montes, valles y bosques.",
      "Es un lugar santo y de peregrinación para los cristianos, con iglesias y monasterios en activo.",
      "El Centro Médico Hadassah Ein Kerem está junto al barrio, y la línea roja del tren ligero se ha prolongado y ahora llega hasta el hospital.",
    ],
    'har-nof': [
      "Har Nof es un barrio jaredí y religioso del oeste de Jerusalén. El bosque de Jerusalén se extiende a sus pies y lo rodea.",
      "Fue proyectado por el arquitecto Zeev Scheinberg.",
      "Se ha aprobado un ramal del tren ligero hacia el barrio por la calle Kanfei Nesharim, que se integrará en el plan de la línea verde.",
      "La Autoridad de Tierras de Israel promueve un nuevo plan residencial al sur del barrio, en parte sobre terrenos del bosque de Jerusalén.",
    ],
    // ---------- Tel Aviv ----------
    afeka: [
      "Afeka es un barrio del norte de Tel Aviv, al norte del río Yarkon, y forma parte del sector 1 de la ciudad.",
      "Limita con Tel Baruch al este, la Universidad de Tel Aviv al sur, Neve Avivim al oeste y Ramat Aviv Guimel al noroeste.",
      "Se fundó como cooperativa de viviendas de comandantes de la Haganá; con los años, muchas de las casas originales fueron sustituidas por grandes villas.",
    ],
    ajami: [
      "Ajami es un barrio de Jaffa, en Tel Aviv-Yafo, a orillas del Mediterráneo, al sur de la Jaffa Vieja y al norte del barrio de Jabaliya. Sus calles discurren paralelas a la costa.",
      "Tiene casas tradicionales de piedra construidas en torno a patios. Entre sus puntos de referencia están la iglesia maronita, la mezquita de Ajami y el Centro Peres para la Paz, en su extremo sur.",
      "La línea roja del tren ligero cruza Jaffa de norte a sur por el bulevar Jerusalén.",
    ],
    bavli: [
      "Bavli está delimitado por el parque Yarkon al norte, la autopista Ayalon al este, la carretera Namir al oeste y el parque Tzameret al sur.",
      "Comenzó como un proyecto de vivienda pública. Más tarde se construyó el centro Dekel, y la construcción más reciente se ha centrado en torres residenciales de lujo con vistas al Ayalon.",
      "El barrio se considera en su mayor parte de clase media-alta, y en él viven muchas parejas mayores y familias.",
    ],
    florentin: [
      "Florentin es un barrio del sur de Tel Aviv que limita con Neve Tzedek.",
      "Combina viviendas con una zona de industria y talleres y con comercio mayorista de ropa y muebles.",
      "Su recuperación comenzó con un programa de renovación urbana patrocinado por el Ayuntamiento de Tel Aviv, y hoy es conocido por su vida nocturna, sus talleres de artistas y su arte callejero.",
    ],
    hatikva: [
      "El barrio Hatikva está en el sureste de Tel Aviv y tiene una herencia judía yemenita.",
      "Debe su nombre a la granja Har HaTikva y se incorporó al término municipal de Tel Aviv después de la Guerra de Independencia.",
      "En el barrio está el estadio del barrio Hatikva, y el monumento del Ángel de la Paz se alza frente al centro Beit Dani.",
    ],
    jaffa: [
      "Jaffa es una antigua ciudad portuaria de la costa mediterránea, en la parte sur de Tel Aviv-Yafo. Cuando se unieron los dos municipios, la ciudad recibió el nombre de Tel Aviv-Yafo para conservar el nombre histórico.",
      "Administrativamente, Jaffa es el sector 7 del municipio, y es una de las ciudades mixtas de Israel, con residentes judíos, cristianos y musulmanes.",
      "Entre sus puntos de referencia están el puerto histórico, la torre del reloj, la zona del mercado de pulgas y el Museo de Antigüedades de Jaffa.",
      "La línea roja del tren ligero cruza Jaffa de norte a sur por el bulevar Jerusalén.",
    ],
    'kerem-hateimanim': [
      "Kerem HaTeimanim es un barrio del centro de Tel Aviv, junto al mercado Carmel.",
      "Lo fundaron inmigrantes judíos de Yemen, y muchas de sus casas originales eran construcciones de una planta hechas con materiales baratos.",
      "El barrio es en gran parte religioso y sus locales de comida cierran en shabat. Está viviendo un proceso de gentrificación.",
    ],
    'kochav-hatzafon': [
      "Kochav HaTzafon es un barrio del noroeste de Tel Aviv, el más cercano de los barrios situados al otro lado del Yarkon, contiguo al Nuevo Norte y al puerto de Tel Aviv.",
      "Sus límites son la calle Ibn Gabirol al oeste, la zona del antiguo aeropuerto Sde Dov al norte, la carretera Namir al este y el bulevar Rokach al sur.",
      "En la parte exterior predominan los edificios altos, y en la interior hay edificios más bajos y algunas casas unifamiliares. Un parque de barrio lo cruza de este a oeste.",
    ],
    montefiore: [
      "El barrio Montefiore se extiende desde el Centro Azrieli al norte hasta la calle Yitzhak Sadeh al sur, y desde la autopista Ayalon al este hasta la calle HaMasger y la carretera Begin al oeste.",
      "Se levantó sobre los terrenos del huerto Montefiore, considerado el primer huerto de la Tierra de Israel plantado y cuidado por judíos.",
      "Su historia urbanística mezcla vivienda con talleres, pequeña industria y oficinas, y con los años se ha aprobado allí la construcción en altura.",
    ],
    'nahalat-yitzhak': [
      "Nahalat Yitzhak es un barrio del este de Tel Aviv, al este de la autopista Ayalon, junto a los barrios de Bitzaron y Ramat Yisrael.",
      "Comenzó como una colonia agrícola en la que también se instalaron fábricas. Las Torres de Tel Aviv se construyeron en el solar de la antigua fábrica Yitzhar.",
      "En la zona funcionó una planta de las industrias militares. Según el artículo de Wikipedia, en la década de 2020 comenzaron los trabajos de descontaminación del terreno para prepararlo para viviendas.",
    ],
    'neve-avivim': [
      "Neve Avivim está en Ramat Aviv, en el norte de Tel Aviv, delimitado por la calle Haim Levanon al este, el bulevar Keren Kayemet al norte, la carretera Namir al oeste y la calle Einstein al sur.",
      "Tiene edificios altos con apartamentos grandes y, en el centro, un amplio espacio público con un gran parque de barrio, centros comerciales, centros educativos y un centro deportivo.",
      "Como los demás barrios de Ramat Aviv, su población tiene un perfil socioeconómico alto.",
    ],
    'neve-tzedek': [
      "Neve Tzedek fue el primer barrio judío oficial construido fuera de las murallas de Jaffa, antes de la fundación de Tel Aviv. Hoy forma parte de la ciudad.",
      "Sus límites son la calle Pines al noreste, la trinchera del histórico ferrocarril de Jaffa a Jerusalén al sureste, por donde hoy pasan la línea roja del tren ligero y el parque HaMesila, el aparcamiento de Manshiya al suroeste y la calle Shabazi al noroeste.",
      "El bulevar Rothschild comienza en el límite este de Neve Tzedek.",
    ],
    'new-north': [
      "El Nuevo Norte se desarrolló después de la creación del Estado, y su nombre lo distingue del Viejo Norte.",
      "Pertenece al sector 4 de la ciudad, que atraviesan calles como Yehuda HaMaccabi, Pinkas, Jabotinsky, Weizmann y Shaul HaMelech, y donde se aplica el plan del sector 4 (TA/3729a).",
      "El 4 de diciembre de 2024, la subcomisión municipal de planificación tenía en su orden del día una modificación de las normas de construcción baja en el sector 4 (TA/3729b) y un plan que añade usos permitidos en el sector (TA/5269).",
    ],
    'old-north': [
      "Según la definición del Ayuntamiento, el Viejo Norte (sector 3) es la zona entre el río Yarkon al norte y la calle Arlozorov al sur, delimitada por la calle Ibn Gabirol al este y el Mediterráneo al oeste.",
      "Se desarrolló al norte del núcleo histórico de la ciudad y en su origen se llamaba el norte de la ciudad. El nombre de Viejo Norte lo distingue del Nuevo Norte.",
      "El plan del sector 3 (TA/3616a) se aprobó el 9 de enero de 2018.",
    ],
    'ramat-aviv': [
      "Ramat Aviv es el nombre de varios barrios del norte de Tel Aviv, al norte del río Yarkon.",
      "En la zona están la Universidad de Tel Aviv, el Museo Eretz Israel, el Centro Yitzhak Rabin, el Museo del Palmaj y el Museo del Pueblo Judío, y el parque Yarkon queda cerca.",
      "Ramat Aviv Alef, conocido como la verde, combina casas unifamiliares con edificios bajos de apartamentos entre céspedes. El centro comercial Ramat Aviv está en su parte norte y el centro Brodetsky en el medio.",
    ],
    'ramat-hahayal': [
      "Ramat HaHayal es un barrio del noreste de Tel Aviv, uno de los barrios situados al otro lado del Yarkon.",
      "Junto a él está la zona industrial de Ever HaYarkon, un centro de empresas de alta tecnología al que a veces también se llama Ramat HaHayal.",
      "Lo construyó después de la Guerra de Independencia una empresa de vivienda para soldados desmovilizados, viudas de guerra y veteranos con discapacidad.",
    ],
    'rothschild-boulevard': [
      "El bulevar Rothschild es una de las primeras calles de Tel Aviv y va desde el límite este de Neve Tzedek hasta el complejo Habima. Es la columna vertebral del barrio Lev Tel Aviv.",
      "Forma parte del principal distrito de negocios de la ciudad. Desde la década de 1990, edificios bajos del bulevar se han sustituido por torres de viviendas y oficinas, junto con la conservación de edificios de estilo ecléctico y Bauhaus.",
      "La Ciudad Blanca, la parte central de Tel Aviv construida entre las décadas de 1930 y 1950 según el plan urbanístico de Sir Patrick Geddes en el estilo del Movimiento Moderno, está inscrita en la Lista del Patrimonio Mundial de la UNESCO.",
      "Según NTA, la línea violeta del tren ligero se cruzará con la línea roja en el cruce de las calles Allenby y Yehuda HaLevi. La calle Allenby cruza el bulevar Rothschild.",
    ],
    shapira: [
      "El barrio Shapira está en el sur de Tel Aviv, al sur de la nueva estación central de autobuses y de la carretera Shlomo, delimitado por la carretera Heil HaShiryon y la autopista Ayalon al este, la carretera Kibbutz Galuyot al sur y el bulevar Har Zion al oeste.",
      "Se caracterizaba por casas bajas en un tejido urbano denso. En los últimos años, la construcción nueva es de edificios modernos de apartamentos de varias plantas.",
      "NTA presentó a los residentes las obras de la línea verde en el bulevar Har Zion, entre la carretera Kibbutz Galuyot y la carretera Shlomo, a lo largo del límite oeste del barrio.",
    ],
    tzahala: [
      "Tzahala es un barrio del noreste de Tel Aviv-Yafo, en el límite con Ramat HaSharon. Se creó por iniciativa del Gobierno para alojar a altos mandos del ejército y de la seguridad, y debe su nombre a las Fuerzas de Defensa de Israel (Tzahal).",
      "Se construyó como casas unifamiliares en parcelas grandes. Desde la década de 1990, muchas de las casas originales se han demolido y sustituido por villas.",
      "Una asociación cooperativa sigue gestionando el barrio. Los residentes pagan cuotas de socio, y la mayor parte de su presupuesto procede del arrendamiento de las tiendas del centro comercial que posee.",
    ],
    'yad-eliyahu': [
      "Yad Eliyahu es un barrio del sureste de Tel Aviv, delimitado por la calle Yitzhak Sadeh al norte, la carretera Moshe Dayan al este, la carretera HaHagana al sur y la autopista Ayalon al oeste. La calle La Guardia es su calle principal.",
      "Debe su nombre a Eliyahu Golomb y se construyó por iniciativa del Ayuntamiento de Tel Aviv para alojar a soldados desmovilizados del ejército británico.",
      "En el barrio están el Menora Mivtachim Arena, el parque Galit y el centro médico de rehabilitación Reuth.",
      "La lista de estaciones de la línea violeta publicada por NTA incluye HaHagana y Moshe Dayan, los nombres de las carreteras que delimitan el barrio por el sur y el este.",
    ],
    // ---------- Haifa ----------
    ahuza: [
      "Ahuza (Ahuzat Shmuel) es un barrio veterano y el centro del sector residencial de Ramot HaCarmel, en la divisoria de aguas de la cresta del Carmelo.",
      "El eje principal de tráfico lo forman el bulevar Moriah, la calle Horev y el bulevar Abba Hushi (carretera 672). La plaza Horev, en el corazón del barrio antiguo, une estas arterias.",
      "El plan director del barrio lo preparó el arquitecto Richard Kauffmann, como un barrio con formato de ciudad jardín en el Carmelo.",
    ],
    'bat-galim': [
      "Bat Galim, construido en la península del cabo Carmelo, es el único barrio de Haifa cuyas casas llegan a la orilla del mar.",
      "En él están el hospital Rambam y la Facultad de Medicina del Technion. Un paseo marítimo recorre la playa y, en su extremo, está la estación del teleférico de Haifa que sube a Stella Maris.",
      "La vía férrea de la costa pasa por el barrio, que cuenta con la estación de tren Haifa Bat Galim.",
      "Dos recintos de renovación urbana en sus calles principales figuran en la base del Ministerio de Construcción y Vivienda con un plan aprobado, en la fase posterior a las licencias: HaAliya HaShniya (175 viviendas existentes, 715 propuestas) y Heil HaYam (119 existentes, 467 propuestas).",
    ],
    'carmel-center': [
      "El Centro del Carmelo (Merkaz HaCarmel) es un barrio y una zona de cultura y ocio en la cresta del Carmelo.",
      "Sus límites son la plaza Rotary al este, las calles Henrietta Szold y Yefe Nof y el paseo Louis al norte, y el cruce de las calles Wolfson y Moriah al sur.",
      "La terminal superior del Carmelit, el funicular subterráneo de Haifa, está en el Centro del Carmelo, y el Carmelit lo conecta con Hadar y con la Ciudad Baja.",
      "En el barrio han sobrevivido y se han conservado casas de Karmelheim, el suburbio de veraneo de los templers.",
    ],
    carmelia: [
      "Carmelia se construyó en un espolón occidental del monte Carmelo, entre el eje Moriah al este, Kfar Samir y el recinto de los cementerios al oeste, Kababir al norte y el barrio de Shambur al sur.",
      "Sus calles principales son Tzafririm y Lea, y el cauce del arroyo Siah sale del barrio hacia el oeste.",
      "Las casas de las laderas se construyeron en terrazas que siguen la topografía, un estilo muy identificado con Carmelia.",
    ],
    denya: [
      "Denya, también conocido como Hod HaCarmel, es un barrio del sur de Haifa, en la parte montañosa de la ciudad.",
      "La zona se construyó en estilos variados, con predominio de casas unifamiliares en parcelas más grandes de lo habitual.",
      "El eje principal es el bulevar Abba Hushi, la carretera que antiguamente unía Haifa con Isfiya.",
      "La mayor parte del suelo abierto que queda en la zona se ha declarado parte del parque del Carmelo.",
    ],
    downtown: [
      "La Ciudad Baja (HaIr HaTahtit) es el sector de la parte baja y central de Haifa, que reúne una serie de barrios céntricos y buena parte de la actividad empresarial de la ciudad.",
      "Allí se encuentra el complejo de oficinas gubernamentales del distrito, y en los últimos años la actividad está volviendo al sector.",
      "La terminal inferior del Carmelit, el funicular subterráneo de Haifa, está en la plaza París, en la Ciudad Baja.",
    ],
    'french-carmel': [
      "El Carmelo Francés está en las laderas noroccidentales del monte Carmelo. Su límite oeste es el recinto de Stella Maris, y al este quedan el Centro del Carmelo y Hadar.",
      "La carretera que sube al barrio desde el oeste es la carretera Tzarfat, que enlaza con la calle principal, Tchernichovsky.",
      "Allí se encuentran el monasterio carmelita de Nuestra Señora del Monte Carmelo, el Colegio Académico de Educación Gordon y Beit HaLochem Haifa.",
      "En la base del Ministerio de Construcción y Vivienda figuran dos recintos de renovación urbana: Mordot HaCarmel HaTzarfati tiene un plan aprobado, en la fase posterior a las licencias, y Derech Tzarfat 24 a 42 está en planificación reglamentaria (85 viviendas existentes, 416 propuestas).",
    ],
    hadar: [
      "Hadar HaCarmel es uno de los barrios más antiguos de Haifa y un sector residencial central, en la terraza situada entre la Ciudad Baja y el Carmelo.",
      "Hadar se fundó como una ciudad jardín según el diseño del arquitecto Richard Kauffmann.",
      "Allí se construyeron el edificio del Technikum, sede histórica del Technion, y la Escuela Reali Hebrea.",
      "El Carmelit, el funicular subterráneo de Haifa, pasa por Hadar y lo conecta con la Ciudad Baja y con el Centro del Carmelo.",
    ],
    'kiryat-eliezer': [
      "Kiryat Eliezer está en el sector oeste de Haifa y lleva el nombre de Eliezer Kaplan, el primer titular del Ministerio de Finanzas de Israel.",
      "El bulevar Rothschild cruza el barrio, y en el solar del demolido estadio de Kiryat Eliezer se construyeron edificios residenciales de gran altura.",
      "La cueva de Elías está en el extremo oeste del barrio, junto al Museo de la Inmigración Clandestina y de la Armada.",
      "En la base del Ministerio de Construcción y Vivienda figuran cinco recintos de renovación urbana con el nombre de Kiryat Eliezer: el recinto 16 tiene un plan aprobado (96 viviendas existentes, 430 propuestas), y los recintos 11, 12, 13 y 29 están en planificación reglamentaria.",
    ],
    'neve-david': [
      "Neve David es un barrio residencial del oeste de Haifa, en la entrada sur de la ciudad, sobre la carretera 4 y la carretera de la costa.",
      "Limita con el barrio de Shaar HaAliya al norte, Ramat HaNasi al este y los cementerios de Haifa al sur.",
      "El recinto de renovación urbana Yehoshafat – Neve David está en planificación reglamentaria (102 viviendas existentes, 417 propuestas), según la base del Ministerio de Construcción y Vivienda.",
    ],
    'neve-shaanan': [
      "Neve Shaanan es una administración local del sureste de Haifa que abarca un conjunto de barrios en el collado oriental de la montaña.",
      "La edificación es variada: casas de una planta según el principio de la ciudad jardín, edificios de dos plantas con tejados de tejas conocidos como los tejados rojos, conjuntos de vivienda densa y edificios altos.",
      "La línea de teleférico que da servicio al Technion ha aliviado la congestión de tráfico en la plaza Ziv.",
    ],
    'ramat-almogi': [
      "Ramat Almogi es un barrio del sur de Haifa, en la parte montañosa de la ciudad, que limita con Ramot Remez, Savyonei Denya, Ahuza y Ramat Golda.",
      "Lleva el nombre del alcalde Yosef Almogi y combina edificios altos y bajos.",
      "Tiene vistas a la bahía de Haifa y un pequeño centro comercial en la calle Einstein.",
    ],
    'ramot-remez': [
      "Ramot Remez es un barrio veterano dentro del área de Neve Shaanan. Sus primeras casas se construyeron bajas, a lo largo de la calle HaInternational y la carretera Hankin, como edificios de dos plantas con tejados de tejas rojas.",
      "Es popular entre los estudiantes porque está entre el Technion y la Universidad de Haifa, y está rodeado de bosque por todos lados.",
      "Entre Ramot Remez y Romema, en Givat Ofer, está previsto un nuevo barrio, Ramat Zemer.",
    ],
    romema: [
      "Romema se divide en Romema Vieja y Romema Nueva, también llamada Ramat Ben-Gurión. Entre ambas pasa la carretera Pica, que une el centro de Ahuza con Neve Shaanan.",
      "Romema Vieja, la parte norte, incluye el pabellón deportivo de Romema y el yacimiento arqueológico de Rosh Maya.",
      "Romema Nueva tiene muchos edificios altos junto a construcción baja en Givat Oranim.",
      "Entre Romema y Ramot Remez, en Givat Ofer, está previsto un nuevo barrio, Ramat Zemer.",
    ],
  },
});

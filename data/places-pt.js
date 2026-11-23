// Textos em português para as grandes cidades e seus bairros. Os dados seguem data/places.js.
module.exports = ({ ils, num }) => ({
  base: 'bairros',
  inOf: (t) => 'em ' + t,
  src: {
    wiki: "Wikipédia, artigos em hebraico e em inglês sobre o bairro e a cidade, consultados em 5 de novembro de 2026",
    jlmRail: "Planos do VLT de Jerusalém: Prefeitura de Jerusalém, equipe do Plano Diretor de Transportes de Jerusalém e Comissão Distrital de Planejamento e Construção, conforme a imprensa israelense (2023 a 2026)",
    nta: "NTA (Metropolitan Mass Transit System), apresentações da Linha Verde e da Linha Roxa (2021 e 2022)",
    comptroller: "Controlador do Estado de Israel, relatório sobre o VLT de Gush Dan, dezembro de 2025",
    cbsRelease: "Escritório Central de Estatísticas, comunicado 256/2026 de 14 de agosto de 2026",
    unesco: "UNESCO, Lista do Patrimônio Mundial, Cidade Branca de Tel Aviv: o Movimento Moderno",
    tlvPlans: "Prefeitura de Tel Aviv-Yafo, planos dos setores 3 e 4 e pauta da subcomissão de planejamento de 4 de dezembro de 2024",
    jiis: "Instituto de Jerusalém para Pesquisa de Políticas, “Jerusalém: fatos e tendências 2026”",
    cbsJlm: "Escritório Central de Estatísticas, dados selecionados para o Dia de Jerusalém 2026, conforme o jornal Maariv de 13 de maio de 2026",
    cbsYearbook: "Escritório Central de Estatísticas, Anuário Estatístico de Israel 2025, tabela 2.17 (população no fim de 2024)",
    cbsSocio: "Escritório Central de Estatísticas, índice socioeconômico das autoridades locais de 2021",
  },
  city: {
    pop: {
      jlm: `População: cerca de ${num(1063000)} habitantes, segundo a estimativa do Escritório Central de Estatísticas publicada para o Dia de Jerusalém em maio de 2026. O número inclui cidadãos estrangeiros.`,
      tlv: `População: cerca de ${num(494900)} habitantes no fim de 2024, incluídos os cidadãos estrangeiros.`,
    },
    priceQ: (c, q) => `Preço médio de um apartamento vendido em ${c}: ${ils(q)} de abril a junho de 2026 (número provisório).`,
    rentQ: (q) => `Aluguel mensal médio no mercado livre: ${ils(q)} de abril a junho de 2026.`,
    extra: {
      jerusalem: [
        `No fim de 2025 havia em Jerusalém ${num(251900)} moradias, e 32% delas eram alugadas, segundo o Instituto de Jerusalém para Pesquisa de Políticas.`,
        `Um apartamento de 3,5 a 4 cômodos vendido em Jerusalém em 2025 custou em média ${ils(3376400)}, segundo o Instituto de Jerusalém para Pesquisa de Políticas, e o aluguel mensal médio para esse tamanho foi de ${ils(6179.6)} de abril a junho de 2026. Em Israel, a sala conta como um cômodo.`,
      ],
      'tel-aviv': [
        "A Linha Vermelha do VLT foi inaugurada em agosto de 2023 e liga Bat Yam a Petah Tikva passando por Tel Aviv-Yafo. A Linha Roxa deve começar a operar em 2028 e a Linha Verde em 2029, segundo um relatório do Controlador do Estado de dezembro de 2025.",
        "O Escritório Central de Estatísticas informou que o preço médio de abril a junho de 2026 foi 8,4% maior que o do mesmo trimestre do ano anterior.",
      ],
    },
    hoodsTitle: (c) => `Bairros de ${c}`,
    hoodsLead: "Cada página de bairro acrescenta aos números da cidade dados com fonte sobre a região.",
  },
  index: {
    nav: 'Bairros',
    title: "Bairros de Jerusalém, Tel Aviv e Haifa para compradores do exterior",
    desc: "Páginas por bairro para residentes estrangeiros e olim: dados com fonte sobre cada região de Jerusalém, Tel Aviv e Haifa, com os números oficiais da cidade e o imposto de compra.",
    h1: "Páginas de bairros para compradores do exterior",
    lead: "Os dados de cada bairro vêm das fontes citadas na página. Os preços e os aluguéis são números oficiais da cidade, porque não se publica média oficial para um bairro.",
  },
  hood: {
    title: {
      foreign: (h, c) => `Comprar ${h.in} (${c}) como residente estrangeiro: bairro e imposto (2026)`,
      oleh: (h, c) => `Comprar moradia ${h.in} (${c}) após a aliá: bairro e imposto (2026)`,
    },
    desc: {
      foreign: (h, c) => `${h.n} (${c}): dados com fonte sobre o bairro, números oficiais da cidade, o imposto de compra de um residente estrangeiro e a compra à distância.`,
      oleh: (h, c) => `${h.n} (${c}): dados com fonte sobre o bairro, números oficiais da cidade, o imposto de compra reduzido para um olé e os limites de financiamento aplicáveis.`,
    },
    h1: {
      foreign: (h, c) => `Comprar ${h.in} (${c}) como residente estrangeiro`,
      oleh: (h, c) => `Comprar moradia ${h.in} (${c}) após a aliá`,
    },
    intro: {
      foreign: (h, c) => `O que está documentado sobre ${h.the}, os números oficiais de ${c}, o imposto de compra que um residente estrangeiro pagaria e como funciona a compra quando você mora no exterior.`,
      oleh: (h, c) => `O que está documentado sobre ${h.the}, os números oficiais de ${c}, o imposto de compra reduzido para um olé e quanto um banco financia para uma moradia única.`,
    },
    aboutTitle: (h) => `${h.n} em resumo`,
    cityTitle: (c) => `${c} em números oficiais`,
    cityNote: (h, c) => `O Escritório Central de Estatísticas não publica preços médios por bairro. Os números abaixo são de ${c} como um todo: servem de ponto de partida e não são um preço para ${h.the}.`,
    advice: (h) => `Antes de fazer uma proposta ${h.in}, compare-a com as transações efetivamente registradas nas ruas próximas na base imobiliária do governo (nadlan.gov.il) e verifique na comissão local de planejamento quais planos se aplicam ao edifício.`,
    taxTitle: (h) => `O imposto de compra de um apartamento ${h.in}`,
    taxAtAvg: (c, p) => `Não existe média oficial para o bairro. Ao preço médio oficial em ${c} de abril a junho de 2026 (${p}), o imposto de compra seria:`,
    cityLink: (c) => `Todos os números de ${c}`,
    faq: (h, c, intent, v) => intent === 'foreign' ? [
      [`Um residente estrangeiro pode comprar um apartamento ${h.in}?`, "Sim. Cidadãos estrangeiros compram em seu próprio nome. Seu advogado verifica o tipo de direito vendido: terreno privado inscrito no Registro de Imóveis, ou um arrendamento da Autoridade de Terras de Israel, em que a transferência a um estrangeiro pode exigir a aprovação da Autoridade."],
      [`Existe um preço médio oficial para ${h.the}?`, `Não. O Escritório Central de Estatísticas publica médias para cidades e distritos, não para bairros. A média em ${c} de abril a junho de 2026 foi de ${v.avg}. Para ${h.the}, consulte as transações registradas na mesma rua.`],
      [`Quanto um residente estrangeiro paga de imposto de compra ${h.in}?`, `8% até ${v.t3} e 10% acima disso, onde quer que fique o apartamento. Para um apartamento de ${v.p} são ${v.foreign}.`],
    ] : [
      [`Que imposto de compra um olé paga pela moradia ${h.in}?`, `0% até ${v.t1} e 0,5% até ${v.t3}, onde quer que fique a moradia. Para uma moradia de ${v.p} são ${v.oleh}, contra ${v.foreign} para um residente estrangeiro.`],
      [`Existe um preço médio oficial para ${h.the}?`, `Não. O Escritório Central de Estatísticas publica médias para cidades e distritos, não para bairros. A média em ${c} de abril a junho de 2026 foi de ${v.avg}. Para ${h.the}, consulte as transações registradas na mesma rua.`],
      ["Qual é a entrada mínima?", "25% do valor para a moradia única comprada por um cidadão israelense, conforme o teto de 75% do Banco de Israel. Um comprador que ainda é residente estrangeiro precisa de pelo menos 50%."],
    ],
  },
  names: {
    'german-colony': { n: 'Colônia Alemã', the: 'a Colônia Alemã', in: 'na Colônia Alemã' },
    'old-north': { n: 'Velho Norte', the: 'o Velho Norte', in: 'no Velho Norte' },
    'new-north': { n: 'Novo Norte', the: 'o Novo Norte', in: 'no Novo Norte' },
    'rothschild-boulevard': { n: 'Bulevar Rothschild', the: 'o bulevar Rothschild', in: 'no bulevar Rothschild' },
    'carmel-center': { n: 'Centro do Carmelo', the: 'o Centro do Carmelo', in: 'no Centro do Carmelo' },
    downtown: { n: 'Cidade Baixa', the: 'a Cidade Baixa', in: 'na Cidade Baixa' },
    'french-carmel': { n: 'Carmelo Francês', the: 'o Carmelo Francês', in: 'no Carmelo Francês' },
    hatikva: { n: 'Bairro Hatikva', the: 'o bairro Hatikva', in: 'no bairro Hatikva' },
    'neve-shaanan': { n: 'Neve Shaanan' },
  },
  facts: {
    // ---------- Jerusalém ----------
    rehavia: [
      "Rehavia foi projetado pelo arquiteto Richard Kauffmann como um bairro-jardim, inspirado na cidade-jardim europeia e construído no Estilo Internacional.",
      "Fica a sudoeste das ruas Keren HaYesod e King George; faz limite ao norte com Nachlaot e Shaarei Hesed e ao sul com Talbiya e Kiryat Shmuel.",
      "Pelo regulamento original, o comércio só era permitido nas duas ruas principais na borda do bairro, e uma alameda verde de pedestres o atravessa de norte a sul.",
      "O traçado previsto da Linha Azul do VLT passa pelas ruas Keren HaYesod e King George, que margeiam Rehavia.",
    ],
    talbiya: [
      "Talbiya, cujo nome oficial é Komemiyut, fica no centro-sul de Jerusalém, com Rehavia e o Parque da Independência ao norte, Katamon ao sul e o Parque do Sino da Liberdade a leste.",
      "A residência do presidente e o Teatro de Jerusalém ficam no bairro.",
      "Talbiya é considerado um bairro de alto padrão; entre os moradores há acadêmicos, profissionais liberais e diplomatas estrangeiros.",
    ],
    katamon: [
      "Katamon, cujo nome oficial é Gonen, fica no centro-sul de Jerusalém. Talbiya, Rehavia e Kiryat Shmuel ficam ao norte, a Colônia Grega e a Colônia Alemã a leste, e os Katamonim ao sul e a sudoeste.",
      "Suas ruas principais são a Rachel Imenu, que o liga à Emek Refaim, e a Kovshei Katamon, que o liga à rua HaPalmach. O mosteiro de San Simon o delimita a oeste.",
      "O Katamon histórico se distingue, pela história e pela arquitetura, dos Katamonim, a série de bairros construídos a sudoeste.",
      "O traçado previsto da Linha Azul do VLT passa pela rua Emek Refaim, à qual se liga a rua Rachel Imenu. A Linha Verde e a Linha Roxa, já aprovada, devem passar pelos Katamonim vizinhos.",
    ],
    baka: [
      "Baka, cujo nome oficial é Geulim, é um bairro do sul de Jerusalém delimitado pela rua Rivka ao sul, pela rua Pierre Koenig a oeste, pela antiga linha férrea a noroeste e pela estrada de Hebron a leste.",
      "Os bairros vizinhos são Talpiot, Mekor Haim, a Colônia Grega, a Colônia Alemã e Abu Tor.",
      "A paisagem combina antigas casas de pedra de um ou dois andares com blocos de habitação pública, muitos dos quais foram reformados e ampliados em um projeto municipal de reabilitação de bairros.",
    ],
    'german-colony': [
      "A Colônia Alemã é um bairro do centro-oeste de Jerusalém, ao lado do complexo da Primeira Estação, construído por membros alemães da Sociedade do Templo, os templers.",
      "As casas originais são de pedra de Jerusalém, a maioria com um ou dois andares e telhados de telha; as duas ruas principais são a Emek Refaim e a estrada de Belém.",
      "É uma área de lazer e comércio, com cafés, restaurantes, bares e butiques, e recebe festivais e uma feira de produtores.",
    ],
    talpiot: [
      "Talpiot é um bairro antigo de Jerusalém, no limite sudeste da cidade, projetado por Richard Kauffmann no espírito da cidade-jardim.",
      "Ao lado dele cresceu a zona industrial de Talpiot, uma das maiores áreas de emprego e comércio da capital.",
      "O traçado previsto da Linha Azul do VLT atravessa Talpiot no percurso entre o sul e o norte da cidade.",
    ],
    arnona: [
      "Arnona é um bairro do sul de Jerusalém, entre Talpiot ao norte, a zona industrial de Talpiot e a estrada de Hebron a oeste, e o kibutz Ramat Rachel ao sul.",
      "É formado principalmente por casas, sobrados geminados e edifícios baixos, e quase todas as suas reservas de terreno já foram usadas.",
      "O complexo da Embaixada dos Estados Unidos fica no bairro.",
    ],
    nachlaot: [
      "Nachlaot é um conjunto de bairros antigos no coração de Jerusalém, a maioria entre as ruas Agripas e Bezalel, e alguns chegam até a rua Jaffa.",
      "A maioria foi construída como bairros de pátio, típicos da construção comunitária judaica da época em que Jerusalém se expandiu para fora das muralhas da Cidade Velha.",
      "Nachlaot fica ao lado do mercado Mahane Yehuda. Ambos mudaram ao longo dos anos, com a chegada de novos moradores e a reforma das casas.",
    ],
    'beit-hakerem': [
      "Beit HaKerem é um bairro antigo do oeste de Jerusalém; faz limite com Kiryat Moshe ao norte, Yefe Nof e a avenida Herzl a oeste, Ramat Beit HaKerem ao sul e a via Begin e Givat Ram a leste.",
      "Foi projetado como bairro-jardim pelo arquiteto Richard Kauffmann.",
      "A Linha Vermelha do VLT o percorre pela avenida Herzl, e perto ficam o campus de Givat Ram da Universidade Hebraica e a Faculdade Azrieli de Engenharia.",
      "Foi promovido para o bairro um plano geral que permite acrescentar moradias por meio de demolição e reconstrução e de TAMA 38, e moradores se opuseram a ele.",
    ],
    'kiryat-hayovel': [
      "Kiryat HaYovel fica no sudoeste de Jerusalém, em uma crista entre o monte Herzl e Ein Kerem, e é um dos bairros mais altos da cidade.",
      "Fica perto do hospital Hadassah Ein Kerem, da saída para Tel Aviv e da avenida Herzl, que leva ao centro da cidade.",
      "A Prefeitura de Jerusalém promove no bairro planos de demolição e reconstrução, entre eles o projeto Sderot HaYovel, na rua Tahon.",
      "A Comissão Distrital de Planejamento e Construção aprovou o plano da Linha Roxa do VLT, que passa por Kiryat HaYovel.",
    ],
    malha: [
      "Malha, cujo nome oficial é Manahat, fica no sudoeste de Jerusalém e se divide em Malha Velha e Malha Nova.",
      "O shopping de Jerusalém, o estádio Teddy, a Pais Arena e o parque tecnológico de Malha ficam no bairro ou ao lado dele, e o Zoológico Bíblico fica perto.",
      "Segundo uma notícia de agosto de 2026, o primeiro trecho da Linha Verde do VLT, de Malha à região da estação rodoviária central, estava prestes a abrir aos passageiros. A Linha Azul prevista inclui um ramal sul até Malha, e a Linha Roxa aprovada também passa pelo bairro.",
    ],
    'ein-kerem': [
      "Ein Kerem é um bairro na periferia sudoeste de Jerusalém que conservou um caráter de vila, por estar relativamente afastado da cidade e cercado de montes, vales e florestas.",
      "É um lugar santo e de peregrinação para os cristãos, com igrejas e mosteiros em atividade.",
      "O Centro Médico Hadassah Ein Kerem fica ao lado do bairro, e a Linha Vermelha do VLT foi estendida e hoje chega ao hospital.",
    ],
    'har-nof': [
      "Har Nof é um bairro haredi e religioso do oeste de Jerusalém. A Floresta de Jerusalém se estende a seus pés e o cerca.",
      "Foi projetado pelo arquiteto Zeev Scheinberg.",
      "Foi aprovado um ramal do VLT até o bairro pela rua Kanfei Nesharim, que será integrado ao plano da Linha Verde.",
      "A Autoridade de Terras de Israel promove um novo plano residencial ao sul do bairro, em parte sobre áreas da Floresta de Jerusalém.",
    ],
    // ---------- Tel Aviv ----------
    afeka: [
      "Afeka é um bairro do norte de Tel Aviv, ao norte do rio Yarkon, e faz parte do setor 1 da cidade.",
      "Faz limite com Tel Baruch a leste, a Universidade de Tel Aviv ao sul, Neve Avivim a oeste e Ramat Aviv Guimel a noroeste.",
      "Foi fundado como cooperativa habitacional de comandantes da Haganá; com os anos, muitas das casas originais foram substituídas por grandes casas de alto padrão.",
    ],
    ajami: [
      "Ajami é um bairro de Jaffa, em Tel Aviv-Yafo, à beira do Mediterrâneo, ao sul da Jaffa Antiga e ao norte do bairro de Jabaliya. Suas ruas correm paralelas à costa.",
      "Tem casas tradicionais de pedra construídas em torno de pátios. Entre seus pontos de referência estão a igreja maronita, a mesquita de Ajami e o Centro Peres para a Paz, na extremidade sul.",
      "A Linha Vermelha do VLT cruza Jaffa de norte a sul pela avenida Jerusalém.",
    ],
    bavli: [
      "Bavli é delimitado pelo parque Yarkon ao norte, pela rodovia Ayalon a leste, pela via Namir a oeste e pelo parque Tzameret ao sul.",
      "Começou como um projeto de habitação pública. Depois foi construído o centro Dekel, e a construção mais recente se concentrou em torres residenciais de alto padrão com vista para o Ayalon.",
      "O bairro é considerado em sua maior parte de classe média alta, e nele vivem muitos casais mais velhos e famílias.",
    ],
    florentin: [
      "Florentin é um bairro do sul de Tel Aviv que faz limite com Neve Tzedek.",
      "Combina moradias com uma área de indústria e oficinas e com comércio atacadista de roupas e móveis.",
      "Sua recuperação começou com um programa de renovação urbana apoiado pela Prefeitura de Tel Aviv, e hoje ele é conhecido pela vida noturna, pelos ateliês de artistas e pela arte de rua.",
    ],
    hatikva: [
      "O bairro Hatikva fica no sudeste de Tel Aviv e tem uma herança judaica iemenita.",
      "Deve seu nome à fazenda Har HaTikva e foi incorporado à área municipal de Tel Aviv depois da Guerra de Independência.",
      "No bairro fica o estádio do bairro Hatikva, e o monumento do Anjo da Paz está em frente ao centro Beit Dani.",
    ],
    jaffa: [
      "Jaffa é uma antiga cidade portuária da costa mediterrânea, na parte sul de Tel Aviv-Yafo. Quando os dois municípios foram unidos, a cidade recebeu o nome de Tel Aviv-Yafo para preservar o nome histórico.",
      "Administrativamente, Jaffa é o setor 7 do município, e é uma das cidades mistas de Israel, com moradores judeus, cristãos e muçulmanos.",
      "Entre seus pontos de referência estão o porto histórico, a torre do relógio, a região do mercado de pulgas e o Museu de Antiguidades de Jaffa.",
      "A Linha Vermelha do VLT cruza Jaffa de norte a sul pela avenida Jerusalém.",
    ],
    'kerem-hateimanim': [
      "Kerem HaTeimanim é um bairro do centro de Tel Aviv, ao lado do mercado Carmel.",
      "Foi fundado por imigrantes judeus do Iêmen, e muitas de suas casas originais eram construções térreas feitas com materiais baratos.",
      "O bairro é em grande parte religioso e seus restaurantes fecham no shabat. Ele passa por um processo de gentrificação.",
    ],
    'kochav-hatzafon': [
      "Kochav HaTzafon é um bairro do noroeste de Tel Aviv, o mais próximo dos bairros situados além do Yarkon, vizinho do Novo Norte e do porto de Tel Aviv.",
      "Seus limites são a rua Ibn Gabirol a oeste, a área do antigo aeroporto Sde Dov ao norte, a via Namir a leste e a avenida Rokach ao sul.",
      "Na parte externa predominam edifícios altos, e na interna há edifícios mais baixos e algumas casas. Um parque de bairro o atravessa de leste a oeste.",
    ],
    montefiore: [
      "O bairro Montefiore vai do Centro Azrieli, ao norte, até a rua Yitzhak Sadeh, ao sul, e da rodovia Ayalon, a leste, até a rua HaMasger e a via Begin, a oeste.",
      "Foi construído nas terras do pomar Montefiore, considerado o primeiro pomar da Terra de Israel plantado e cuidado por judeus.",
      "Sua história urbanística mistura moradia com oficinas, pequena indústria e escritórios, e com os anos foi aprovada ali a construção em altura.",
    ],
    'nahalat-yitzhak': [
      "Nahalat Yitzhak é um bairro do leste de Tel Aviv, a leste da rodovia Ayalon, ao lado dos bairros de Bitzaron e Ramat Yisrael.",
      "Começou como uma colônia agrícola onde também se instalaram fábricas. As Torres de Tel Aviv foram construídas no terreno da antiga fábrica Yitzhar.",
      "Na região funcionou uma fábrica das indústrias militares. Segundo o artigo da Wikipédia, na década de 2020 começaram os trabalhos de descontaminação do terreno para prepará-lo para moradias.",
    ],
    'neve-avivim': [
      "Neve Avivim fica em Ramat Aviv, no norte de Tel Aviv, delimitado pela rua Haim Levanon a leste, pela avenida Keren Kayemet ao norte, pela via Namir a oeste e pela rua Einstein ao sul.",
      "Tem edifícios altos com apartamentos grandes e, no centro, um amplo espaço público com um grande parque de bairro, centros comerciais, escolas e um centro esportivo.",
      "Como os outros bairros de Ramat Aviv, sua população tem perfil socioeconômico alto.",
    ],
    'neve-tzedek': [
      "Neve Tzedek foi o primeiro bairro judaico oficial construído fora das muralhas de Jaffa, antes da fundação de Tel Aviv. Hoje faz parte da cidade.",
      "Seus limites são a rua Pines a nordeste, a trincheira da histórica ferrovia Jaffa–Jerusalém a sudeste, por onde hoje passam a Linha Vermelha do VLT e o parque HaMesila, o estacionamento de Manshiya a sudoeste e a rua Shabazi a noroeste.",
      "O bulevar Rothschild começa no limite leste de Neve Tzedek.",
    ],
    'new-north': [
      "O Novo Norte foi desenvolvido depois da criação do Estado, e seu nome o distingue do Velho Norte.",
      "Pertence ao setor 4 da cidade, atravessado por ruas como Yehuda HaMaccabi, Pinkas, Jabotinsky, Weizmann e Shaul HaMelech, onde se aplica o plano do setor 4 (TA/3729a).",
      "Em 4 de dezembro de 2024, a subcomissão municipal de planejamento tinha em pauta uma alteração das regras de construção baixa no setor 4 (TA/3729b) e um plano que acrescenta usos permitidos no setor (TA/5269).",
    ],
    'old-north': [
      "Pela definição da Prefeitura, o Velho Norte (setor 3) é a área entre o rio Yarkon, ao norte, e a rua Arlozorov, ao sul, delimitada pela rua Ibn Gabirol a leste e pelo Mediterrâneo a oeste.",
      "Foi desenvolvido ao norte do núcleo histórico da cidade e originalmente se chamava o norte da cidade. O nome Velho Norte o distingue do Novo Norte.",
      "O plano do setor 3 (TA/3616a) foi aprovado em 9 de janeiro de 2018.",
    ],
    'ramat-aviv': [
      "Ramat Aviv é o nome de vários bairros do norte de Tel Aviv, ao norte do rio Yarkon.",
      "Na região ficam a Universidade de Tel Aviv, o Museu Eretz Israel, o Centro Yitzhak Rabin, o Museu do Palmach e o Museu do Povo Judeu, e o parque Yarkon fica perto.",
      "Ramat Aviv Alef, conhecido como a verde, tem casas ao lado de prédios baixos de apartamentos entre gramados. O shopping Ramat Aviv fica na parte norte e o centro Brodetsky no meio.",
    ],
    'ramat-hahayal': [
      "Ramat HaHayal é um bairro do nordeste de Tel Aviv, um dos bairros situados além do Yarkon.",
      "Ao lado dele fica a zona industrial de Ever HaYarkon, um polo de empresas de alta tecnologia que às vezes também é chamado de Ramat HaHayal.",
      "Foi construído depois da Guerra de Independência por uma empresa de habitação para soldados desmobilizados, viúvas de guerra e veteranos com deficiência.",
    ],
    'rothschild-boulevard': [
      "O bulevar Rothschild é uma das primeiras ruas de Tel Aviv e vai do limite leste de Neve Tzedek até o complexo Habima. É a espinha dorsal do bairro Lev Tel Aviv.",
      "Faz parte do principal distrito de negócios da cidade. Desde a década de 1990, edifícios baixos ao longo dele vêm sendo substituídos por torres residenciais e de escritórios, ao lado da preservação de edifícios em estilo eclético e Bauhaus.",
      "A Cidade Branca, a parte central de Tel Aviv construída entre as décadas de 1930 e 1950 segundo o plano urbanístico de Sir Patrick Geddes no estilo do Movimento Moderno, está inscrita na Lista do Patrimônio Mundial da UNESCO.",
      "Segundo a NTA, a Linha Roxa do VLT encontrará a Linha Vermelha no cruzamento das ruas Allenby e Yehuda HaLevi. A rua Allenby cruza o bulevar Rothschild.",
    ],
    shapira: [
      "O bairro Shapira fica no sul de Tel Aviv, ao sul da nova estação rodoviária central e da via Shlomo, delimitado pela via Heil HaShiryon e pela rodovia Ayalon a leste, pela via Kibbutz Galuyot ao sul e pela avenida Har Zion a oeste.",
      "Era marcado por casas baixas em um tecido urbano denso. Nos últimos anos, a construção nova é de prédios modernos de apartamentos de vários andares.",
      "A NTA apresentou aos moradores as obras da Linha Verde na avenida Har Zion, entre a via Kibbutz Galuyot e a via Shlomo, ao longo do limite oeste do bairro.",
    ],
    tzahala: [
      "Tzahala é um bairro do nordeste de Tel Aviv-Yafo, na divisa com Ramat HaSharon. Foi criado por iniciativa do governo para abrigar oficiais de alta patente do exército e dos serviços de segurança, e seu nome vem das Forças de Defesa de Israel (Tzahal).",
      "Foi construído com casas em terrenos grandes. Desde a década de 1990, muitas das casas originais foram demolidas e substituídas por casas de alto padrão.",
      "Uma associação cooperativa administra o bairro até hoje. Os moradores pagam taxas de associado, e a maior parte do orçamento vem do arrendamento das lojas do centro comercial que pertence à associação.",
    ],
    'yad-eliyahu': [
      "Yad Eliyahu é um bairro do sudeste de Tel Aviv, delimitado pela rua Yitzhak Sadeh ao norte, pela via Moshe Dayan a leste, pela via HaHagana ao sul e pela rodovia Ayalon a oeste. A rua La Guardia é sua rua principal.",
      "Leva o nome de Eliyahu Golomb e foi construído por iniciativa da Prefeitura de Tel Aviv para abrigar soldados desmobilizados do exército britânico.",
      "No bairro ficam a Menora Mivtachim Arena, o parque Galit e o centro médico de reabilitação Reuth.",
      "A lista de estações da Linha Roxa publicada pela NTA inclui HaHagana e Moshe Dayan, os nomes das vias que delimitam o bairro ao sul e a leste.",
    ],
    // ---------- Haifa ----------
    ahuza: [
      "Ahuza (Ahuzat Shmuel) é um bairro antigo e o centro do setor residencial de Ramot HaCarmel, no divisor de águas da crista do Carmelo.",
      "O principal eixo de trânsito é formado pela avenida Moriah, pela rua Horev e pela avenida Abba Hushi (rodovia 672). A praça Horev, no coração do bairro antigo, liga essas vias.",
      "O plano diretor do bairro foi preparado pelo arquiteto Richard Kauffmann, como um bairro em formato de cidade-jardim no Carmelo.",
    ],
    'bat-galim': [
      "Bat Galim, construído na península do cabo Carmelo, é o único bairro de Haifa cujas casas chegam à beira do mar.",
      "Nele ficam o hospital Rambam e a Faculdade de Medicina do Technion. Um calçadão acompanha a praia e, em sua extremidade, fica a estação do teleférico de Haifa que sobe a Stella Maris.",
      "A ferrovia da costa passa pelo bairro, que conta com a estação ferroviária Haifa Bat Galim.",
      "Duas áreas de renovação urbana em suas ruas principais constam na base do Ministério da Construção e Habitação com plano aprovado, na fase posterior ao licenciamento: HaAliya HaShniya (175 unidades habitacionais existentes, 715 propostas) e Heil HaYam (119 existentes, 467 propostas).",
    ],
    'carmel-center': [
      "O Centro do Carmelo (Merkaz HaCarmel) é um bairro e uma área de cultura e lazer na crista do Carmelo.",
      "Seus limites são a praça Rotary a leste, as ruas Henrietta Szold e Yefe Nof e o passeio Louis ao norte, e o cruzamento das ruas Wolfson e Moriah ao sul.",
      "O terminal superior do Carmelit, o funicular subterrâneo de Haifa, fica no Centro do Carmelo, e o Carmelit o liga a Hadar e à Cidade Baixa.",
      "No bairro sobreviveram e foram preservadas casas de Karmelheim, o subúrbio de veraneio dos templers.",
    ],
    carmelia: [
      "Carmelia foi construído em um esporão ocidental do monte Carmelo, entre o eixo Moriah a leste, Kfar Samir e o conjunto dos cemitérios a oeste, Kababir ao norte e o bairro de Shambur ao sul.",
      "Suas ruas principais são Tzafririm e Lea, e o leito do riacho Siah sai do bairro em direção ao oeste.",
      "As casas das encostas foram construídas em terraços que acompanham o relevo, um estilo muito associado a Carmelia.",
    ],
    denya: [
      "Denya, também conhecido como Hod HaCarmel, é um bairro do sul de Haifa, na parte montanhosa da cidade.",
      "A região foi construída em estilos variados, com predomínio de casas em terrenos maiores que o habitual.",
      "O eixo principal é a avenida Abba Hushi, a estrada que antigamente ligava Haifa a Isfiya.",
      "A maior parte das áreas abertas que restam na região foi declarada parte do parque do Carmelo.",
    ],
    downtown: [
      "A Cidade Baixa (HaIr HaTahtit) é o setor da parte baixa e central de Haifa, que reúne uma série de bairros centrais e boa parte da atividade empresarial da cidade.",
      "Ali fica o complexo de escritórios governamentais do distrito, e nos últimos anos a atividade vem voltando ao setor.",
      "O terminal inferior do Carmelit, o funicular subterrâneo de Haifa, fica na praça Paris, na Cidade Baixa.",
    ],
    'french-carmel': [
      "O Carmelo Francês fica nas encostas noroeste do monte Carmelo. Seu limite oeste é o complexo de Stella Maris, e a leste ficam o Centro do Carmelo e Hadar.",
      "A via que sobe ao bairro pelo oeste é a via Tzarfat, que se liga à rua principal, Tchernichovsky.",
      "Ali ficam o mosteiro carmelita de Nossa Senhora do Monte Carmelo, a Faculdade Acadêmica de Educação Gordon e o Beit HaLochem Haifa.",
      "Na base do Ministério da Construção e Habitação constam duas áreas de renovação urbana: Mordot HaCarmel HaTzarfati tem plano aprovado, na fase posterior ao licenciamento, e Derech Tzarfat 24 a 42 está em planejamento estatutário (85 unidades habitacionais existentes, 416 propostas).",
    ],
    hadar: [
      "Hadar HaCarmel é um dos bairros mais antigos de Haifa e um setor residencial central, no patamar entre a Cidade Baixa e o Carmelo.",
      "Hadar foi fundado como uma cidade-jardim segundo o projeto do arquiteto Richard Kauffmann.",
      "Ali foram construídos o edifício do Technikum, sede histórica do Technion, e a Escola Reali Hebraica.",
      "O Carmelit, o funicular subterrâneo de Haifa, passa por Hadar e o liga à Cidade Baixa e ao Centro do Carmelo.",
    ],
    'kiryat-eliezer': [
      "Kiryat Eliezer fica no setor oeste de Haifa e leva o nome de Eliezer Kaplan, o primeiro ministro das Finanças de Israel.",
      "O bulevar Rothschild cruza o bairro, e no terreno do demolido estádio de Kiryat Eliezer foram construídos edifícios residenciais altos.",
      "A gruta de Elias fica na extremidade oeste do bairro, ao lado do Museu da Imigração Clandestina e da Marinha.",
      "Na base do Ministério da Construção e Habitação constam cinco áreas de renovação urbana com o nome de Kiryat Eliezer: a área 16 tem plano aprovado (96 unidades habitacionais existentes, 430 propostas), e as áreas 11, 12, 13 e 29 estão em planejamento estatutário.",
    ],
    'neve-david': [
      "Neve David é um bairro residencial do oeste de Haifa, na entrada sul da cidade, junto à rodovia 4 e à estrada da costa.",
      "Faz limite com o bairro de Shaar HaAliya ao norte, Ramat HaNasi a leste e os cemitérios de Haifa ao sul.",
      "A área de renovação urbana Yehoshafat – Neve David está em planejamento estatutário (102 unidades habitacionais existentes, 417 propostas), segundo a base do Ministério da Construção e Habitação.",
    ],
    'neve-shaanan': [
      "Neve Shaanan é uma administração local do sudeste de Haifa que abrange um conjunto de bairros na sela oriental da montanha.",
      "A construção é variada: casas térreas segundo o princípio da cidade-jardim, edifícios de dois andares com telhados de telha conhecidos como os telhados vermelhos, conjuntos habitacionais densos e edifícios altos.",
      "A linha de teleférico que atende o Technion aliviou o congestionamento na praça Ziv.",
    ],
    'ramat-almogi': [
      "Ramat Almogi é um bairro do sul de Haifa, na parte montanhosa da cidade, que faz limite com Ramot Remez, Savyonei Denya, Ahuza e Ramat Golda.",
      "Leva o nome do prefeito Yosef Almogi e combina edifícios altos e baixos.",
      "Tem vista para a baía de Haifa e um pequeno centro comercial na rua Einstein.",
    ],
    'ramot-remez': [
      "Ramot Remez é um bairro antigo dentro da área de Neve Shaanan. Suas primeiras casas foram construídas baixas, ao longo da rua HaInternational e da via Hankin, como edifícios de dois andares com telhados de telha vermelha.",
      "É popular entre estudantes porque fica entre o Technion e a Universidade de Haifa, e é cercado de mata por todos os lados.",
      "Entre Ramot Remez e Romema, em Givat Ofer, está previsto um novo bairro, Ramat Zemer.",
    ],
    romema: [
      "Romema se divide em Romema Velha e Romema Nova, também chamada Ramat Ben-Gurion. Entre as duas passa a via Pica, que liga o centro de Ahuza a Neve Shaanan.",
      "Romema Velha, a parte norte, inclui o ginásio de esportes de Romema e o sítio arqueológico de Rosh Maya.",
      "Romema Nova tem muitos edifícios altos ao lado de construção baixa em Givat Oranim.",
      "Entre Romema e Ramot Remez, em Givat Ofer, está previsto um novo bairro, Ramat Zemer.",
    ],
  },
});

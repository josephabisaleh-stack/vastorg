/* ============================================================
   VASTORG — main.js
   ============================================================ */

/* ── Translations ───────────────────────────────────────────── */
const i18n = {
  en: {
    nav_cta:       'Join the waitlist',
    hero_badge:    'Coming soon',
    hero_h1_pre:   'European',
    hero_h1_em:    'wine',
    hero_h1_mid:   'logistics,',
    hero_h1_end:   'anywhere, anytime.',
    hero_sub:      'Freight forwarding for wine producers, négociants and importers — from Europe to the world.',
    hero_cta:      'Get early access',
    hero_discount: 'Early access members get 20% off their first 3 shipments.',
    stat_markets:  'Key markets',
    stat_b2c:      '& B2C',
    stat_specialist: 'Wine specialist',
    why_label:     'Why Vastorg',
    why_title_pre: 'Built for',
    why_title_em:  'wine.',
    why_title_end: 'Designed for the world.',
    why1_title:    'Expert documentation',
    why1_desc:     'From GAMMA2 DAE to FDA Prior Notice — every document, every corridor, handled for you.',
    why2_title:    'Franco-Swiss expertise',
    why2_desc:     'Born at the crossroads of Europe\'s wine heartland. Bordeaux, Burgundy, and Basel — we know them all.',
    why3_title:    'End-to-end logistics',
    why3_desc:     'Producer to consumer. Bonded warehousing. Temperature controlled. We handle everything so you can focus on the wine.',
    wl_label:      'Early access',
    wl_h2_pre:     'Be first to ship',
    wl_h2_end:     'with Vastorg.',
    wl_desc:       'We\'re launching with a select group of producers, négociants, and importers. Reserve your spot for early access and dedicated onboarding.',
    perk1:         'Priority access before public launch',
    perk2:         'Dedicated onboarding with our team',
    perk3:         '20% discount on your first 3 shipments',
    perk4:         'Direct input on routes and features',
    wl_count_label:'on the waitlist',
    field_name:    'Full name *',
    field_email:   'Email *',
    field_company: 'Company',
    field_country: 'Country',
    field_role:    'Your role',
    field_msg:     'Message',
    optional:      '(optional)',
    role_select:   'Select…',
    role_producer: 'Producer / Winery',
    role_negociant:'Négociant / Trader',
    role_importer: 'Importer',
    role_distributor: 'Distributor',
    role_other:    'Other',
    wl_submit:     'Join the waitlist',
    err_required:  'Please fill in your name and email.',
    err_generic:   'Something went wrong. Please try again.',
    sending:       'Sending…',
    ok_greet:      'Welcome, ',
    ok_sub:        'You\'re on the list. We\'ll be in touch before launch.',
    faq_label:     'FAQ',
    faq_title:     'Common questions',
    faq1_q:        'What does Vastorg do?',
    faq1_a:        'We handle wine freight forwarding from European producers to markets worldwide — managing all shipping, customs documentation, and compliance so you don\'t have to.',
    faq2_q:        'Which markets do you cover?',
    faq2_a:        'USA, UK, Canada, Japan, China, Singapore, Switzerland, and throughout the EU — 10+ key markets and growing.',
    faq3_q:        'Do you handle B2C / direct-to-consumer shipments?',
    faq3_a:        'Yes, where regulations permit. We know which markets allow direct-to-consumer delivery and handle all last-mile requirements.',
    faq4_q:        'When are you launching?',
    faq4_a:        'We\'re launching soon with a select group of early partners. Join the waitlist to be among the first.',
    faq5_q:        'What documents are needed to ship wine from France to the USA?',
    faq5_a:        'You need a licensed TTB importer, FDA Prior Notice (≥24h before arrival), a COLA per label, DAE Export via GAMMA2, EX-A declaration via DELTA, BVE, commercial invoice, and CMR or AWB. A 15% EU surcharge applies in 2025 on top of federal excise of $0.21/bottle.',
    faq6_q:        'Can wine be shipped directly to consumers in the EU?',
    faq6_a:        'Yes. Intra-EU B2C (Vente à Distance) requires only a standard commercial invoice — no DAES needed. DHL and FedEx deliver to EU consumer addresses directly. OSS VAT registration applies if annual B2C EU sales exceed €10,000.',
    faq7_q:        'What is bonded warehousing for wine?',
    faq7_a:        'A bonded warehouse (entrepôt fiscal agréé) stores wine under duty suspension — excise is not paid until the wine is released for sale. Managed under EMCS via GAMMA2, it allows wine to be held, blended, or re-exported without immediate tax liability.',
    faq8_q:        'What makes wine logistics different from regular freight?',
    faq8_a:        'Wine is subject to excise duties, alcohol import licences, and market-specific label rules in every country. The US requires a TTB importer; China mandates GACC registration; Canada uses provincial monopolies. Wine also needs temperature control and specific excise documents (DAE, DAES, BVE) that most freight forwarders don\'t handle.',
    msg_placeholder: 'Which routes matter most to you?',
  },

  fr: {
    nav_cta:       'Rejoindre la liste',
    hero_badge:    'Bientôt disponible',
    hero_h1_pre:   'La logistique du',
    hero_h1_em:    'vin',
    hero_h1_mid:   'européen,',
    hero_h1_end:   'partout, tout le temps.',
    hero_sub:      'Commissionnaire de transport pour vignerons, négociants et importateurs — de l\'Europe au monde.',
    hero_cta:      'Accès anticipé',
    hero_discount: 'Les membres en accès anticipé bénéficient de 20 % de réduction sur leurs 3 premiers envois.',
    stat_markets:  'Marchés clés',
    stat_b2c:      '& B2C',
    stat_specialist: 'Spécialiste vin',
    why_label:     'Pourquoi Vastorg',
    why_title_pre: 'Conçu pour le',
    why_title_em:  'vin.',
    why_title_end: 'Pensé pour le monde.',
    why1_title:    'Documentation experte',
    why1_desc:     'Du DAE GAMMA2 au Prior Notice FDA — chaque document, chaque corridor, géré pour vous.',
    why2_title:    'Expertise franco-suisse',
    why2_desc:     'Né au carrefour du cœur viticole de l\'Europe. Bordeaux, la Bourgogne, Bâle — nous les connaissons tous.',
    why3_title:    'Logistique bout en bout',
    why3_desc:     'Du producteur au consommateur. Entreposage sous douane. Chaîne du froid. On gère tout pour que vous puissiez vous concentrer sur le vin.',
    wl_label:      'Accès anticipé',
    wl_h2_pre:     'Soyez parmi les premiers',
    wl_h2_end:     'à expédier avec Vastorg.',
    wl_desc:       'Nous lançons avec un groupe sélectionné de vignerons, négociants et importateurs. Réservez votre place pour un accès prioritaire et un onboarding dédié.',
    perk1:         'Accès prioritaire avant le lancement public',
    perk2:         'Onboarding dédié avec notre équipe',
    perk3:         '20% de réduction sur vos 3 premières expéditions',
    perk4:         'Contribution directe aux corridors et fonctionnalités',
    wl_count_label:'sur la liste d\'attente',
    field_name:    'Nom complet *',
    field_email:   'Email *',
    field_company: 'Société',
    field_country: 'Pays',
    field_role:    'Votre rôle',
    field_msg:     'Message',
    optional:      '(optionnel)',
    role_select:   'Sélectionner…',
    role_producer: 'Producteur / Vigneron',
    role_negociant:'Négociant',
    role_importer: 'Importateur',
    role_distributor: 'Distributeur',
    role_other:    'Autre',
    wl_submit:     'Rejoindre la liste d\'attente',
    err_required:  'Veuillez renseigner votre nom et email.',
    err_generic:   'Une erreur est survenue. Veuillez réessayer.',
    sending:       'Envoi en cours…',
    ok_greet:      'Bienvenue, ',
    ok_sub:        'Vous êtes sur la liste. Nous vous contacterons avant le lancement.',
    faq_label:     'FAQ',
    faq_title:     'Questions fréquentes',
    faq1_q:        'Que fait Vastorg ?',
    faq1_a:        'Nous gérons le transport de vin depuis les producteurs européens vers les marchés mondiaux — en prenant en charge toute la logistique, la documentation douanière et la conformité.',
    faq2_q:        'Quels marchés couvrez-vous ?',
    faq2_a:        'États-Unis, Royaume-Uni, Canada, Japon, Chine, Singapour, Suisse et toute l\'UE — plus de 10 marchés clés en croissance.',
    faq3_q:        'Gérez-vous les expéditions B2C / directes au consommateur ?',
    faq3_a:        'Oui, là où la réglementation le permet. Nous savons quels marchés autorisent le DTC et gérons toutes les exigences.',
    faq4_q:        'Quand lancez-vous ?',
    faq4_a:        'Nous lançons prochainement avec un groupe sélectionné de partenaires. Rejoignez la liste pour être parmi les premiers.',
    faq5_q:        'Quels documents faut-il pour expédier du vin de France vers les États-Unis ?',
    faq5_a:        'Il faut un importateur TTB agréé, un Prior Notice FDA (≥24h avant l\'arrivée), un COLA par étiquette, le DAE Export via GAMMA2, la déclaration EX-A via DELTA, le BVE, la facture commerciale et un CMR ou AWB. Une surtaxe UE de 15% s\'applique en 2025 en plus des droits d\'accise fédéraux de 0,21$/bouteille.',
    faq6_q:        'Peut-on livrer du vin directement aux consommateurs dans l\'UE ?',
    faq6_a:        'Oui. La Vente à Distance intra-UE ne nécessite qu\'une facture commerciale standard — aucun DAES n\'est requis. DHL et FedEx livrent directement aux particuliers. L\'inscription à l\'OSS TVA s\'applique si les ventes B2C UE annuelles dépassent 10 000 €.',
    faq7_q:        'Qu\'est-ce qu\'un entrepôt sous douane pour le vin ?',
    faq7_a:        'Un entrepôt fiscal agréé conserve le vin en suspension de droits d\'accise — les taxes ne sont dues qu\'à la mise à la consommation. Géré sous EMCS via GAMMA2, il permet de stocker, d\'assembler ou de réexporter le vin sans déclencher immédiatement l\'accise.',
    faq8_q:        'En quoi la logistique viticole diffère-t-elle du fret standard ?',
    faq8_a:        'Le vin est soumis aux droits d\'accise, aux licences d\'importation d\'alcool et à des règles d\'étiquetage spécifiques à chaque pays. Les États-Unis imposent un importateur TTB ; la Chine exige l\'enregistrement GACC ; le Canada opère via des monopoles provinciaux. Le vin nécessite aussi un transport sous température dirigée et des documents d\'accise spécifiques (DAE, DAES, BVE) que la plupart des transitaires ne maîtrisent pas.',
    msg_placeholder: 'Quels corridors vous intéressent le plus ?',
  },

  es: {
    nav_cta:       'Unirse a la lista',
    hero_badge:    'Próximamente',
    hero_h1_pre:   'Logística de',
    hero_h1_em:    'vino',
    hero_h1_mid:   'europeo,',
    hero_h1_end:   'en cualquier lugar, siempre.',
    hero_sub:      'Transporte de carga para productores de vino, négociants e importadores — desde Europa al mundo.',
    hero_cta:      'Acceso anticipado',
    hero_discount: 'Los miembros de acceso anticipado obtienen un 20 % de descuento en sus primeros 3 envíos.',
    stat_markets:  'Mercados clave',
    stat_b2c:      '& B2C',
    stat_specialist: 'Especialista en vino',
    why_label:     'Por qué Vastorg',
    why_title_pre: 'Creado para el',
    why_title_em:  'vino.',
    why_title_end: 'Diseñado para el mundo.',
    why1_title:    'Documentación experta',
    why1_desc:     'Desde DAE GAMMA2 hasta FDA Prior Notice — cada documento, cada corredor, gestionado para usted.',
    why2_title:    'Experiencia franco-suiza',
    why2_desc:     'Nacido en el corazón vinícola de Europa. Burdeos, Borgoña y Basilea — los conocemos todos.',
    why3_title:    'Logística completa',
    why3_desc:     'Del productor al consumidor. Almacén en depósito. Control de temperatura. Gestionamos todo para que usted se centre en el vino.',
    wl_label:      'Acceso anticipado',
    wl_h2_pre:     'Sea el primero en enviar',
    wl_h2_end:     'con Vastorg.',
    wl_desc:       'Lanzamos con un grupo selecto de productores, négociants e importadores. Reserve su lugar para acceso anticipado y onboarding dedicado.',
    perk1:         'Acceso prioritario antes del lanzamiento',
    perk2:         'Onboarding dedicado con nuestro equipo',
    perk3:         '20% de descuento en tus primeros 3 envíos',
    perk4:         'Opinión directa sobre rutas y funciones',
    wl_count_label:'en lista de espera',
    field_name:    'Nombre completo *',
    field_email:   'Email *',
    field_company: 'Empresa',
    field_country: 'País',
    field_role:    'Su función',
    field_msg:     'Mensaje',
    optional:      '(opcional)',
    role_select:   'Seleccionar…',
    role_producer: 'Productor / Bodega',
    role_negociant:'Négociant / Comerciante',
    role_importer: 'Importador',
    role_distributor: 'Distribuidor',
    role_other:    'Otro',
    wl_submit:     'Unirse a la lista de espera',
    err_required:  'Por favor, complete su nombre y email.',
    err_generic:   'Algo salió mal. Por favor, inténtelo de nuevo.',
    sending:       'Enviando…',
    ok_greet:      'Bienvenido, ',
    ok_sub:        'Está en la lista. Le contactaremos antes del lanzamiento.',
    faq_label:     'FAQ',
    faq_title:     'Preguntas frecuentes',
    faq1_q:        '¿Qué hace Vastorg?',
    faq1_a:        'Gestionamos el transporte de vino desde productores europeos a mercados mundiales — ocupándonos de toda la logística, documentación aduanera y cumplimiento normativo.',
    faq2_q:        '¿Qué mercados cubrís?',
    faq2_a:        'EE.UU., Reino Unido, Canadá, Japón, China, Singapur, Suiza y toda la UE — más de 10 mercados clave en crecimiento.',
    faq3_q:        '¿Gestionáis envíos B2C / directos al consumidor?',
    faq3_a:        'Sí, donde la normativa lo permite. Sabemos qué mercados permiten DTC y gestionamos todos los requisitos.',
    faq4_q:        '¿Cuándo lanzáis?',
    faq4_a:        'Lanzamos pronto con un grupo selecto de socios tempranos. Únase a la lista para ser de los primeros.',
    faq5_q:        '¿Qué documentos se necesitan para enviar vino de Francia a EE.UU.?',
    faq5_a:        'Se necesita un importador TTB autorizado, FDA Prior Notice (≥24h antes de la llegada), un COLA por etiqueta, DAE Export vía GAMMA2, declaración EX-A vía DELTA, BVE, factura comercial y CMR o AWB. En 2025 se aplica un recargo UE del 15% además del impuesto federal de $0,21/botella.',
    faq6_q:        '¿Se puede enviar vino directamente a consumidores en la UE?',
    faq6_a:        'Sí. La Venta a Distancia intra-UE solo requiere una factura comercial estándar — no hace falta DAES. DHL y FedEx entregan directamente a consumidores. El registro OSS de IVA aplica si las ventas B2C anuales en la UE superan los 10.000 €.',
    faq7_q:        '¿Qué es el almacén en depósito fiscal para el vino?',
    faq7_a:        'Un almacén fiscal almacena vino con suspensión de impuestos especiales — los impuestos no se pagan hasta la puesta en consumo. Gestionado bajo EMCS vía GAMMA2, permite almacenar, mezclar o reexportar sin generar obligación fiscal inmediata.',
    faq8_q:        '¿En qué se diferencia la logística del vino del frete normal?',
    faq8_a:        'El vino está sujeto a impuestos especiales, licencias de importación de alcohol y requisitos de etiquetado específicos en cada país. EE.UU. exige un importador TTB; China requiere registro GACC; Canadá opera con monopolios provinciales. El vino también necesita transporte a temperatura controlada y documentos de accisa específicos (DAE, DAES, BVE) que la mayoría de transitarios no gestionan.',
    msg_placeholder: '¿Qué rutas son más importantes para ti?',
  },

  it: {
    nav_cta:       'Unisciti alla lista',
    hero_badge:    'Prossimamente',
    hero_h1_pre:   'Logistica del',
    hero_h1_em:    'vino',
    hero_h1_mid:   'europeo,',
    hero_h1_end:   'ovunque, sempre.',
    hero_sub:      'Spedizioni per produttori di vino, négociants e importatori — dall\'Europa al mondo.',
    hero_cta:      'Accesso anticipato',
    hero_discount: 'I membri in accesso anticipato ottengono il 20% di sconto sui primi 3 spedizioni.',
    stat_markets:  'Mercati chiave',
    stat_b2c:      '& B2C',
    stat_specialist: 'Specialista del vino',
    why_label:     'Perché Vastorg',
    why_title_pre: 'Creato per il',
    why_title_em:  'vino.',
    why_title_end: 'Pensato per il mondo.',
    why1_title:    'Documentazione esperta',
    why1_desc:     'Dal DAE GAMMA2 al FDA Prior Notice — ogni documento, ogni corridoio, gestito per te.',
    why2_title:    'Competenza franco-svizzera',
    why2_desc:     'Nati al crocevia del cuore vinicolo d\'Europa. Bordeaux, Borgogna e Basilea — le conosciamo tutte.',
    why3_title:    'Logistica completa',
    why3_desc:     'Dal produttore al consumatore. Magazzino doganale. Catena del freddo. Gestiamo tutto così tu puoi concentrarti sul vino.',
    wl_label:      'Accesso anticipato',
    wl_h2_pre:     'Sii tra i primi a spedire',
    wl_h2_end:     'con Vastorg.',
    wl_desc:       'Lanciamo con un gruppo selezionato di produttori, négociants e importatori. Prenota il tuo posto per l\'accesso anticipato e l\'onboarding dedicato.',
    perk1:         'Accesso prioritario prima del lancio',
    perk2:         'Onboarding dedicato con il nostro team',
    perk3:         '20% di sconto sui tuoi primi 3 spedizioni',
    perk4:         'Input diretto su rotte e funzionalità',
    wl_count_label:'in lista d\'attesa',
    field_name:    'Nome completo *',
    field_email:   'Email *',
    field_company: 'Azienda',
    field_country: 'Paese',
    field_role:    'Il tuo ruolo',
    field_msg:     'Messaggio',
    optional:      '(opzionale)',
    role_select:   'Seleziona…',
    role_producer: 'Produttore / Cantina',
    role_negociant:'Négociant / Commerciante',
    role_importer: 'Importatore',
    role_distributor: 'Distributore',
    role_other:    'Altro',
    wl_submit:     'Unisciti alla lista d\'attesa',
    err_required:  'Per favore, inserisci nome ed email.',
    err_generic:   'Qualcosa è andato storto. Riprova.',
    sending:       'Invio…',
    ok_greet:      'Benvenuto, ',
    ok_sub:        'Sei nella lista. Ti contatteremo prima del lancio.',
    faq_label:     'FAQ',
    faq_title:     'Domande frequenti',
    faq1_q:        'Cosa fa Vastorg?',
    faq1_a:        'Gestiamo il trasporto di vino dai produttori europei ai mercati mondiali — occupandoci di tutta la logistica, documentazione doganale e conformità.',
    faq2_q:        'Quali mercati coprite?',
    faq2_a:        'USA, UK, Canada, Giappone, Cina, Singapore, Svizzera e tutta l\'UE — più di 10 mercati chiave in crescita.',
    faq3_q:        'Gestite spedizioni B2C / dirette al consumatore?',
    faq3_a:        'Sì, dove la normativa lo consente. Sappiamo quali mercati permettono il DTC e gestiamo tutti i requisiti.',
    faq4_q:        'Quando lancerete?',
    faq4_a:        'Lanciamo presto con un gruppo selezionato di partner. Unisciti alla lista per essere tra i primi.',
    faq5_q:        'Quali documenti servono per spedire vino dalla Francia agli USA?',
    faq5_a:        'Servono un importatore TTB autorizzato, FDA Prior Notice (≥24h prima dell\'arrivo), un COLA per etichetta, DAE Export via GAMMA2, dichiarazione EX-A via DELTA, BVE, fattura commerciale e CMR o AWB. Nel 2025 si applica un dazio aggiuntivo UE del 15% oltre all\'accisa federale di $0,21/bottiglia.',
    faq6_q:        'Si può spedire vino direttamente ai consumatori nell\'UE?',
    faq6_a:        'Sì. La Vendita a Distanza intra-UE richiede solo una fattura commerciale standard — nessun DAES necessario. DHL e FedEx consegnano direttamente ai consumatori. La registrazione OSS IVA si applica se le vendite B2C UE annuali superano i 10.000 €.',
    faq7_q:        'Cos\'è il magazzino doganale per il vino?',
    faq7_a:        'Un magazzino fiscale autorizzato conserva il vino in sospensione d\'accisa — le tasse non vengono pagate finché il vino non viene immesso in consumo. Gestito sotto EMCS via GAMMA2, consente di stoccare, miscelare o riesportare senza obbligo fiscale immediato.',
    faq8_q:        'Cosa rende la logistica del vino diversa dal normale trasporto merci?',
    faq8_a:        'Il vino è soggetto ad accise, licenze di importazione di alcolici e requisiti di etichettatura specifici per paese. Gli USA richiedono un importatore TTB; la Cina impone la registrazione GACC; il Canada opera con monopoli provinciali. Il vino richiede anche trasporto a temperatura controllata e documenti specifici (DAE, DAES, BVE) che la maggior parte degli spedizionieri non gestisce.',
    msg_placeholder: 'Quali rotte ti interessano di più?',
  },

  pt: {
    nav_cta:       'Entrar na lista',
    hero_badge:    'Em breve',
    hero_h1_pre:   'Logística de',
    hero_h1_em:    'vinho',
    hero_h1_mid:   'europeu,',
    hero_h1_end:   'em qualquer lugar, sempre.',
    hero_sub:      'Transporte de carga para produtores de vinho, négociants e importadores — da Europa para o mundo.',
    hero_cta:      'Acesso antecipado',
    hero_discount: 'Os membros de acesso antecipado recebem 20% de desconto nos primeiros 3 envios.',
    stat_markets:  'Mercados-chave',
    stat_b2c:      '& B2C',
    stat_specialist: 'Especialista em vinho',
    why_label:     'Porquê Vastorg',
    why_title_pre: 'Criado para o',
    why_title_em:  'vinho.',
    why_title_end: 'Pensado para o mundo.',
    why1_title:    'Documentação especializada',
    why1_desc:     'Do DAE GAMMA2 ao FDA Prior Notice — cada documento, cada corredor, tratado por nós.',
    why2_title:    'Expertise franco-suíça',
    why2_desc:     'Nascido no coração vitícola da Europa. Bordéus, Borgonha e Basileia — conhecemos todas.',
    why3_title:    'Logística completa',
    why3_desc:     'Do produtor ao consumidor. Armazém aduaneiro. Cadeia de frio. Tratamos de tudo para que se concentre no vinho.',
    wl_label:      'Acesso antecipado',
    wl_h2_pre:     'Seja dos primeiros a enviar',
    wl_h2_end:     'com Vastorg.',
    wl_desc:       'Lançamos com um grupo selecionado de produtores, négociants e importadores. Reserve o seu lugar para acesso antecipado e onboarding dedicado.',
    perk1:         'Acesso prioritário antes do lançamento',
    perk2:         'Onboarding dedicado com a nossa equipa',
    perk3:         '20% de desconto nas suas primeiras 3 expedições',
    perk4:         'Contribuição direta em rotas e funcionalidades',
    wl_count_label:'na lista de espera',
    field_name:    'Nome completo *',
    field_email:   'Email *',
    field_company: 'Empresa',
    field_country: 'País',
    field_role:    'A sua função',
    field_msg:     'Mensagem',
    optional:      '(opcional)',
    role_select:   'Selecionar…',
    role_producer: 'Produtor / Adega',
    role_negociant:'Négociant / Comerciante',
    role_importer: 'Importador',
    role_distributor: 'Distribuidor',
    role_other:    'Outro',
    wl_submit:     'Entrar na lista de espera',
    err_required:  'Por favor, preencha o seu nome e email.',
    err_generic:   'Algo correu mal. Por favor, tente novamente.',
    sending:       'A enviar…',
    ok_greet:      'Bem-vindo, ',
    ok_sub:        'Está na lista. Entraremos em contacto antes do lançamento.',
    faq_label:     'FAQ',
    faq_title:     'Perguntas frequentes',
    faq1_q:        'O que faz a Vastorg?',
    faq1_a:        'Gerimos o transporte de vinho de produtores europeus para mercados mundiais — tratando de toda a logística, documentação aduaneira e conformidade.',
    faq2_q:        'Que mercados cobrem?',
    faq2_a:        'EUA, Reino Unido, Canadá, Japão, China, Singapura, Suíça e toda a UE — mais de 10 mercados-chave em crescimento.',
    faq3_q:        'Gerem envios B2C / diretos ao consumidor?',
    faq3_a:        'Sim, onde a regulamentação o permite. Sabemos quais os mercados que permitem entrega direta ao consumidor e tratamos de todos os requisitos.',
    faq4_q:        'Quando é o lançamento?',
    faq4_a:        'Lançamos em breve com um grupo selecionado de parceiros. Junte-se à lista para ser dos primeiros.',
    faq5_q:        'Que documentos são necessários para enviar vinho de França para os EUA?',
    faq5_a:        'São necessários um importador TTB licenciado, FDA Prior Notice (≥24h antes da chegada), um COLA por rótulo, DAE Export via GAMMA2, declaração EX-A via DELTA, BVE, fatura comercial e CMR ou AWB. Em 2025 aplica-se uma sobretaxa UE de 15% além do imposto federal de $0,21/garrafa.',
    faq6_q:        'É possível enviar vinho diretamente aos consumidores na UE?',
    faq6_a:        'Sim. A Venda à Distância intra-UE requer apenas uma fatura comercial padrão — não é necessário DAES. A DHL e a FedEx entregam diretamente a consumidores. O registo OSS de IVA aplica-se se as vendas B2C anuais na UE ultrapassarem os 10.000 €.',
    faq7_q:        'O que é o armazém aduaneiro para vinho?',
    faq7_a:        'Um armazém fiscal autorizado armazena vinho em suspensão de imposto especial — o imposto não é pago até o vinho ser introduzido no consumo. Gerido sob EMCS via GAMMA2, permite armazenar, lotear ou reexportar sem obrigação fiscal imediata.',
    faq8_q:        'O que distingue a logística do vinho do transporte normal de mercadorias?',
    faq8_a:        'O vinho está sujeito a impostos especiais, licenças de importação de álcool e requisitos de rotulagem específicos em cada país. Os EUA exigem um importador TTB; a China impõe registo GACC; o Canadá opera com monopólios provinciais. O vinho exige também transporte a temperatura controlada e documentos específicos (DAE, DAES, BVE) que a maioria dos transitários não domina.',
    msg_placeholder: 'Quais as rotas que mais lhe interessam?',
  }
};

/* ── Language ───────────────────────────────────────────────── */
let lang = 'en';

function setLang(l) {
  lang = l;
  document.documentElement.lang = l;
  ['en', 'fr', 'es', 'it', 'pt'].forEach(code => {
    document.getElementById('btn-' + code).classList.toggle('active', code === l);
  });
  const t = i18n[l];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });
  // Restore em tags in h2 (textContent strips HTML)
  const wlH2End = document.querySelector('[data-i18n="wl_h2_end"]');
  if (wlH2End) wlH2End.innerHTML = t.wl_h2_end.replace('Vastorg.', '<em>Vastorg.</em>');
  // Textarea placeholder
  const msgField = document.getElementById('f-msg');
  if (msgField) msgField.placeholder = t.msg_placeholder;
}

/* ── Nav scroll ─────────────────────────────────────────────── */
window.addEventListener('scroll', () => {
  document.getElementById('nav').classList.toggle('scrolled', scrollY > 40);
}, { passive: true });

/* ── Reveal on scroll ───────────────────────────────────────── */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('vis');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ── Utilities ──────────────────────────────────────────────── */
function scrollToWaitlist() {
  document.getElementById('waitlist').scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('footer-copy').textContent =
  '© ' + new Date().getFullYear() + ' Vastorg · European Wine Logistics';

/* ── Waitlist form ──────────────────────────────────────────── */
async function submitWL(e) {
  e.preventDefault();
  const t      = i18n[lang];
  const btn    = document.getElementById('wl-btn');
  const btxt   = document.getElementById('btn-txt');
  const errEl  = document.getElementById('f-err');
  const name   = document.getElementById('f-name').value.trim();
  const email  = document.getElementById('f-email').value.trim();
  const company = document.getElementById('f-co').value.trim();
  const country = document.getElementById('f-ctry').value.trim();
  const role   = document.getElementById('f-role').value;
  const message = document.getElementById('f-msg').value.trim();

  errEl.style.display = 'none';
  if (!name || !email) {
    errEl.textContent = t.err_required;
    errEl.style.display = 'block';
    return;
  }

  btn.disabled = true;
  btxt.textContent = t.sending;

  try {
    const res = await fetch('/api/waitlist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, company, role, country, message, language: lang })
    });
    if (!res.ok) throw new Error();
    showSuccess(name);
  } catch {
    btn.disabled = false;
    btxt.textContent = t.wl_submit;
    errEl.textContent = t.err_generic;
    errEl.style.display = 'block';
  }
}

function showSuccess(name) {
  const t = i18n[lang];
  const first = name.split(' ')[0];
  document.getElementById('form-area').innerHTML = `
    <div class="f-ok">
      <div class="f-ok-icon">✦</div>
      <h3>${t.ok_greet}${first}.</h3>
      <p>${t.ok_sub}</p>
    </div>
  `;
  const countEl = document.getElementById('wl-n');
  if (countEl && countEl.textContent === '—') countEl.textContent = '1';
}

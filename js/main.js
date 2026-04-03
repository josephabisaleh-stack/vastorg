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
    hero_sub:      'Freight forwarding for wine producers, négociants and importers — from France to the world.',
    hero_cta:      'Get early access',
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
    perk3:         'Preferential launch pricing',
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
    msg_placeholder: 'Which routes matter most to you?',
  },

  fr: {
    nav_cta:       'Rejoindre la liste',
    hero_badge:    'Bientôt disponible',
    hero_h1_pre:   'La logistique du',
    hero_h1_em:    'vin',
    hero_h1_mid:   'européen,',
    hero_h1_end:   'partout, tout le temps.',
    hero_sub:      'Commissionnaire de transport pour vignerons, négociants et importateurs — de la France au monde.',
    hero_cta:      'Accès anticipé',
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
    perk3:         'Tarifs préférentiels au lancement',
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
    msg_placeholder: 'Quels corridors vous intéressent le plus ?',
  },

  es: {
    nav_cta:       'Unirse a la lista',
    hero_badge:    'Próximamente',
    hero_h1_pre:   'Logística de',
    hero_h1_em:    'vino',
    hero_h1_mid:   'europeo,',
    hero_h1_end:   'en cualquier lugar, siempre.',
    hero_sub:      'Transporte de carga para productores de vino, négociants e importadores — desde Francia al mundo.',
    hero_cta:      'Acceso anticipado',
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
    perk3:         'Precios preferentes en el lanzamiento',
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
    msg_placeholder: '¿Qué rutas son más importantes para ti?',
  },

  it: {
    nav_cta:       'Unisciti alla lista',
    hero_badge:    'Prossimamente',
    hero_h1_pre:   'Logistica del',
    hero_h1_em:    'vino',
    hero_h1_mid:   'europeo,',
    hero_h1_end:   'ovunque, sempre.',
    hero_sub:      'Spedizioni per produttori di vino, négociants e importatori — dalla Francia al mondo.',
    hero_cta:      'Accesso anticipato',
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
    perk3:         'Prezzi preferenziali al lancio',
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
    msg_placeholder: 'Quali rotte ti interessano di più?',
  }
};

/* ── Language ───────────────────────────────────────────────── */
let lang = 'en';

function setLang(l) {
  lang = l;
  document.documentElement.lang = l;
  ['en', 'fr', 'es', 'it'].forEach(code => {
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

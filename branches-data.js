// ─────────────────────────────────────────────
// CONFIG
// ─────────────────────────────────────────────
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzI9o5OyGbVcsj7yQjnNnsCoTta3jN_ZaabJNlYmwQm1kkdZqvApGUJT6gF79eVaOG_/exec';

// ─────────────────────────────────────────────
// DONNÉES COMPLÈTES DES BRANCHES
// ─────────────────────────────────────────────
const BRANCHES = [
  {
    id: 'concert',
    name: 'Branche Concert',
    tagline: 'La scène est à toi.',
    desc: 'Organisation d\'événements musicaux, concerts live et showcases sur le campus IESEG.',
    color: '#c8402a',
    collab: null,
    photo: 'card-concert.jpeg',
    photoPos: 'center 30%',

    description: `La Branche Concert est le cœur battant du BDA. On organise des concerts live, des showcases et des soirées musicales qui rassemblent toute la communauté IESEG autour de la musique. Que tu sois musicien, chanteur, guitariste ou simple passionné de live music, tu as ta place ici.\n\nChaque année, la branche produit plusieurs événements d'envergure sur le campus et dans la métropole lilloise, en donnant à des artistes étudiants la chance de monter sur scène devant un vrai public.`,

    activities: [
      { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>`, label: 'Concerts live sur campus' },
      { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>`, label: 'Coaching & répétitions' },
      { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>`, label: 'Showcases & open mics' },
      { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>`, label: 'Communauté de musiciens' },
    ],

    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>`,
    tagIcon: `<svg viewBox="0 0 24 24"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>`
  },

  {
    id: 'bpm',
    name: 'Branche BPM',
    tagline: 'Le son entre tes mains.',
    desc: 'DJ sets, mix et production musicale. Pour tous les passionnés de la scène électronique.',
    color: '#6b3db5',
    collab: null,
    photo: 'card-bpm.jpeg',
    photoPos: 'center 25%',

    description: `La Branche BPM (Beats Per Minute) réunit les amateurs de musique électronique, de DJ culture et de production sonore. Tu veux apprendre à mixer, découvrir les bases de la production ou simplement être dans l'ambiance des soirées électroniques de l'IESEG ? C'est ici.\n\nLa branche organise des formations aux platines Pioneer, des sessions d'écoute collective et met en lumière les talents DJ de l'école lors des grandes soirées BDA.`,

    activities: [
      { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="9"/></svg>`, label: 'Initiation aux platines DJ' },
      { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`, label: 'Production musicale' },
      { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>`, label: 'DJ sets lors des soirées BDA' },
      { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`, label: 'Sessions de mix & découverte' },
    ],

    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="9"/><line x1="3" y1="12" x2="7" y2="12"/><line x1="17" y1="12" x2="21" y2="12"/><line x1="12" y1="3" x2="12" y2="7"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
    tagIcon: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="9"/></svg>`
  },

  {
    id: 'dessin',
    name: 'Branche Dessin',
    tagline: 'Donne vie à tes idées.',
    desc: 'Illustration, peinture et arts visuels. Ateliers créatifs et expositions tout au long de l\'année.',
    color: '#d97820',
    collab: null,
    photo: 'card-dessin.jpeg',
    photoPos: 'center 20%',

    description: `La Branche Dessin est l'espace de création visuelle du BDA. Illustration, peinture, aquarelle, dessin numérique, street art — toutes les formes d'expression plastique y ont leur place. Peu importe ton niveau, la branche accueille aussi bien les débutants que les artistes confirmés.\n\nSur l'année, on organise des ateliers thématiques, des sessions live painting lors des événements BDA et une exposition de fin d'année qui met en valeur les œuvres des membres.`,

    activities: [
      { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/></svg>`, label: 'Ateliers dessin & peinture' },
      { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>`, label: 'Exposition annuelle' },
      { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20h.01M7 20v-4"/><path d="M12 20V10"/><path d="M17 20V4"/><path d="M22 20v-8"/></svg>`, label: 'Live painting & events' },
      { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>`, label: 'Dessin numérique & illustration' },
    ],

    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>`,
    tagIcon: `<svg viewBox="0 0 24 24"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/></svg>`
  },

  {
    id: 'cinema',
    name: 'Branche Cinéma',
    tagline: 'Raconte. Filme. Émeut.',
    desc: 'Tournage, montage, réalisation de courts-métrages et ciné-clubs.',
    color: '#1a6eb5',
    collab: null,
    photo: 'card-cinema.jpg',
    photoPos: 'center center',

    description: `La Branche Cinéma du BDA est un laboratoire créatif dédié au 7e art. Écriture de scénario, tournage, montage vidéo, direction d'acteurs — on couvre toute la chaîne de création cinématographique. Que tu veuilles réaliser ton premier court-métrage ou simplement partager ta passion du cinéma, la branche est faite pour toi.\n\nOn organise des ciné-clubs réguliers, des ateliers techniques et un festival de courts-métrages en fin d'année où les productions des membres sont projetées devant toute la communauté IESEG.`,

    activities: [
      { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="2"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/></svg>`, label: 'Tournage de courts-métrages' },
      { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>`, label: 'Montage & post-production' },
      { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>`, label: 'Ciné-clubs & projections' },
      { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>`, label: 'Ateliers scénario & écriture' },
    ],

    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="7" x2="7" y2="7"/><line x1="2" y1="17" x2="7" y2="17"/><line x1="17" y1="17" x2="22" y2="17"/><line x1="17" y1="7" x2="22" y2="7"/></svg>`,
    tagIcon: `<svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="2"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/></svg>`
  },

  {
    id: 'photo',
    name: 'Branche Photographie',
    tagline: 'Capture l\'instant.',
    desc: 'Photographie artistique, reportages et expositions. En collaboration avec l\'association REC.',
    color: '#1d7a5f',
    collab: 'En collab avec REC',
    photo: 'card-photo.jpg',
    photoPos: 'center 40%',

    description: `La Branche Photographie Artistique du BDA, en collaboration avec l'association REC, te propose de développer ton œil et ta technique photographique dans un cadre bienveillant et stimulant. Portrait, reportage, photo de rue, macro, argentique — tous les styles sont explorés.\n\nEnsemble, on organise des sorties photo dans Lille, des workshops animés par des photographes passionnés, des retours collectifs sur les productions et une exposition annuelle qui donne une vraie vitrine à vos travaux.`,

    activities: [
      { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></svg>`, label: 'Sorties photo dans Lille' },
      { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>`, label: 'Exposition annuelle' },
      { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`, label: 'Workshops & retours collectifs' },
      { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>`, label: 'Collab avec l\'asso REC' },
    ],

    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></svg>`,
    tagIcon: `<svg viewBox="0 0 24 24"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></svg>`
  },

  {
    id: 'danse',
    name: 'Branche Danse',
    tagline: 'Bouge. Ressens. Exprime.',
    desc: 'Tous styles de danse, chorégraphies et spectacles. En partenariat avec IESEG Danse.',
    color: '#b5375e',
    collab: 'En collab avec IESEG Danse',
    photo: 'card-danse.webp',
    photoPos: 'center 20%',

    description: `La Branche Danse du BDA, en partenariat avec l'association IESEG Danse, c'est l'espace où tous les styles se mélangent : hip-hop, contemporain, afro, waacking, dancehall... Débutant ou danseur confirmé, tu seras accueilli·e sans jugement dans une ambiance chaleureuse et passionnée.\n\nOn monte des chorégraphies pour les grands événements de l'école, on participe à des battles interécoles et on organise un gala de danse annuel qui est l'un des temps forts du calendrier BDA.`,

    activities: [
      { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="4" r="1.5"/><path d="M9 8l-2 5h10L15 8"/><path d="M9 13l-1 6h2l2-4 2 4h2l-1-6"/></svg>`, label: 'Entraînements hebdomadaires' },
      { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`, label: 'Gala annuel de danse' },
      { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>`, label: 'Battles & compétitions interécoles' },
      { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>`, label: 'Collab avec IESEG Danse' },
    ],

    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="4" r="1.5"/><path d="M9 8l-2 5h10L15 8"/><path d="M9 13l-1 6h2l2-4 2 4h2l-1-6"/><path d="M8.5 8.5c-.5-1-1-2-1-3"/><path d="M15.5 8.5c.5-1 1-2 1-3"/></svg>`,
    tagIcon: `<svg viewBox="0 0 24 24"><circle cx="12" cy="4" r="1.5"/><path d="M9 8l-2 5h10L15 8"/><path d="M9 13l-1 6h2l2-4 2 4h2l-1-6"/></svg>`
  }
];

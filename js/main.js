const PROJECTS = [
  { id: 1, title: "Stage Orange Money RDC (OMRDC)", meta: "Juin — sept. 2026 · 3 mois · Marketing Produit & Partenariat", cat: "experience", status: "livre", featured: true,
    desc: "Digitalisation de projets (SRF, briefs), coordination technique & communication, tests préprod/prod, analyse chaîne de distribution Mobile Money.",
    stack: "Produit digital · USSD · Tests · Coordination" },
  { id: 2, title: "SmartCampus AgentAI", meta: "Hackathon OpenClaw 2026", cat: "hackathon", status: "proto", featured: true, trophy: true,
    desc: "Plateforme universitaire : ERP académique, CRM, agents IA. Travail en équipe, architecture applicative, prompt engineering.",
    stack: "Équipe · IA · GitHub Xenoblade-lab" },
  { id: 3, title: "Plateforme e-learning intelligente (PFE L3)", meta: "Fin d'année L3 — abouti · Smart eLearning", cat: "fasi", status: "livre", featured: true,
    desc: "Sujet : e-learning intelligent avec évaluation automatique, assistant d'apprentissage et tableaux de bord analytiques. Quiz auto-corrigés, analytics, assistant règles + IA, LiveKit, Reverb, LabPay. Déployé HTTPS (GCP).",
    stack: "React · Laravel · MySQL · Sanctum · LiveKit" },
  { id: 4, title: "Précommande & livraison d'eau (Abeercooling)", meta: "Application métier · Kinshasa", cat: "client", status: "cours", featured: true,
    desc: "Digitalisation de la prise de commande et du dernier kilomètre : comptes clients, livreurs, tournées, suivi des commandes d'eau, paiement Mobile Money.",
    stack: "Laravel · PHP · MySQL · Mobile Money" },
  { id: 5, title: "Application de gestion immobilière", meta: "Locations · paiements · maintenance", cat: "client", status: "cours", featured: true,
    desc: "Gestion locative pour agences / propriétaires : biens, baux, paiements, documents, maintenance et suivi comptable.",
    stack: "Laravel · PHP" },
  { id: 6, title: "Marketplace B2B (type Alibaba)", meta: "Commerce inter-entreprises", cat: "client", status: "cours", featured: true,
    desc: "Marketplace B2B : boutiques vendeurs, MOQ, demandes de devis, catalogue, administration et authentification 2FA.",
    stack: "Laravel · PHP" },
  { id: 7, title: "Authentification numérique de diplômes", meta: "GovTech · Siduc-RDC", cat: "fasi", status: "concept",
    desc: "Conception d'un système de digitalisation et d'authentification de diplômes (QR, anti-fraude).",
    stack: "Conception · GovTech" },
  { id: 8, title: "Hack4Trust — confiance numérique", meta: "CTT · Mobile Money / SMS", cat: "hackathon", status: "doc", featured: true,
    desc: "Livrables concours : double confirmation et lutte contre les usurpations (SMS / Mobile Money).",
    stack: "Analyse · Documentation" },
  { id: 9, title: "API SMS Orange + tunnel Cloudflare", meta: "Intégration télécoms", cat: "experience", status: "proto",
    desc: "Prototype d'envoi SMS via l'API Orange, exposé derrière un tunnel Cloudflare pour tests et démos.",
    stack: "PHP · Cloudflare Tunnel · API Orange" },
  { id: 10, title: "Site préfecture des étudiants FASI", meta: "PRÉFAC · vie estudiantine", cat: "fasi", status: "proto",
    desc: "Site institutionnel de la préfecture : présentation, modules Live / sondages, espace numérique.",
    stack: "PHP · MySQL · HTML/CSS · JS" },
  { id: 11, title: "Boîte à suggestions FASI", meta: "Initiative PREFAC", cat: "fasi", status: "proto",
    desc: "Recueil des suggestions et préoccupations étudiantes. Soumission structurée, suivi des retours.",
    stack: "PHP · MySQL · HTML/CSS · JS" },
  { id: 12, title: "Gestion des projets étudiants", meta: "Fin d'année L2", cat: "fasi", status: "proto",
    desc: "Centralisation projets, encadreurs, jalons, rôles et droits par profil.",
    stack: "PHP · JS · MySQL" },
  { id: 13, title: "RawConnect", meta: "Hackathon LDC / FASI", cat: "hackathon", status: "proto",
    desc: "Plateforme bancaire inclusive : USSD, scoring alternatif pour le microcrédit.",
    stack: "JavaScript" },
  { id: 14, title: "Applications mobile React Native", meta: "Développement mobile · en cours", cat: "client", status: "cours", featured: true,
    desc: "Développement d'applications mobiles cross-platform avec React Native (parcours et apps en cours).",
    stack: "React Native · JavaScript" },
  { id: 15, title: "MWINE Investments", meta: "Client", cat: "client", status: "livre",
    desc: "Site institutionnel pour activité d'investissement.",
    stack: "Web" },
  { id: 16, title: "Agora — e-commerce légumes", meta: "Client · déploiement en cours", cat: "client", status: "cours",
    desc: "Parcours e-commerce légumes : catalogue, panier, commande.",
    stack: "Web" },
  { id: 17, title: "AgriFlow — mentorat agricole", meta: "Client", cat: "client", status: "cours",
    desc: "Formation agriculteurs. Front finalisé, back-ends en cours. Suivi des livraisons.",
    stack: "Web" },
  { id: 18, title: "Sites e-commerce", meta: "Client / perso", cat: "client", status: "livre",
    desc: "Beauté, vêtements : catalogue, panier, commande, responsive.",
    stack: "Web" },
  { id: 19, title: "Prototype mobilité urbaine (taxi)", meta: "Idée / app mobilité Kinshasa", cat: "fasi", status: "concept",
    desc: "Prototype de mise en relation passagers / chauffeurs pour la mobilité urbaine à Kinshasa.",
    stack: "Laravel" },
  { id: 20, title: "Gestion de stock", meta: "Outil métier", cat: "fasi", status: "proto",
    desc: "Application de gestion de stock et achats.",
    stack: "Laravel · PHP" },
  { id: 21, title: "Gestion de paie", meta: "Outil métier", cat: "fasi", status: "proto",
    desc: "Application de gestion de paie.",
    stack: "PHP · Composer" },
  { id: 22, title: "Location d'ambulance", meta: "Concours Demotech", cat: "fasi", status: "proto",
    desc: "Réservation urgence, simulation trajet, estimation délais.",
    stack: "Web" },
  { id: 23, title: "Recommandation de recettes", meta: "Fin d'année L1", cat: "fasi", status: "proto",
    desc: "Catalogue, recherche, moteur de recommandation, rapport de conception.",
    stack: "Web" },
  { id: 24, title: "Conversion numérique", meta: "Desktop pédagogique", cat: "fasi", status: "proto",
    desc: "Conversion décimal, binaire, DCB avec explications pas à pas.",
    stack: "Python · Tkinter" },
  { id: 25, title: "ZBOOK — bibliothèque", meta: "Démo web", cat: "fasi", status: "proto",
    desc: "Catalogue ouvrages et abonnés.",
    stack: "HTML · CSS · Bootstrap" },
  { id: 26, title: "Orientation écoles Kinshasa", meta: "Prototype", cat: "fasi", status: "proto",
    desc: "Aide au choix d'établissements par critères (zone, filière).",
    stack: "" },
  { id: 27, title: "KinoMarket", meta: "Business plan groupe", cat: "fasi", status: "concept",
    desc: "Visibilité commerçants Kinshasa, abonnements.",
    stack: "Conception" },
  { id: 28, title: "Étude architecture transport urbain", meta: "Conception", cat: "fasi", status: "concept",
    desc: "Mise en relation passagers/chauffeurs, géoloc, WebSockets, haute dispo.",
    stack: "Conception" },
  { id: 29, title: "Architecture EMR rural / OPD", meta: "Travail de recherche", cat: "fasi", status: "doc", full: true,
    desc: "EMR = dossier médical électronique · OPD = consultation externe. Documentation d'architecture pour santé en milieu rural — pas une app déployée en hôpital.",
    stack: "Documentation" },
  { id: 30, title: "Agrobusiness — vitrine", meta: "Web", cat: "client", status: "livre",
    desc: "Vitrine agro-business / mentorat.",
    stack: "HTML" },
  { id: 31, title: "Revue théologie — maquette", meta: "Maquette", cat: "client", status: "demo",
    desc: "Maquette site vitrine publication.",
    stack: "Démo" },
  { id: 32, title: "Visibilité numérique FASI", meta: "Piste", cat: "piste", status: "cours",
    desc: "Outils web pour la présence en ligne de la faculté.",
    stack: "" },
  { id: 33, title: "Assistant IA e-learning", meta: "Piste · prompt engineering", cat: "piste", status: "cours",
    desc: "Analytique avancée et assistant conversationnel (prolongement du PFE L3).",
    stack: "IA · Prompt engineering · Laravel" },
];

const STATUS_LABELS = {
  proto: { text: "Prototype", class: "badge-proto" },
  cours: { text: "En cours", class: "badge-cours" },
  livre: { text: "Livré", class: "badge-livre" },
  concept: { text: "Conception", class: "badge-concept" },
  demo: { text: "Démo", class: "badge-demo" },
  doc: { text: "Documentation", class: "badge-doc" },
};

const CAT_LABELS = {
  all: "Tous",
  experience: "Expérience",
  hackathon: "Hackathons",
  fasi: "FASI / Académique",
  client: "Clients",
  piste: "Pistes",
};

function renderProjects(filter = "all") {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  const filtered = filter === "all"
    ? PROJECTS
    : PROJECTS.filter((p) => p.cat === filter);

  grid.innerHTML = filtered.map((p) => {
    const st = STATUS_LABELS[p.status] || STATUS_LABELS.proto;
    const trophy = p.trophy ? " 🏆 1<sup>re</sup> place" : "";
    const classes = [
      "project-card",
      "reveal",
      p.featured ? "featured" : "",
      p.full ? "featured" : "",
    ].filter(Boolean).join(" ");

    return `
      <article class="${classes}" data-cat="${p.cat}">
        <div class="project-head">
          <h3>${p.id}. ${p.title}</h3>
          <span class="badge ${st.class}">${st.text}${trophy}</span>
        </div>
        ${p.meta ? `<p class="project-meta">${p.meta}</p>` : ""}
        <p>${p.desc}</p>
        ${p.stack ? `<p class="project-stack">${p.stack}</p>` : ""}
      </article>
    `;
  }).join("");

  observeReveals();
}

function observeReveals() {
  const reveals = document.querySelectorAll(".reveal:not(.observed)");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          entry.target.style.transitionDelay = `${(i % 6) * 0.08}s`;
          entry.target.classList.add("visible", "observed");
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
  );
  reveals.forEach((el) => observer.observe(el));
}

function initNav() {
  const nav = document.querySelector(".nav");
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");

  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 40);
  });

  toggle?.addEventListener("click", () => links.classList.toggle("open"));

  document.querySelectorAll(".nav-links a").forEach((a) => {
    a.addEventListener("click", () => links.classList.remove("open"));
  });
}

function initFilters() {
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderProjects(btn.dataset.filter);
    });
  });
}

function animateCounters() {
  const counters = document.querySelectorAll("[data-count]");
  const run = (el) => {
    const target = +el.dataset.count;
    const duration = 1500;
    const start = performance.now();
    const step = (now) => {
      const p = Math.min((now - start) / duration, 1);
      el.textContent = Math.floor(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !e.target.dataset.done) {
          e.target.dataset.done = "1";
          run(e.target);
        }
      });
    },
    { threshold: 0.5 }
  );
  counters.forEach((c) => obs.observe(c));
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects("all");
  initNav();
  initFilters();
  animateCounters();
  observeReveals();
});

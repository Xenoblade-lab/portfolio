const PROJECTS = [
  { id: 1, title: "SmartCampus AgentAI", meta: "Hackathon OpenClaw 2026", cat: "hackathon", status: "proto", featured: true, trophy: true,
    desc: "Plateforme universitaire : ERP académique, CRM, agents IA. Travail en équipe, architecture applicative, usages réels du campus.",
    stack: "Équipe · GitHub Xenoblade-lab" },
  { id: 2, title: "RawConnect", meta: "Hackathon LDC / FASI", cat: "hackathon", status: "proto",
    desc: "Plateforme bancaire inclusive : USSD, scoring alternatif pour le microcrédit.",
    stack: "JavaScript" },
  { id: 3, title: "Boîte à suggestions FASI", meta: "Initiative PREFAC", cat: "fasi", status: "proto",
    desc: "Recueil des suggestions et préoccupations étudiantes. Soumission structurée, suivi des retours.",
    stack: "PHP · MySQL · HTML/CSS · JS" },
  { id: 4, title: "Site préfecture FASI (PRÉFAC)", meta: "Préfecture des étudiants", cat: "fasi", status: "proto",
    desc: "Site institutionnel, module Live (votes/sondages), espace numérique vie estudiantine.",
    stack: "PHP · MySQL · HTML/CSS · JS" },
  { id: 5, title: "Gestion projets étudiants", meta: "Fin d'année L2", cat: "fasi", status: "proto",
    desc: "Centralisation projets, encadreurs, jalons, rôles et droits par profil.",
    stack: "PHP · JS · MySQL" },
  { id: 6, title: "E-learning + évaluation auto", meta: "Académique / personnel", cat: "fasi", status: "cours",
    desc: "Quiz, tableau de bord, progression. Piste assistant IA.",
    stack: "" },
  { id: 7, title: "Recommandation recettes", meta: "Fin d'année L1", cat: "fasi", status: "proto",
    desc: "Catalogue, recherche, moteur de recommandation, rapport de conception.",
    stack: "Web" },
  { id: 8, title: "Conversion numérique", meta: "Desktop pédagogique", cat: "fasi", status: "proto",
    desc: "Conversion décimal, binaire, DCB avec explications pas à pas.",
    stack: "Python · Tkinter" },
  { id: 9, title: "ZBOOK — bibliothèque", meta: "Démo web", cat: "fasi", status: "proto",
    desc: "Catalogue ouvrages et abonnés.",
    stack: "HTML · CSS · Bootstrap" },
  { id: 10, title: "Orientation écoles Kinshasa", meta: "Prototype", cat: "fasi", status: "proto",
    desc: "Aide au choix d'établissements par critères (zone, filière).",
    stack: "" },
  { id: 11, title: "Location ambulance", meta: "Concours Demotech", cat: "fasi", status: "proto",
    desc: "Réservation urgence, simulation trajet, estimation délais.",
    stack: "Web" },
  { id: 12, title: "KinoMarket", meta: "Business plan groupe", cat: "fasi", status: "concept",
    desc: "Visibilité commerçants Kinshasa, abonnements 5/15 USD.",
    stack: "Conception" },
  { id: 13, title: "MWINE Investments", meta: "Client", cat: "client", status: "livre",
    desc: "Site institutionnel investissement multiface.",
    stack: "Web" },
  { id: 14, title: "Agora — légumes", meta: "Craftersweb · ~80%", cat: "client", status: "cours",
    desc: "E-commerce légumes. Déploiement en cours. Coordination client.",
    stack: "" },
  { id: 15, title: "AgriFlow mentorat", meta: "Craftersweb · chef de projet", cat: "client", status: "cours",
    desc: "Formation agriculteurs. Front finalisé, 2 back-ends en cours.",
    stack: "Web" },
  { id: 16, title: "Sites e-commerce", meta: "Client / perso", cat: "client", status: "livre",
    desc: "Beauté, vêtements : catalogue, panier, commande, responsive.",
    stack: "Web" },
  { id: 17, title: "Transport urbain Kinshasa", meta: "Étude architecture", cat: "fasi", status: "concept",
    desc: "Mise en relation passagers/chauffeurs, géoloc, WebSockets, haute dispo.",
    stack: "Conception" },
  { id: 18, title: "Architecture EMR rural / OPD", meta: "Travail de recherche", cat: "fasi", status: "doc", full: true,
    desc: "EMR = dossier médical électronique · OPD = consultation externe. Documentation d'architecture pour santé en milieu rural — pas une app déployée en hôpital.",
    stack: "Documentation" },
  { id: 19, title: "Mwine Investissement", meta: "Client", cat: "client", status: "livre",
    desc: "Présentation services d'investissement.",
    stack: "Web" },
  { id: 20, title: "Agrobusiness", meta: "Web", cat: "client", status: "livre",
    desc: "Vitrine agro-business / mentorat.",
    stack: "HTML" },
  { id: 21, title: "Revue théologie", meta: "Maquette", cat: "client", status: "demo",
    desc: "Maquette site vitrine publication.",
    stack: "Démo" },
  { id: 22, title: "Visibilité numérique FASI", meta: "Piste", cat: "piste", status: "cours",
    desc: "Outils web pour la présence en ligne de la faculté.",
    stack: "" },
  { id: 23, title: "Assistant IA e-learning", meta: "Piste", cat: "piste", status: "cours",
    desc: "Analytique avancée et assistant conversationnel.",
    stack: "IA" },
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

# Site portfolio — Bradley Ngonde

Site web interactif du portfolio (contenu aligné sur `portfolio_complet_design.pdf`).

## Lancer en local

Avec **Laragon** : ouvrir dans le navigateur :

```
http://localhost/Apprentissage%20Oracle/Travaux%20de%20recherche/portfolio/site%20portfolio/
```

Ou double-cliquer sur `index.html` (certaines fonctions marchent mieux via un serveur local).

Depuis ce dossier avec PHP intégré Laragon :

```bash
# Depuis la racine Laragon www, utiliser l’URL ci-dessus
```

## Structure

- `index.html` — page unique (sections Accueil, À propos, Compétences, Projets, Formation, Contact)
- `css/style.css` — thème sombre, animations, responsive
- `js/main.js` — projets (23), filtres, scroll reveal, compteurs

## Fonctionnalités

- Navigation fixe avec défilement fluide
- Hero animé, badge OpenClaw
- Filtres projets : Tous, Hackathons, FASI, Clients, Pistes
- Cartes projets avec effet au survol
- Animations à l’affichage (Intersection Observer)
- Compteurs animés (23 projets, 1 hackathon, etc.)
- Menu mobile

## Mise à jour

Modifier la liste `PROJECTS` dans `js/main.js` pour ajouter ou corriger un projet.

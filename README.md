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

---

## Publier sur GitHub Pages

Un commit local est déjà prêt. Pour créer le dépôt **public** `portfolio` et activer Pages :

### 1. Connexion GitHub (une seule fois)

```powershell
gh auth login
```

Choisir : GitHub.com → HTTPS → connexion navigateur (compte **Xenoblade-lab**).

### 2. Publication automatique

```powershell
cd "c:\laragon\www\Apprentissage Oracle\Travaux de recherche\portfolio\site portfolio"
powershell -ExecutionPolicy Bypass -File .\publish-github.ps1
```

### 3. URL du site

Après 1 à 3 minutes :

**https://xenoblade-lab.github.io/portfolio/**

(ou `https://VOTRE-USERNAME.github.io/portfolio/` selon le compte connecté.)

### Mises à jour ultérieures

```powershell
git add .
git commit -m "Mise a jour du portfolio"
git push
```

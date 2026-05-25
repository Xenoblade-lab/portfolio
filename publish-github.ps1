# Publie le portfolio sur GitHub + active GitHub Pages
# Prerequis : une fois "gh auth login" (navigateur ou token)
$ErrorActionPreference = "Stop"
$repoName = "portfolio"
$here = $PSScriptRoot

$gh = Get-Command gh -ErrorAction SilentlyContinue
if (-not $gh) {
    $ghPath = "${env:ProgramFiles}\GitHub CLI\gh.exe"
    if (Test-Path $ghPath) { $gh = $ghPath } else { throw "GitHub CLI (gh) introuvable. Relancez le terminal apres installation." }
}

& $gh auth status 2>&1 | Out-Null
if ($LASTEXITCODE -ne 0) {
    Write-Host "Connexion GitHub requise. Executez :" -ForegroundColor Yellow
    Write-Host "  gh auth login" -ForegroundColor Cyan
    Write-Host "Puis relancez ce script." -ForegroundColor Yellow
    exit 1
}

Set-Location $here

if (-not (Test-Path ".git")) {
    git init -b main
    git config user.name "Bradley Ngonde"
    git config user.email "bradley.ngonde3@gmail.com"
}

git add index.html css js .gitignore .nojekyll README.md
$status = git status --porcelain
if ($status) {
    git commit -m @"
Publication du site portfolio personnel

Site statique : profil, competences, 23 projets, formation et contact.
Hebergement prevu via GitHub Pages.
"@
}

$owner = (& $gh api user -q .login).Trim()
$remoteUrl = "https://github.com/$owner/$repoName.git"

$exists = $false
try {
    & $gh repo view "$owner/$repoName" 2>$null | Out-Null
    if ($LASTEXITCODE -eq 0) { $exists = $true }
} catch {}

if (-not $exists) {
    Write-Host "Creation du depot $owner/$repoName ..."
    & $gh repo create $repoName --public --description "Portfolio web — NGONDE SHADAI BRADLEY, developpeur web & logiciel (FASI/UPC)" --source=. --remote=origin --push
} else {
    Write-Host "Depot existant — push vers origin main ..."
    git remote remove origin 2>$null
    git remote add origin $remoteUrl
    git push -u origin main --force
}

Write-Host "Activation GitHub Pages (branche main, racine) ..."
& $gh api -X POST "repos/$owner/$repoName/pages" `
    -f build_type=legacy `
    -f "source[branch]=main" `
    -f "source[path]=/" 2>$null

if ($LASTEXITCODE -ne 0) {
    & $gh api -X PUT "repos/$owner/$repoName/pages" `
        -f build_type=legacy `
        -f "source[branch]=main" `
        -f "source[path]=/"
}

Start-Sleep -Seconds 3
$pageUrl = "https://$owner.github.io/$repoName/"
Write-Host ""
Write-Host "Termine !" -ForegroundColor Green
Write-Host "Depot : https://github.com/$owner/$repoName" -ForegroundColor Cyan
Write-Host "Site  : $pageUrl" -ForegroundColor Cyan
Write-Host "(GitHub Pages peut prendre 1 a 3 minutes pour etre en ligne.)" -ForegroundColor Gray

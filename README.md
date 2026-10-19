# Horizon — Mon patrimoine

Application PWA de suivi manuel des comptes, placements et dettes. Données conservées dans le navigateur, sauvegarde/restauration JSON et import CSV. Aucun identifiant bancaire nécessaire. Aucun compte Supabase nécessaire pour cette version locale.

## GitHub Pages

Le workflow `.github/workflows/pages.yml` publie exclusivement le dossier `dist`, après les vérifications JavaScript. Dans Settings → Pages → Build and deployment, choisissez GitHub Actions. Les pushes sur `main` et les lancements manuels déclenchent la publication.

Pour ce dépôt sous `stephangury-lgtm/Horizon-patrimoine`, l’adresse attendue après publication réussie est `https://stephangury-lgtm.github.io/Horizon-patrimoine/`.

Ouvrez l’adresse publiée sur votre téléphone et utilisez Installer, ou Safari → Partager → Sur l’écran d’accueil. Le manifeste utilise des chemins relatifs adaptés aux dépôts GitHub Pages.

## Confidentialité et transfert

Le dépôt ne contient que le code et des exemples fictifs. Les CSV personnels et sauvegardes de portefeuille ne doivent jamais être ajoutés au dépôt. Les valeurs saisies ne sont pas envoyées à GitHub. Sauvegardez votre ancienne version puis restaurez le JSON dans la PWA à la nouvelle adresse.

Voir INSTALLATION-PWA.md et LISEZ-MOI.md.

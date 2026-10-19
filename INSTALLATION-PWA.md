# Installer Horizon sur votre écran d’accueil

Cette archive contient l’application PWA complète, pas un APK ni une application iOS. Un fichier .webmanifest seul ne suffit pas à installer l’application.

## Mise en ligne nécessaire

Décompressez l’archive et placez ses fichiers sur un hébergement statique HTTPS, dans le même dossier. index.html, manifest.webmanifest, sw.js, les fichiers JavaScript et le dossier icons doivent rester ensemble. Le serveur doit servir le manifeste en application/manifest+json ou application/json, et sw.js en JavaScript. Ne redirigez pas sw.js vers une page HTML.

L’ouverture directe de index.html permet d’utiliser la version manuelle, mais pas d’installer la PWA ni d’activer son cache hors connexion. Pour un essai sur ordinateur, localhost est également accepté par les navigateurs modernes.

## Installation sur le téléphone

- iPhone / iPad : ouvrez l’adresse HTTPS dans Safari → Partager → Sur l’écran d’accueil → Ajouter.
- Android : ouvrez l’adresse HTTPS dans Chrome → Installer l’application, ou menu → Ajouter à l’écran d’accueil.
- Ordinateur : ouvrez l’adresse dans Chrome ou Edge puis utilisez le bouton Installer ou l’icône d’installation de la barre d’adresse.

Après la première ouverture en ligne et la mise en cache réussie, Horizon peut démarrer hors connexion sur le même appareil. Le navigateur et ses réglages peuvent limiter l’installation ou supprimer le cache. Une nouvelle version est proposée via le bouton Mettre à jour quand elle est disponible.

## Retrouver vos données

Sauvegardez le portefeuille depuis votre ancienne version avant de passer à l’adresse HTTPS. Une fois dans la PWA, cliquez sur Restaurer et choisissez votre sauvegarde JSON. Le passage d’un fichier local à une adresse web ne transfère pas automatiquement les données. La PWA conserve les données dans le navigateur de cet appareil : ce n’est pas une synchronisation entre appareils.

Ne mettez pas vos sauvegardes personnelles ou exports de transactions sur l’hébergement. Seuls les fichiers de l’application présents dans cette archive sont nécessaires.

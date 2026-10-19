# Horizon — suivi manuel de patrimoine

Décompressez l’archive et ouvrez index.html dans un navigateur récent. Aucune installation ni connexion bancaire n’est nécessaire. Les données restent dans ce navigateur. Pour changer d’appareil ou déplacer l’application, téléchargez d’abord une sauvegarde JSON.

## Démarrer

Le mode démonstration montre des valeurs fictives. Cliquez sur « Commencer avec mes données » pour démarrer à zéro, ou ajoutez votre premier élément : les exemples seront remplacés.

Dans « Mes établissements », ajoutez BoursoBank, Banque Populaire du Sud, Bricks, La Première Brique ou Bitstack. Tout autre établissement peut être saisi dans le formulaire. Créez une ligne par compte ou placement.

Saisissez le montant en euros, sa date de valorisation et une note facultative. Les dates futures ne sont pas acceptées. Les valeurs de plus de 30 jours et les dates manquantes sont signalées.

## Actifs, dettes et patrimoine net

Patrimoine net = somme des actifs − capital restant dû sur les dettes.

Une dette se saisit avec la catégorie « Dette » et un montant positif. Par exemple : 20 000 € d’actifs et 5 000 € de dettes donnent 15 000 € nets. Le patrimoine net peut être négatif. La répartition circulaire porte sur les actifs seuls.

Pour les placements immobiliers participatifs, saisissez le capital restant investi. Les liquidités présentes sur les plateformes peuvent être suivies séparément. Ne comptez pas deux fois les sommes déjà transférées sur vos comptes bancaires. Pour Bitstack, saisissez la valorisation actuelle en euros ; un export de transactions ne représente pas le solde actuel.

## Historique

Chaque jour où vous enregistrez une modification, le total brut, les dettes et le patrimoine net sont mémorisés. Plusieurs modifications le même jour remplacent le point du jour. Le graphique apparaît après deux jours d’enregistrements distincts. Il retrace vos saisies, pas un rendement : versements, retraits et remboursements modifient aussi le total. Une valorisation ancienne n’est pas appliquée rétroactivement à l’historique.

## Sauvegarde et reprise des anciennes versions

« Sauvegarder » télécharge les actifs, les dates, les notes et l’historique. « Restaurer » remplace les données locales après confirmation et conserve les points historiques sans en créer de nouveau. Les sauvegardes de la version précédente restent acceptées. Les dates anciennes reconnues sont reprises ; sinon, la valeur est signalée « Date à préciser ».

Les anciennes données locales sont reprises automatiquement si elles sont accessibles dans le même navigateur et au même emplacement. Faites une sauvegarde avant de remplacer ou déplacer votre ancienne application. « Effacer mes données » efface aussi l’ancien stockage local et remet l’historique à zéro.

## CSV

Téléchargez « Modèle CSV ». Colonnes : etablissement;nom;categorie;valeur;date;note

Catégories acceptées : Banque, Immobilier, Crypto, Autre, Dette. Dates au format AAAA-MM-JJ. Montants positifs, avec point ou virgule décimale. Les anciens CSV à quatre colonnes (sans date ni note) sont acceptés, avec date à préciser.

L’import ajoute les lignes après validation du fichier et confirmation. Les doublons stricts (même établissement, nom, catégorie, valeur et date) sont ignorés. Pour actualiser un élément existant, utilisez son bouton de modification : un import avec une valeur différente ajouterait une nouvelle ligne. Un fichier invalide n’est pas importé partiellement.

## Limites

Aucune synchronisation ni sauvegarde distante. Pas de conversion automatique des devises ou de mise à jour du cours du Bitcoin. La suppression des données du navigateur peut effacer le portefeuille : conservez vos sauvegardes.

## Import de transactions Bitcoin

Le bouton « Importer transactions Bitcoin » accepte le format avec colonnes Type, Date, Montant reçu, Monnaie ou jeton reçu, Montant envoyé, Monnaie ou jeton envoyé, Frais, Monnaie ou jeton des frais et ID Externe. Les achats et dépôts reçus en BTC sont pris en charge. Le fichier est refusé s’il contient une vente, un retrait ou des frais en crypto. Les ID répétés dans le fichier sont ignorés.

L’import résume les BTC reçus et demande un cours BTC/EUR et sa date. Confirmez dans votre application que la quantité correspond au solde réel : un historique incomplet ne permet pas de connaître le solde. Aucun cours n’est récupéré automatiquement. Le fichier de transactions et ses détails ne sont pas conservés ; seule la ligne de valorisation, avec quantité et cours dans la note, est enregistrée. Un nouvel import remplace la précédente ligne créée par ce même import après confirmation. Une ligne Bitstack ajoutée manuellement doit être vérifiée pour éviter de compter deux fois le même portefeuille.

## Version PWA

Consultez INSTALLATION-PWA.md pour l’installation sur l’écran d’accueil et le fonctionnement hors connexion. Une adresse HTTPS est requise. Le fichier local reste utilisable en mode classique. Les icônes, le manifeste et le service worker sont inclus.

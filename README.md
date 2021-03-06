# Projet JS
Projet visant à réaliser une application web pour une coopérative 2.0 de vente de produits agricoles. Notre tâche sur ce projet a été de développer tout le coté déplacement sur une carte d’un livreur et la gestion des commandes.

# Le module livraison
## Affichage client
Le client voit l’ensemble de ses sites et l’état de ses livraisons (prévues et en cours) sur la journée .

## Affichage livreur

Le livreur voit sont itinéraire du jour et renseigne son activité (livraison en cours, terminées, pause, retard prévu, incident, demande de nouvel itinéraire, retour dépôt, etc…)

* Affichage de la journée
* Enregistrement du départ
* Enregistrement des points d’étapes
* Reception une mission, qu’il choisit ou non d’accepter
* Reception d'un ordre qu’il ne peut refuser (STOP)
* Enregistrement de la pause
* Envoi de messages (info, alerte, critique)
* Modification statut de la livraison
* Enregistrement de l’arrivée


## Affichage gestionnaire

Le gestionnaire dispose d’une vue en temps réel sur l’ensemble des livreurs et de leurs activités.
* Une carte affiche des points qui s’animent (les livreurs)  et leurs trajectoire.
* Des notifications s’affichent à côté de la carte, présentant le flux de messages entrant.
* Cette vue peut être filtrée sur les livreurs et ou le type de messages.
* Le gestionnaire peut arrêter la course d’un livreur momentanément (pause forcée)



# Explication
Pour faire afficher la carte et en même temps les livreurs et les coordonnées des clients a livrée sur cette dernière nous avons utilisé l’API de google maps.
Pour faire afficher les données de l’api nous avons utiliser des requêtes AJAX ainsi que jQuery.

# Maquettes de notre site
Des maquettes de notre site et application, sont disponibles dans le dossier maquette.


# Collaboration
Projet réalisé dans le cadre de l’obtention de notre diplôme universitaire de technologie, en collaboration avec Ali Es-skouri, Florian Laroche et Antoine Ollé.

Antoine Ollé s'est occupé de toutes la réalisation des maquettes ainsi que l'implémentation dans le code des modals pour permettre l'insertion des données dans l'api.

Florian Laroche s'est occupé de la connexion avec l'api permettant de récupérer les données et de les afficher. Il a aussi réalisé l'implémentation des marqueurs sur la map symbolisant les conducteurs afin de permettre un suivi sur l'application.

Ali Es-Skouri a réalisé toute la création de la map qui se retrouve dans l'application ainsi que dans le gestionnaire. Ainsi que la mise en place pour acceuillir les données sous la bonne forme de l'API pour la map.

Nereis Dugaleix a réalisé la partie graphique de l'application et du gestionnaire ainsi que l'implémentation de la partie gestionnaire des messages de l'application web de gestion.

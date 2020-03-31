# Projet JS
Projet visant à réaliser une application web pour une coopérative 2.0 de ventes de produits agricoles. Notre tâche sur ce projet  à été de développer tout le coté déplacement sur une carte d’un livreur et la gestion des commandes.

# Le module livraison
## Affichage client
Le client voit l’ensemble de ses sites et l’état de ses livraisons ( prévues et en cours ) sur la journée .

## Affichage livreur

Le livreur voit sont itinéraire du jour et renseigne son activité ( livraison, en cours, terminé, pause, retard prévu, incident, demande de nouvel itinéraire, retour dépôt, etc…)

* Affichage de la journée
* Enregistrement  du départ
* Enregistrement des points d’étapes
* Reçoit une mission, qu’il choisit ou non d’accepter
* Reçoit un ordre qu’il ne peut refuser (STOP)
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
Voici quelque maquettes de notre site et application	 pour avoir en avoir un  aperçu.

![](Projet%20JS/87104552_1232613686944328_8071030352832888832_n.png)
![](Projet%20JS/86932318_334692114096494_8956171899348451328_n.png)


![](Projet%20JS/86972343_835038506973422_3568751234632384512_n.png)


# Collaboration
Projet réalisé dans le cadre de l’obtention de notre diplôme universitaire de technologie, en collaboration avec Ali Es-skouri, Florian Laroche et Antoine Ollé.

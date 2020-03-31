////////////////////////////CODE POUR RECUP COMMANDES /////////////////////////////////
//Permet de récupérer la date du jour au format de l'api pour faire les comparaisons
/*  let date = new Date();
    let dateAff = "";
    if((date.getMonth() + 1) < 10){
    dateAff = date.getFullYear() + "-" + 0 + (date.getMonth()+1) + "-" + date.getDate();
    } else {
    dateAff = date.getFullYear() + "-" + (date.getMonth()+1) +  date.getDate();
    }
/* Si l'api ne contient aucune commande à la date du jour on simule une date qui existe dans l'api
Alors on commente le code si dessus et on décommente la date si dessous */

let dateAff = "2020-03-25"; //Le 25 mars 2020 contient des commandes donc on peut l'utiliser

//Permet de récupérer les ID des commandes du jour
function getIdCommandesDuJour() {
    return new Promise(resolve => {
    $.getJSON('http://vps.e-mingo.net/coopagri/app/index.php?x=1&noAttribute&noLink&x=1&serializationDepth=1?c=Commande&a=trouver', function (commandes) {
        let idCommandesDuJour = [];
        let i = 0;
        $.each(commandes, function (key, val) { //Pour chaque commande on vérifie si la date de livraison est celle du jour
        if (val["dateLivraison"].includes(dateAff)) {
            idCommandesDuJour[i] = val["id"];
            i = i + 1;
        }
        });
        resolve(idCommandesDuJour); //Enfin on retourne notre tableau contenant les id des commandes du jour
    });
    });
}

function getHeureLivraison(idCommande) {
  return new Promise(resolve => {
  $.getJSON('http://vps.e-mingo.net/coopagri/app/index.php?c=api&x=1&o=data&name=commande&v=id|' + idCommande, function (commande) {
      let heureLivraison = commande[0]["dateLivraison"];
      resolve(heureLivraison);
  });
  });
}

//Permet de récupérer l'adresse de livraison d'une commande à partir de son ID
async function getAdresseLivraisonId(idCommande) {
    return new Promise(resolve => {
    $.getJSON('http://vps.e-mingo.net/coopagri/app/index.php?c=api&x=1&o=data&name=commande&v=id|' + idCommande, function (commande) {
        let adresseLivraison = commande[0]["adresseLivraison"]["toString"];
        resolve(adresseLivraison);
    });
    });
}

//Permet de récupérer les ID des produits présents dans la commande passée en paramètre
async function getIdProduitsCommande(idCommande) {
    return new Promise(resolve => {
    let idProduits = []
    let i = 0;
    $.getJSON('http://vps.e-mingo.net/coopagri/app/index.php?c=api&x=1&o=data&name=commande&v=id|' + idCommande, function (commande) {
        $.each(commande[0]["lignes"], function (key, valLigne) {
        let bool = false;
        for (let index = 0; index < idProduits.length; index++) { //On vérifie à chaque fois qu'il n'y ait pas de doublons (on a pas besoin plusieurs fois d'un identifiant)
            if (idProduits[index] == valLigne["produit"]["id"]) {
            bool = true;
            }
        }
        if (bool == false) {
            idProduits[i] = valLigne["produit"]["id"];  //On stock tous les identifiants dans le tableau idProduits[]
            i = i + 1;
        }
        });
        resolve(idProduits);
    });
    });
}

//Permet de récupérer les informations concernant le fournisseur du produit passé en paramètre
async function getFournisseurProduit(idProduit) {
    return new Promise(resolve => {
    $.getJSON('http://vps.e-mingo.net/coopagri/app/index.php?c=api&x=1&o=data&name=produit&v=id|' + idProduit, function (produit) {
        resolve(produit);
    });
    });
}

//Permet de récupérer les adresses des fournisseurs présents dans une commande
async function getAdressesFournisseurId(idCommande) {
    let idProduits = await getIdProduitsCommande(idCommande); //On récupère les ID des produits présents dans la commande
    let adressesFournisseur = [];
    let infosFournisseur = []
    let index = 0;
    let j = 0;
    while (index < idProduits.length) { //Pour chaque identifiants de produits on fait une requête sur l'api pour accéder aux infos fournisseurs
    infosFournisseur[index] = await getFournisseurProduit(idProduits[index]);
    index++;
    }
    return new Promise(resolve => {
    $.each(infosFournisseur, function (key, adrFournisseur) { //Pour chaque fournisseur on récupère son adresse
        if (adrFournisseur[0]["fournisseur"]) {
        adressesFournisseur[j] = new String;
        adressesFournisseur[j] = adrFournisseur[0]["fournisseur"]["livraisonAdresses"][0]["toString"]; //On stock ces adresses dans adresseFournisseurDuJour[]
        j = j + 1;
        } else {
        console.log("Produit n'ayant pas de fournisseur dans l'API") //Les fournisseurs de certains produit sont inexistant dans l'api, on l'affiche dans la console
        }
    });
    resolve(adressesFournisseur);
    });
}

async function test() {
    //Affichage des ID commandes du jour
    let idCommandesDuJour = await getIdCommandesDuJour();
    console.log("ID des commandes du jours");
    console.log(idCommandesDuJour);

    //Affichage de l'adresse de livraison d'une commande
    let adresseLivraison = await getAdresseLivraisonId(idCommandesDuJour[8]);
    console.log("Adresse de livraison d'une commande passé en paramètre");
    console.log(adresseLivraison);

    //Affichage des adresses des fournisseurs d'une commande
    let adressesFournisseur = await getAdressesFournisseurId(idCommandesDuJour[8]);
    console.log("Adresses des fournisseurs d'une commande passé en paramètre");
    console.log(adressesFournisseur);
}
//test();

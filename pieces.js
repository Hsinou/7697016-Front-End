// Récupération des pièces depuis le fichier JSON
const reponse = await fetch('pieces-autos.json');
const pieces = await reponse.json();

// creation des elements

const article = pieces[0]

const pieceElement = document.createElement("article")


const nomElement = document.createElement("h2")
nomElement.innerText=article.nom

const imgElement=document.createElement("img")
imgElement.src=article.image

const prixElement = document.createElement("p")
prixElement.innerText = `le prix est de ${article.prix} € (${article.prix < 30 ? "€ ":"€€€"})`

const categorieElement = document.createElement("p")
categorieElement.innerText=article.categorie

const descriptionElement = document.createElement("p")
descriptionElement.innerText = article.description ?? "il n'y a pas de description pour le moment"

const stockElement = document.createElement("p")
stockElement.innerText= article.disponibilite ? "en Stock" : "en Rupture de stock"

const sectionFiches = document.querySelector(".fiches")
pieceElement.apppendChild(pieceElement)
pieceElement.appendChild(imgElement)
pieceElement.appendChild(nomElement)
pieceElement.appendChild(prixElement)
pieceElement.appendChild(categorieElement)
pieceElement.appendChild(descriptionElement)
pieceElement.appendChild(stockElement)


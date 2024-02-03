// Récupération des pièces depuis le fichier JSON
const reponse = await fetch('pieces-autos.json');
const pieces = await reponse.json();

// creation des elements

const article = pieces[0]

const pieceElement = document.createElement("article")


const nomElement = document.createElement("h2")
nomElement.innerText=pieces[0].nom

const imgElement=document.createElement("img")
imgElement.src=pieces[0].image

const prixElement = document.createElement("p")
prixElement.innerText = `le prix est de ${pieces[0].prix} € (${pieces[0].prix < 30 ? "€ ":"€€€"})`

const categorieElement = document.createElement("p")
categorieElement.innerText=pieces[0].categorie

const descriptionElement = document.createElement("p")
descriptionElement.innerText = pieces[0].description ?? "il n'y a pas de description pour le moment"

const stockElement = document.createElement("p")
stockElement.innerText= pieces[0].disponibilite ? "en Stock" : "en Rupture de stock"

const sectionFiches = document.querySelector(".fiches")
sectionFiches.apppendChild(pieceElement)
pieceElement.appendChild(imgElement)
pieceElement.appendChild(nomElement)
pieceElement.appendChild(prixElement)
pieceElement.appendChild(categorieElement)
pieceElement.appendChild(descriptionElement)
pieceElement.appendChild(stockElement)


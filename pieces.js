// Récupération des pièces depuis le fichier JSON
const reponse = await fetch('pieces-autos.json');
const pieces = await reponse.json();

// creation des elements

const article = pieces[]

const nomElement = document.createElement("h2")
nomElement.innerText=article.nom

const imgElement=document.createElement("img")
imgElement.src=article.image

const prixElement = document.createElement("p")
prixElement.innerText = `le prix est de ${article.prix} €`

const categorieElement = document.createElement("p")
categorieElement.innerText=article.categorie

const sectionFiches = document.querySelector(".fiches")
sectionFiches.appendChild(imgElement)
sectionFiches.appendChild(nomElement)
sectionFiches.appendChild(prixElement)
sectionFiches.appendChild(categorieElement)
console.log(pieces)
// Array of confidence quotes
const quotes = [
  { text: "Croyez en vous et tout devient possible.", author: "Anonyme" },
  { text: "La confiance en soi est le premier secret du succès.", author: "Ralph Waldo Emerson" },
  { text: "L'homme ne peut découvrir de nouveaux océans sans perdre de vue la côte.", author: "André Gide" },
  { text: "La seule limite à notre épanouissement de demain sera nos doutes d’aujourd’hui.", author: "Franklin D. Roosevelt" },
  { text: "Avec confiance, vous avez déjà gagné avant de commencer.", author: "Marcus Garvey" },
  { text: "La confiance en soi est la meilleure tenue que vous puissiez porter.", author: "Anonyme" },
  { text: "Tout ce que vous avez toujours voulu se trouve au-delà de votre peur.", author: "George Addair" },
  { text: "C'est en croyant aux roses qu'on les fait éclore.", author: "Anatole France" },
  { text: "Soyez vous-même, les autres sont déjà pris.", author: "Oscar Wilde" },
  { text: "Croyez que vous pouvez, et vous êtes déjà à mi-chemin.", author: "Theodore Roosevelt" },
  { text: "La confiance en soi ne vient pas en ayant toutes les réponses, mais en étant prêt à affronter toutes les questions.", author: "Anonyme" },
  { text: "Ce que vous pensez de vous-même est bien plus important que ce que les autres pensent de vous.", author: "Anonyme" },
  { text: "Vous êtes plus courageux que vous ne le croyez, plus fort que vous ne le semblez, et plus intelligent que vous ne le pensez.", author: "A.A. Milne" },
  { text: "La confiance en soi ne se donne pas, elle se construit.", author: "Anonyme" },
  { text: "Faites ce que vous pouvez, avec ce que vous avez, là où vous êtes.", author: "Theodore Roosevelt" },
  { text: "Ne doutez jamais de votre capacité à réussir.", author: "Anonyme" },
  { text: "Chaque jour est une nouvelle chance de devenir la meilleure version de vous-même.", author: "Anonyme" },
  { text: "Un peu de foi en soi-même permet de gravir des montagnes.", author: "Anonyme" },
  { text: "La clé du succès est de commencer avant d’être prêt.", author: "Marie Forleo" },
  { text: "La peur de l’échec est la seule barrière à l’accomplissement.", author: "Anonyme" },
  { text: "Ne vous inquiétez pas de ce que les autres pensent, faites ce qui vous rend heureux.", author: "Anonyme" },
  { text: "Accepter ses imperfections est le début de la vraie confiance.", author: "Anonyme" },
  { text: "Les opportunités ne se trouvent pas, elles se créent.", author: "Chris Grosser" },
  { text: "Croyez en vous lorsque personne d’autre ne le fait.", author: "Venus Williams" },
  { text: "La confiance ne vient pas de toujours avoir raison, mais de ne pas avoir peur de se tromper.", author: "Peter T. McIntyre" },
  { text: "Votre travail est de découvrir votre monde et de vous y consacrer de tout votre cœur.", author: "Bouddha" },
  { text: "Le succès est souvent atteint par ceux qui ne savent pas que l’échec est inévitable.", author: "Coco Chanel" },
  { text: "L’échec est seulement une opportunité de recommencer de manière plus intelligente.", author: "Henry Ford" },
  { text: "La confiance est contagieuse, comme le doute. Cultivez la première.", author: "Anonyme" },
  { text: "Osez être le meilleur, même si personne ne le remarque au début.", author: "Anonyme" },
  { text: "La confiance en soi est la première étape vers un grand succès.", author: "Anonyme" },
  { text: "Un objectif sans plan n’est qu’un souhait.", author: "Antoine de Saint-Exupéry" },
  { text: "L’ambition est le chemin du succès, la persévérance est le véhicule.", author: "Bill Bradley" },
  { text: "Ne sous-estimez jamais votre potentiel. Tout commence par une décision.", author: "Anonyme" },
  { text: "C’est en croyant en soi qu’on réussit.", author: "Anonyme" },
  { text: "Ne vous comparez pas aux autres. Comparez-vous à celui que vous étiez hier.", author: "Anonyme" },
  { text: "Les personnes qui réussissent ont l’habitude de faire ce que les autres n’aiment pas faire.", author: "Albert E. Gray" },
  { text: "Quand vous croyez en vous, tout devient possible.", author: "Anonyme" },
  { text: "Ne rêvez pas votre vie, réalisez vos rêves.", author: "Anonyme" },
  { text: "Si vous voulez réussir, commencez par croire que vous le pouvez.", author: "Anonyme" },
  { text: "Le succès n’est pas final, l’échec n’est pas fatal : c’est le courage de continuer qui compte.", author: "Winston Churchill" },
  { text: "Ne vous excusez pas pour être brillant. Inspirez les autres.", author: "Anonyme" },
  { text: "Faites chaque jour quelque chose qui vous rapproche de vos objectifs.", author: "Anonyme" },
  { text: "La seule limite à votre succès est celle que vous vous imposez.", author: "Anonyme" },
  { text: "Transformez vos doutes en action.", author: "Anonyme" },
  { text: "L’échec est une leçon, pas une fin.", author: "Anonyme" },
  { text: "Vous êtes le maître de votre destinée.", author: "William Ernest Henley" },
  { text: "Le travail acharné bat le talent, quand le talent ne travaille pas dur.", author: "Tim Notke" },
  { text: "Apprenez à vous faire confiance, le reste suivra.", author: "Anonyme" },
  { text: "Le succès commence par la décision de commencer.", author: "Anonyme" },
];


// Selecting elements
const quoteElement = document.querySelector(".quote");
const authorElement = document.querySelector(".author");
const newQuoteBtn = document.getElementById("new-quote-btn");

// Function to display a new quote
function displayNewQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  quoteElement.textContent = `"${randomQuote.text}"`;
  authorElement.textContent = `- ${randomQuote.author}`;
}

function copyToClipboard() {
  const textToCopy = `${quoteElement.textContent} ${authorElement.textContent}`;
  navigator.clipboard.writeText(textToCopy)
    .then(() => alert("Quote copied!"));
}


// Event listener for the button
newQuoteBtn.addEventListener("click", displayNewQuote);


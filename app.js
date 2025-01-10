// Array of confidence quotes
const quotes = [
  { text: "Believe in yourself and all that you are.", author: "Christian D. Larson" },
  { text: "With confidence, you have won before you have started.", author: "Marcus Garvey" },
  { text: "Don’t be satisfied with stories, how things have gone with others. Unfold your own myth.", author: "Rumi" },
  { text: "You gain strength, courage, and confidence by every experience in which you really stop to look fear in the face.", author: "Eleanor Roosevelt" },
  { text: "It is confidence in our bodies, minds, and spirits that allows us to keep looking for new adventures.", author: "Oprah Winfrey" },
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


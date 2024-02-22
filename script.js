let apiQuotes = [];

// Show New Quote
function newQuote() {
    // Generate random number
    const randNum = Math.floor(Math.random() * apiQuotes.length);
    // Pick a random quote from apiQuotes array
    const quote = apiQuotes[randNum];
    console.log(quote);
}

// Get Quotes From API
async function getQuotes() {
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        // Catch Error Here
    }
}

// On Load
getQuotes();
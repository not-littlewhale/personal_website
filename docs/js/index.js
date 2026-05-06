// that quote / message of the day function or whatever in hell that's called

// TODO finish ts
// js list of quotes (database maybe), randomize, change the text of the quote element to the quote
// not quote of the "day" but quote per refresh, some call it false advertising I call it more interesting

const modifying_text = document.querySelector('.changable-text');
const quotes = [
    "quote 1",
    "quote 2",  // properly implmenting these later
] 
// they're called quotes but ig we can also do fun facts and silly messages

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}  // UNTESTED - assuming this works for now

function setQuote(){
    const quote = getRandomQuote();
    modifying_text.textContent = quote;
}

setQuote();  // TODO: broken. for some goddamn reason

const quotes = [

    {
        text: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Hinata Shoyo"

    },

    {
        text: "But how could you live and have no story to tell?",
        author: "Fyodor Dostoevsky"
    },

    {
        text: "Set your heart ablaze.",
        author: "Rengoku Kyojuro"
    },

    {
        text: "The purpose of literature is to turn blood into ink.",
        author: "T.S. Eliot"
    },

    {
        text: "I am nothing to anyone, and that is my greatest freedom",
        author: "Franz Kafka"
    },


];

function changeQuote() {
    const random = Math.floor(Math.random() * quotes.length);

    document.getElementById("quote-display").innerText = `"${quotes[random].text}"`;

    document.getElementById("author-display").innerText = `-- ${quotes[random].author}`;

}

function updateClock() {

    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    document.getElementById("clock").innerText = hours + ":" + minutes;

}

updateClock();

setInterval(updateClock, 1000);



























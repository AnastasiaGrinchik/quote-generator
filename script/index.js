let quoteText = document.querySelector(".quote-container__text");
let quoteAuthor = document.querySelector(".quote-container__author");
let buttonTweet = document.querySelector(".button-container__tweet");
let buttonNext =  document.querySelector(".button-container__next");



function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let resultRandom = Math.floor(Math.random() * (max - min + 1)) + min;

    function writeQuote() {
        quoteText.textContent = arrQuotes[resultRandom].quote;
        quoteAuthor.textContent = arrQuotes[resultRandom].author;
    }

    writeQuote();
    function rewriteQuote() {
        for(i = 0; i < arrQuotes.length; i++) {
            if (resultRandom == i) {
                getRandomIntInclusive(min, max);
            }
        }
    }

    buttonNext.addEventListener("click", rewriteQuote);

}

function tweetQuote() {
    let quoteActive = quoteText.textContent; // получили содержимое текущей цитаты
    let authorActive = quoteAuthor.textContent; // получили текущего автора
    let twitterUrl = `https://twitter.com/intent/tweet?text=${quoteActive} - ${authorActive}`;
    window.open(twitterUrl, '_blank'); // _бланк необходим для открытия окна в новой вкладке
}
buttonTweet.addEventListener("click", tweetQuote);
getRandomIntInclusive(0, arrQuotes.length-1);

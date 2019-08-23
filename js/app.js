/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js
*/

// const phrase = new Phrase();
// const game = new Game();

// const phrase = new Phrase('Life is like a box of chocolates');
// console.log(`Phrase - phrase: ${phrase.phrase}`);

/*const game = new Game();
game.phrases.forEach((phrase, index) => {
    console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
});
*/


/*
const logPhrase = (phrase) => {
    console.log(`Phrase - phrase: `, phrase.phrase);
    };
    const game = new Game();
    logPhrase(game.getRandomPhrase());
    logPhrase(game.getRandomPhrase());
    logPhrase(game.getRandomPhrase());
    logPhrase(game.getRandomPhrase());
    logPhrase(game.getRandomPhrase());
*/


// Init new game when user clicks the Start game button
let game;
document.getElementById('btn__reset').addEventListener('click', () => {
    game = new Game();
    game.startGame();
});

// Pass clicked key to handleInteraction() to check it
document.getElementById('qwerty').addEventListener('click', (e) => {
    if(e.target.tagName === 'BUTTON') {
        game.handleInteraction(e.target.textContent, e.target);
    }
});



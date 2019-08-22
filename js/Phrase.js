/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js 
*/

class Phrase {
    constructor(phrase) {
        this.phrase = phrase;
    }
    
    
    // Display phrase on game board
    addPhraseToDisplay() {
        let eachLetter = this.phrase.split('');
        const phraseUL = document.querySelector('#phrase ul');
        for (let i = 0; i < eachLetter.length; i++) {
            let li = document.createElement('li');
            let text = document.createTextNode(eachLetter[i]);
            li.appendChild(text);
            phraseUL.appendChild(li);
            if (eachLetter[i] != ' ') {
                li.className = 'hide letter';
                li.classList.add(eachLetter[i]);
            } else {
                li.className = 'space';
            }
        }
    }


    // Checks if passed letter is in phrase
    checkLetter(letter) {
        return !(this.phrase.indexOf(letter) == -1);
    }

    // Displays passed letter on screen after a match is found
    showMatchedLetter(letter) {
        const letters = document.querySelectorAll(`.hide.${letter}`);
        for (let i=0; i<letters.length; i+=1) {
            if (letter === letters[i].textContent.toLowerCase()) {
                letters[i].className = `show letter ${letter}`;
            }
        }
    }
}

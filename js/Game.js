/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js 
*/

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase('fish out of water'),
            new Phrase('rob peter to pay paul'),
            new Phrase('down for the count'),
            new Phrase('stuck in the past'),
            new Phrase('beating around the bush')
        ];
        this.activePhrase = null;
    }

    

    // Selects and returns random phrase from phrase array
    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random()*this.phrases.length)];
    }


    // Begins game by selecting a random phrase and displaying it to user
    startGame() {
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'none';
        let selectedPhrase = this.getRandomPhrase();
        this.activePhrase = selectedPhrase;
        selectedPhrase.addPhraseToDisplay();
    }


    // Checks to see if player has revealed all of the letters
    checkForWin() {
        let shownLetters = document.getElementsByClassName('show');
        let spaces = document.getElementsByClassName('space');
        if(this.activePhrase.phrase.length === shownLetters.length + spaces.length) {
            return this.gameOver(true);
        } else {
            return false;
        }
    }

    /*Increases the value of the missed property
    Removes a life from the scoreboard
    Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {																						
		this.missed += 1;																			
		const live = document.querySelector(`img[src*=live]`);
		if (this.missed < 5) {
            live.src = `images/lostHeart.png`;
        } else {
            this.gameOver(false);
        }
    }
    
    // Displays game over message
    gameOver(win) {																												
		document.querySelector(`#btn__reset`).textContent = `Try again?`;
		const overlay = document.querySelector(`#overlay`);
		const messageElement = document.querySelector(`#game-over-message`);
		overlay.style.display = `flex`;
		if (win) {
			messageElement.textContent = `YOU WON!`;
            overlay.className += ` win`;
            document.getElementById('btn__reset').addEventListener('click', () => {
                location.reload();
            });
		} else {
			messageElement.textContent = `YOU FAILED.`;
            overlay.className += ` lose`;
            document.getElementById('btn__reset').addEventListener('click', () => {
                location.reload();
            });
		}
	}

    // Called from app.js to handle game responses when a letter is chosen
    handleInteraction(letter) {
        if(this.activePhrase.checkLetter(letter)) {
            this.activePhrase.showMatchedLetter(letter);
            this.checkForWin();
        } else {
            this.removeLife();
            this.checkForWin();
        }
    }

}


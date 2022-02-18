 /*
 * DOTS: Level Two
 *
 */
let score = 0;
let arenaEl = document.querySelectorAll('.js-ball');
let scoreEl = document.querySelector('.js-score');

// Adds leading zero's to score
function zeroPad(score) {

    return score.toString().padStart(4, "0")

  }
  
function declareWinner() {
  
    scoreEl.innerHTML = zeroPad(score)
    document.body.classList.add('game-over');

  }

arenaEl.forEach(arenaEl => {
    
    arenaEl.addEventListener('click', function() {
        score += 10;

        if (score == 100) {
            declareWinner();
        }
        else {
            scoreEl.innerHTML = zeroPad(score)
        }
    })
});


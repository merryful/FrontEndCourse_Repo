/*
 * DOTS: Level Three
 *
 */
let score = 0;
let arenaEl = document.querySelector('.js-arena');
let scoreEl = document.querySelector('.js-score');

function zeroPad(score) {
    return score.toString().padStart(4, "0")
}
  
function declareWinner() {
    scoreEl.innerText = zeroPad(score);
    document.body.classList.add('game-over');
}
// Grabbed from solution. Had trouble finding syntax for logic
// I get it now though ! Thanks :)
arenaEl.addEventListener('click', function(e) {

    if (e.target.classList.contains('js-ball')) {
      score += parseInt(e.target.dataset.increment);

    if ( score < 100 ) {
        scoreEl.innerText = zeroPad(score);
    } 
    else {
        declareWinner();
    }
    }   

})

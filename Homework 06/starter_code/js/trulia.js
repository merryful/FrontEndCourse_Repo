

let truliaCards = document.getElementsByClassName("trulia-grid-item");
let cards = [...truliaCards];


document.addEventListener('DOMContentLoaded', function(event) {
  event.preventDefault();
  // Toggle the navigation
  document.querySelector('.trulia-nav-toggle').addEventListener('click', function(event){

    let nav = document.querySelectorAll('nav ul');
    
    for (let i =0; i < nav.length; i++) {
      nav[i].classList.toggle('trulia-nav-mobilehide')
    }


})


// Loop through all the cards
for ( let i = 0; i < cards.length; i++ ) {

  // Add a click listener on each card
  cards[i].addEventListener('click', function(){

    // Remove the featured class
    for (let j = 0; j < cards.length; j++) {
      cards[j].classList.remove("trulia-featured-grid-item");
    }
    // Add the featured class on the one clicked on
    cards[i].classList.add("trulia-featured-grid-item"); 

    })
  }    
});  




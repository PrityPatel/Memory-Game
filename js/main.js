  console.log('activate framework!');

// Pseudocode?
// When player lands on page, load page as quickly as possible
      // do this using an Event Listener? -us jqery library load function - notated below

// Reveal card image once player clicks on card.

// Allow player to click on a max of 2 cards at a time.
      // Use a 'while loop'?

// Reveal card images of a max of 2 cards at a time.
// Player gains 1 entry for every 2 cards clicked.
// Player can keep playing until all card images have been matched
// Number of entries should be displayed.
      //currently no css or html displaying this

// If 2 consecutively clicked cards match, leave those 2 card images revealed and do not allow those cards to be clicked again.
// If 2 consecutively clicked cards do not match, hide revealed card images allow those cards to be clicked again.
// Once all 12 card images have been revealed and match, alert player with message of final entries.
//


//**********************************
//the following is the function to load the page using the jQuery first; "wait until DOM has finished loading and the load 'this' code."

// $(function(){

// code block here //

// })
//**********************************

//var counter = 0;


//writing a function that shuffles the array at the onset of every game and creates a new order for the classes in the array; using while loop until all indexes are set and then returns the new array.

var arr = [".women-code", ] //add in all the image class names in this variable;

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

var $squares =$(".square");
// console.log($squares);

$squares.on("click", function(event) {
  console.log("#" + this.id);
  this.innerHTML="";
addClassToSquare("women-code", "#" + this.id)
});

//   var $cardNumber1 =$("#1");
// $cardNumber1.addClass("womenCode");

var addClassToSquare = function(className, squareId) {
  // var $squareNumber1 = $("#1");
  // $squareNumber1.addClass("womenCode");
  $(squareId).addClass(className);
};







// CARD 1

// if (#card1 === #card2) {
//   then stay reavealed;
// else conceal
// turn ++ //shows the amount of entries thus far and keeps adding upon click

//   if card1 === card3
//   then stay reavealed;
// else conceal
// turn ++ //shows the amount of entries thus far and keeps adding upon click

//     if card1 === card4
//   then stay reavealed;
// else conceal
// turn ++ //shows the amount of entries thus far and keeps adding upon click

//     if card1 === card5
//   then stay reavealed;
// else conceal
// turn ++ //shows the amount of entries thus far and keeps adding upon click

//     if card1 === card6
//   then stay reavealed;
// else conceal
// turn ++ //shows the amount of entries thus far and keeps adding upon click

//     if card1 === card7
//   then stay reavealed;
// else conceal
// turn ++ //shows the amount of entries thus far and keeps adding upon click

//     if card1 === card8
//   then stay reavealed;
// else conceal
// turn ++ //shows the amount of entries thus far and keeps adding upon click

//     if card1 === card9
//   then stay reavealed;
// else conceal
// turn ++ //shows the amount of entries thus far and keeps adding upon click

//     if card1 === card10
//   then stay reavealed;
// else conceal
// turn ++ //shows the amount of entries thus far and keeps adding upon click

// if card1 === card11
//   then stay reavealed;
// else conceal
// turn ++ //shows the amount of entries thus far and keeps adding upon click

// if card1 === card12
//   then stay reavealed;
// else conceal
// turn ++ //shows the amount of entries thus far and keeps adding upon click

// // CARD 2

// if card2 === card2
//   then stay reavealed;
// else conceal
// turn ++ //shows the amount of entries thus far and keeps adding upon click

//   if card2 === card3
//   then stay reavealed;
// else conceal
// turn ++ //shows the amount of entries thus far and keeps adding upon click

//     if card2 === card4
//   then stay reavealed;
// else conceal
// turn ++ //shows the amount of entries thus far and keeps adding upon click

//     if card2 === card5
//   then stay reavealed;
// else conceal
// turn ++ //shows the amount of entries thus far and keeps adding upon click

//     if card2 === card6
//   then stay reavealed;
// else conceal
// turn ++ //shows the amount of entries thus far and keeps adding upon click

//     if card2 === card7
//   then stay reavealed;
// else conceal
// turn ++ //shows the amount of entries thus far and keeps adding upon click

//     if card2 === card8
//   then stay reavealed;
// else conceal
// turn ++ //shows the amount of entries thus far and keeps adding upon click

//     if card2 === card9
//   then stay reavealed;
// else conceal
// turn ++ //shows the amount of entries thus far and keeps adding upon click

//     if card2 === card10
//   then stay reavealed;
// else conceal
// turn ++ //shows the amount of entries thus far and keeps adding upon click

// if card2 === card11
//   then stay reavealed;
// else conceal
// turn ++ //shows the amount of entries thus far and keeps adding upon click

// if card2 === card12
//   then stay reavealed;
// else conceal
// turn ++ //shows the amount of entries thus far and keeps adding upon click

// // CARD 3


// if card3 === card3
//   then stay reavealed;
// else conceal
// turn ++ //shows the amount of entries thus far and keeps adding upon click

//     if card3 === card4
//   then stay reavealed;
// else conceal
// turn ++ //shows the amount of entries thus far and keeps adding upon click

//     if card3 === card5
//   then stay reavealed;
// else conceal
// turn ++ //shows the amount of entries thus far and keeps adding upon click

//     if card3 === card6
//   then stay reavealed;
// else conceal
// turn ++ //shows the amount of entries thus far and keeps adding upon click

//     if card3 === card7
//   then stay reavealed;
// else conceal
// turn ++ //shows the amount of entries thus far and keeps adding upon click

//     if card3 === card8
//   then stay reavealed;
// else conceal
// turn ++ //shows the amount of entries thus far and keeps adding upon click

//     if card3 === card9
//   then stay reavealed;
// else conceal
// turn ++ //shows the amount of entries thus far and keeps adding upon click

//     if card3 === card10
//   then stay reavealed;
// else conceal
// turn ++ //shows the amount of entries thus far and keeps adding upon click

// if card3 === card11
//   then stay reavealed;
// else conceal
// turn ++ //shows the amount of entries thus far and keeps adding upon click

// if card3 === card12
//   then stay reavealed;
// else conceal
// turn ++ //shows the amount of entries thus far and keeps adding upon click

//  CARD 4


//     if card4 === card4
//   then stay reavealed;
// else conceal
// turn ++ //shows the amount of entries thus far and keeps adding upon click

//     if card4 === card5
//   then stay reavealed;
// else conceal
// turn ++ //shows the amount of entries thus far and keeps adding upon click

//     if card4 === card6
//   then stay reavealed;
// else conceal
// turn ++ //shows the amount of entries thus far and keeps adding upon click

//     if card4 === card7
//   then stay reavealed;
// else conceal
// turn ++ //shows the amount of entries thus far and keeps adding upon click

//     if card4 === card8
//   then stay reavealed;
// else conceal
// turn ++ //shows the amount of entries thus far and keeps adding upon click

//     if card4 === card9
//   then stay reavealed;
// else conceal
// turn ++ //shows the amount of entries thus far and keeps adding upon click

//     if card4 === card10
//   then stay reavealed;
// else conceal
// turn ++ //shows the amount of entries thus far and keeps adding upon click

// if card4 === card11
//   then stay reavealed;
// else conceal
// turn ++ //shows the amount of entries thus far and keeps adding upon click

// if card4 === card12
//   then stay reavealed;
// else conceal
// turn ++ //shows the amount of entries thus far and keeps adding upon click

//  CARD 5

// if card5 === card5
//   then stay reavealed;
// else conceal
// turn ++ //shows the amount of entries thus far and keeps adding upon click

//     if card5 === card6
//   then stay reavealed;
// else conceal
// turn ++ //shows the amount of entries thus far and keeps adding upon click

//     if card5 === card7
//   then stay reavealed;
// else conceal
// turn ++ //shows the amount of entries thus far and keeps adding upon click

//     if card5 === card8
//   then stay reavealed;
// else conceal
// turn ++ //shows the amount of entries thus far and keeps adding upon click

//     if card5 === card9
//   then stay reavealed;
// else conceal
// turn ++ //shows the amount of entries thus far and keeps adding upon click

//     if card5 === card10
//   then stay reavealed;
// else conceal
// turn ++ //shows the amount of entries thus far and keeps adding upon click

// if card5 === card11
//   then stay reavealed;
// else conceal
// turn ++ //shows the amount of entries thus far and keeps adding upon click

// if card5 === card12
//   then stay reavealed;
// else conceal
// turn ++ //shows the amount of entries thus far and keeps adding upon click

//  CARD 6

//     if card6 === card7
//   then stay reavealed;
// else conceal
// turn ++ //shows the amount of entries thus far and keeps adding upon click

//     if card6 === card8
//   then stay reavealed;
// else conceal
// turn ++ //shows the amount of entries thus far and keeps adding upon click

//     if card6 === card9
//   then stay reavealed;
// else conceal
// turn ++ //shows the amount of entries thus far and keeps adding upon click

//     if card6 === card10
//   then stay reavealed;
// else conceal
// turn ++ //shows the amount of entries thus far and keeps adding upon click

// if card6 === card11
//   then stay reavealed;
// else conceal
// turn ++ //shows the amount of entries thus far and keeps adding upon click

// if card6 === card12
//   then stay reavealed;
// else conceal
// turn ++ //shows the amount of entries thus far and keeps adding upon click

//  CARD 7


//     if card7 === card8
//   then stay reavealed;
// else conceal
// turn ++ //shows the amount of entries thus far and keeps adding upon click

//     if card7 === card9
//   then stay reavealed;
// else conceal
// turn ++ //shows the amount of entries thus far and keeps adding upon click

//     if card7 === card10
//   then stay reavealed;
// else conceal
// turn ++ //shows the amount of entries thus far and keeps adding upon click

// if card7 === card11
//   then stay reavealed;
// else conceal
// turn ++ //shows the amount of entries thus far and keeps adding upon click

// if card7 === card12
//   then stay reavealed;
// else conceal
// turn ++ //shows the amount of entries thus far and keeps adding upon click

//  CARD 8

//     if card8 === card9
//   then stay reavealed;
// else conceal
// turn ++ //shows the amount of entries thus far and keeps adding upon click

//     if card8 === card10
//   then stay reavealed;
// else conceal
// turn ++ //shows the amount of entries thus far and keeps adding upon click

// if card8 === card11
//   then stay reavealed;
// else conceal
// turn ++ //shows the amount of entries thus far and keeps adding upon click

// if card8 === card12
//   then stay reavealed;
// else conceal
// turn ++ //shows the amount of entries thus far and keeps adding upon click

//  CARD 9

//     if card9 === card10
//   then stay reavealed;
// else conceal
// turn ++ //shows the amount of entries thus far and keeps adding upon click

// if card9 === card11
//   then stay reavealed;
// else conceal
// turn ++ //shows the amount of entries thus far and keeps adding upon click

// if card9 === card12
//   then stay reavealed;
// else conceal
// turn ++ //shows the amount of entries thus far and keeps adding upon click

// CARD 10

// if card10 === card11
//   then stay reavealed;
// else conceal
// turn ++ //shows the amount of entries thus far and keeps adding upon click

// if card10 === card12
//   then stay reavealed;
// else conceal
// turn ++ //shows the amount of entries thus far and keeps adding upon click

// CARD 11

// if card11 === card12
//   then stay reavealed;
// else conceal
// turn ++ //shows the amount of entries thus far and keeps adding upon click


// alert: CONGRATS, YOU COMPLETED THE BOARD IN (TURN) ENTRIES. NOW MATCH THAT NUMBER TO YOUR FORTUNE BELOW!


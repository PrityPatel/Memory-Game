console.log('activate framework!')

//**********************************
//the following is the function to load the page using the jQuery first; "wait until DOM has finished loading and the load 'this' code."

// $(function(){

// code block here //

// })
//**********************************

//writing a function that shuffles the array at the onset of every game and creates a new order for the classes in the array;
//using while loop until all indexes are set and then returns the new array.

var arr = ["chinesefortune", "cloverfortune", "catfortune", "horseshoefortune", "lovefortune", "goldpotfortune", "chinesefortune", "cloverfortune", "catfortune", "horseshoefortune", "lovefortune", "goldpotfortune"];

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

  //and then return new array
  return array;
}
//call the function so the images are shuffled upon refresh
shuffle(arr);


var $squares =$(".square");
// console.log($squares);

var checkMatch= [];
//setting variable to write functions for matching cards

var clickCounter= 0;

var matches= 0;

var attemptsMade= 0;

var reHide= 0;
// var divArray= [];

//the below is i realize adds the respective image class onto to the board, i'm just not sure how
$squares.on("click", function() {
  if (clickCounter < 2) {
  $(this).addClass(arr[parseInt(this.id)]);
  checkMatch.push(arr[parseInt(this.id)]);
  clickCounter++;
  attemptsMade++;
  console.log("name of object in the array: " + arr[parseInt(this.id)]);
  console.log("checking the match of these objects in the array: " + checkMatch);
  console.log("how many clicks: " + clickCounter);
  console.log("attempts made: " + attemptsMade);
  console.log("matches: " + matches);
  // divArray.push(this.id);
  // console.log(divArray[0] + " " + divArray[1]);//push the div id to divArray
  clickMatch();
}
});

// function clickCounter() {
//   if (clickCounter < 2) {
//     return clickCounter++;
//   }
// }

function clickMatch() {
  if (clickCounter === 2) {
    if (checkMatch[0] === checkMatch[1]) {
      console.log("Good Job. Keep Going!");
      //console.log("Keep Going. Good Fortune Is Coming Your Way!");
      clickCounter = 0;
      checkMatch= [];
      matchesMade();
      matches++;
      console.log("matches: " + matches);
      return;
    } else {
      reHide();
  }
}

function matchesMade() {
  if (clickCounter == 2 && matches === 6) {
    alert("Your Fortune Has Arrived. Your Fortune Number is: " + attemptsMade);
  } else {
    return;
  }
}

function reHide() {
  if (clickCounter === 2 && checkMatch[0] !== checkMatch[1]) {
    // $(this).removeClass(arr[parseInt(this.id)]);
      console.log("Try Again.");
      setTimeout(function() {
      checkMatch = [];
      clickCounter = 0;
    }, 1100);
      console.log("WHY ISN'T THIS RE-HIDING");
    // console.log(checkMatch[0]==checkMatch[1]);
    // if (checkMatch[0] !== checkMatch[1]) {
      // $(square).removeClass(arr[parseInt(square.id)]);
      // $squares.eq(divArray[0]).removeClass().addClass("square");
      // $squares.eq(divArray[1]).removeClass().addClass("square");
      // divArray = [];

      // clickCounter = 0;
  }
}
}
// }

//ISSUES:
//REHIDE FUNCTION IS NOT CURRENTLY COMPLETE; NEEDS TO HIDE ITEMS THAT DON'T MATCH ONCE CLICKED ON
// If 2 consecutively clicked cards do not match, hide revealed card images and allow those cards to be clicked again.

//NEED TO WRITE FUNCTION SO THAT THE MATCHED ITEMS ARE NOT RECLICKABLE - KEEP THEM REVEALED
// If 2 consecutively clicked cards match, leave those 2 card images revealed and do not allow those cards to be clicked again.
// If cards match then keep revealed and allow player to click an additional 2 cards

//NEED TO WRITE FUNCTION TO STOP ABILITY TO CLICK ON THE BOARD AGAIN AFTER 6 MATCHES
// Player can keep playing until all card images have been matched

// When player lands on page, load page as quickly as possible
      // do this using an Event Listener? -us jqery library load function - notated above; wrap everything withing jquery function


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

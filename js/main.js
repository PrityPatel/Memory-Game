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

  //and then return a new array
  return array;
}
//call the function so the images are shuffled upon refresh
shuffle(arr);


var $squares =$(".square");
// console.log($squares);

var checkMatch= [];
//setting variable to write functions for matching cards

var clickCounter= 0;
//setting variable to write functions to maintain 2 clicks per turn

var matches= 0;
//setting variable to write a function to make sure that once all matches are made, then the amount of attempts made to make matches is sent as an alert to the player in the form of a Fortune Number.

var attemptsMade= 0;
//setting variable to keep track of how many attempts are made to make matches. The Fortune number is the amount of the amount of attempts made times 2 as each click counts towards the Fortun

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
  clickMatch();
}
});


function clickMatch() {
  if (clickCounter === 2) {
      console.log("value " + checkMatch[0], checkMatch[1]);
    if (checkMatch[0] === checkMatch[1]) {
      console.log("Good Job. Keep Going!");
      //console.log("Keep Going. Good Fortune Is Coming Your Way!");
      checkMatch= [];
      matches++;
      matchesMade();
      console.log("matches: " + matches);
      clickCounter = 0;
      return;
    } else {
      reHide();
    }
  }
}

function matchesMade() {
  if (matches === 6) {
    alert("Your Fortune Has Arrived. Your Fortune Number is: " + attemptsMade);
  } else {
    return;
  }
}

function reHide() {
  console.log("Try Again.");
  setTimeout(function() {
    $("." + checkMatch[0]).removeClass(checkMatch[0]);
    $("." + checkMatch[1]).removeClass(checkMatch[1]);
    checkMatch = [];
    clickCounter = 0;
  }, 1100);
}


//ISSUES:
//NEED TO WRITE FUNCTION SO THAT THE MATCHED ITEMS ARE NOT RECLICKABLE
// If 2 consecutively clicked cards match, leave those 2 card images revealed and do not allow those cards to be clicked again.
// If cards match then keep revealed and allow player to click an additional 2 cards

//NEED TO WRITE FUNCTION TO STOP ABILITY TO CLICK ON THE BOARD AGAIN AFTER 6 MATCHES
// Player can keep playing until all card images have been matched

// When player lands on page, load page as quickly as possible
      // do this using an Event Listener? -us jqery library load function - notated above; wrap everything withing jquery function



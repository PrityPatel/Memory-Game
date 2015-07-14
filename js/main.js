console.log("ISSUE #1: NEED TO WRITE FUNCTION SO THAT THE MATCHED ITEMS ARE NOT RECLICKABLE");
console.log("ISSUE #2: NEED TO WRITE FUNCTION TO RESET BOARD AFTER ALL 6 MATCHES ARE MADE");

//**********************************
//the following is the function to load the page using jQuery first.
//it basically says: "wait until DOM has finished loading and then load the following code."

$(function() {

  //writing a function that shuffles the array at the onset of every game and creates a new order for the classes in the array;
  //using while loop until all indexes are set and then returns the new array.

  var arr = ["chinesefortune", "cloverfortune", "catfortune", "horseshoefortune", "lovefortune", "goldpotfortune", "chinesefortune", "cloverfortune", "catfortune", "horseshoefortune", "lovefortune", "goldpotfortune"];
  //setting variable to include all class names (images) to be added from the array into the square

  function shuffle(array) {
      var currentIndex = array.length,
        temporaryValue, randomIndex;

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
    //then call the shuffle function so the images are shuffled upon refresh
  shuffle(arr);

  ///////GLOBAL VARIABLES///////

  var $squares = $(".square");
  // console.log($squares);

  var checkMatch = [];
  //setting variable to be used in a function to see if cards match.

  var matchAttempt = 0;
  //setting variable to keep track of how many clicks were made to attempt at a match. this resets at every 2nd click as it takes 2 attempts to see if a match is made.

  var totalMatches = 0;
  //setting variable to keep track of the total amount of matches and to make sure that once all 6 matches are made, an altert is sent to the player with their individual Fortune Number.

  var totalClicks = 0;
  //setting variable to keep track of how many total clicks were made on the baord as this number will be the Fortune Number that is alerted to the player once all 6 matches are made.

  //i realize ``` $(this).addClass(arr[parseInt(this.id)]) ``` adds the respective image class onto to the board, though i'm not sure exactly how.
  //putting console log elements into long form english, so that it easy for my 'new to coding' brain make sense of what is appearing.
  $squares.on("click", function() {
    if (matchAttempt < 2) {
      $(this).addClass(arr[parseInt(this.id)]);
      checkMatch.push(arr[parseInt(this.id)]);
      matchAttempt++;
      totalClicks++;
      console.log("checking the match of these objects in the array: " + checkMatch);
      console.log("total clicks thus far: " + totalClicks);
      clickMatch();
    }
  });

  function clickMatch() {
    if (matchAttempt === 2) {
      if (checkMatch[0] === checkMatch[1]) {
        checkMatch = [];
        totalMatches++;
        matchesMade();
        console.log("Match Made!")
        console.log("how many matches thus far: " + totalMatches);
        matchAttempt = 0;
        return;
      } else {
        reHide();
      }
    }
  }

  function reHide() {
    setTimeout(function() {
      $("." + checkMatch[0]).removeClass(checkMatch[0]);
      $("." + checkMatch[1]).removeClass(checkMatch[1]);
      checkMatch = [];
      matchAttempt = 0;
      alert("Keep Calm and Focus. Your Fortune Is Tied To Your Focus!");
    }, 900);
  }

  function matchesMade() {
    if (totalMatches === 6) {
      $(".memory_board").fadeOut(2000);
      alert("Your Fortune Has Arrived. Your Fortune Number is: " + totalClicks);
    } else {
      return;
    }
  }

})


//ISSUES:
//NEED TO WRITE FUNCTION SO THAT THE MATCHED ITEMS ARE NOT RECLICKABLE
//NEED TO WRITE FUNCTION TO RESET BOARD AFTER ALL 6 MATCHES ARE MADE

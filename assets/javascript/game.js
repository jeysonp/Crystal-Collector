
$(document).ready(function() {

  var wins = 0;
  var losses = 0;
  var targetNumber;

  targetNumber = Math.floor(Math.random() * 102) + 19;

  $("#number-to-guess").text(targetNumber);

  var counter = 0;
  var numberOptions = "";
  

  for (var i = 0; i < 4; i++) {
    var numberOptions = Math.floor(Math.random() * 12 + 1);
    console.log(numberOptions);

    var imageGem = $("<img>");
    imageGem.addClass("gem-image");
    imageGem.attr("src", "assets/images/red-gem.jpg")
    imageGem.attr("src", "assets/images/green-gem.jpg")
    imageGem.attr("data-gemvalue", numberOptions);
    $("#gems").append(imageGem);
  }

  $(".gem-image").on("click", function() {
    var gemValue = ($(this).attr("data-gemvalue"));
    gemValue = parseInt(gemValue);
      counter += gemValue;
      console.log("New score: " + counter);
      
  if (counter === targetNumber) {
      $("#wins").html(wins);
      console.log("You win!");
  } 

  else if (counter >= targetNumber) {
    $("#losses").html(losses);
      console.log("You Lose!");
  }
 
  });

});

//----To Do:
// I have the numbers generating in the crystals, and the 
// random number to guess. The game almost works in console log.
// I need to display the total that is added when clicking the crystals.
// I need to display the score (wins, losses).
// I need to add a reset to the game when the player wins or losses.
// I need to update the readme.
// I need to attach link to the game from my portfolio.


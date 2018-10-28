$(document).ready(function() {

  var targetNumber = 55;

  $("#number-to-guess").text(targetNumber);

  var counter = 0;
  var numberOptions = [10, 5, 3, 7];

  var increment = numberOptions[Math.floor(Math.random())];
  for (var i = 0; i < numberOptions.length; i++) {
    var imageGem = $("<img>");
    imageGem.addClass("gem-image");
    imageGem.attr("src", "assets/images/red-gem.jpg")
    imageGem.attr("data-gemvalue", numberOptions[i]);
    $("#gems").append(imageGem);
  }

  $(".gem-image").on("click", function() {
    var gemValue = ($(this).attr("data-gemvalue"));
    gemValue = parseInt(gemValue);
      counter += gemValue;
      alert("New score: " + counter);
      
  if (counter === targetNumber) {
      alert("You win!");
  } 

  else if (counter >= targetNumber) {
      alert("You Lose!");

  }

  });

});





// for(var i = 0; i <4; i++) {

//     var randomNumber = Math.floor(Math.random() * 11 + 1);
//     console.log(randomNumber);

//     var gem = $("<div>");
//         gem.attr("class", "gem", "data-gem");

//     $(".gems").append(gem);

// }


var targetNumber = 55;

$("#number-to-guess").text(targetNumber);

var counter = 0;


var numberOptions = [Math.floor(Math.random() * 11 + 1)];
// var increment = numberOptions[Math.floor(Math.random())];
for(var i = 0; i < numberOptions.length; i++)

$(".gem-image").on("click", function() {
    counter += increment;
    alert("New score: " + counter);
    
if (counter === targetNumber) {
    alert("You win!");
} 

else if (counter >= targetNumber) {
    alert("You Lose!");

}

});






// for(var i = 0; i <4; i++) {

//     var randomNumber = Math.floor(Math.random() * 11 + 1);
//     console.log(randomNumber);

//     var gem = $("<div>");
//         gem.attr("class", "gem", "data-gem");

//     $(".gems").append(gem);

// }
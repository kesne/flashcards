$(document).ready(function(){

  $(".flashcard").click(function() {
    $(".flashcard-initial", this).fadeToggle();
    $(".flashcard-reveal", this).fadeToggle();
  });

});


// This is the difficult way to do it (these lines for every single card)

// $("#flashcard-1").click(function() {
//   $(".flashcard1-initial").fadeToggle();
//   $(".flashcard1-reveal".fadeToggle();
// });

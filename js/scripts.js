$(document).ready(function(){

  $(".flashcard").click(function() {
    $(".flashcard-initial", this).toggle("fast");
    $(".flashcard-reveal", this).toggle("fast");
    $(this).toggleClass("active");
  });

});


// This is the difficult way to do it (these lines for every single card)

// $("#flashcard-1").click(function() {
//   $(".flashcard1-initial").fadeToggle();
//   $(".flashcard1-reveal".fadeToggle();
// });

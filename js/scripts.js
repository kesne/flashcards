$(document).ready(function(){

  $(".flashcard").click(function() {
    $(this).children(".flashcard-initial").toggle("fast");
    $(this).children(".flashcard-reveal").toggle("fast");
    $(this).toggleClass("active");
  });

});


// This is the difficult way to do it (these lines for every single card)

// $("#flashcard-1").click(function() {
//   $(".flashcard1-initial").fadeToggle();
//   $(".flashcard1-reveal".fadeToggle();
// });

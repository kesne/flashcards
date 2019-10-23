$(document).ready(() => {
    $('.flashcard').click(function(e) {
        $(e.currentTarget).toggleClass('is-flipped');
    });
});

// This is the difficult way to do it (these lines for every single card)

// $("#flashcard-1").click(function() {
//   $(".flashcard1-initial").fadeToggle();
//   $(".flashcard1-reveal".fadeToggle();
// });

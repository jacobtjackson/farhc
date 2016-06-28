//MVC
//closure
//scope
//loops do a challenge w/ each type
//anonymous function
// Google popular js interview concepts

/*var morph = function(btn, mod) {
     
    // Get the location of the selected button.
    var btn = $(btn);
    var pos = btn.position();
    var btn_left = pos.left;
    var btn_top = pos.top;

    // Get the location of the center of the screen
    var viewport_top = window.innerHeight / 2;
    var viewport_left = window.innerWidth / 2;

    // Subtract the location of the button from the center of the screen in order to get a pixel value that will determine the initial    placement of the modal.
    var coord_top = btn_top - viewport_top;
    var coord_left = btn_left - viewport_left;

    // Move the modal on top of the clicked button.
    $(mod).css("margin-top", coord_top).css("margin-left", coord_left).show();
    // Hide the button, but don't remove it from the DOM.
    $(btn).css("opacity", "0");
    // Animate the modal by moving it to the center and adding the revealed class.
    $(mod).animate({marginTop: "7.3em", marginLeft: "-20.5em"}, 150).addClass("revealed").removeClass("hidden");
    // Fade in the modal's content.
    $("#modal-content").delay(150).fadeIn(150);
  
    // Queue overlay.
    $('.overlay').css("z-index", "1").css("opacity", ".87").css("transition", "opacity .5s ease");
  
    // Remove the click function on the original button.
    $(btn).off("click", morph);
    $(btn).css("cursor", "auto");
};

$(window).load(function() {
   // Run the previous function when the button is clicked.
    $('#oppo').on("click", morph('#oppo', '#modal'));

    // Do something to remve the modal if the close button is clicked. Should be adjusted as necessary.
    $('#close').click(function() {
    $('#modal').hide().removeClass("revealed");
    $('#oppo').css("opacity", "1");
    $("#modal-content").fadeOut(0);
  
    //Hide the overlay.
    $('.overlay').css("z-index", "-1").css("opacity", "0").css("transition", "opacity 0s ease");
  
    // Make the button work again.
    $('#oppo').on("click", morph('#oppo', '#modal'));
    $('#oppo').css("cursor", "pointer");
    });

}); */

$(window).load(function() {
    $("#oppo").animatedDialog({
        "content": "~ .animated-dialog-content",
        "width": 300,
        "height": 500,
        "background": "rgb(236, 236, 236)",
        "tween": "centerExpand"
    });
    
    $("#active-states").animatedDialog({
        "content": "~ .animated-dialog-content",
        "width": 800,
        "height": 400,
        "background": "rgb(236, 236, 236)",
        "tween": "centerExpand"
    });
});
$(".undertale-1").click(function() {
    $("#borf").hide();
    $(".undertale-1").fadeOut();
    $(".first-text").text("Good! Now do it again. Try to find it. Muahaha >:] (You can scroll down now)");
    $(".second-text").hide();
    $(".asgore").hide();
    $(".asgore-2").hide();
    $(".hearts").hide();
    $(".third-text").hide();
    $(".fifth-text").hide();
    $(".yes").hide();
    $(".no").hide();
});

$(".undertale-2").click(function() {
    $(".undertale-1").hide();
    $(".undertale-2").fadeOut();
    $(".first-text").hide();
    $(".third-text").show();
    $(".asgore-2").hide();
    $(".asgore").hide();
    $(".hearts").hide();
    $(".fifth-text").hide();
    $(".yes").hide();
    $(".no").hide();
});

$(".third-text").click(function() {
    $(".third-text").text("ATTACK ASGORE!");
    $(".asgore").fadeIn();
    $(".asgore-2").hide();
    $(".hearts").hide();
    $(".fifth-text").hide();
    $(".yes").hide();
    $(".no").hide();
});

$(".asgore").dblclick(function() {
    $(".asgore").hide();
    $(".asgore-2").show();
    $(".third-text").text("ALMOST THERE!");
    $(".hearts").hide();
    $(".fifth-text").hide();
    $(".yes").hide();
    $(".no").hide();   
});

$(".asgore-2").dblclick(function() {
    $(".asgore").hide();
    $(".asgore-2").hide();
    $(".third-text").text("CONGRATS! You did it! You found the souls of the missing children! I uh... don't know what you would do with them... but well done!");
    $(".hearts").show();
    $(".fifth-text").show();
    $(".yes").show();
    $(".no").show();
});
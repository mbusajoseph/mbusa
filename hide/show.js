
//hide and show HTML elements with the hide() and show() methods.
$("#hide").click(function(){
    $("p").hide();
});

$("#show").click(function(){
    $("p").show();
});

$("button").click(function(){   //Shown elements are hidden and hidden elements are shown.
    $("p").toggle();
});




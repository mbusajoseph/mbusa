//When a user clicks on a button, all <p> elements will be hidden.
$(document).ready(function(){
    $("button").click(function(){
        $("p").hide();
    });
});

//When a user clicks on a button, the element with id="test" will be hidden.
$(document).ready(function(){
    $("button").click(function(){
        $("#test").hide();
    });
});

//When a user clicks on a button, the elements with class="test" will be hidden.
$(document).ready(function(){
    $("button").click(function(){
        $(".test").hide();
    });
});


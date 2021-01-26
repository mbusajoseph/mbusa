<script>
$(document).ready(function(){
    $("#p1").hover(function(){
        alert("Bye! You now leave p1!");
    })
});
</script>


$(document).ready(function(){
    $("input").focus(function(){
        $(this).css("background-color", "#ccccff");
    });
    $("input").blur(function(){
        $(this).css("background-color", "#ffffff");
    });
});

$(document).ready(function(){
$(".pa").mousedown(function(){
 alert("mouse down over class pa");
})
});

//The function is executed when the user double-clicks on the HTML element.
$("p").dblclick(function(){
    $(this).hide();
}); 


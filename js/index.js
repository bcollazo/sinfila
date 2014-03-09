$(document).ready(function() {
    $(".dropdown-menu li").click(function() {
        $("#dropdownMenu1").html($(this).text()+' <span class="caret"></span>');
    });


}); 

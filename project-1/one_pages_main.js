$(document).ready(function(){
    $("#accordion").accordion();
})

// $(function(){ })

$( function() {
    $( "#tabs" ).tabs();
});

$(function(){
    $("#resizable").resizable();
 })

$(function(){
    $("#dialog").dialog({
        autoOpen:false
    });
    $("#dialogButton").click(function(){
        $("#dialog").dialog('open');
    });
})

$(function(){
    var autoComplete=[
             "Html5",
             "CSS3",
             "js",
             "jquery"
    ];
    $("#tags").autocomplete({
        source:autoComplete
    });
 })


  
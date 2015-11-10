// Global vars
var ft_url="http://doc.antidot.net/fr/search#!search;query=";

// Autocomplete configuration
$(function() {
    function log( message ) {
      $( "<div>" ).text( message ).prependTo( "#log" );
      $( "#log" ).scrollTop( 0 );
    }

    $( "#searchbox" ).autocomplete({
       source : function(request, response){ 
         $.ajax({
            type: "POST",
            // Apache proxy to fix cross-domain redirection
            url : '/suggest',
            dataType : 'json', // on spécifie bien que le type de données est en JSON
            contentType: 'application/json; charset=utf-8',
            data : JSON.stringify({
                filters : [],
                query : $('#searchbox').val()
            }),
            async: false,
            success : function(data){
                response($.map(data.results, function(object){
                    // Here you can modify structure of suggestions
                    // type = "PUBLICATION" or "TOPIC"
                    // value = title of documents
                    return object.type + ', ' + object.value;             
                }));
            }
         });
       }
    });
});

// Redirect configuration
$(document).ready(function() {
    $("#searchbutton").click(function(){
        window.open(ft_url + $('#searchbox').val(), '_blank');
    }); 
});

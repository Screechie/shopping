$(document).ready(
    function(){
        
        $('form').submit( function(event){
            event.preventDefault();
            // this is where our code goes!!!
            var item = $("input[type=text]").val();

            var amount = $('input[type=number]').val();

            if ( item === "" ){
                alert("Your item is empty");
            } else if (amount === ""){
                alert("You need an amount");
            } else {
                $("ul.items").append("<li>"+ item + " (" + amount + ")" + "</li>");
                $("input").val("");
            }
        });
        
        
    }
);
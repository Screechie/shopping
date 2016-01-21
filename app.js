$(document).ready(function(){
        
        $('form').submit( function(event){
            event.preventDefault();
            // this is where our code goes!!!
            var item = $("input[type=text]").val();

            var amount = $('input[type=number]').val();


            if ( item === "" ){
                alert("You must enter an item!");
            } else if (amount === ""){
                alert("Please enter an amount!");
            } else {
                //Create list elements and buttons with specific classes
                $("ul.items").append("<li> <span class='edit'>"+ item + "</span>" +"<span> ( " +amount + " )</span> " +
                "<button class = 'dl'>Delete</button> | <button class ='md'>Mark as Bought</button>"+
                 " | <button class = 'ed'>Edit</button></li></br>");



                $("input").val(""); //Clear input after submit  

                

                //Strike completed items
                $("button.md").on('click',function(){
                    $(this).siblings("span").addClass("strike");
                    $(this).siblings("span").css({"background-color":"green", "color":"#FFFFFF"});
                });


                //Delete an item from the list  
                $("button.dl").on('click',function(){
                    $(this).parent().remove();//empty removes children as well

                })      

                 //Edit an item
                 $("button.ed").on('click',function(){
                    var text = prompt("Place edited text here:");
                    //$(this).parent().text(text);
                    $(this).siblings(".edit").text(text);

                 }) 

            }


        });
        
        
    }
);
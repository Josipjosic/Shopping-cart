$(document).ready(function(){
    const item_height = $('#divItemContent').innerHeight();
    const item_move = 133.81  // defines height of the item ( moze se ici i na = item_height, ali zbog margina i dividera ne bude cisti pomak te se vidi vise od 3 proizvoda pri scroll )

    $('.shoppingImg').on("click",()=>{
        $('#divCartContent').toggle();
    });

    $( ".divButtonDOWN" ).on("click",() => {     // on click function on button
        $( "#divItemContentMain" ).animate({       //animates selected div
            scrollTop: $('#divItemContentMain').scrollTop() + item_move  // scrolls items by their height 
        });
      });

      $( ".divButtonUP" ).on("click",() => {
        $( "#divItemContentMain" ).animate({
            scrollTop: $('#divItemContentMain').scrollTop() - item_move
            }, "slow" );
      });
});
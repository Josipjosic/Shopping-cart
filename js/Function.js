$(document).ready(function(){
    const item_width = $('#divItemContent').outerWidth();


    $('.shoppingImg').on("click",()=>{
        $('#divCartContent').toggle();
    });

    $( ".divButtonDOWN" ).on("click",() => {
        const moveItemHeight = parseInt($('#divItemContent')) + item_width
        $( "#divItemContent" ).animate({ "margin-bottom": moveItemHeight }, "slow" );
      });

      $( ".divButtonUP" ).on("click",() => {
        const moveItemHeight = parseInt($('#divItemContent')) + item_width
        $( "#divItemContent" ).animate({ "margin-top": moveItemHeight }, "slow" );
      });
});
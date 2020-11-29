// Check off Specific Todos By Click - using On() the parent EL to enable events for the new generated li's
$('ul').on('click', 'li', function() {
    $(this).toggleClass('completed')
});

//Click X to Delete using fadeOut and callBack fuction to delete with event.stopPropogation (Event Bubling) - using On() to the parent EL to enable events for the new generated li's
$('ul').on('click', 'span', function(e){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    }); 
    e.stopPropagation();
});

//Select input to add it's value to the Li's 
$("input[type='text']").keypress(function(e){
    if (e.which === 13) {
        //grab the text
        const inputText = $(this).val();
        //clear the iput after kerpress
        $(this).val('');
        //create new li
        $('ul').append(`<li><span><i class="far fa-trash-alt"></i></span> ${inputText}</li>`);
    }
});

//Select the + sign to toggle the input
$('.fa-plus').click(function(){
    $("input[type='text']").fadeToggle("slow", "linear");
})
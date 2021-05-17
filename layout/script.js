$(function(){
    $('.nav-collapse').hide();
    $('.nav-toggle').click(function(){
        // $('.nav-collapse').toggle(600);
        $('.nav-collapse').slideToggle();
    })
    $('.modal-btn').click(function(){
        let modal = $(this).attr('href');
        $(modal).fadeIn();
    })
    $('.modal-close').click(function(){
        $('.modal').fadeOut();
    })
    
})
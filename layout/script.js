$(function(){
    // $('.nav-collapse').hide();
    $('.nav-toggle').click(function(){
        // $('.nav-collapse').toggle(600);
        // $('.nav-collapse').slideToggle();
        $('.nav-collapse').toggleClass('active');
    })
    $('.modal-btn').click(function(){
        let modal = $(this).attr('href');
        $(modal).fadeIn();
        return false;
    })
    $('.modal-close').click(function(){
        $('.modal').fadeOut();
        return false;
    })
    
})
$("#navBack").hide();
$(document).on("scroll", window, function () {
    if ($(window).scrollTop()>2050) 
    {
        $("#navBack").show();
    }
    else
    {
        $("#navBack").hide();
    }
});


$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });

    $("#navBack").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});
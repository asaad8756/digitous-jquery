$(function() {
    $("buuton").click(function() {
        $("#square").animate({
            position: absolute,
            bottom: '20px',
            right: '16px'
        }, slow);
    });
});
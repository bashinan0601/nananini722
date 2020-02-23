$(document).on("scroll", function() {

    if($(document).scrollTop()>100) {
        $("#top_bg").removeClass("yes").addClass("no");
    } else {
        $("#top_bg").removeClass("no").addClass("yes");
    }
    
});
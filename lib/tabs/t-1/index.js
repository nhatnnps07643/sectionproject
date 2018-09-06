function checkTab1() {
    $('.canhcam-tabs-1 #cct-01-tab').tab('show').parents('li').addClass('active')
    $('.canhcam-tabs-1 a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
        $(this).parents('ul').find('li').removeClass('active')
        $(this).parents('li').addClass('active')
    })
}

function autoFixHeight() {
    if ($(window).width() > 990) {
        var height = $('.canhcam-tabs-1 .jscontainer .box-1 figure').height()
        $('.canhcam-tabs-1 .jscontainer .box-2 figure').css({
            "height": height / 2 - 1,
            // "border": "1px solid red"
        })
    } else {
        $('.canhcam-tabs-1 .jscontainer .box-2 figure').css({
            "height": "100%",
            // "border": "1px solid red"
        })
    }

    if ($(window).width() > 1400) {
        var widthContent = $('.canhcam-tabs-1 .fix-width').width()
        var mg = (($(window).width() - widthContent) / 2)
        $('.canhcam-tabs-1 .fix-width').css({
            "margin": "0rem " + mg + "px"
        })
    } else {
        $('.canhcam-tabs-1 .fix-width').css({
            "margin": "0rem"
        })
    }
}

$(document).ready(function() {
    checkTab1()
    autoFixHeight()
});
$(window).resize(function() {
    autoFixHeight()
})
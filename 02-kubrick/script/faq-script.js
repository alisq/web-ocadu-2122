

$(".index-tag").click(function(){
    let indexId = $(this).attr("id");
    $(".sub-nav-wrapper ."+indexId+"-wrapper").toggle();
    $(".sub-nav-wrapper div:not(."+indexId+"-wrapper)").hide();
})

$(".tag-button").click(function(){
    let buttonId = $(this).attr("id");
    console.log(buttonId);
    $(".question-tags ."+buttonId).toggle();
    $(".question-tags li:not(."+buttonId+")").hide();
    $(".kw-tags #"+buttonId).toggle();
})

$(".subtag").click(function(){
    $(".wrapper").css({
        "display": "grid",
        "grid-template-columns": "1fr 1fr"
    })
    $("#handle").css("left","calc(50vw - 12.5px)");

    $(".right-content").css("display","block");
    $("#handle").css("display","block");
    $("#handle").draggable({
        axis: "x",
        containment: [100, 0, $(window).width()-100 , $(window).width()],
        zIndex: 100,
        drag: function(event, ui){
            let fromLeft = ui.offset.left +12.5;
            console.log(fromLeft);

            $(".wrapper").css({
                
                "grid-template-columns": fromLeft + "px 1fr"
            });
        }
    })

})
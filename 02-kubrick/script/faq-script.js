

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
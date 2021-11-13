

$(".index-tag").click(function(){
    let indexId = $(this).attr("id");
    $(".sub-nav-wrapper #"+indexId).toggle();
})

$(".tag-button").click(function(){
    let buttonId = $(this).attr("id");
    console.log(buttonId);

    $(".question-tags ."+buttonId).toggle();
})
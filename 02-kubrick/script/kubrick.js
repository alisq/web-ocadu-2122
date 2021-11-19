var width;
  

$("document").ready(function(){
    width = $(window).width();
    $(".article-container .article-text:not(#text-1, #text-2)").append('<img src="../media/images/kubrick-site/no-content.png" alt="kubrick face with a warning that there is no content" >')
    return
})

// BUTTON CLICK EVENT

$(".tag-button").click(function(){    

    let buttonId = $(this).attr("id");
    console.log(buttonId + " clicked");

    $(".tags-container #"+buttonId).toggle();
    $(".tags-container nav:not(#"+buttonId+")").hide();
    
    $(this).css({
        "background":"black",
        "color":"white",
    });
    
    $(".tag-button").not(this).css({
        "background":"transparent",
        "color":"black",
    })
    return
})


$(".article-tags .subtag").click(function(){
    let tagId = $(this).attr("id");
    console.log(tagId);

    $(".article-container #"+tagId).css("display","block");
    $(".article-container div:not(#"+tagId+")").css("display","none");

    $(this).css({
        "background":"black",
        "color":"white",
    });
})

// SPLIT SCREEN 

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






// JQUERY
// :not : https://www.w3schools.com/jquery/sel_not.asp
// filtering : https://www.w3schools.com/jquery/jquery_traversing_filtering.asp
// this : https://www.youtube.com/watch?v=TBVpCKNuPtw
// resize div: https://jqueryui.com/resizable/#default
// option handles for resizing: https://api.jqueryui.com/resizable/#option-handles
// split view javascript https://htmldom.dev/create-resizable-split-views/
// draggable : https://api.jqueryui.com/draggable/
// split-screen-code https://tdingsun.github.io/worlding/
$("h1").mouseover(function() {
    $(this).css("text-shadow", "5px 3px black");
    }).mouseleave(function() {
        $(this).css("text-shadow","none")
});

$(".btn").mouseover(function() {
    $(this).css("box-shadow", "0 10px 50px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)");
 }).mouseleave(function(){
   $(this).css("box-shadow", "0px 0px 0px #555");
});

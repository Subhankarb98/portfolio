$(".nav-item").mouseover(function() {
    $(this).css("box-shadow", "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)");
 }).mouseleave(function(){
   $(this).css("box-shadow", "0px 0px 0px #555");
});

$(".intro h1, .intro h5").mouseover(function() {
    $(this).css("color","#F5F5F5");
    }).mouseleave(function() {
        $(this).css("color","black");
});


$("#profile-pic").mouseover(function() {
    $(this).css("border-color","#F5F5F5");
    }).mouseleave(function() {
        $(this).css("border-color","black");
});

$(".skills .feature, #certificate h3, .course").mouseover(function() {
    $(this).css("color","#900046");
    }).mouseleave(function() {
        $(this).css("color","black");
});

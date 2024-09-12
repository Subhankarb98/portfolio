$(".nav-item").mouseover(function() {
    $(this).css("box-shadow", "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)");
 }).mouseleave(function(){
   $(this).css("box-shadow", "0px 0px 0px #555");
});

$(".intro h1").mouseover(function() {
    $(this).css("text-shadow", "5px 3px black");
    }).mouseleave(function() {
        $(this).css("text-shadow","none")
});

$(".nav-item .nav-link, .intro h5").mouseover(function() {
    $(this).css("text-shadow", "1px 1px black");
    }).mouseleave(function() {
        $(this).css("text-shadow","none")
});

$("#profile-pic").mouseover(function() {
    $(this).css("border","3px solid #F5F5F5");
    }).mouseleave(function() {
        $(this).css("border","6px solid #F5F5F5");
});

$(".skills .feature, #certificate h3, .course").mouseover(function() {
    $(this).css("color","#900046");
    }).mouseleave(function() {
        $(this).css("color","black");
});

$(".email").mouseover(function() {
    $(this).css("background-color","#BB001B");
    }).mouseleave(function() {
        $(this).css("background-color","#BB001B99");
});
$(".git").mouseover(function() {
    $(this).css("background-color","#000000");
    }).mouseleave(function() {
        $(this).css("background-color","#00000099");
});
$(".linkedin").mouseover(function() {
    $(this).css("background-color","#0A66C2");
    }).mouseleave(function() {
        $(this).css("background-color","#0A66C299");
});
$(".phone").mouseover(function() {
    $(this).css("background-color","#797373");
    }).mouseleave(function() {
        $(this).css("background-color","#79737399");
});


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));  

function copyText() {
    phoneNumber = "+91-8334019698";
    navigator.clipboard.writeText(phoneNumber);
    alert("Copied phone number.");
}

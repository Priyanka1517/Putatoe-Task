$(document).scroll(()=>{
}) 


$("#lower-half").mouseenter(function(){
    setTimeout(function(){
        $(".card").slideDown();
    },100);
})

$(".submit").click(function(){
    window.location.href = "index.html";
})

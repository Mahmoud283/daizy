$(document).ready(function(){

    $("#loding").fadeOut(2000)
    $("body ,html").css("overflow","auto")
    


$("nav li a").click(function(){
    let href=$(this).attr("href")
    $("body,html").animate({scrollTop:$(href).offset().top},2000);
    $("nav li a").removeClass("active");
    $(this).addClass("active")
})
$(window).scroll(function(){
    let scr=$(window).scrollTop();
    if(scr>100)
    {
        $("nav").addClass("nav-scroll");
        $("#up").fadeIn(200);
    }
    else
    {
        $("#up").fadeOut(200);
        $("nav").removeClass("nav-scroll");
    }
})

$("#up").click(function(){
    $("body,html").animate({scrollTop:"0px"},2000)
})


let skills=document.querySelector(".our-skills")
window.onscroll=function(){
    skillsoffsettop=skills.offsetTop;
    skillshight=skills.offsetHeight;
    let windohight=this.innerHeight;
    let windooffset=this.pageYOffset;
if(windooffset>skillsoffsettop+skillshight-windohight)
{
    let skills_spans=document.querySelectorAll(".progress-bar")
skills_spans.forEach(span => {
    span.style.width=span.dataset.prog;
    
});
}
}


$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    smartSpeed: 1000,
    autoplay:false,
    autoplayTimeout:9000,
    autoplayHoverPause:true,
    navText: [
        "<i class='icofont-simple-left'></i>",
        "<i class='icofont-simple-right'></i>"
    ],    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        800: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})

$("#username").keyup(function(){
    var rgx=/^[A-Z][a-z]{4,25}$/;
if(rgx.test($(this).val())==false)
{
    $(this).attr("class","form-control is-invalid")
    $(this).next().fadeIn(100);

}
else{
    $(this).next().fadeOut(100);
    $(this).attr("class","form-control is-valid")
}
})



AOS.init({
    duration:1000
});

});
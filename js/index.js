var typed6 = new Typed('.element', {
	strings: ['front-end', 'and', 'Ui developer'],
	typeSpeed: 200,
	backSpeed: 50,
	loop: true
});
var typed7 = new Typed('.element2', {
	strings: ['Your Web site'],
	typeSpeed: 200,
	backSpeed: 50,
	loop: true
});
AOS.init();

$(".tab ul li ").click(function(){
$(this).addClass("activeX");
$(this).siblings().removeClass("activeX")
})
$(".tab ul li a ").click(function(){
	let filter=$(this).attr("data-filter");
	if(filter=="all")
	{
		$(".filter").slideDown(1000);
	}
	else
	{
		$(".filter").not("."+filter).slideUp(1000);
		$(".filter").filter("."+filter).slideDown(1000);
		
	}
})
$('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
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
	
	
	$("#mail").keyup(function(){
		var rgx=/^[a-zA-Z0-9]{3,}@[a-zA-Z]{3,}[.]{1}(com|in|...)$/;
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
	
	
	
	$("#phone").keyup(function(){
		var rgx2=/^(01)[0125][0-9]{8}$/;
	if(rgx2.test($(this).val())==false)
	{
		$(this).attr("class","form-control is-invalid")
		$(this).next().fadeIn(100);
	
	}
	else{
		$(this).next().fadeOut(100);
		$(this).attr("class","form-control is-valid")
	}
	})

	$("#bars").click(function () {
		let navwidth=$(".side-nav").css("left")
		if(navwidth<"0px")
		{
			$(".side-nav").animate({ left: "0%" }, 1000);
			$("#bars").animate({ left: "50%" }, 1000);
			navwidth=0;
		}
		else
		{
			$(".side-nav").animate({ left: "-50%" }, 1000);
            $("#bars").animate({ left: "0%" }, 1000);
			navwidth=0;
		}
	})
$(".side-nav .nav-links ul li a ").click(function(){
	let href=$(this).attr("href");
	$("body,html").animate({scrollTop:$(href).offset().top},1000)
	$(".side-nav .nav-links ul li a ").removeClass("active")
	$(this).addClass("active")
})

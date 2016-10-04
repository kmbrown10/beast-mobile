$(function() {
		$('h3, h1').hide();
		
	});

	setInterval(function() {
      $('h3, h1').slideDown(2000);
}, 500);

//Change the opacity based on which picture you click on
//Keep first pic fade all others
$(".port1").click(function(){
        $(".port2, .port3, .port4").animate({
            opacity: '0.5'
        });
				$(".port1").animate({
            opacity: '1.0'
        });
				$("#img1").animate({
            width: '300px'
        });
			$("#img4, #img2, #img3").animate({
            width: '150px'
        });
    });
//Keep second pic fade all others
$(".port2").click(function(){
        $(".port1, .port3, .port4").animate({
            opacity: '0.5'
        });
			$(".port2").animate({
            opacity: '1.0'
        });
			$("#img2").animate({
            width: '300px'
        });
			$("#img1, #img4, #img3").animate({
            width: '150px'
        });
    });

//Keep third pic fade all others
$(".port3").click(function(){
        $(".port1, .port2, .port4").animate({
            opacity: '0.5'
        });
			$(".port3").animate({
            opacity: '1.0'
        });
			$("#img3").animate({
            width: '300px'
        });
			$("#img1, #img2, #img4").animate({
            width: '150px'
        });
    });


//Keep fourth pic fade all others
$(".port4").click(function(){
      $(".port1, .port2, .port3").animate({
            opacity: '0.5'
        });
			$(".port4").animate({
            opacity: '1.0',
        });
			$("#img4").animate({
            width: '300px'
        });
			$("#img1, #img2, #img3").animate({
            width: '150px'
        });
    });
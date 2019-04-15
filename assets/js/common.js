


$(document).ready(function () {



  // jQuery to collapse the navbar on scroll
  $(window).scroll(function () {
    if ($(".navbar").offset().top > 50) {
      $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
      $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
  });


  // Closes the Responsive Menu on Menu Item Click
  $('.navbar-collapse ul li a').click(function () {
    $('.navbar-toggle:visible').click();
  });




  //Accordion
  $('.hour-box .toggle-btn').on('click', function () {
    var target = $($(this).next('.content-box'));
    $(this).toggleClass('active');
    $(target).slideToggle(300);
    $(target).parents('.hour-box').toggleClass('active-box');
  });

  //Анимация при скроле
  wow = new WOW(
    {
      boxClass: 'wow',      // default
      animateClass: 'animated', // default
      offset: 0,          // default
      mobile: true,       // default
      live: true        // default
    }
  )
  wow.init();




  //Попап менеджер FancyBox
  //Документация: http://fancybox.net/howto
  //<a class="fancybox"><img src="image.jpg" /></a>
  //<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
  $(".fancybox").fancybox();

  //Навигация по Landing Page
  //$(".top_mnu") - это верхняя панель со ссылками.
  //Ссылки вида <a href="#contacts">Контакты</a>
  $(".top_mnu").navigation();


  //Каруселька
  //Документация: http://owlgraphic.com/owlcarousel/
  var owl = $(".carousel");
  owl.owlCarousel({
    items: 1,
    /*itemsDesktop : [1199,4],
    itemsDesktopSmall : [979,3],*/
    itemsCustom: [
      [0, 1],
      [390, 1],
      [768, 1],
      [980, 1],
      [1200, 1]
    ],
    autoPlay: false,
    slideSpeed: 800,
    paginationSpeed: 800,
    rewindSpeed: 1000,
    stopOnHover: true,
    navigation: true,
    navigationText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
    ],
  });

  //  owl.on("mousewheel", ".owl-wrapper", function (e) {
  //		if (e.deltaY > 0) {
  //			owl.trigger("owl.prev");
  //		} else {
  //			owl.trigger("owl.next");
  //		}
  //		e.preventDefault();
  //	});

  $(".next_button").click(function () {
    owl.trigger("owl.next");
  });
  $(".prev_button").click(function () {
    owl.trigger("owl.prev");
  });

  /* ==============================================
  FEATURES WITH MOBILE SCRIPTS
  =============================================== */

  jQuery('.strips').each(function () {
    dataWidth = $(this).attr('data-width'),
      dataHeight = $(this).attr('data-height'),
      // Change Width
      $(this).css({ "width": dataWidth + "px" });
    // Change Height
    $(this).css({ "height": dataHeight + "px" });
  });


  $('input[name=phone]').mask('+7 (999) 999 99-99');
  //E-mail Ajax Send
$('form[name="form-1"], form[name="form-2"]').submit(function () { //Change
	var th = $(this);
	$.ajax({
		type: "POST",
		url: "../controllers/mail.php", //Change
		data: th.serialize(),
		beforeSend: function () {
      $('.contact_form, #signup-header').empty();
      $('.contact_form').append('<img src="/assets/images/elements/lg.curve-bars-loading-indicator.gif">');
		}
	}).done(function () {
    $('.contact_form, #signup-header').empty();
    $('.contact_form').append('<h2>Спасибо за заявку наш менеджер свяжеться с вами в течении 5 минут </h2>');
		setTimeout(function () {
			// Done Functions
			th.trigger("reset");
		}, 1000);
	}).fail(function () {
		alert("Error")
	});
	return false;
});

//E-mail Ajax Send


});
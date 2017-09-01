/*services*/
$(function () {
    new WOW().init();
});
/*work*/
$(function () {
    $("#work").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});
/*team*/
$(function () {
    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            }

        }
    });
});

/*testimonials*/
$(function () {
    $("#customers-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
});

/*stats*/
$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
});

/*clients*/
$(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 3
            },
            768: {
                items: 5
            },
            992: {
                items: 6
            }
        }
    });
});
/*navigation*/
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() < 50) {
            //hide nav
            $("nav").removeClass("vesco-top-nav");
            $("#back-to-top").fadeOut();
        } else {
            //show nav
            $("nav").addClass("vesco-top-nav");
            $("#back-to-top").fadeIn();
        }
    });
});
/*smooth scrolling*/
$(function () {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();
        //return id like #about, #work and etc.
        var section = $(this).attr("href");
        $('html,body').animate({
            scrollTop: $(section).offset().top - 64
        }, 1250, "easeInOutExpo");
    });
});

/*to close mobile menu on click*/
$(function () {
    $(".navbar-collapse ul li a").on("click touch", function () {
        $(".navbar-toggle").click();
    });
});

$(document).ready(function() {
    var sync1 = $("#sync1");
    var slidesPerPage = 4;
    var syncedSecondary = true;

    sync1.owlCarousel({
        items: 1,
        slideSpeed: 2000,
        nav: true,
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0: {
                items: 1,
                dots: false,
                nav: false,

            },
            600: {
                items: 1,
                dots: false,
                nav: false,
            },
            1000: {
                items: 1
            }
        },

        responsiveRefreshRate: 200,
        navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],

    }).on('changed.owl.carousel');





    sync1.on("click", ".owl-item", function(e) {
        e.preventDefault();
        var number = $(this).index();
        sync1.data('owl.carousel').to(number, 300, true);
    });

    // Premiere Slider
    var owl = $("#slider_premiere");
    owl.owlCarousel({
        items: 4,
        dots: false,
        nav: true,
        margin: 40,
        merge: true,
        responsive: {
            0: {
                items: 2,
                dots: false,
                nav: false,

            },
            600: {
                items: 2,
                nav: false,
            },
            1000: {
                items: 4
            }
        },


        responsiveRefreshRate: 200,
        navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],

    }).on('changed.owl.carousel');

    // Films  Slider
    var owl = $("#slider_films");
    owl.owlCarousel({
        items: 6,
        dots: false,
        nav: true,
        margin: 40,
        merge: true,
        responsive: {
            0: {
                items: 2,
                dots: false,
                nav: false,

            },
            600: {
                items: 3,
                nav: false,
            },
            1000: {
                items: 6
            }
        },


        responsiveRefreshRate: 200,
        navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],

    }).on('changed.owl.carousel');



    // Serials  Slider
    var owl = $("#slider_serial");
    owl.owlCarousel({
        items: 5,
        dots: false,
        nav: true,
        margin: 40,
        merge: true,
        responsive: {
            0: {
                items: 2,
                dots: false,
                nav: false,

            },
            600: {
                items: 3,
                nav: false,
            },
            1000: {
                items: 5
            }
        },


        responsiveRefreshRate: 200,
        navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],

    }).on('changed.owl.carousel');


    // Mult  Slider
    var owl = $("#slider_mult");
    owl.owlCarousel({
        items: 5,
        dots: false,
        nav: true,
        margin: 40,
        merge: true,
        responsive: {
            0: {
                items: 2,
                dots: false,
                nav: false,

            },
            600: {
                items: 2,
                nav: false,
            },
            1000: {
                items: 5
            }
        },


        responsiveRefreshRate: 200,
        navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],

    }).on('changed.owl.carousel');



    // Mult  Slider
    var owl = $("#sidebar_top_films");
    owl.owlCarousel({
        items: 1,
        dots: false,
        nav: true,
        margin: 40,
        merge: true,
        responsive: {
            0: {
                items: 1,
                dots: false,
                nav: false,

            },
            600: {
                items: 1,
                nav: false,
            },
            1000: {
                items: 1
            }
        },


        responsiveRefreshRate: 200,
        navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],

    }).on('changed.owl.carousel');

});
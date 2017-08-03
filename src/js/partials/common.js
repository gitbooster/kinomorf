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

    // Carousel-3
    $("#carusel_3").owlCarousel({
        items: 2,
        loop: true,
        margin: 20,
        dots: false,
        nav: true,
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
                items: 2,
            }
        },

        responsiveRefreshRate: 200,
        navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],

    });

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

    // Carousel-7
    $("#carusel_7").owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        nav: true,
        responsiveRefreshRate: 200,
        navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #a6a6a6;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #a6a6a6;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],

    });



});
//Read More
$('article').readmore({
    speed: 250,
    maxHeight: 90,
    heightMargin: 16,
    moreLink: '<a href="#">Подробнее</a>',
    lessLink: '<a href="#">Свернуть</a>',
});


// Search

jQuery(document).on('ready', function() {
    jQuery('#search-button-toggle').on('click', function() {
        jQuery(this).fadeTo(0, 0);
        jQuery('.search-form').animate({ width: '275px' }, 200, 'swing', function() {
            jQuery(this).addClass('shown').find('.search-field').focus();
            jQuery(this).append('<span class="close-search"></span>').children('.close-search').fadeTo(0, 1);
        });
    });

    jQuery('#back-link').on('click', function(e) {
        e.preventDefault();

        window.history.back();
    });

    jQuery('.search-hint-input').on('click', function(e) {
        jQuery('.search-hint').addClass('focus')

    });
    jQuery('.search-hint-reset').on('click', function(e) {
        jQuery('.search-hint').removeClass('focus')

    });
    jQuery('.gossip-body-section').on('click', function(e) {
        jQuery('.search-hint').removeClass('focus')
        jQuery('.search-hint-input').val('')

    });


    jQuery('body').on('click', function(e) {
        var $trigger = jQuery(".search-form.shown");
        if ($trigger !== event.target && !$trigger.has(event.target).length) {
            $trigger.animate({ width: 0 }, 200, 'swing', function() {
                jQuery(this).removeClass('shown').find('.close-search').remove();
                jQuery('#search-button-toggle').fadeTo(0, 1);
            });
        }
    });

    jQuery('body').on('click', '.close-search', function() {
        var $trigger = jQuery(".search-form.shown");

        jQuery(this).remove();

        $trigger.animate({ width: 0 }, 200, 'swing', function() {
            jQuery(this).removeClass('shown');
            jQuery('#search-button-toggle').fadeTo(0, 1);
        });
    });

    jQuery('.popup').click(function(event) {
        var width = 575,
            height = 400,
            left = (jQuery(window).width() - width) / 2,
            top = (jQuery(window).height() - height) / 2,
            url = jQuery(this).data('href'),
            opts = 'status=1' +
            ',width=' + width +
            ',height=' + height +
            ',top=' + top +
            ',left=' + left;

        event.preventDefault();

        window.open(url, '_blank', opts, false);

        return false;
    });
});
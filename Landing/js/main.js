// Codigo de jquery que se ejecuta el documento y se carga totalmente
$(document).ready(function() {

    var nav = $('.navbar-fixed-top');

    var distancia = $('.navbar-fixed-top').offset();

    if(distancia.top >0){
        nav.removeClass('normal').addClass('efecto');
    }

    $(window).scroll(function(){
        var scroll = $(window).scrollTop();

        if(scroll >= 300) {
            nav.removeClass('normal').addClass('efecto');
        } else {
            nav.removeClass('efecto').addClass('normal');
        }
    })

    $('section#pantallas a').on('click',function() {
		$('#modal img').attr('src', $(this).attr('data-image-url') );
	});

	$('section#app .anima1').waypoint(function() {
		$('section#app .anima1').addClass('animated rollIn');
	}, {
		offset: '50%'
	});

	$('section#app .anima2').waypoint(function() {
		$('section#app .anima2').addClass('animated rollIn');
	}, {
		offset: '50%'
	});

	$('section#app .anima3').waypoint(function() {
		$('section#app .anima3').addClass('animated rollIn');
	}, {
		offset: '50%'
	});

		$('section#caracteristicas #appCentral').waypoint(function() {
		$('section#caracteristicas #appCentral').addClass('animated fadeInDownBig');
	}, {
		offset: '60%'
	});

	$('section#caracteristicas .anima1').waypoint(function() {
		$('section#caracteristicas .anima1').addClass('animated fadeInLeft');
	}, {
		offset: '60%'
    });
    
	$('section#caracteristicas .anima2').waypoint(function() {
		$('section#caracteristicas .anima2').addClass('animated fadeInLeft');
	}, {
		offset: '60%'
	});

	$('section#pantallas .anima1').waypoint(function() {
		$('section#pantallas .anima1').addClass('animated fadeInRight');
	}, {
		offset: '60%'
    });
    
	$('section#pantallas .anima2').waypoint(function() {
		$('section#pantallas .anima2').addClass('animated fadeInRight');
	}, {
		offset: '60%'
	});
	$('section#pantallas .anima3').waypoint(function() {
		$('section#pantallas .anima3').addClass('animated fadeInRight');
	}, {
		offset: '60%'
	});

	$('section#descargar .anima1').waypoint(function() {
		$('section#descargar .anima1').addClass('animated fadeInRight');
	}, {
		offset: '60%'
	});

	$('section#descargar .anima2').waypoint(function() {
		$('section#descargar .anima2').addClass('animated rollIn');
	}, {
		offset: '60%'
	});

	$('section#descargar .anima3').waypoint(function() {
		$('section#descargar .anima3').addClass('animated rollIn');
	}, {
		offset: '60%'
	});

    $('#soporteForm').bootstrapValidator({
        message: "Esto no es válido",
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            nombre: {
                validators: {
                    notEmpty: {
                        message: "Este es un campo obligatorio"
                    },
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: "Este es un campo obligatorio"
                    },                
                    emailAddress: {                        
                        message: "Esto no parece un correo electrónico"
                    }
                }
            },
            mensaje: {
                validators: {
                    notEmpty: {
                        message: "El mensaje no puede ir vacio"
                    }
                }
            }
        }
    }).on('success.form.bv', function(e) {
        e.preventDefault();
        var $form = $(e.target);

        var bv = $form.data('bootstrapValidator');

        $.post($form.attr('action'),$form.serialize(), function(result) {
            $('#correcto').fadeIn();
            console.log(result);
        }), 'json';

    });
    
    
});

// https://www.diycode.cc/projects/dimsemenov/smooth-scroll

smoothScroll.init({
    speed: 700, // Integer. How fast to complete the scroll in milliseconds
    easing: 'easeInOutQuad', // Easing pattern to use
    updateURL: false, // Boolean. Whether or not to update the URL with the anchor hash on scroll
    offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
    callbackBefore: function ( toggle, anchor ) {}, // Function to run before scrolling
    callbackAfter: function ( toggle, anchor ) {} // Function to run after scrolling
});
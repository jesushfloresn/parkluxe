$(document).ready(function(){
	ajustarContentPage($('.ys-content-page'));	
	ajustarSecciones($('.ys-seccion'));
	ajustarSeccionInicio();
	ajustarSeccionProyecto();
	ajustarSeccionDepartamentos();
	ajustarSeccionContacto();	

	//---
	$('.ys-btn-dianoche .ys-image').hover(
		function(){
			$('.ys-btn-dianoche span.ys-txt').addClass('ys-mostrar');
		},
		function(){
			$('.ys-btn-dianoche span.ys-txt').removeClass('ys-mostrar');
	});
	$('.ys-btn-dianoche .ys-image').click(function(){
		cambiarBackground($(this));
		ajustarSeccionFooter();
	});

	//
	$('[data-opcion=\'ys-gal-1\']').click(function(event) {
		mostrarOcultarSlides($('.ys-gal-1'), $('.ys-carousel'));
		marcarElementoActivo($(this), $('.ys-menu-departamentos span'));
	});
	$('[data-opcion=\'ys-gal-2\']').click(function(event) {
		mostrarOcultarSlides($('.ys-gal-2'), $('.ys-carousel'));
		marcarElementoActivo($(this), $('.ys-menu-departamentos span'));
	});
	$('[data-opcion=\'ys-gal-3\']').click(function(event) {
		mostrarOcultarSlides($('.ys-gal-3'), $('.ys-carousel'));
		marcarElementoActivo($(this), $('.ys-menu-departamentos span'));
	});
	$('[data-opcion=\'ys-gal-4\']').click(function(event) {
		mostrarOcultarSlides($('.ys-gal-4'), $('.ys-carousel'));
		marcarElementoActivo($(this), $('.ys-menu-departamentos span'));
	});

	$('.nav li a').click(function(event) {
		if($('.navbar-collapse').hasClass('in')){
			$('.navbar-collapse').removeClass('in');
		}
	});
	//---	

});// --- Document Ready

$(window).scroll(function(event) {
	if($(window).scrollTop() > 125){
		if(!($('.navbar').hasClass('ys-background-menu'))){
			$('.navbar').addClass('ys-background-menu');
		}
	}
	else{
		if($('.navbar').hasClass('ys-background-menu')){
			$('.navbar').removeClass('ys-background-menu');
		}
	}
});

$(window).bind('scroll', update);
$(window).resize(function(event) {
	/* Act on the event */
	ajustarContentPage($('.ys-content-page'));	
	ajustarSecciones($('.ys-seccion'));
	ajustarSeccionInicio();
	ajustarSeccionProyecto();
	ajustarSeccionDepartamentos();
	ajustarSeccionContacto();	
});

/*---*/
	//--- Funciones
/*---*/
function ajustarContentPage(elemento){
	$(elemento).css({
		'min-height' : $(window).height() + 'px'
	});
}

function ajustarSecciones(elemento){
	if($(window).width() > 992){
		$(elemento).css({
			'min-height' : ($(window).height() - 100) + 'px'
			
		});
	}
	else{
		$(elemento).css({
			'min-height' : $(window).height() + 'px'			
		});	
	}
}

function mostrarOcultarSlides(elementoElegido, listaElementos){
	$(listaElementos).removeClass('ys-show').addClass('ys-hidde');
	$(elementoElegido).removeClass('ys-hidde').addClass('ys-show');
}

function marcarElementoActivo(elSeleccionado, listaElementos){
	$(listaElementos).removeClass('ys-active');
	$(elSeleccionado).addClass('ys-active');
}

function centrarVerticalDosContenedores(elementoTrasero, elementoDelantero){
	var altoTrasero = $(elementoTrasero).height();
	var altoDelantero = $(elementoDelantero).height();
	var mTop = 0;

	if(altoTrasero < altoDelantero){
		mTop = (altoDelantero - altoTrasero) / 2;
		$(elementoDelantero).css({
			'margin-top' : -(altoTrasero + mTop) + 'px'
		});
	}
	return mTop;
}

//--- Fin - Funciones

//---Sección Inicio
var velBackground = 0;

function ajustarSeccionInicio(){
	velBackground = 0.5;
}

function update(){ 
    var posTop = $(window).scrollTop();
    if(posTop > 50){
		if(!($('.ys-content-page').hasClass('toBottom'))){
			$('.ys-content-page').removeClass('toTop');
			$('.ys-content-page').addClass('toBottom');
		}		
    }
    else{
    	if(!($('.ys-content-page').hasClass('toTop'))){
    		$('.ys-content-page').removeClass('toBottom');
			$('.ys-content-page').addClass('toTop');
    	}	
    }  
}

function cambiarBackground(elemento){
	if($(elemento).hasClass('ys-dia')){
		$(elemento).removeClass('ys-dia');
		$(elemento).addClass('ys-noche');

		$('.ys-content-page').removeClass('ys-back-dia');
		$('.ys-content-page').addClass('ys-back-noche');

		$('.ys-txt-dia').removeClass('ys-show');
		$('.ys-txt-dia').addClass('ys-hidde');
		$('.ys-txt-noche').removeClass('ys-hidde');
		$('.ys-txt-noche').addClass('ys-show');
	}
	else {
		$(elemento).removeClass('ys-noche');
		$(elemento).addClass('ys-dia');

		$('.ys-content-page').removeClass('ys-back-noche');
		$('.ys-content-page').addClass('ys-back-dia');

		$('.ys-txt-noche').removeClass('ys-show');
		$('.ys-txt-noche').addClass('ys-hidde');
		$('.ys-txt-dia').removeClass('ys-hidde');
		$('.ys-txt-dia').addClass('ys-show');
	}
}
//--- Fin - Sección Inicio

//--- Sección Proyecto 
function ajustarSeccionProyecto(){
	ajustarVideoLogo();
}

function ajustarVideoLogo(){
	var anchoImg = 148;
	var altoImg = 172;

	if($(window).width() > 992){
		$('#ys-video-logo').css({
			'alto' : altoImg + 'px',
			'width' : anchoImg + 'px'
		});
	}
}
//--- Fin - Sección Proyecto

//--- Sección Departamentos
function ajustarSeccionDepartamentos(){
	//---Ajuste Slider
	$('.ys-carousel').css({
		'height' : $('.ys-seccion-departamentos').height() + 'px'
	});
	$('.carousel').carousel({
        interval: 5000
    });

    /*---*/
	mostrarOcultarSlides($('.ys-gal-1'), $('.ys-carousel'));

	if($(window).width() < 992){
		$('.ys-seccion-departamentos .ys-carousel').css({
			'height' : (($(window).height() / 3) * 2) + 'px',
			'min-height' : '400px',
			'margin-top' : '25%'
		});
	}

}
//--- Fin - Sección Departamentos

//--- Sección Contacto
function ajustarSeccionContacto(){
	//---Dimensionar seccion - al tamaño del contenedor		
	//---Centrar Cuadro de contacto (Azul -> En barra azul marino)
	var marginExtraN = 0;
	
	if($(window).width() < 768){
		$('.ys-seccion-contacto .ys-cuadro-contacto').css({
			'margin-top' : 0
		});
	}
	else{
		marginExtraN = centrarVerticalDosContenedores($('.ys-seccion-contacto .ys-content-pleca'), $('.ys-seccion-contacto .ys-cuadro-contacto'));
		$('.ys-footer').css({
			'margin-top' : (- marginExtraN) + 'px'
		});
	}

	if($(window).width() < 768){
		$('.ys-cuadro-contacto .ys-col-2').css({
			'height' : '250px'
		});	
	}
	else{
		$('.ys-cuadro-contacto .ys-col-2').css({
			'height' : $('.ys-cuadro-contacto').height() + 'px'
		});
	}
	//---Activar Mask
	$('.ys-telefono').mask('(000)-000-0000');
	ajustarSeccionFooter();
}

function ajustarSeccionFooter(){
	if($('.ys-content-page').hasClass('ys-back-dia')){
		//console.log('Es de día putito');
		$('.ys-footer').removeClass('ys-back-noche');
		$('.ys-footer').addClass('ys-back-dia');
	}
	else{
		//console.log('Es de noche putito');
		$('.ys-footer').removeClass('ys-back-dia');
		$('.ys-footer').addClass('ys-back-noche');
	}
}
//--- Fin - Sección Contacto

function enviarEmail(){
	var valid;
	valid = validarContacto();

	if(valid === true){		
		$('#formContent .ys-content-btn').html('');
		var data = {
			nombre : $('#userName').val(),
			telefono : $('#userPhone').val(),
			email : $('#userEmail').val(),
			mensaje : $('#userMessage').val()
		};
		$.ajax({
		    type: 'POST',
		    url: 'sendmail.php',
		    data: data,
		    success: function(){		        		        
		        $('#formContent .ys-hiddeform').html('');			    
			    $('.ys-msjConfirmacion').addClass('ys-show');
		    },
		    error: function(){		    	
		    }
		});

	}
	else
	{
		console.log('Diste click en enviar y esta vacio...');
	}
}

function validarContacto(){
	var valid = true;
	var msj = 'Los campos: ';
	if(($('#userName').val() === '')){
		msj = msj + ' *Nombre y apellidos, ';
		valid = false;
	}
	if(($('#userEmail').val() === '')){
		msj = msj + ' * Correo electrónico, ';
		valid = false;
	}
	if(($('#userPhone').val()) === ''){
		msj = msj + ' *Teléfono, ';
		valid = false;
	}
	if(($('#userMessage').val() === '')){
		msj = msj + ' *Mensaje, ';
		valid = false;
	}

	if(!valid){
		msj = msj + ' son necesarios para poder contactarte, ¡llénalos porfavor!';
		$('.ys-msj-info').html('' + msj);
	}
	else{
		msj = '';
		$('.ys-msj-info').html('' + msj);
	}
	return valid;
}
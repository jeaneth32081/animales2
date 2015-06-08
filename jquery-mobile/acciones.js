// JavaScript Document
$(document).ready(function(e) {
$('principal').height($('#page').height()); //Calcular el alto de la pantalla del dispositivo
 	    document.addEventListener("deviceready",function() {
		//precarga el sonido
		audio=window.plugins.LowLatencyAudio;
		audio.preloadFX('Gato','audio/audio gato.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('Caballo','audio/audio caballo.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('Pajaro','audio/audio pajaro.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('Perro','audio/audio perro.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('Pollo','audio/audio pollo.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('Conejo','audio/audio conejo.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('elefante','audio/audio elefante.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('leon','audio/audio leon.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('oso','audio/audio oso.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('jirafa','audio/audio jirafa.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('tigre','audio/audio tigre.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('zorro','audio/audio zorro.mp3',function(){},function(e){alert('Error '+e);});
		//reproducir las notas
		
		$('.nota').bind('tochstart', function() {$(this).addClass('tocada'); audio.play($(this).attr('id'));});
		$('.nota').bind('touchend',function(){$(this).removeClass('tocada');});
		
	},false); //deviceready
}); //ready
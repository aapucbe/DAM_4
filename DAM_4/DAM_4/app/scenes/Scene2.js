alert('SceneScene2.js loaded');

function SceneScene2() {

};

SceneScene2.prototype.initialize = function () {
	alert("SceneScene2.initialize()");
	// this function will be called only once when the scene manager show this scene first time
	// initialize the scene controls and styles, and initialize your variables here
	// scene HTML and CSS will be loaded before this function is called

};

SceneScene2.prototype.handleShow = function (data) {
	alert("SceneScene2.handleShow()");
	// this function will be called when the scene manager show this scene
	$.ajax({
	  type: "GET",
	  crossDomain: true,
	  async: true,
	  dataType: "json",
	  url: API+'/movie/'+movie_id,
	  data: { api_key: api_key },
	  success: function(data){
	  	$("#details").css('background-image', 'url(' + base_url+'w1280'+data.backdrop_path + ')');
	  	$("#cover").append('<img src="'+base_url+'w342'+data.poster_path+'"/>');
	  	$("#divEstrellas").append('<span id="est1" class="glyphicon glyphicon-star-empty"></span>');
	  	$("#divEstrellas").append('<span id="est2" class="glyphicon glyphicon-star-empty"></span>');
	  	$("#divEstrellas").append('<span id="est3" class="glyphicon glyphicon-star-empty"></span>');
	  	$("#divEstrellas").append('<span id="est4" class="glyphicon glyphicon-star-empty"></span>');
	  	$("#divEstrellas").append('<span id="est5" class="glyphicon glyphicon-star-empty">&nbsp</span>');
	  	$("#divEstrellas").append(data.vote_average);
	  	$("#title").append('<h1>'+data.title+'</h1>');
	  	$("#title").append('<p>'+data.tagline+'</p>');
	  	//$("#estrella").append(data.vote_average);
	  	$("#sinopsis").append(data.overview);
	  	$("#anyo").append('Fecha de estreno: '+data.release_date);
	  	$("#duracion").append('Duración: '+data.runtime+' min');
	  	$("#genero").append('Género: '+data.genres[1].name);
	  	}
	});
};

SceneScene2.prototype.handleHide = function () {
	alert("SceneScene2.handleHide()");
	// this function will be called when the scene manager hide this scene
	$("#cover").html('');
	$("#divEstrellas").html('');	
	$("#title").html('');
	$("#title").html('');
	$("#estrella").html('');
	$("#sinopsis").html('');
	$("#anyo").html('');
	$("#duracion").html('');
	$("#presupuesto").html('');
	$("#recaudacion").html('');
	$("#genero").html('');
};

SceneScene2.prototype.handleFocus = function () {
	alert("SceneScene2.handleFocus()");
	// this function will be called when the scene manager focus this scene
};

SceneScene2.prototype.handleBlur = function () {
	alert("SceneScene2.handleBlur()");
	// this function will be called when the scene manager move focus to another scene from this scene
};

SceneScene2.prototype.handleKeyDown = function (keyCode) {
	alert("SceneScene2.handleKeyDown(" + keyCode + ")");
	// TODO : write an key event handler when this scene get focued
	switch (keyCode) {
		case sf.key.LEFT:
			break;
		case sf.key.RIGHT:
			break;
		case sf.key.UP:
			break;
		case sf.key.DOWN:
			break;
		case sf.key.ENTER:
			break;
		default:
			alert("handle default key event, key code(" + keyCode + ")");
			break;
	}
};

function puntuar (puntuacion) {
	$.ajax({
	  type: "POST",
	  crossDomain: true,
	  async: true,
	  dataType: "json",
	  url: API+'/movie/'+id+'/rating',
	  data: { api_key: api_key, session_id: session_id, value: puntuacion },
	  success: function(data){
	  	console.log(data);
	  }
	});
};
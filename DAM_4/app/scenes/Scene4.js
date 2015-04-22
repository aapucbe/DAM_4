alert('SceneScene4.js loaded');

function SceneScene4() {

};

SceneScene4.prototype.initialize = function () {
	alert("SceneScene4.initialize()");
	// this function will be called only once when the scene manager show this scene first time
	// initialize the scene controls and styles, and initialize your variables here
	// scene HTML and CSS will be loaded before this function is called

};

SceneScene4.prototype.handleShow = function (data) {
	alert("SceneScene4.handleShow()");
	// this function will be called when the scene manager show this scene
	$.ajax({
		  type: "GET",
		  crossDomain: true,
		  async: true,
		  dataType: "json",
		  url: API+'/tv/'+tv_id,
		  data: { api_key: api_key },
		  success: function(data){
		  	$("#details4").css('background-image', 'url(' + base_url+'w1280'+data.backdrop_path + ')');
		  	$("#cover4").append('<img src="'+base_url+'w342'+data.poster_path+'"/>');
		  	$("#title4").append('<h1>'+data.name+'</h1>');
		  	$("#sinopsis4").append(data.overview);	  }
		});
};

SceneScene4.prototype.handleHide = function () {
	alert("SceneScene4.handleHide()");
	// this function will be called when the scene manager hide this scene
	$("#cover4").html('');
	$("#title4").html('');
	$("#title4").html('');
	$("#sinopsis4").html('');
};

SceneScene4.prototype.handleFocus = function () {
	alert("SceneScene4.handleFocus()");
	// this function will be called when the scene manager focus this scene
};

SceneScene4.prototype.handleBlur = function () {
	alert("SceneScene4.handleBlur()");
	// this function will be called when the scene manager move focus to another scene from this scene
};

SceneScene4.prototype.handleKeyDown = function (keyCode) {
	alert("SceneScene4.handleKeyDown(" + keyCode + ")");
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
	  url: API+'/tv/'+id+'/rating',
	  data: { api_key: api_key, session_id: session_id, value: puntuacion },
	  success: function(data){
	  	console.log(data);
	  }
	});
};

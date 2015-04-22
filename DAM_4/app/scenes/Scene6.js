alert('SceneScene6.js loaded');

function SceneScene6() {

};

SceneScene6.prototype.initialize = function () {
	alert("SceneScene6.initialize()");
	// this function will be called only once when the scene manager show this scene first time
	// initialize the scene controls and styles, and initialize your variables here
	// scene HTML and CSS will be loaded before this function is called
	
};

SceneScene6.prototype.handleShow = function (data) {
	alert("SceneScene6.handleShow()");
	// this function will be called when the scene manager show this scene
	$.ajax({
		  type: "GET",
		  crossDomain: true,
		  async: true,
		  dataType: "json",
		  url: API+'/person/'+person_id,
		  data: { api_key: api_key },
		  success: function(data){
		  	//$("#details6").css('background-image', 'url(' + base_url+'w1280'+data.profile_path + ')');
		  	$("#cover6").append('<img src="'+base_url+'w342'+data.profile_path+'"/>');
		  	$("#title6").append('<h1>'+data.name+'</h1>');
		  	$("#sinopsis6").append(data.biography);	  }
		});	
};

SceneScene6.prototype.handleHide = function () {
	alert("SceneScene6.handleHide()");
	// this function will be called when the scene manager hide this scene
	$("#cover6").html('');
	$("#title6").html('');
	$("#title6").html('');
	$("#sinopsis6").html('');
};

SceneScene6.prototype.handleFocus = function () {
	alert("SceneScene6.handleFocus()");
	// this function will be called when the scene manager focus this scene
};

SceneScene6.prototype.handleBlur = function () {
	alert("SceneScene6.handleBlur()");
	// this function will be called when the scene manager move focus to another scene from this scene
};

SceneScene6.prototype.handleKeyDown = function (keyCode) {
	alert("SceneScene6.handleKeyDown(" + keyCode + ")");
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

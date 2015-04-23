alert('SceneScene5.js loaded');

function SceneScene5() {

};

SceneScene5.prototype.initialize = function () {
	alert("SceneScene5.initialize()");
	// this function will be called only once when the scene manager show this scene first time
	// initialize the scene controls and styles, and initialize your variables here
	// scene HTML and CSS will be loaded before this function is called

	alert(api_key);
	session_id = localStorage.getItem('session_id');
	alert(session_id);
	
	alert(API+"/discover/movie?sort_by=popularity.desc&api_key="+api_key);
	$.ajax({
	  type: "GET",
	  crossDomain: true,
	  async: true,
	  dataType: "json",
	  url: API+"/person/popular?api_key="+api_key,
	  success: function(data){
	  	alert('success');
	  	for (var i = 11; i >= 0; i--) {
	  		if(i == 11) $("#movies5").append('<div id="populares5" class="row"><h1>Actores populares</h1>');
	  		//if(i == 5) $("#movies").append('</div><div class="row">');
	  		if(i == 0) $("#movies5").append('</div>');
	  		
	  		$("#movies5").append('<div class="col-xs-2" href="'+data.results[i].id+'"><img src="'+base_url+'w342'+data.results[i].profile_path+'"/></div>');
	  		//$("#movies").append('<div class="col-xs-2" href="'+data.results[i].id+'"><img src="'+base_url+'w342'+data.results[i].poster_path+'"/></div>');
	  	}
	  	
	  	$('#ventana5 span.btns1, #ventana5 span.btns2, #ventana5 div.col-xs-2').keynav();
	  	//$('#ventana div.col-xs-1').keynav();
	  	//$('#movies div.col-xs-2').keynav();
	  },
	  error: function(){
	  	alert('error');
	  }
	});
	
};

SceneScene5.prototype.handleShow = function (data) {
	alert("SceneScene5.handleShow()");
	// this function will be called when the scene manager show this scene
};

SceneScene5.prototype.handleHide = function () {
	alert("SceneScene5.handleHide()");
	// this function will be called when the scene manager hide this scene
};

SceneScene5.prototype.handleFocus = function () {
	alert("SceneScene5.handleFocus()");
	// this function will be called when the scene manager focus this scene
};

SceneScene5.prototype.handleBlur = function () {
	alert("SceneScene5.handleBlur()");
	// this function will be called when the scene manager move focus to another scene from this scene
};

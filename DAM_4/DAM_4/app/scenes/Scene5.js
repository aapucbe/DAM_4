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
	
	crearActores();
	
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

function crearActores() {
	alert(API+"/discover/movie?sort_by=popularity.desc&api_key="+api_key);
	$.ajax({
	  type: "GET",
	  crossDomain: true,
	  async: true,
	  dataType: "json",
	  url: API+"/person/popular?api_key="+api_key,
	  success: function(data){
	  	alert('success');
	  	$("#movies5").append('<div id="populares5" class="row"><h1>Actores populares</h1>');
	  	$("#populares5").append('<div id="lista1" class="row">');
	  	$("#populares5").append('<div id="lista2" class="row">');
	  	$("#populares5").append('<div id="lista3" class="row">');
	  	for (var i = 17; i >= 0; i--) {
	  		//if(i == 17) $("#movies5").append('<div id="populares5" class="row"><h1>Actores populares</h1>');
	  		//if(i == 5) $("#movies").append('</div><div class="row">');
	  		//if(i == 0) $("#movies5").append('</div>');
	  		
	  		if (i <= 17 && i >= 12){
	  			$("#lista1").append('<div class="col-xs-2" href="'+data.results[i].id+'"><img src="'+base_url+'w342'+data.results[i].profile_path+'"/></div>');
	  		}
	  		
	  		if (i <= 11 && i >= 6){
	  			$("#lista2").append('<div class="col-xs-2" href="'+data.results[i].id+'"><img src="'+base_url+'w342'+data.results[i].profile_path+'"/></div>');
	  		}
	  		
	  		if (i <= 5 && i >= 0){
	  			$("#lista3").append('<div class="col-xs-2" href="'+data.results[i].id+'"><img src="'+base_url+'w342'+data.results[i].profile_path+'"/></div>');
	  		}	  		
	  		
	  		//$("#movies").append('<div class="col-xs-2" href="'+data.results[i].id+'"><img src="'+base_url+'w342'+data.results[i].poster_path+'"/></div>');
	  	}
	  	
	  	$("#movies5").append('</div>');
	  	
	  	$('#ventana5 span.btns1, #ventana5 span.btns2, #ventana5 div.col-xs-2').keynav();
	  	//$('#ventana div.col-xs-1').keynav();
	  	//$('#movies div.col-xs-2').keynav();
	  },
	  error: function(){
	  	alert('error');
	  }
	});
}
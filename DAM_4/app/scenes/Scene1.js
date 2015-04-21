alert('SceneScene1.js loaded');

function SceneScene1() {

};

SceneScene1.prototype.initialize = function () {
	alert("SceneScene1.initialize()");
	// this function will be called only once when the scene manager show this scene first time
	// initialize the scene controls and styles, and initialize your variables here
	// scene HTML and CSS will be loaded before this function is called
	alert(api_key);
	session_id = localStorage.getItem('session_id');
	alert(session_id);

	$('#login').append('<button type="button" class="btn btn-default btn-lg">Login</button>');
	$('#login').append('<button type="button" class="btn btn-default btn-lg">Resgistro</button>');
	
	$('#menu').append('<button type="button" class="btn btn-default btn-lg">Peliculas</button>');
	$('#menu').append('<button type="button" class="btn btn-default btn-lg">Series</button>');
	$('#menu').append('<button type="button" class="btn btn-default btn-lg">Actores</button>');
	
	alert(API+"/discover/movie?sort_by=popularity.desc&api_key="+api_key);
	$.ajax({
	  type: "GET",
	  crossDomain: true,
	  async: true,
	  dataType: "json",
	  url: API+"/discover/movie?sort_by=popularity.desc&api_key="+api_key,
	  success: function(data){
	  	alert('success');
	  	for (var i = 11; i >= 0; i--) {
	  		if(i == 11) $("#populares").append('<div class="row"><h1>Populares</h1>');
	  		//if(i == 5) $("#movies").append('</div><div class="row">');
	  		if(i == 0) $("#populares").append('</div>');
	  		
	  		$("#populares").append('<div class="col-xs-1" href="'+data.results[i].id+'"><img src="'+base_url+'w342'+data.results[i].poster_path+'"/></div>');
	  		//$("#movies").append('<div class="col-xs-2" href="'+data.results[i].id+'"><img src="'+base_url+'w342'+data.results[i].poster_path+'"/></div>');
	  	}
	  	
	  	$('#movies div.col-xs-1').keynav();
	  	//$('#movies div.col-xs-2').keynav();
	  },
	  error: function(){
	  	alert('error');
	  }
	});	

};

SceneScene1.prototype.handleShow = function (data) {
	alert("SceneScene1.handleShow()");
	// this function will be called when the scene manager show this scene
};

SceneScene1.prototype.handleHide = function () {
	alert("SceneScene1.handleHide()");
	// this function will be called when the scene manager hide this scene
};

SceneScene1.prototype.handleFocus = function () {
	alert("SceneScene1.handleFocus()");
	// this function will be called when the scene manager focus this scene
};

SceneScene1.prototype.handleBlur = function () {
	alert("SceneScene1.handleBlur()");
	// this function will be called when the scene manager move focus to another scene from this scene
};

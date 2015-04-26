alert('SceneScene3.js loaded');

function SceneScene3() {

};

SceneScene3.prototype.initialize = function () {
	alert("SceneScene3.initialize()");
	// this function will be called only once when the scene manager show this scene first time
	// initialize the scene controls and styles, and initialize your variables here
	// scene HTML and CSS will be loaded before this function is called
	alert(api_key);
	session_id = localStorage.getItem('session_id');
	alert(session_id);
	
	$.ajax({
		  type: "GET",
		  crossDomain: true,
		  async: true,
		  dataType: "json",
		  url: API+"/discover/tv?sort_by=popularity.desc&api_key="+api_key,
		  success: function(data){
		  	alert('success');
		  	for (var i = 5; i >= 0; i--) {
		  		if(i == 5) $("#movies3").append('<div id="populares3" class="row"><h1>Populares</h1>');
		  		//if(i == 5) $("#movies").append('</div><div class="row">');
		  		if(i == 0) $("#movies3").append('</div>');
		  		
		  		$("#populares3").append('<div class="col-xs-2" href="'+data.results[i].id+'"><img src="'+base_url+'w342'+data.results[i].poster_path+'"/></div>');
		  		//$("#movies").append('<div class="col-xs-2" href="'+data.results[i].id+'"><img src="'+base_url+'w342'+data.results[i].poster_path+'"/></div>');
		  	}
		  	
		  	$('#ventana3 span.btns1, #ventana3 span.btns2, #ventana3 div.col-xs-2').keynav();
		  	//$('#ventana div.col-xs-1').keynav();
		  	//$('#movies div.col-xs-2').keynav();
		  	
		  	$.ajax({
				  type: "GET",
				  crossDomain: true,
				  async: true,
				  dataType: "json",
				  url: API+"/tv/top_rated?api_key="+api_key,
				  success: function(data){
				  	alert('success');
				  	for (var i = 5; i >= 0; i--) {
				  		if(i == 5) $("#movies3").append('<div id="mejorValoradas3" class="row"><h1>Mejor valoradas</h1>');
				  		//if(i == 5) $("#movies").append('</div><div class="row">');
				  		if(i == 0) $("#movies3").append('</div>');
				  		
				  		$("#mejorValoradas3").append('<div class="col-xs-2" href="'+data.results[i].id+'"><img src="'+base_url+'w342'+data.results[i].poster_path+'"/></div>');
				  		//$("#movies").append('<div class="col-xs-2" href="'+data.results[i].id+'"><img src="'+base_url+'w342'+data.results[i].poster_path+'"/></div>');
				  	}
				  	
				  	$('#ventana3 span.btns1, #ventana3 span.btns2, #ventana3 div.col-xs-2').keynav();
				  	//$('#ventana div.col-xs-1').keynav();
				  	//$('#movies div.col-xs-2').keynav();
				  	
				  	$.ajax({
						  type: "GET",
						  crossDomain: true,
						  async: true,
						  dataType: "json",
						  url: API+"/tv/on_the_air?api_key="+api_key,
						  success: function(data){
						  	alert('success');
						  	for (var i = 5; i >= 0; i--) {
						  		if(i == 5) $("#movies3").append('<div id="enEmision3" class="row"><h1>En emision</h1>');
						  		//if(i == 5) $("#movies").append('</div><div class="row">');
						  		if(i == 0) $("#movies3").append('</div>');
						  		
						  		$("#enEmision3").append('<div class="col-xs-2" href="'+data.results[i].id+'"><img src="'+base_url+'w342'+data.results[i].poster_path+'"/></div>');
						  		//$("#movies").append('<div class="col-xs-2" href="'+data.results[i].id+'"><img src="'+base_url+'w342'+data.results[i].poster_path+'"/></div>');
						  	}
						  	
						  	$('#ventana3 span.btns1, #ventana3 span.btns2, #ventana3 div.col-xs-2').keynav();
						  	//$('#ventana div.col-xs-1').keynav();
						  	//$('#movies div.col-xs-2').keynav();
						  },
						  error: function(){
						  	alert('error');
						  }
						});
				  	
				  },
				  error: function(){
				  	alert('error');
				  }
				});
		  	
		  },
		  error: function(){
		  	alert('error');
		  }
		});
	
};

SceneScene3.prototype.handleShow = function (data) {
	alert("SceneScene3.handleShow()");
	// this function will be called when the scene manager show this scene
};

SceneScene3.prototype.handleHide = function () {
	alert("SceneScene3.handleHide()");
	// this function will be called when the scene manager hide this scene
};

SceneScene3.prototype.handleFocus = function () {
	alert("SceneScene3.handleFocus()");
	// this function will be called when the scene manager focus this scene
};

SceneScene3.prototype.handleBlur = function () {
	alert("SceneScene3.handleBlur()");
	// this function will be called when the scene manager move focus to another scene from this scene
};

function crearPopulares3() {
	alert(API+"/discover/tv?sort_by=popularity.desc&api_key="+api_key);
	$.ajax({
	  type: "GET",
	  crossDomain: true,
	  async: true,
	  dataType: "json",
	  url: API+"/discover/tv?sort_by=popularity.desc&api_key="+api_key,
	  success: function(data){
	  	alert('success');
	  	for (var i = 5; i >= 0; i--) {
	  		if(i == 5) $("#movies3").append('<div id="populares3" class="row"><h1>Populares</h1>');
	  		//if(i == 5) $("#movies").append('</div><div class="row">');
	  		if(i == 0) $("#movies3").append('</div>');
	  		
	  		$("#populares3").append('<div class="col-xs-2" href="'+data.results[i].id+'"><img src="'+base_url+'w342'+data.results[i].poster_path+'"/></div>');
	  		//$("#movies").append('<div class="col-xs-2" href="'+data.results[i].id+'"><img src="'+base_url+'w342'+data.results[i].poster_path+'"/></div>');
	  	}
	  	
	  	$('#ventana3 span.btns1, #ventana3 span.btns2, #ventana3 div.col-xs-2').keynav();
	  	//$('#ventana div.col-xs-1').keynav();
	  	//$('#movies div.col-xs-2').keynav();
	  },
	  error: function(){
	  	alert('error');
	  }
	});
}

function crearMejorValoradas3() {
	$.ajax({
		  type: "GET",
		  crossDomain: true,
		  async: true,
		  dataType: "json",
		  url: API+"/tv/top_rated?api_key="+api_key,
		  success: function(data){
		  	alert('success');
		  	for (var i = 5; i >= 0; i--) {
		  		if(i == 5) $("#movies3").append('<div id="mejorValoradas3" class="row"><h1>Mejor valoradas</h1>');
		  		//if(i == 5) $("#movies").append('</div><div class="row">');
		  		if(i == 0) $("#movies3").append('</div>');
		  		
		  		$("#mejorValoradas3").append('<div class="col-xs-2" href="'+data.results[i].id+'"><img src="'+base_url+'w342'+data.results[i].poster_path+'"/></div>');
		  		//$("#movies").append('<div class="col-xs-2" href="'+data.results[i].id+'"><img src="'+base_url+'w342'+data.results[i].poster_path+'"/></div>');
		  	}
		  	
		  	$('#ventana3 span.btns1, #ventana3 span.btns2, #ventana3 div.col-xs-2').keynav();
		  	//$('#ventana div.col-xs-1').keynav();
		  	//$('#movies div.col-xs-2').keynav();
		  },
		  error: function(){
		  	alert('error');
		  }
		});
}

function crearEnEmision3() {
	$.ajax({
		  type: "GET",
		  crossDomain: true,
		  async: true,
		  dataType: "json",
		  url: API+"/tv/on_the_air?api_key="+api_key,
		  success: function(data){
		  	alert('success');
		  	for (var i = 5; i >= 0; i--) {
		  		if(i == 5) $("#movies3").append('<div id="enEmision3" class="row"><h1>En emision</h1>');
		  		//if(i == 5) $("#movies").append('</div><div class="row">');
		  		if(i == 0) $("#movies3").append('</div>');
		  		
		  		$("#enEmision3").append('<div class="col-xs-2" href="'+data.results[i].id+'"><img src="'+base_url+'w342'+data.results[i].poster_path+'"/></div>');
		  		//$("#movies").append('<div class="col-xs-2" href="'+data.results[i].id+'"><img src="'+base_url+'w342'+data.results[i].poster_path+'"/></div>');
		  	}
		  	
		  	$('#ventana3 span.btns1, #ventana3 span.btns2, #ventana3 div.col-xs-2').keynav();
		  	//$('#ventana div.col-xs-1').keynav();
		  	//$('#movies div.col-xs-2').keynav();
		  },
		  error: function(){
		  	alert('error');
		  }
		});
}
var API = 'http://api.themoviedb.org/3';
var api_key = 'fffcfc6228ea5f968c308ea249b5a9eb';
var session_id = '';
var base_url = 'http://image.tmdb.org/t/p/';
var movie_id = '';

function onStart () {
	// TODO : Add your Initilize code here
	// NOTE : In order to start your app, call "sf.start()" at the end of this function!!
	
	sf.scene.show('Scene1');
	sf.scene.focus('Scene1');
}
function onDestroy () {
	//stop your XHR or Ajax operation and put codes to distroy your application here
	
}

alert("init.js loaded.");

/*
 * Keynav - jQuery Keyboard Navigation plugin
 *
 * Copyright (c) 2013 Nick Ostrovsky
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   http://www.firedev.com/jquery.keynav
 *
 * Version:  0.1
 *
 */

;(function($, window, document, undefined) {

	$.fn.keynav = function(checkNav) {
		var escena = "";
		
		var elements = this;
		var matrix;
		var x;
		var y;
		var current = this.filter('.selected');
		var keyNavigationDisabled=false;
		if (current.length == 0) current = this.first();

		current.addClass('selected');

		function update() {
			var i=0;
			var row = Array();
			var j = -1;
			var oldtop = false;
			var m=Array();

			elements.each(function(){
				if (!oldtop) oldtop = this.offsetTop;
				newtop=this.offsetTop;
				if (newtop != oldtop) {
					oldtop=newtop;
					m[i]=row;
					row = Array();
					i++;
					j=0;
					row[j]=this;
				} else {
					j++;
					row[j]=this;
				}
			});
			m[i]=row;
			matrix = m;
			coordinates=findCurrent();
			x=coordinates[0];
			y=coordinates[1];
			return matrix;
		}

		function findCurrent() {
			i=0; j=0; found = false;
			try {
				for (i=0; i<matrix.length; i++) {
					row=matrix[i];
					for (j=0; j<row.length; j++) {
						if (current[0] == row[j]) {
							throw([i,j]);
						}

					}
				}
			}
			catch (arr)
			{
				found = [i,j]
			}
			return(found);
		}

		function setCurrent(i,j) {
			if (i<0) i=(matrix.length-1);
			if (i>=matrix.length) i=0;
			if (j<0) j=(matrix[i].length-1);
			if (j>=matrix[i].length) j=0;
			current.removeClass('selected');
			current = $(matrix[i][j]);
			current.addClass('selected');
			x=i;
			y=j;
		}

		$(window).bind("resize", function(event) {
			update();
		});

		$(document).ready(function() {
			update();
		});


		SceneScene1.prototype.handleKeyDown = function (keyCode) {
			alert("SceneScene1.handleKeyDown(" + keyCode + ")");
			// TODO : write an key event handler when this scene get focued
			switch (keyCode) {
				case sf.key.LEFT:
					setCurrent(x,y-1);
					break;
				case sf.key.RIGHT:
					setCurrent(x,y+1);
					break;
				case sf.key.UP:
					setCurrent(x-1,y);
					break;
				case sf.key.DOWN:
					setCurrent(x+1,y);
					break;
				case sf.key.ENTER:
					
					if($('#log').hasClass('selected')) {
						escena = "1";
						sf.scene.hide('Scene1');
						sf.scene.show('SceneLogin');
						sf.scene.focus('SceneLogin');
					}
					/*else if($('#registro').hasClass('selected')) {
						sf.scene.hide('Scene1');
						sf.scene.show('SceneLogin');
						sf.scene.focus('SceneLogin');
					}*/
					else if($('#peliculas').hasClass('selected')) {
						sf.scene.show('Scene1');
						sf.scene.focus('Scene1');
					}
					else if($('#series').hasClass('selected')) {
						sf.scene.hide('Scene1');
						sf.scene.show('Scene3');
						sf.scene.focus('Scene3');
						$('#series').removeClass('selected');
						$('#peliculas').addClass('selected')
						$('#series3').addClass('selected');
						$('#ventana3 span.btns1, #ventana3 span.btns2, #ventana3 div.col-xs-2').keynav();
					}
					else if($('#actores').hasClass('selected')) {
						sf.scene.hide('Scene1');
						sf.scene.show('Scene5');
						sf.scene.focus('Scene5');
						$('#actores').removeClass('selected');
						$('#peliculas').addClass('selected')
						$('#actores5').addClass('selected');
						$('#ventana5 span.btns1, #ventana5 span.btns2, #ventana5 div.col-xs-2').keynav();
					}
					else {
						movie_id = current.attr('href');
						sf.scene.hide('Scene1');
						sf.scene.show('Scene2');
						sf.scene.focus('Scene2');
					}
					break;
					/*case sf.key.TOOLS:
						event.preventDefault();
						sf.scene.hide('Scene1');
						sf.scene.show('SceneLogin');
						sf.scene.focus('SceneLogin');*/
					default:
						alert("handle default key event, key code(" + keyCode + ")");
						break;
			}
		};

		SceneScene2.prototype.handleKeyDown = function (keyCode) {
			alert("SceneScene2.handleKeyDown(" + keyCode + ")");
			// TODO : write an key event handler when this scene get focued
			switch (keyCode) {
				case sf.key.RETURN:
					event.preventDefault();
					movie_id = '';
					sf.scene.hide('Scene2');
					sf.scene.show('Scene1');
					sf.scene.focus('Scene1');
					break;
				case sf.key.N1:
					//puntuar(1*2);
					$('#est5').removeClass('glyphicon glyphicon-star');
					$('#est4').removeClass('glyphicon glyphicon-star');
					$('#est3').removeClass('glyphicon glyphicon-star');
					$('#est2').removeClass('glyphicon glyphicon-star');
					$('#est1').removeClass('glyphicon glyphicon-star-empty');
					$('#est1').addClass('glyphicon glyphicon-star');
					$('#est2').addClass('glyphicon glyphicon-star-empty');
					$('#est3').addClass('glyphicon glyphicon-star-empty');
					$('#est4').addClass('glyphicon glyphicon-star-empty');
					$('#est5').addClass('glyphicon glyphicon-star-empty');
					break;
				case sf.key.N2:
					//puntuar(2*2);
					$('#est5').removeClass('glyphicon glyphicon-star');
					$('#est4').removeClass('glyphicon glyphicon-star');
					$('#est3').removeClass('glyphicon glyphicon-star');
					$('#est2').removeClass('glyphicon glyphicon-star-empty');
					$('#est1').removeClass('glyphicon glyphicon-star-empty');
					$('#est1').addClass('glyphicon glyphicon-star');
					$('#est2').addClass('glyphicon glyphicon-star');					
					$('#est3').addClass('glyphicon glyphicon-star-empty');
					$('#est4').addClass('glyphicon glyphicon-star-empty');
					$('#est5').addClass('glyphicon glyphicon-star-empty');
					break;
				case sf.key.N3:
					//puntuar(3*2);
					$('#est5').removeClass('glyphicon glyphicon-star');
					$('#est4').removeClass('glyphicon glyphicon-star');
					$('#est3').removeClass('glyphicon glyphicon-star-empty');
					$('#est2').removeClass('glyphicon glyphicon-star-empty');
					$('#est1').removeClass('glyphicon glyphicon-star-empty');
					$('#est3').addClass('glyphicon glyphicon-star');
					$('#est2').addClass('glyphicon glyphicon-star');
					$('#est1').addClass('glyphicon glyphicon-star');
					$('#est4').addClass('glyphicon glyphicon-star-empty');
					$('#est5').addClass('glyphicon glyphicon-star-empty');
					break;
				case sf.key.N4:
					//puntuar(4*2);
					$('#est5').removeClass('glyphicon glyphicon-star');
					$('#est4').removeClass('glyphicon glyphicon-star-empty');
					$('#est3').removeClass('glyphicon glyphicon-star-empty');
					$('#est2').removeClass('glyphicon glyphicon-star-empty');
					$('#est1').removeClass('glyphicon glyphicon-star-empty');
					$('#est4').addClass('glyphicon glyphicon-star');
					$('#est3').addClass('glyphicon glyphicon-star');
					$('#est2').addClass('glyphicon glyphicon-star');
					$('#est1').addClass('glyphicon glyphicon-star');
					$('#est5').addClass('glyphicon glyphicon-star-empty');
					break;
				case sf.key.N5:
					//puntuar(5*2);
					$('#est1').removeClass('glyphicon glyphicon-star-empty');
					$('#est2').removeClass('glyphicon glyphicon-star-empty');
					$('#est3').removeClass('glyphicon glyphicon-star-empty');
					$('#est4').removeClass('glyphicon glyphicon-star-empty');
					$('#est5').removeClass('glyphicon glyphicon-star-empty');
					$('#est1').addClass('glyphicon glyphicon-star');
					$('#est2').addClass('glyphicon glyphicon-star');
					$('#est3').addClass('glyphicon glyphicon-star');
					$('#est4').addClass('glyphicon glyphicon-star');
					$('#est5').addClass('glyphicon glyphicon-star');
					break;
				default:
					alert("handle default key event, key code(" + keyCode + ")");
					break;
			}
		};


		SceneScene3.prototype.handleKeyDown = function (keyCode) {
			alert("SceneScene3.handleKeyDown(" + keyCode + ")");
			// TODO : write an key event handler when this scene get focued
			switch (keyCode) {
				case sf.key.LEFT:
					setCurrent(x,y-1);
					break;
				case sf.key.RIGHT:
					setCurrent(x,y+1);
					break;
				case sf.key.UP:
					setCurrent(x-1,y);
					break;
				case sf.key.DOWN:
					setCurrent(x+1,y);
					break;
				case sf.key.ENTER:
					
					if($('#log3').hasClass('selected')) {
						escena = "3";
						sf.scene.hide('Scene3');
						sf.scene.show('SceneLogin');
						sf.scene.focus('SceneLogin');
					}
					/*else if($('#registro3').hasClass('selected')) {
						sf.scene.hide('Scene3');
						sf.scene.show('SceneLogin');
						sf.scene.focus('SceneLogin');
					}*/
					else if($('#peliculas3').hasClass('selected')) {
						sf.scene.hide('Scene3');
						sf.scene.show('Scene1');
						sf.scene.focus('Scene1');
						$('#peliculas3').removeClass('selected');
						$('#series3').addClass('selected')
						$('#peliculas').addClass('selected');
						$('#ventana span.btns1, #ventana span.btns2, #ventana div.col-xs-2').keynav();
					}
					else if($('#series3').hasClass('selected')) {
						sf.scene.show('Scene3');
						sf.scene.focus('Scene3');
					}
					else if($('#actores3').hasClass('selected')) {
						sf.scene.hide('Scene3');
						sf.scene.show('Scene5');
						sf.scene.focus('Scene5');
						$('#actores3').removeClass('selected');
						$('#series3').addClass('selected')
						$('#actores5').addClass('selected');
						$('#ventana5 span.btns1, #ventana5 span.btns2, #ventana5 div.col-xs-2').keynav();
					}
					else {
						tv_id = current.attr('href');
						sf.scene.hide('Scene3');
						sf.scene.show('Scene4');
						sf.scene.focus('Scene4');
					}
					break;
					/*case sf.key.TOOLS:
						event.preventDefault();
						sf.scene.hide('Scene1');
						sf.scene.show('SceneLogin');
						sf.scene.focus('SceneLogin');*/
					default:
						alert("handle default key event, key code(" + keyCode + ")");
						break;
			}
		};
		
		SceneScene4.prototype.handleKeyDown = function (keyCode) {
			alert("SceneScene4.handleKeyDown(" + keyCode + ")");
			// TODO : write an key event handler when this scene get focued
			switch (keyCode) {
				case sf.key.RETURN:
					event.preventDefault();
					tv_id = '';
					sf.scene.hide('Scene4');
					sf.scene.show('Scene3');
					sf.scene.focus('Scene3');
					break;
				case sf.key.N1:
					//puntuar(1*2);
					$('#est54').removeClass('glyphicon glyphicon-star');
					$('#est44').removeClass('glyphicon glyphicon-star');
					$('#est34').removeClass('glyphicon glyphicon-star');
					$('#est24').removeClass('glyphicon glyphicon-star');
					$('#est14').removeClass('glyphicon glyphicon-star-empty');
					$('#est14').addClass('glyphicon glyphicon-star');
					$('#est24').addClass('glyphicon glyphicon-star-empty');
					$('#est34').addClass('glyphicon glyphicon-star-empty');
					$('#est44').addClass('glyphicon glyphicon-star-empty');
					$('#est54').addClass('glyphicon glyphicon-star-empty');
					break;
				case sf.key.N2:
					//puntuar(2*2);
					$('#est54').removeClass('glyphicon glyphicon-star');
					$('#est44').removeClass('glyphicon glyphicon-star');
					$('#est34').removeClass('glyphicon glyphicon-star');
					$('#est24').removeClass('glyphicon glyphicon-star-empty');
					$('#est14').removeClass('glyphicon glyphicon-star-empty');
					$('#est14').addClass('glyphicon glyphicon-star');
					$('#est24').addClass('glyphicon glyphicon-star');					
					$('#est34').addClass('glyphicon glyphicon-star-empty');
					$('#est44').addClass('glyphicon glyphicon-star-empty');
					$('#est54').addClass('glyphicon glyphicon-star-empty');
					break;
				case sf.key.N3:
					//puntuar(3*2);
					$('#est54').removeClass('glyphicon glyphicon-star');
					$('#est44').removeClass('glyphicon glyphicon-star');
					$('#est34').removeClass('glyphicon glyphicon-star-empty');
					$('#est24').removeClass('glyphicon glyphicon-star-empty');
					$('#est14').removeClass('glyphicon glyphicon-star-empty');
					$('#est34').addClass('glyphicon glyphicon-star');
					$('#est24').addClass('glyphicon glyphicon-star');
					$('#est14').addClass('glyphicon glyphicon-star');
					$('#est44').addClass('glyphicon glyphicon-star-empty');
					$('#est54').addClass('glyphicon glyphicon-star-empty');
					break;
				case sf.key.N4:
					//puntuar(4*2);
					$('#est54').removeClass('glyphicon glyphicon-star');
					$('#est44').removeClass('glyphicon glyphicon-star-empty');
					$('#est34').removeClass('glyphicon glyphicon-star-empty');
					$('#est24').removeClass('glyphicon glyphicon-star-empty');
					$('#est14').removeClass('glyphicon glyphicon-star-empty');
					$('#est44').addClass('glyphicon glyphicon-star');
					$('#est34').addClass('glyphicon glyphicon-star');
					$('#est24').addClass('glyphicon glyphicon-star');
					$('#est14').addClass('glyphicon glyphicon-star');
					$('#est54').addClass('glyphicon glyphicon-star-empty');
					break;
				case sf.key.N5:
					//puntuar(5*2);
					$('#est14').removeClass('glyphicon glyphicon-star-empty');
					$('#est24').removeClass('glyphicon glyphicon-star-empty');
					$('#est34').removeClass('glyphicon glyphicon-star-empty');
					$('#est44').removeClass('glyphicon glyphicon-star-empty');
					$('#est54').removeClass('glyphicon glyphicon-star-empty');
					$('#est14').addClass('glyphicon glyphicon-star');
					$('#est24').addClass('glyphicon glyphicon-star');
					$('#est34').addClass('glyphicon glyphicon-star');
					$('#est44').addClass('glyphicon glyphicon-star');
					$('#est54').addClass('glyphicon glyphicon-star');
					break;
				default:
					alert("handle default key event, key code(" + keyCode + ")");
					break;
			}
		};
		
		SceneScene5.prototype.handleKeyDown = function (keyCode) {
			alert("SceneScene5.handleKeyDown(" + keyCode + ")");
			// TODO : write an key event handler when this scene get focued
			switch (keyCode) {
				case sf.key.LEFT:
					setCurrent(x,y-1);
					break;
				case sf.key.RIGHT:
					setCurrent(x,y+1);
					break;
				case sf.key.UP:
					setCurrent(x-1,y);
					break;
				case sf.key.DOWN:
					setCurrent(x+1,y);
					break;
				case sf.key.ENTER:
					
					if($('#log5').hasClass('selected')) {
						escena = "5";
						sf.scene.hide('Scene5');
						sf.scene.show('SceneLogin');
						sf.scene.focus('SceneLogin');
					}
					/*else if($('#registro5').hasClass('selected')) {
						sf.scene.hide('Scene5');
						sf.scene.show('SceneLogin');
						sf.scene.focus('SceneLogin');
					}*/
					else if($('#peliculas5').hasClass('selected')) {
						sf.scene.hide('Scene5');
						sf.scene.show('Scene1');
						sf.scene.focus('Scene1');
						$('#peliculas5').removeClass('selected');
						$('#actores5').addClass('selected')
						$('#peliculas').addClass('selected');
						$('#ventana span.btns1, #ventana span.btns2, #ventana div.col-xs-2').keynav();
					}
					else if($('#series5').hasClass('selected')) {
						sf.scene.hide('Scene5');
						sf.scene.show('Scene3');
						sf.scene.focus('Scene3');
						$('#series5').removeClass('selected');
						$('#actores5').addClass('selected')
						$('#series3').addClass('selected');
						$('#ventana3 span.btns1, #ventana3 span.btns2, #ventana3 div.col-xs-2').keynav();
					}
					else if($('#actores5').hasClass('selected')) {
						sf.scene.show('Scene5');
						sf.scene.focus('Scene5');
					}
					else {
						person_id = current.attr('href');
						sf.scene.hide('Scene5');
						sf.scene.show('Scene6');
						sf.scene.focus('Scene6');
					}
					break;
					/*case sf.key.TOOLS:
						event.preventDefault();
						sf.scene.hide('Scene1');
						sf.scene.show('SceneLogin');
						sf.scene.focus('SceneLogin');*/
					default:
						alert("handle default key event, key code(" + keyCode + ")");
						break;
			}
		};
		
		SceneScene6.prototype.handleKeyDown = function (keyCode) {
			alert("SceneScene6.handleKeyDown(" + keyCode + ")");
			// TODO : write an key event handler when this scene get focued
			switch (keyCode) {
				case sf.key.RETURN:
					event.preventDefault();
					tv_id = '';
					sf.scene.hide('Scene6');
					sf.scene.show('Scene5');
					sf.scene.focus('Scene5');
					break;
				case sf.key.N1:
					puntuar(1*2);
					break;
				case sf.key.N2:
					puntuar(2*2);
					break;
				case sf.key.N3:
					puntuar(3*2);
					break;
				case sf.key.N4:
					puntuar(4*2);
					break;
				case sf.key.N5:
					puntuar(5*2);
					break;
				default:
					alert("handle default key event, key code(" + keyCode + ")");
					break;
			}
		};
		
		SceneSceneLogin.prototype.handleKeyDown = function (keyCode) {
			alert("SceneSceneLogin.handleKeyDown(" + keyCode + ")");
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
				case sf.key.RETURN:
					event.preventDefault();
					sf.scene.hide('SceneLogin');
					sf.scene.show('Scene'+escena);
					sf.scene.focus('Scene'+escena);
					break;
				default:
					alert("handle default key event, key code(" + keyCode + ")");
					break;
			}
		};
		
		return this;
	}

})(jQuery, window, document);

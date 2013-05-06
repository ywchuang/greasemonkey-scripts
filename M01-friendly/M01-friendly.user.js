// ==UserScript==
// @name        M01-friendly 
// @namespace   ywc
// @include     http://www.mobile01.com/*
// @version     0.1
// @grant       none
// ==/UserScript==

var currentUrl = window.location.href.split(window.location.host)[1],
	NOT_EXIST = -1;


if (currentUrl.indexOf('error.php') !== NOT_EXIST){
	error();
} else if (currentUrl.indexOf('topicdetail.php') !== NOT_EXIST){
	topicdetail ();
}

function error () {
	window.history.back();
}

function topicdetail () {
	$('div.sidebar').remove();
	$(document).ready(function() {
		LoadAttachImage && LoadAttachImage();
		
		$('html').animate({
		        scrollTop: 350
		    }, 1000);
	});
}





if (typeof Object.create !== "function") {
    Object.create = function (obj) {
        function F() {}
        F.prototype = obj;
        return new F();
    };
}

(function (demo, $, undefined) { 
	'use strict';
	// These are private
	
	
	// This will be executed at ready event
	$(document).ready(function() {
		bind(); 
	});
	$(window).on('load', function(){
	});
	
	// private Method 
	// (it doesn't need to be public, since the ready 
	// handler shares the same scope)
	function bind() {
		// Bind jQuery click and page events
		demo.util.init();
	};
	demo.util = {
		init: function(){
		},
		isEmpty: function(item){
			return !$.trim(item.html());
		}
	};
}( window.demo = window.demo || {}, jQuery ));
/*!
 * Copyright (c) 2014 Brian Chan (bchanx.com)
 * All Rights Reserved.
 */


$(function() {
    var e = function(a, b) {
        if (Array.prototype.indexOf) return a.indexOf(b);
        if (a && a.length)
            for (var c = 0, d = a.length; c < d; c++)
                if (a[c] == b) return c;
        return -1
    }
		
    var u = ["#home", "#photography", "#blog", "#coding", "#miscellaneous", "#contact", "#aboutme"],
        q = function() {
            var a = window.location.hash;
			
			if (a === "#miscellaneous") {
				$('body').css('overflow','visible');
			}
			else {
				$('body').css('overflow','hidden ');				
			}
			
            return 0 <= e(u, a) ? a.slice(1) : null
        }, 

        v = slidr.create("slidr", {
            controls: "none",
			timing: { 'cube': '0.9s ease-in' },
            transition: 'cube',
			fade: true,
			keyboard: true,
			overflow: true,
			pause: false,
			theme: '#222',
			touch: true,
        }).start(q());
		
	
		
    //"docs" === g && r();
    $(window).bind("hashchange",
        function(a) {
            if (a = q()) v.slide(a)
        })

});

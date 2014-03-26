// Use Javascript: to use in href
// Youtube doesn't include Jquery, but lets check it anyway
javascript:(function(){
	if (window.jQuery === undefined || window.jQuery.fn.jquery < v) {
		var v = "2.1.0";
		var done = false;
		var script = document.createElement("script");

		// You're probably logged in so we'll get an error if we load the non-secure version
		script.src = "https://ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js";
		document.getElementsByTagName("head")[0].appendChild(script);
		script.onload = script.onreadystatechange = function(){
			if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
				done = true;
				swapTitle();
			}
		};
		
	} else {
		swapTitle();
	}
	
	function swapTitle() {
		
			var LinksArray = $('.vm-video-title-container').find('.vm-video-title-content.yt-uix-sessionlink');
			LinksArray.each(function(){
				var YTnumber = $(this).attr('href').replace('/watch?v=', '');
				$(this).html('Video ID' + ': ' + '<span style=\"color:red; font-weight:bold\">' + YTnumber +'</span>');
		
		})();
	}

})();
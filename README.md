Show YouTube ID's Bookmarklet
=========

>In the YouTube admin, apart from immediately after you upload a YouTube video, there's no way to batch-view your video links, or more importiantly your video ID's. This Bookmarket is designed to work from the YouTube admin [video manager] page.  On click, it'll replace the video title with "Video ID: YourVideoID". 



Usage
----

Add a bookmark to your toolbar, for the url, copy and paste the below code. Then when you're on [the correct page], click it and magic will ensue.

	javascript:(function(){if(window.jQuery===undefined||window.jQuery.fn.jquery<v){var v="2.1.0";var done=false;var script=document.createElement("script");script.src="https://ajax.googleapis.com/ajax/libs/jquery/"+v+"/jquery.min.js";document.getElementsByTagName("head")[0].appendChild(script);script.onload=script.onreadystatechange=function(){if(!done&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")){done=true;swapTitle()}}}else{swapTitle()}swapTitle();function swapTitle(){var LinksArray=$('.vm-video-title-container').find('.vm-video-title-content.yt-uix-sessionlink');LinksArray.each(function(){var YTnumber=$(this).attr('href').replace('/watch?v=','');$(this).html('Video ID'+': '+'<span style=\"color:red; font-weight:bold\"\>'+YTnumber+'</span>')})()}})();

[video manager]:https://www.youtube.com/my_videos
[the correct page]:https://www.youtube.com/my_videos


    

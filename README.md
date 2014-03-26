Show YouTube ID's Bookmarklet
=========

>In the YouTube admin, apart from immediately after you upload a YouTube video, there's no way to batch-view your video links, or more importiantly your video ID's. This Bookmarket is designed to work from the YouTube admin [video manager] page.  On click, it'll replace the video title with "Video ID: YourVideoID". 



Usage
----

Click and drag the button below into your bookmarks bar. Then when you're on [the correct page], click it and magic will ensue.

	[SHOW YOUTUBE IDs]




[SHOW YOUTUBE IDS]:javascript:(function(e,a,g,h,f,c,b,d)%7Bif(!(f%3De.jQuery)%7C%7Cg>f.fn.jquery%7C%7Ch(f))%7Bc%3Da.createElement("script")%3Bc.type%3D"text/javascript"%3Bc.src%3D"https://ajax.googleapis.com/ajax/libs/jquery/"%2Bg%2B"/jquery.min.js"%3Bc.onload%3Dc.onreadystatechange%3Dfunction()%7Bif(!b%26%26(!(d%3Dthis.readyState)%7C%7Cd%3D%3D"loaded"%7C%7Cd%3D%3D"complete"))%7Bh((f%3De.jQuery).noConflict(1),b%3D1)%3Bf(c).remove()%7D%7D%3Ba.documentElement.childNodes%5B0%5D.appendChild(c)%7D%7D)(window,document,"2.1.0",function(%24,L)%7BswapTitle()%3Bfunction swapTitle() %7Bvar LinksArray %3D %24(%27.vm-video-title-container%27).find(%27.vm-video-title-content.yt-uix-sessionlink%27)%3BLinksArray.each(function()%7Bvar YTnumber %3D %24(this).attr(%27href%27).replace(%27/watch%3Fv%3D%27, %27%27)%3B%24(this).html(%27Video ID%27 %2B %27: %27 %2B %27<span style%3D"color:red%3B font-weight:bold">%27 %2B YTnumber %2B%27</span>%27)%3B%7D)%7D%7D)%3B

[video manager]:https://www.youtube.com/my_videos
[the correct page]:https://www.youtube.com/my_videos


    
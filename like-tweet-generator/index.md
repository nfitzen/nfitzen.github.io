---
layout: default
title: YT Tweeting
jquery: true
---
<script src="generate-tweet.js"></script>

### Tweet that you liked a YouTube video. Just paste the URL below and click Tweet me!

<div markdown="0">
<input id="yt-url-textbox" />
<a href="javascript:open_tweet_dialog(document.getElementById('yt-url-textbox').value,'AIzaSyCWi1MRJNSoxmu4XsUFwJDBj01ND_vP76U')" markdown="0"><img src="tweetme-button.png" style="width:75px;height:25px;vertical-align:middle;" /></a>
</div>

Alternatively, drag this to your bookmarks (or right-click and select "bookmark this link"): <a href="javascript:(function(){window.open('https://nathaniel.fitzenrider.com/like-tweet-generator/?vidurl='+encodeURIComponent(document.URL))})();">Tweet me!</a>

<script>
let params = URLSearchParams(window.location.search);
let vidurl = params.get('vidurl');
if (typeof decodeURIComponent(vidurl) === 'string' || decodeURIComponent(vidurl) instanceof String)
    open_tweet_dialog(decodeURIComponent(params.vidurl), 'AIzaSyCWi1MRJNSoxmu4XsUFwJDBj01ND_vP76U', false);
</script>

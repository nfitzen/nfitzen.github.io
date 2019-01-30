---
layout: default
title: YT Tweeting
---
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="dentist.min.js"></script>
<script src="generate-tweet.js"></script>

### Tweet that you liked a YouTube video. Just paste the URL below and click Tweet me!

<div markdown="0">
<input id="yt-url-textbox" />
<a href="javascript:open_tweet_dialog(document.getElementById('yt-url-textbox').value,'AIzaSyCWi1MRJNSoxmu4XsUFwJDBj01ND_vP76U')" markdown="0"><img src="tweetme-button.png" style="width:75px;height:25px;vertical-align:middle;" /></a>
</div>

Alternatively, drag this to your bookmarks (or right-click and select "bookmark this link"): <a href="javascript:(function(){window.open('https://nathaniel.fitzenrider.com/like-tweet-generator/?vidurl='+encodeURIComponent(document.URL))})();">Tweet me!</a>

<script>
var currentURL = document.URL;
var params = currentURL.extract();
if (typeof decodeURIComponent(params.vidurl) === 'string' || decodeURIComponent(params.vidurl) instanceof String) {
    open_tweet_dialog(decodeURIComponent(params.vidurl), 'AIzaSyCWi1MRJNSoxmu4XsUFwJDBj01ND_vP76U', false);
}
</script>

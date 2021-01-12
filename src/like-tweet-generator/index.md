---
title: YT Tweeting
jquery: true
---
<!--
  ~ SPDX-FileCopyrightText: 2018-2021 Nathaniel Fitzenrider <nathaniel.fitzenrider@gmail.com>
  ~
  ~ SPDX-License-Identifier: MIT
  -->
<script src="generate-tweet.js"></script>
<script>
var apiKey = (await $.get("/api-keys/like-tweet-generator/yt-api-key.txt",
    function(data) {
        console.log("Successfully got the API key.");
    })).trim()
</script>
<script>
let vidurl = window.location.hash;
if (vidurl)
    open_tweet_dialog(vidurl, apiKey, false);
</script>

# Like Tweet Generator

Tweet that you liked a YouTube video. Just paste the URL below and click Tweet me!

<div markdown="0">
<input id="yt-url-textbox" />
<a href="javascript:open_tweet_dialog(document.getElementById('yt-url-textbox').value,apiKey)" markdown="0"><img src="tweetme-button.png" style="width:75px;height:25px;vertical-align:middle;" /></a>
</div>

Alternatively, drag this to your bookmarks (or right-click and select "bookmark this link"): <a href="javascript:(function(){window.open('https://nathaniel.fitzenrider.com/like-tweet-generator/#vidurl='+encodeURIComponent(document.URL))})();">Tweet me!</a>

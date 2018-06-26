// ==UserScript==
// @name            Updated YouTube Tweet Button
// @author          NateROCKS112
// @description     Changes the YouTube share button in the video player to support Twitter's 280 characters.
// @namespace       nfitzen.keybase.pub/userscripts
// @match           http*://www.youtube.com/watch?v=*
// @version         0.1
// @updateURL       https://nfitzen.keybase.pub/like-tweet-generator/generate-tweet.user.js
// @downloadURL     https://nfitzen.keybase.pub/like-tweet-generator/generate-tweet.user.js
// @noframes
// ==/UserScript==

(function(){
'use strict';
function addJQuery(callback) {
  var script = document.createElement("script");
  script.setAttribute("src", "//ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js");
  script.addEventListener('load', function() {
    var script = document.createElement("script");
    script.textContent = "window.jQ=jQuery.noConflict(true);(" + callback.toString() + ")();";
    document.body.appendChild(script);
  }, false);
  document.body.appendChild(script);
}

function main() {
    jQ("a.ytd-button-renderer")
        .bind('click', (function(){
            console.log('Managed to detect the click :/');
            jQ("a[title='Twitter'].share-target").attr("href", "javascript:window.open('https://nfitzen.keybase.pub/like-tweet-generator/?vidurl=' + escape(document.URL));");
        }));
}

addJQuery(main);

}
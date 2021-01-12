/*
 * SPDX-FileCopyrightText: 2018-2021 Nathaniel Fitzenrider <nathaniel.fitzenrider@gmail.com>
 *
 * SPDX-License-Identifier: MIT
 */

// ==UserScript==
// @name            Updated YouTube Tweet Button
// @author          NateROCKS112
// @description     Changes the YouTube share button in the video player to support Twitter's 280 characters.
// @namespace       https://nathaniel.fitzenrider.com/userscripts
// @match           https://www.youtube.com/watch?v=*
// @license         MIT
// @version         0.1.0
// @require         https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js
// @updateURL       https://nathaniel.fitzenrider.com/like-tweet-generator/generate-tweet.user.js
// @downloadURL     https://nathaniel.fitzenrider.com/like-tweet-generator/generate-tweet.user.js
// @noframes
// ==/UserScript==

(function(){
"use strict";

function main() {
        $("a.ytd-button-renderer")
                .bind('click', (function(){
                        console.log('Managed to detect the click :/');
                        $("a[title='Twitter'].share-target").attr("href", "javascript:window.open('https://nathaniel.fitzenrider.com/like-tweet-generator/?vidurl=' + escape(document.URL));");
                }));
}

main();

});

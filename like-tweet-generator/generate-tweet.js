/*
 * SPDX-FileCopyrightText: 2018-2021 Nathaniel Fitzenrider <nathaniel.fitzenrider@gmail.com>
 *
 * SPDX-License-Identifier: MIT
 */

function open_tweet_dialog(videoURL, apiKey, newtab = true) {
    var videoId = videoURL.match(/(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/user\/\S+|\/ytscreeningroom\?v=))([\w\-]{10,12})\b/)[1];
    $.ajax({
        url: "https://www.googleapis.com/youtube/v3/videos?id=" + videoId + "&key="+ apiKey + "&fields=items(snippet(title))&part=snippet",
        dataType: "jsonp",
        success: function(data){
            let title = data.items[0].snippet.title;
            if (title.length > 231) title = title.slice(0, 229) + "...";
            let tweetURL = "https://twitter.com/intent/tweet?text=I+liked+a+%40YouTube+video+https%3A%2F%2Fyoutu.be%2F" + videoId + "+" + encodeURIComponent(title);
            if (newtab === true) {
                window.open(tweetURL);
            } else {
                window.location = tweetURL;
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert (textStatus, + ' | ' + errorThrown);
        }
    });
}

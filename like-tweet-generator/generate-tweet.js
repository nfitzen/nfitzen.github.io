function open_tweet_dialog(videoURL, apiKey, newtab = true) {
    let idregexp = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i;
    let videoId = idregexp.match(videoURL);
    videoId = videoId[0] ? videoId[0]:null;
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

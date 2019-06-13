function ajax_request() {
    $.ajax({
        url: "https://cors-anywhere.herokuapp.com/" + $("input#url").val() ,
        type: 'GET',
        dataType: 'html',
        success: function (data) {
            var headline = $(data).find('div.videoPlayer').attr("id");
            var ting = headline.split("_");
            document.getElementById("content").innerHTML = "ID catálogo: " + ting[1];
            document.getElementById("content2").innerHTML = "ID video: " + ting[2];
            /*$("source#videosrc").attr("src", "https://miteleooyala-vh.akamaihd.net/i/" + ting[2] + "/,DOcJ-FxaFrRg4gtDEwOjFsaTowODE7WX,DOcJ-FxaFrRg4gtDEwOm84OjBrOz0bxa,DOcJ-FxaFrRg4gtDEwOjEwYjowODE7je,DOcJ-FxaFrRg4gtDEwOjJjcTowODE7R4,.csmil/index_2_av.m3u8?null=0&hdntl=exp=1560305295~acl=%2fi%2f9yOXl4aDE6bYacKb5FtcCbYZUmNI96SY%2f,DOcJ-FxaFrRg4gtDEwOjFsaTowODE7WX,DOcJ-FxaFrRg4gtDEwOm84OjBrOz0bxa,DOcJ-FxaFrRg4gtDEwOjEwYjowODE7je,DOcJ-FxaFrRg4gtDEwOjJjcTowODE7R4,.csmil%2f*~data=hdntl~hmac=0c5d6b0d7ef48605be0df09516f7dae3c15d3a12409b36de92f5cc0de5e23bb6");*/
            player.src("https://miteleooyala-vh.akamaihd.net/i/" + ting[2] + "/,DOcJ-FxaFrRg4gtDEwOjFsaTowODE7WX,DOcJ-FxaFrRg4gtDEwOm84OjBrOz0bxa,DOcJ-FxaFrRg4gtDEwOjEwYjowODE7je,DOcJ-FxaFrRg4gtDEwOjJjcTowODE7R4,.csmil/index_2_av.m3u8?null=0&hdntl=exp=1560305295~acl=%2fi%2f9yOXl4aDE6bYacKb5FtcCbYZUmNI96SY%2f,DOcJ-FxaFrRg4gtDEwOjFsaTowODE7WX,DOcJ-FxaFrRg4gtDEwOm84OjBrOz0bxa,DOcJ-FxaFrRg4gtDEwOjEwYjowODE7je,DOcJ-FxaFrRg4gtDEwOjJjcTowODE7R4,.csmil%2f*~data=hdntl~hmac=0c5d6b0d7ef48605be0df09516f7dae3c15d3a12409b36de92f5cc0de5e23bb6")
            
        }
    });
}

function verify() {
    $.ajax({
        url: "https://cors-anywhere.herokuapp.com/" + $("input#url").val(),
        type: 'GET',
        dataType: 'html',
        success: function (data) {
            var match_title = data.match(/<title>(.*?)<\/title>/);
            var URL_Title = match_title[1];
            document.getElementById("title").innerHTML = URL_Title
        }

    });
}

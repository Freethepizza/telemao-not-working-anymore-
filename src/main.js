function ajax_request() {
    var url = $("input#url").val();
    var hostname = (url.split('/')[2]);
    if (hostname=="www.atresplayer.com" ){
        var id = url.substr(url.length - 25);
      $.ajax({
        url: "https://bypasscors.herokuapp.com/api/?url=https://api.atresplayer.com/client/v1/player/video/" + id,
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            console.log(JSON.stringify(data.sources[0].src));
            player.src(JSON.stringify(data.sources[0].src));
            
            
            
        }
    });
    }
    else if(hostname=="www.mitele.es"){
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
            player.src("https://miteleooyala-vh.akamaihd.net/i/" + ting[2] + "/,DOcJ-FxaFrRg4gtDEwOjFsaTowODE7WX,DOcJ-FxaFrRg4gtDEwOm84OjBrOz0bxa,DOcJ-FxaFrRg4gtDEwOjEwYjowODE7je,DOcJ-FxaFrRg4gtDEwOjJjcTowODE7R4,.csmil/index_2_av.m3u8?null=0&hdntl=exp=1560305295~acl=%2fi%2f9yOXl4aDE6bYacKb5FtcCbYZUmNI96SY%2f,DOcJ-FxaFrRg4gtDEwOjFsaTowODE7WX,DOcJ-FxaFrRg4gtDEwOm84OjBrOz0bxa,DOcJ-FxaFrRg4gtDEwOjEwYjowODE7je,DOcJ-FxaFrRg4gtDEwOjJjcTowODE7R4,.csmil%2f*~data=hdntl~hmac=0c5d6b0d7ef48605be0df09516f7dae3c15d3a12409b36de92f5cc0de5e23bb6");
            
            
            
            
        }
    });
    }
    
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

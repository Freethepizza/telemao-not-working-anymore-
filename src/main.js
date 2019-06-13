function ajax_request() {
    $.ajax({
        url: "https://cors-anywhere.herokuapp.com/https://www.mitele.es/series-online/brigada-costa-del-sol/5cfba6688bd4e51f0d8b46a3/player/",
        type: 'GET',
        dataType: 'html',
        success: function (data) {
            var headline = $(data).find('div.videoPlayer').attr("id");
            var ting = headline.split("_");
            document.getElementById("content").innerHTML = "ID catálogo: " + ting[1];
            document.getElementById("content2").innerHTML = "ID video: " + ting[2];
            
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

const SnippetUrl = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyCTWC75i70moJLzyNh3tt4jzCljZcRkU8Y&type=video&part=snippet&maxResults=2&q='
const StatisticUrl = 'https://www.googleapis.com/youtube/v3/videos?part=statistics&key=AIzaSyCTWC75i70moJLzyNh3tt4jzCljZcRkU8Y&id=';

var VideoModel = function (item) {
    this.id = item.id.videoId,
        this.title = item.snippet.title,
        this.link = GetYouTubeLink(this.id),
        this.preview = item.snippet.thumbnails.high.url,
        this.description = item.snippet.description,
        this.author = item.snippet.channelTitle,
        this.publishedDate = item.snippet.publishedAt
};

var GetYouTubeLink = function (videoId) {
    let baseUrl = 'https://www.youtube.com/watch?v=';
    return baseUrl + videoId;
}

var searchVideo = function () {
    const SnippetUrl = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyCTWC75i70moJLzyNh3tt4jzCljZcRkU8Y&type=video&part=snippet&maxResults=15&q='
    var searchText = document.getElementById('searchBox').value;
    if (searchText === '') {
        alert('Search Box Can not be Blank ');
    } else {
        let url = SnippetUrl + searchText;
        document.getElementById('insideDiv').innerHTML = '';
        GetVideoList(url);
    }
};

var GetVideoList = function (url) {
    let responsePromise = GetJsonResponse(url);
    responsePromise.then((data) => DisplayVideoInfo(GetViewCounts(makeVideoList(data))));
}

const GetJsonResponse = async (url) => {
    const response = await fetch(url);
    var myJson = await response.json();
    return myJson;
}

var makeVideoList = function (data) {
    let videoList = [];
    data.items.forEach(function (item) {
        videoList.push(new VideoModel(item));
    });
    return videoList;
}

let GetViewCounts = function (videoList) {
    let allId = videoList.reduce((result,video) => {return result+video.id+','},'');
    allId = allId.slice(0, -1);
    let viewCount = [];
    let responsePromise = GetJsonResponse(StatisticUrl + allId);
    responsePromise.then((data)=> {
        videoList.forEach((video)=>{
            data.items.forEach((item)=>{
                if(video.id === item.id) {
                    video.viewCount = item.statistics.viewCount;
                }        
            })
        })
    });
    console.log(videoList);
    return videoList;
};


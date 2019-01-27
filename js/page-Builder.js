document.title = 'Youtube';

var containerDiv = document.createElement('div');
containerDiv.setAttribute('id', 'containerDiv');
containerDiv.setAttribute('class', 'container');

document.body.append(containerDiv);

var topTable = document.createElement('table');
topTable.setAttribute('id', 'topTable');
topTable.setAttribute('class', 'table-borderless topTable')

var topTableTitleTr = topTable.insertRow(0);
var titleCell = topTableTitleTr.insertCell(0);

var h = document.createElement("H1");
var t = document.createTextNode("Youtube");
h.appendChild(t);

titleCell.appendChild(h);

var topTableTr = topTable.insertRow(1);
var cell1 = topTableTr.insertCell(0);
cell1.setAttribute('id', 'cell1');
var cell2 = topTableTr.insertCell(1);
cell2.setAttribute('id', 'cell2');

var searchBox = document.createElement('input');
searchBox.setAttribute('id', 'searchBox');
searchBox.setAttribute('class', 'form-control searchBox');

var searchButton = document.createElement('button');
searchButton.setAttribute('class', 'btn-default');
searchButton.setAttribute('id', 'searchButton');
searchButton.setAttribute('onclick', 'searchVideo()');


searchButton.innerHTML = 'Search Youtube';

cell1.appendChild(searchBox);
cell2.appendChild(searchButton);

document.getElementById('containerDiv').append(topTable);

var contentDiv = document.createElement('div');
contentDiv.setAttribute('id', 'contentDiv');
contentDiv.setAttribute('class', 'Row contentDiv scrollmenu');

document.getElementById('containerDiv').append(contentDiv);

var prevButton = document.createElement('button');
prevButton.setAttribute('class', 'btn-default col-2');
prevButton.setAttribute('id', 'prevButton');
prevButton.setAttribute('onclick', 'prevVideo()');


prevButton.innerHTML = 'Search Youtube';

var insideDiv = document.createElement('div');
insideDiv.setAttribute('id', 'insideDiv');
insideDiv.setAttribute('class', 'insideDiv col-8');

document.getElementById('contentDiv').appendChild(insideDiv);

var DisplayVideoInfo = (videoList) => {
    let videoCount = 0;
    videoList.forEach((video) => {
        videoCount++;
        var cardDiv = document.createElement('div');
        cardDiv.setAttribute('id', 'cardDiv-' + videoCount);
        cardDiv.setAttribute('class', 'card cardDiv col-5');
        document.getElementById('insideDiv').append(cardDiv);

        var infoTable = document.createElement('table');
        var nameRow = infoTable.insertRow(0);
        nameRow.setAttribute('id', 'nameRow-' + videoCount);
        nameRow.setAttribute('class', 'nameRow')
        var nameCell = nameRow.insertCell(0);
        var videoTitle = document.createElement("H6");
        var title = document.createTextNode(video.title);
        videoTitle.appendChild(title);
        nameCell.append(videoTitle);
        var previewRow = infoTable.insertRow(1);
        var previewCell = previewRow.insertCell(0);
        var imageTag = document.createElement('img');
        imageTag.setAttribute('id', 'videoPreview');
        imageTag.setAttribute('class', 'videoPreview');
        imageTag.setAttribute('src', video.preview);
        imageTag.setAttribute('alt', video.title);
        previewCell.append(imageTag);

        var descriptionRow = infoTable.insertRow(2);
        descriptionRow.setAttribute('id', 'descriptionRow-' + videoCount);
        descriptionRow.setAttribute('class', 'descriptionRow')
        var descriptionCell = descriptionRow.insertCell(0);
        var descriptionP = document.createElement("p");
        var description = document.createTextNode(video.description);
        descriptionP.appendChild(description);
        descriptionCell.insertAdjacentHTML('beforeend', 'Description : ');
        descriptionCell.appendChild(descriptionP);

        var publishedDateRow = infoTable.insertRow(3);
        publishedDateRow.setAttribute('id', 'publishedDateRow-' + videoCount);
        publishedDateRow.setAttribute('class', 'publishedDateRow')
        var publishedDateCell = publishedDateRow.insertCell(0);
        var publishedDateP = document.createElement("p");
        var publishedDate = document.createTextNode(video.publishedDate);
        publishedDateP.appendChild(publishedDate);
        publishedDateCell.insertAdjacentHTML('beforeend', 'Published Date : ');
        publishedDateCell.appendChild(publishedDateP);

        var authorRow = infoTable.insertRow(4);
        authorRow.setAttribute('id', 'authorRow-' + videoCount);
        authorRow.setAttribute('class', 'authorRow')
        var authorCell = authorRow.insertCell(0);
        var authorP = document.createElement("p");
        var author = document.createTextNode(video.author);
        authorP.appendChild(author);
        authorCell.insertAdjacentHTML('beforeend', 'Author : ');
        authorCell.appendChild(authorP);

        var viewCountRow = infoTable.insertRow(5);
        viewCountRow.setAttribute('id', 'viewCountRow-' + videoCount);
        viewCountRow.setAttribute('class', 'viewCountRow')
        var viewCountCell = viewCountRow.insertCell(0);
        var viewCountP = document.createElement("p");
        console.log(video.viewCount);
        var viewCount = document.createTextNode(video.viewCount);
        viewCountP.appendChild(viewCount);
        viewCountCell.insertAdjacentHTML('beforeend', 'Views : ');
        viewCountCell.appendChild(viewCountP);

        document.getElementById('cardDiv-' + videoCount).appendChild(infoTable);
    });
}
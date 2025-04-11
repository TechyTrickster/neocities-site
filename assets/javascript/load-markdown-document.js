var getMarkDownPage = (pageName, target) => {
    var markDownPageRequest = new Request(pageName)    

    fetch(markDownPageRequest)
        .then((response) => response.text())
        .then((text) => {
            markDownDecode(text, target)
    });

    
}


var markDownDecode = (text, targetID) => {
    var pageContent = text;
    var converter = new showdown.Converter({
        metadata: true
    });
    converter.setFlavor('github')
    var htmlData = converter.makeHtml(pageContent);
    document.getElementById(targetID).innerHTML = htmlData;
    var metaData = converter.getMetadata()
    console.log(htmlData)
    console.log(pageContent)
    return metaData
}


var getHeroContent = (pageName, target) => {
    var markDownPageRequest = new Request(pageName)    

    fetch(markDownPageRequest)
        .then((response) => response.text())
        .then((text) => {
            metaData = markDownDecode(text, target)
            document.title = metaData['title']
    });
}



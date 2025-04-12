var getMarkDownPage = (pageName, target) => {
    var markDownPageRequest = new Request(pageName)    

    fetch(markDownPageRequest)
        .then((response) => response.text())
        .then((text) => {
            markDownApply(text, target)
    });

    
}


var markDownApply = (text, targetID) => {
    var metaData, data = markDownFullDecode(text)
    document.getElementById(targetID).innerHTML = data;    
    console.log(htmlData)
    console.log(pageContent)
    return metaData
}


var markDownFullDecode = (text) =>
{
    var pageContent = text;
    var converter = new showdown.Converter({
        metadata: true
    });
    converter.setFlavor('github')
    var htmlData = converter.makeHtml(pageContent);    
    var metaData = converter.getMetadata()
    console.log(htmlData)
    console.log(pageContent)
    console.log("test")
    console.log(metaData)
    console.log("end")
    return metaData, htmlData
}


var getHeroContent = (pageName, target) => {
    var markDownPageRequest = new Request(pageName)    

    fetch(markDownPageRequest)
        .then((response) => response.text())
        .then((text) => {
            metaData = markDownApply(text, target)
            document.title = metaData['title']
    });
}



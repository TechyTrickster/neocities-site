var getMarkDownPage = (pageName, target) => {
    var markDownPageRequest = new Request(pageName)    

    fetch(markDownPageRequest)
        .then((response) => response.text())
        .then((text) => {
            markDownApply(text, target)
    });

    
}


var markDownApply = (text, targetID) => {
    var metaDatas, htmlData = markDownFullDecode(text)
    document.getElementById(targetID).innerHTML = htmlData;    
    console.log("apply start")
    console.log(metaDatas)
    console.log(htmlData)
    console.log("apply end")
    return metaDatas
}


var markDownFullDecode = (text) =>
{
    var pageContent = text;
    var converter = new showdown.Converter({
        metadata: true
    });
    converter.setFlavor('github')
    var htmlData = converter.makeHtml(pageContent);    
    var meta = converter.getMetadata()
    console.log("decode start")
    console.log(text)
    console.log(htmlData)
    console.log(meta)
    console.log("decode end")
    return meta, htmlData
}


var getHeroContent = (pageName, target) => {
    var markDownPageRequest = new Request(pageName)    

    fetch(markDownPageRequest)
        .then((response) => response.text())
        .then((text) => {
            var metaData = markDownApply(text, target)
            document.title = metaData['title']
    });
}



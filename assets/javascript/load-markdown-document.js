var getMarkDownPage = (pageName, target) => {
    var markDownPageRequest = new Request(pageName)    

    fetch(markDownPageRequest)
        .then((response) => response.text())
        .then((text) => {
            markDownApply(text, target)
    });

    
}


var preprocess = (originalText, metaData) =>
{
    var buffer = originalText
    console.log("preprocess")
    console.log(metaData)

    for(const prop in metaData)
    {        
        try {
            target = "`=this." + prop + '`'
            console.log(target)
            console.log(metaData)
            console.log(prop)
            console.log(metaData[prop])
            buffer = buffer.replaceAll(target, metaData[prop])
            console.log(buffer)
        }
        catch(error)
        {console.log(error)}
        
    }

    const output = buffer
    return output
}


var markDownApply = (text, targetID) => {
    var [metaDatas, htmlData] = markDownFullDecode(text)
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
    var converterMeta = new showdown.Converter({metadata: true});
    var converter = new showdown.Converter({metadata: true});

    converter.setFlavor('github'); 
    
    
    var htmlDataUnused = converterMeta.makeHtml(pageContent);    
    var metaInitial = converterMeta.getMetadata();
    console.log("meta data");
    console.log(metaInitial);
    var processedMarkdown = preprocess(pageContent, metaInitial);

    var htmlData = converter.makeHtml(processedMarkdown);
    htmlData = htmlData.replaceAll("#", "")
    var meta = converter.getMetadata();

    console.log("decode start")
    console.log(text)
    console.log(htmlData)
    console.log(meta)
    console.log("decode end")
    return [meta, htmlData]
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



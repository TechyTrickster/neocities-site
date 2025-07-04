var getMarkDownPage = (pageName, target) => {
    var markDownPageRequest = new Request(pageName)    

    fetch(markDownPageRequest)
        .then((response) => response.text())
        .then((text) => {
            markDownApply(text, target)
    });

    
}


var preprocess = async (originalText, metaData) =>
{
    var buffer = originalText

    //process commit info
    var hasGitLink = metaData['link'].search("git") != -1
    if(hasGitLink)
    {
        var response = await fetch('https://api.github.com/repos/https://github.com/TechyTrickster/neocities-site/commits?per_page=1')
        var data = await response.json()[0]
        console.log(data)        
    }

    //handle metadata
    for(const prop in metaData)
    {        
        try {
            target = "`=this." + prop + '`'
            buffer = buffer.replaceAll(target, metaData[prop])
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
    var processedMarkdown = preprocess(pageContent, metaInitial);

    var htmlData = converter.makeHtml(processedMarkdown);
    htmlData = htmlData.replaceAll("#", "")
    var meta = converter.getMetadata();
    console.log(htmlData)
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



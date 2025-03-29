var getMarkDownPage = (pageName, target) => {
    var markDownPageRequest = new Request(pageName)    

    fetch(markDownPageRequest)
        .then((response) => response.text())
        .then((text) => {
            var pageContent = text;
            var converter = new showdown.Converter({
                metadata: true
            });
            converter.setFlavor('github')
            var htmlData = converter.makeHtml(pageContent);
            document.getElementById(target).innerHTML = htmlData;
            console.log(htmlData)
            console.log(pageContent)
        });        
}



// import fetch from "node-fetch";
const fs = require('fs');
 const { pages,titlemain } = require('./Data/teste.json');


 console.info(pages[0].img[0].path);

class MakeAll {
    constructor(title ,data) {
        this.title = title;
        this.data = data;
    }
    
    beginPage() {
        const getPath = this.data[0].img[0].path;
        const template = `
<div align=center ><h1>${this.title}</h1>

<img width="200px" src='${ getPath }'>
        
</div>`
        return template;
    }
    index() {
        
        let startDiv = '<ol>';
        let getData = this.data;

            getData.forEach(smallData => {
                startDiv += `<li> <a href="#${smallData.link}"> ${smallData.title}</a> •</li>`
            });

        let finishDiv = '</ol>';
        let indexTemplate = startDiv += finishDiv;
        return indexTemplate;
    }

    body() {

        let startDiv = '<main>';
        let getData = this.data;

            getData.forEach(smallData => {
                startDiv += `<div>
                            <h3>${ smallData.title }</h3>
                            <img width="200px" src='${ this.data[0].img[0].path }'>
                            <p> ${ smallData.content }</p>
                            </div>`;
            });

        let finishDiv = '</main>';
        let indexTemplate = startDiv += finishDiv;
        return indexTemplate;

   
    }
}

let confectionPage = new MakeAll(titlemain, pages);
let init = confectionPage.beginPage();
let index  = confectionPage.index();
let body  = confectionPage.body();
console.log(init);



fs.writeFile('./README.md', init , function (error) {

    if (error) { throw error };

    console.log("Criado com sucesso");
});
fs.appendFile('./README.md', index , function (error) {

    if (error) { throw error };

    console.log("inserindo index");
});
fs.appendFile('./README.md', body , function (error) {

    if (error) { throw error };

    console.log("inserindo body");
});
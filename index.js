// import fetch from "node-fetch";
const fs = require('fs');
 const { pages,titlemain } = require('./Data/data.json');


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
        
</div>



Alterações | Data | Autor
:---------: | :------: | :------:
Emissão Inicial | 26/03/2022 | Nome do Desenvolvedor




`
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

        let startDiv;
        let newData = this.data;
        let counter = 1;

            newData.forEach(smallData => {
                startDiv += `<div>
                            <h3>${ smallData.title }</h3>
                            <img width="200px" src='${ smallData.img[0].path }'>
                            <div> ${ smallData.content }</div>
                            </div>`;
                counter++;
            });

        // let finishDiv = '</>';
        let indexTemplate = startDiv;
        return indexTemplate;

    }
}

let confectionPage = new MakeAll(titlemain, pages);
let init = confectionPage.beginPage();
let index  = confectionPage.index();
let corpo = confectionPage.body();
console.log(init);



fs.writeFile('./README.md', init , function (error) {

    if (error) { throw error };

    console.log("Create start of page");
});

fs.appendFile('./README.md', index , function (error) {

    if (error) { throw error };

    console.log("Inserting index");
});



    fs.appendFile('./README.md', corpo , function (error) {
    
        if (error) { throw error };
    
        console.log(" Create body of page");
    });

    




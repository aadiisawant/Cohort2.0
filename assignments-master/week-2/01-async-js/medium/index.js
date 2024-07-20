const fs = require('fs');

let content;
let trimmedContent="";
//read data from file
function dataFromPromise(){
    let data = new Promise((resolve, reject) => {
        fs.readFile('Read-Write-file.txt', "utf-8",(err,data)=>{
            content=data;
            resolve(data)
        })
    })
    return data;
}

//Process the file, trim n write
async function setContent(){
    content = await dataFromPromise();
    console.log(content);
    trimmedContent = content.split(" ")
                    .filter((str)=> str.length !==0)
                    .join(" ");

    await writeToFile(trimmedContent);                
}

//write to file
function writeToFile(data){
    return new Promise((res,rej) => {
        fs.writeFile('Read-Write-file.txt',data, (err)=>{
            if(err){
                rej(err);
            }{
            console.log("content wrote");
            res();
            }
        })
    })
}

setContent()

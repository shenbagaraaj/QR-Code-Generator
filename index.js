import inquirer from "inquirer";
import fs from "fs";
import qr from "qr-image";

inquirer.prompt([
    {
        message:"Type in your URL",
        name : "URL"
    }
]).then((answers)=>{
    const url = answers.URL;
    var qr_png = qr.image(url);
    qr_png.pipe(fs.createWriteStream("qr_img.png"));
    fs.writeFile("URL.txt",url,(err)=>{
        if(err) throw err;
        console.log("Process successfully completed. Check the URL.txt")
    })

}).catch((error)=>{
    if(error.isItyError){
        console.error("Interactive prompts are not rendered");
    }
});
const fs = require("fs");

fs.readFile("file.txt", (err, data) => {
    if (err) throw err;
    console.log(data);
    fs.unlink("file.txt", (unlinkErr) =>{
        if(unlinkErr) throw inlinkErr;
        console.log("Arquivo  excluído com sucesso!")
    } )
});

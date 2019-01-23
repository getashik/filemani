const express = require('express');
const app = new express();
const fs = require('fs');
const testFolder = './files';
const meta =require('./js/meta');



app.listen(3030, () => { console.log("server  is running in port 3030") });

app.get("/",(req,res)=>{

  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
  res.write('<input type="file" name="filetoupload"><br>');
  res.write('<input type="submit" value="Sub....">');
  res.write('</form>');
  return res.end();

});


fs.readdir(testFolder, (err, files) => {
    files.forEach(file => {
       meta.dispname();
        console.log(file);
        fs.readFile("./files/"+file, 'utf8', function(err, contents) {
            console.log(contents);
        });
      
    });
  })
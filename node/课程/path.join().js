const path = require('path')
const fs = require('fs')

const pathstr = path.join('/a','/b/c','../','./d','e')
console.log(pathstr);//\a\b\d\e

fs.readFile(path.join(__dirname,'/files/1.txt'),'utf8',function(err,dataStr){
    if(err){
        return console.log(err.message);
    }
    console.log(dataStr);
}) 
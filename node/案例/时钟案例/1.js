const fs = require('fs')
const path = require('path')

//定义正则表达式，分别匹配
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/

//读取
fs.readFile(path.join(__dirname,'/files/index.html'),'utf8',function(err,dataStr){
    if(err) return console.log('文件读取失败！' + err.message)

    resolveCSS(dataStr)
    resolveJS(dataStr)
    resolveHTML(dataStr)
})

function resolveCSS(htmlStr){
    const r1 = regStyle.exec(htmlStr)
    //将提取出来的样式字符串进行替换操作
    const newCSS = r1[0].replace('<style>','').replace('</style>','')
    fs.writeFile(path.join(__dirname,'./clock/index.css'),newCSS,function(err){
        if(err) return console.log('写入失败' + err.message);
        console.log('写入成功');
    })
}
function resolveJS(htmlStr){
    const r2 = regStyle.exec(htmlStr)
    //将提取出来的样式字符串进行替换操作
    const newJS = r2[0].replace('<script>','').replace('</script>','')
    fs.writeFile(path.join(__dirname,'./clock/index.js'),newJS,function(err){
        if(err) return console.log('写入失败' + err.message);
        console.log('写入成功');
    })
}
function resolveHTML(htmlStr){
    htmlStr.replace(regStyle,'<link rel="stylesheet" href="./index.css" />').replace(regScript,'<script src="./index.js"></script>')
    fs.writeFile(pass.join(__dirname,'./clock/index.html'),newHTML,function(err){
        if(err) return log('写入失败' + err.message)
        console.log('写入成功');
    })
}
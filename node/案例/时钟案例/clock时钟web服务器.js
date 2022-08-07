//1.导入http模块
const http = require('http')
//2.导入fs模块
const fs = require('fs')
//3.导入path模块
const path = require('path')

//2.1创建web服务器
const server = http.createServer()
//2.2监听
server.on('request',(req,res) => {
    //3.1获取到客户端请求的URL地址
    const url = req.url
    //3.2把请求的URL地址映射为具体文件的存放路径
    //const fpath = path.join(__dirname,url)
    //5.1预定义一个空白文件存放路径
    let fpath = ''
    if(url === '/') {
        fpath = path.join(__dirname,'./files/index.html')
    } else {
        fpath = path.join(__dirname,'/files',url)
    }
    //4.1根据“映射”过来的文件路径读取文件的内容
    fs.readFile(fpath,'utf8',(err,dataStr) => {
        //4.2读取失败，向客户端返回固定内容
        if(err) return res.end('404 Not Foundl;')
        //4.3读取成功，将读取到的内容响应给客户端
        res.end(dataStr)       
    })
})
//2.3启动
server.listen(80,() => {
    console.log('running at http://127.0.0.1');
})
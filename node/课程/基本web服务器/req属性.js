//req访问客户端相关的数据或属性
//res访问服务端相关的数据或属性
//1.导入http模块
const http = require('http')
//2.创建web服务器
const server = http.createServer()
server.on('request',(req,res)=>{
    //req.url是客户端请求的URL地址
    const url = req.url
    //req.method是客户端请求的method类型
    const method = req.method
    const str = 'Your request url is${url}, and request method is ${method}'
    console.log(str);
    //调用res.setHeader方法，设置Content-Type响应头，解决中文乱码问题
    res.setHeader('Content-Type','text/html; charset=utf-8')
    //调用res.end()方法，向客户端响应一些内容
    res.end(str)
})
server.listen(80,()=>{
    console.log('running at http://127.0.0.1:8080');
})
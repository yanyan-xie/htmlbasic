//1.导入http模块
const http = require('http')
//2.创建web服务器
const server = http.createServer()
//3.为服务器绑定request事件，监听客户端请求
server.on('request',function(req,res){
    console.log('someone visit our web');
})
//4.启动服务器
server.listen(8080,function(){
    console.log('server running at http://127.0.0.1:8080');
})
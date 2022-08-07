//1.导入express
const express = require('express')
//2.创建web服务器
const app = express()

//4.监听客户端的get和post请求，并向客户端响应具体的内容
app.get('/',(req,res) =>{
    //调用express提供的res.send()方法，向客户端响应一个json对象
    res.send({ name: 'tom', age: 20, gender: '男'})
    //req.query()可获取到客户端发送过来的查询参数，默认情况下，req.query是一个空对象
})
app.post('/',(req,res) =>{
    //调用express提供的res.send()方法，向客户端响应一个文本字符串
    res.send('请求成功')
})
//3.启动web服务器
app.listen(80 , ()=>{
    console.log('express server running at http://127.0.0.1');
})
//这里的:id是一个动态参数
// app.get('/user/:id',(req,res)=>{
//     //req.params是动态匹配到的URL参数，默认也是一个空对象
//     console.log(req.params);
//     res.send(req.params)
// })
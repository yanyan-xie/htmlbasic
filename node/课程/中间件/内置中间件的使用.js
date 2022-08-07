const express = require('express')
const app = express()

//注意：除了错误中间件，其余全在路由前配置
//通过express.json()这个中间件解析表单中的json格式的数据
app.use(express.json())
//通过express.urlencoded()这个中间件来解析表单中url-encoded格式的数据
app.use(express.urlencoded({ extended:false }))

app.post('/',(req,res)=>{
    //在服务器，可以使用req.body这个属性，来接收客户端发送过来的请求体数据
    //默认情况系，如果不配置解析表单数据的中间件，则req.body默认等于undefind
    console.log(req.body);
    res.send('ok')
})

app.post('/user',(req,res)=>{
    //在服务器端......url-encoded格式的数据
    console.log(req.body);
    res.send('user')
})

app.listen(80,()=>{
    console.log('express server running at http://127.0.0.1');
})
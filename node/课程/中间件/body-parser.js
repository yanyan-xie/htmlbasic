const express = require('express')
const app = express()

//导入解析表单数据的中间件body-parser
const parser = require('body-parser')
//使用app.use使用注册中间件
app.use(parser.urlencoded({ extended:false }))

app.get('/',(req,res)=>{
    res.send('ok')
})

app.post('/user',(req,res)=>{
    console.log(req.body);
    res.send('user')
})

app.listen(80,()=>{
    console.log('express server running at http://127.0.0.1');
})
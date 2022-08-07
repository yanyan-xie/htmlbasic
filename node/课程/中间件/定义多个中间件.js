const express = require('express')
const app = express()
//中间件是按顺序执行的
//第一个中间件
app.use((req,res,next)=>{
    console.log('调用了第一个全局中间件');
    next()
})
//第二个中间件
app.use((req,res,next)=>{
    console.log('调用了第二个全局中间件');
    next()
})

app.get('/',(req,res)=>{
    res.send('jjjjj'+ req.startTime)
})

app.get('/user',(req,res)=>{
    res.send('user'+ req.startTime)
})

app.listen(80,()=>{
    console.log('express server running at http://127.0.0.1');
})
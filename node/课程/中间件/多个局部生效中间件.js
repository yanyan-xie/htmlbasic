const express = require('express')
const app = express()


//1.定义中间件
const mw1 = (req,res,next)=>{
    console.log('调用了第一个局部生效中间件');
    next()
}
const mw2 = (req,res,next)=>{
    console.log('调用了第二个局部生效中间件');
    next()
}
//也可以   [mw1,mw2]
app.get('/',mw1,mw2,(req,res)=>{
    res.send('jjjjj')
})
app.get('/user',(req,res)=>{
    res.send('lllll')
})

app.listen(80,()=>{
    console.log('express server running at http://127.0.0.1');
})
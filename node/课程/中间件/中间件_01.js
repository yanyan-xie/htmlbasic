const express = require('express')
const app = express()

//定义一个最简单的中间件
const mw = function (req,res,next){
    console.log('这是最简单的中间件');
    //把流转关系，转交给下一个中间件或路由
    next()
}

//将mw注册为全局生效的中间件
app.use(mw)
//定义全局中渐渐地简化模式
// app.use((req,res,next)=>{
//     console.log('111');
//     next()
// })

app.get('/',(req,res)=>{
    res.send('jjjjj')
})

app.get('/user',(req,res)=>{
    res.send('user')
})

app.listen(80,()=>{
    console.log('express server running at http://127.0.0.1');
})
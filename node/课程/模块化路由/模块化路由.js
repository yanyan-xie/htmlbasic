const express = require('express')
const app = express()

//1.导入路由模块
const router = require('./router')
//2.注册路由模块
app.use('/api',router)//api作用是访问前加前缀
//app.use()函数的作用就是来注册全局中间件
app.listen(80,()=>{
    console.log('express server running at http://127.0.0.1');
})
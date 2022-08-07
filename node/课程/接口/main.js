const express = require('express')
const app = express()

//解析数据中间件
app.use(express.urlencoded({ extended:false }))

// 必须在配置 cors 中间件之前，配置 JSONP 的接口
app.get('/api/jsonp', (req, res) => {
    // TODO: 定义 JSONP 接口具体的实现过程
    // 1. 得到函数的名称
    const funcName = req.query.callback
    // 2. 定义要发送到客户端的数据对象
    const data = { name: 'zs', age: 22 }
    // 3. 拼接出一个函数的调用
    const scriptStr = `${funcName}(${JSON.stringify(data)})`
    // 4. 把拼接的字符串，响应给客户端
    res.send(scriptStr)
  })

//配置cors中间件解决跨域问题
const cors = require('cors')
app.use(cors())

const router = require('./apiRouter')
app.use('/api',router)



//4.启动服务器
app.listen(80,function(){
    console.log('server running at http://127.0.0.1');
})
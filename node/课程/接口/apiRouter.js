const { application } = require('express')
const express = require('express')
const router = express.Router()

//挂载对应路由

//定义get接口
router.get('/get',(req,res)=>{
    //通过req.query获取客户端通过查询字符串，发送到服务器的数据
    const query = req.query
    //通过调用res.send()方法，向客户端响应处理结果
    res.send({
        status:0,//0表示处理成功，1表示处理失败
        msg:'get 请求成功',//状态的描述
        data:query//需要响应给客户端的数据
    })
})

//定义post接口
router.post('/post',(req,res)=>{
    //通过req.body获取客户端请求体，发送到服务器的URL-encoded数据
    const body = req.body
    //通过调用res.send()方法，向客户端响应处理结果
    res.send({
        status:0,//0表示处理成功，1表示处理失败
        msg:'post 请求成功',//状态的描述
        data:body//需要响应给客户端的数据
    })
})

// 定义 DELETE 接口
router.delete('/delete', (req, res) => {
    res.send({
      status: 0,
      msg: 'DELETE请求成功',
    })
  })

module.exports = router
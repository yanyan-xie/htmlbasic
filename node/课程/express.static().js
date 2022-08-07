const express = require('express')
const app = express()

//在这里调用express.static()方法，对外界提供静态资源
app.use('/public',express.static('./files'))

app.listen(80,()=>{
    console.log('express server running at http://127.0.0.1');
})
const express = require('express')
const app = express()


app.get('/',(req,res)=>{
    res.send('ok')
})

app.post('/user',(req,res)=>{
    res.send('user')
})

app.listen(80,()=>{
    console.log('express server running at http://127.0.0.1');
})
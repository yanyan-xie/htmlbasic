const fs = require('fs');

//调用fs.writeFile()方法读取文件
//参数一：存放数据的存放地址   
//参数二；写入内容
//参数三；（可选参数）格式，默认utf8
//参数四：回调函数
//__dirname 表示当前文件所处目录
fs.writeFile('3.txt','avbu',function(err){
    //如果文件写入成功则err的值等于null
    //如果文件写入失败则err的值等于一个错误对象
    if (err) {
        return console.log('文件写入失败' + err.message);
    }
    console.log('文件写入成功！');
})
//1.导入fs模块
const fs = require('fs');

//调用fs.readFile()方法读取文件
//参数一：读取数据的存放地址   
//参数二；读取文件的编码格式，一般默认utf8
//参数三；回调函数。拿到读取失败和成功的结果 err dataStr
fs.readFile('1.txt','utf8',function(err,dataStr) {
  console.log(err)
  //如果读取成功，则err的值为null，如果失败，则err值为错误对象，dataStar的值为undefined
  console.log('------');
  console.log(dataStr);
  
  //检验是否读取成功
  if(err){
    return console.log('读取文件失败！') + err.message;
  }
  console.log('读取文件成功！' + dataStr);  
})
const fs = require('fs')

fs.readFile('成绩.txt','utf8',function(err,dataStr){
    if (err) {
        return console.log('读取文件失败！' + err.message);
    }
    console.log('读取文件成功！' + dataStr);
    //数据分割
    const arrQld = dataStr.split(' ')
    //循环分割后的数组，对每一项数据，进行字符串的替换操作
    const arrNew = []
    arrQld.forEach(item => {
        arrNew.push(item.replace('=',';'))
    })
    //把新数组中的每一项，进行合并，得到新一个字符串
    const newStr = arrNew.join('\r\n')

    //调用write方法写入
    fs.writeFile('chengji.txt',newStr,function(err){
        if(err){
            return console.log('写入文件失败！' + err.message);
        }
        console.log('成绩写入成功！');
    })
})

//__dirname:表示当前文件所处目录
const path = require('path')

//定义文件的存放路径
const fpath = '/a/b/c/index.html'

//const fullName = path.basename(fpath)
//console.log(fullName);

const nameWithOutExt = path.basename(fpath,'.html')
console.log(nameWithOutExt);

//查询文件的拓展名
const fext = path.extname(fpath)
console.log(fext);
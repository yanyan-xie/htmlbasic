//导入MySQL模块
const mysql = require('mysql')
//建立与MySQL数据库的连接
const db = mysql.createPool({
    host:'127.0.0.1',//数据库的IP地址
    user:'root',//登录数据库账号
    password:'123456',//登录数据库的密码
    database:'js_01'//指定操作那个数据库
})

//测试是否可以正常使用
// db.query('select 1',(err,results) =>{
//     //报错
//     if(err) return console.log(err.message);
//     //成功运行
//     console.log(results);
// })

//查询users表中的所有数据
// const sqlStr = 'select * from users'
// db.query(sqlStr,(err,results) => {
//     //查询数据失败
//     if(err) return console.log(err.message);
//     //查询数据成功
//     //注意：如果执行的是select查询语句，则执行的结果是数组
//     console.log(results);
// })

// //插入数据
// const user = {username:'kaif',password:'pclmo'}
// //定义待执行sql语句，其中用？表示占位符
// const sqlStr = 'insert into users (username,password) values (?,?)'
// //执行sql语句
// db.query(sqlStr,[user.username,user.password],(err,results) =>{
//     //失败
//     if(err) return console.log(err.message);
//     //成功
//     //注意：如果这里执行的是insert into语句，则results是一个对象
//     //通过affectedRows属性，来判断是否插入成功
//     if(results.affectedRows === 1) {
//         console.log('插入数据成功！');
//     }
// })

// //简易插入数据
// const user = {username:'ggg',password:'bbb'}
// //定义待执行sql语句，其中用？表示占位符
// const sqlStr = 'insert into users set ?'
// //执行sql语句
// db.query(sqlStr,user,(err,results) =>{
//     //失败
//     if(err) return console.log(err.message);
//     //成功
//     //注意：如果这里执行的是insert into语句，则results是一个对象
//     //通过affectedRows属性，来判断是否插入成功
//     if(results.affectedRows === 1) {
//         console.log('插入数据成功！');
//     }
// })

// //更新数据
// const user = {id: 3,username:'ggg',password:'bbb'}
// //定义sql语句
// const sqlStr = 'update users set username=?,password=? where id=?'
// //执行sql语句
// db.query(sqlStr,[user.username,user.password,user.id],(err,results) =>{
//     if(err) return console.log(err.message);
//     if(results.affectedRows === 1){
//         console.log('更新成功！');
//     }
// })

// //便捷更新数据
// const user = {id: 4,username:'gjjg',password:'xxx'}
// //定义sql语句
// const sqlStr = 'update users set ? where id=?'
// //执行sql语句
// db.query(sqlStr,[user,user.id],(err,results) =>{
//     if(err) return console.log(err.message);
//     if(results.affectedRows === 1){
//         console.log('更新成功！');
//     }
// })

// //删除操作(不常用)
// const sqlStr = 'delete from users where id=?'
// //执行sql语句
// db.query(sqlStr,4,(err,results) =>{
//     if(err) return console.log(err.message);
//     //执行删除后，结果也是一个对象
//     if(results.affectedRows === 1){
//         console.log('删除成功！');
//     }
// })

//标记删除
const sqlStr = 'update users set status=? where id=?'
//执行sql语句
db.query(sqlStr,[1,6],(err,results) =>{
    if(err) return console.log(err.message);
    //执行删除后，结果也是一个对象
    if(results.affectedRows === 1){
        console.log('标记删除成功！');
    }
})


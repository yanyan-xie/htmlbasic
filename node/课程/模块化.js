//module.exports()抛出对象，外接使用require()方法接收  module.exports() => {}
//使用require()方法导入模块时，导入的结果，永远以module.exports()指向的对象为准
//默认情况下exports和module.exports指向同一个对象，永远以后者指向为准
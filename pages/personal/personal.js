// 获取应用实例
const app = getApp()

Page({
  data: {
    array:[],
    motto: 'Hello World',
    company: "GoZeroWaste",
    lesson: "21天零垃圾生活指南",
    position: "垃圾魔法师",
    userInfo: {},
    
  },
  // 事件处理函数

  onLoad:function(options){
    var array = this.initData();
    this.setData({array:array});
  },
  initData:function(){
    var array = [];
    var object1 = new Object();
    object1.img = '../images/personal-page/work1.png';
    array[0] = object1;

    var object2 = new Object();
    object2.img = '../images/personal-page/work2.png';
    array[1] = object2;

    var object3 = new Object();
    object3.img = '../images/personal-page/work3.png';
    array[2] = object3;

    return array;
  }
})
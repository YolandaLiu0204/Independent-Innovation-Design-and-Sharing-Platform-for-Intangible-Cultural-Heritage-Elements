Page({
  data:{
    array : [
      // {
      //   "id": 1,
      //   "img": "../images/activity-list/南通仿真绣.png",
      //   "link": "/pages/index_detail_1/index_detail_1"
      // },
      // {
      //   "id": 2,
      //   "img": "../images/activity-list/湘绣.png",
      //   "link": "/pages/index_detail_2/index_detail_2"
      // },
    ],

    //搜索的内容
    inputValue: ''
  },
  //搜索框文本内容显示
  inputBind:function(event){
    this.setData({
      inputValue:event.detail.value
    })
    console.log('bindInput' + this.data.inputValue)
  },
  //搜索执行按钮
  query:function(event){
    var that = this
    /**
    * 提问帖子搜索API
    * keyword string 搜索关键词 ; 这里是 this.data.inputValue
    * start int 分页起始值 ; 这里是 0
    */
  },
  onLoad:function(options){
    var array = this.initData();
    this.setData({array:array});
  },
  initData:function(){
    var array = [];
    var object1 = new Object();
    object1.img = '../images/activity-list/顾绣.png';
    object1.link=''
    array[0] = object1;

    var object2 = new Object();
    object2.img = '../images/activity-list/南通仿真绣.png';
    object2.link='/pages/index_detail_1/index_detail_1'
    array[1] = object2;

    var object3 = new Object();
    object3.img = '../images/activity-list/蜀绣.png';
    array[2] = object3;

    var object4 = new Object();
    object4.img = '../images/activity-list/湘绣.png';
    array[3] = object4;

    var object5 = new Object();
    object5.img = '../images/activity-list/粤绣.png';
    array[4] = object5;

    return array;
  },
  seeDetail:function(){
    wx.navigateTo({
      url: '/pages/index_detail_1/index_detail_1',
      success:function(res){
        console.log(res);
      },
      fail:function(){

      },
      complete:function(){

      }
    })
  }
})
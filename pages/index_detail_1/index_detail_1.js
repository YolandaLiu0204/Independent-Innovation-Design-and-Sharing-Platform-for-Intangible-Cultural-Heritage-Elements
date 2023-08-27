// pages/index_detail_1/index_detail_1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array:[],
    

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var array = this.initData();
    this.setData({array:array});
  },

  //查看刺绣详情
  seeDetail:function(){
    
  },

  // 页面初始化
  initData:function(){
    var array=[];
    var object1=new Object();
    object1.img='../images/activity-list/detail_1/work1.png';
    object1.userheadpic='../images/activity-list/detail_1/userheadpic1.png';
    object1.username='森宇暖暖';
    object1.follow='../images/activity-list/detail_1/已关注.png';
    object1.like='../images/activity-list/detail_1/like_1.png';
    object1.collection='../images/activity-list/detail_1/collection_0.png';
    array[0]=object1;

    var object2=new Object();
    object2.img='../images/activity-list/detail_1/work2.png';
    object2.userheadpic='../images/activity-list/detail_1/userheadpic2.png';
    object2.username='小y';
    object2.follow='../images/activity-list/detail_1/未关注.png';
    object2.like='../images/activity-list/detail_1/like_1.png';
    object2.collection='../images/activity-list/detail_1/collection_0.png';
    array[1]=object2;

    var object3=new Object();
    object3.img='../images/activity-list/detail_1/work3.png';
    object3.userheadpic='../images/activity-list/detail_1/userheadpic3.png';
    object3.username='J.professi…';
    object3.follow='../images/activity-list/detail_1/已关注.png';
    object3.like='../images/activity-list/detail_1/like_0.png';
    object3.collection='../images/activity-list/detail_1/collection_1.png';
    array[2]=object3;

    var object4=new Object();
    object4.img='../images/activity-list/detail_1/work4.png';
    object4.userheadpic='../images/activity-list/detail_1/userheadpic4.png';
    object4.username='绣阁用户87';
    object4.follow='../images/activity-list/detail_1/未关注.png';
    object4.like='../images/activity-list/detail_1/like_0.png';
    object4.collection='../images/activity-list/detail_1/collection_0.png';
    array[3]=object4;

    var object5=new Object();
    object5.img='../images/activity-list/detail_1/work5.png';
    object5.userheadpic='../images/activity-list/detail_1/userheadpic5.png';
    object5.username='爱学习的柚';
    object5.follow='../images/activity-list/detail_1/未关注.png';
    object5.like='../images/activity-list/detail_1/like_0.png';
    object5.collection='../images/activity-list/detail_1/collection_0.png';
    array[4]=object5;

    var object6=new Object();
    object6.img='../images/activity-list/detail_1/work6.png';
    object6.userheadpic='../images/activity-list/detail_1/userheadpic6.png';
    object6.username='璃花落';
    object6.follow='../images/activity-list/detail_1/未关注.png';
    object6.like='../images/activity-list/detail_1/like_0.png';
    object6.collection='../images/activity-list/detail_1/collection_0.png';
    array[5]=object6;

    return array;
  },
  switchtodesign:function(options){
    wx.switchTab({      
      url: '../creation/creation',    //要跳转到的页面路径
    }) 
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})
// pages/creation/creation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var array = this.initData();
    this.setData({array:array});
  },
  //加载模板图片
  initData:function(){
    var array = [];
    var object1 = new Object();
    object1.img = '../images/creation/tuanshan.png';
    object1.link='/pages/tuanshan/tuanshan';
    array[0] = object1;

    var object2 = new Object();
    object2.img = '../images/creation/zheshan.png';
    object2.link='/pages/zheshan/zheshan';
    array[1] = object2;

    var object3 = new Object();
    object3.img = '../images/creation/fangjin.png';
    array[2] = object3;

    var object4 = new Object();
    object4.img = '../images/creation/wenhuashan.png';
    array[3] = object4;

    var object5 = new Object();
    object5.img = '../images/creation/fanbubao.png';
    array[4] = object5;

    var object6 = new Object();
    object6.img = '../images/creation/expectation.png';
    array[5] = object6;

    return array;
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
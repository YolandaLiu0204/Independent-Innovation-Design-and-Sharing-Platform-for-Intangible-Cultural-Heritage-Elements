function getRandomColor () { 
  let rgb = []
  for (let i = 0 ; i < 3; ++i){
    let color = Math.floor(Math.random() * 256).toString(16) 
    color = color.length == 1 ? '0' + color : color 
    rgb.push(color)
  }
    return '#' + rgb.join('')
  }
  
Page({
  onReady: function (res) {
    this.videoContext = wx.createVideoContext('myVideo')
  },
  inputValue: '', 
  data: {
    src: '', 
    danmuList: [
      {
        text: '第 1s 出现的弹幕', color: '#ff0000',
        time: 1
      },
      {
        text: '第 3s 出现的弹幕', color: '#ff00ff',
        time: 3
      }]
  },

  bindInputBlur: function(e) { 
    this.inputValue = e.detail.value
  },
  bindButtonTap: function() { 
    var that = this 
    wx.chooseVideo({
      sourceType: ['album', 'camera'], 
      maxDuration: 60,
      camera: ['front','back'], 
      success: function(res) {
        that.setData({
          src: res.tempFilePath
        })
      }
    })
  },
  bindSendDanmu:function () { 
    this.videoContext.sendDanmu({
      text: this.inputValue, 
      color: getRandomColor()
    })
  },
  videoErrorCallback: function (e) {
    console.log('视频错误信息:');
    console.log(e.detail.errMsg);
  }
})
  
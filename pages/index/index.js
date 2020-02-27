// pages/index/index.js
Page({
  data: {
    region: ['广东省', '广州市','番禺区'],
    now: ''
  },
  chooseRegion: function (event) {
    this.setData({
      region: event.detail.value
    })
    this.getWeather(); //更新天气
  },
  getWeather: function () {
    var that = this; //this不可以直接在wxAPI函数内部使用
    wx.request({
      url: 'https://free-api.heweather.net/s6/weather/now?',
      data: {
        location: that.data.region[1],
        key: '008b739ff3bc483b9202d281c264a98d'
      },
      success: function (res) {
        console.log(res.data)
        that.setData({ 
          now: res.data.HeWeather6[0].now 
        })
      }
    })
  },
  onLoad: function (options) {
    this.getWeather();
  }
})
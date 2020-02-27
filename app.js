//app.js

App({
  onLaunch: function () {
    wx.login({
      success: function(res){
        const code = res.code;
      }
    })
  },
})
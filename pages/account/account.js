var app =getApp()
Page({
  data:{
    "text":"账户",
    userInfo: {}
  },
  onLoad:function(){
    var that = this;
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
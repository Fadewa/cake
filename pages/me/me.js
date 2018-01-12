// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mobile:''
  },
  makecall:function(){
    wx.makePhoneCall({
      phoneNumber: '400-400-4001',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this 
    wx.getStorage({
      key: 'userinfo',
      success: function(res) {
        var mtel = res.data.mobile.substr(0, 3) + '****' + res.data.mobile.substr(7);
        that.setData({
          mobile: mtel
        })
      },fail:function(){
        wx.navigateTo({
          url: '/pages/admin/login/login',
        })
      },
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})
// pages/admin/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    wx.request({
      url: 'https://eaglefly.ltd/cakeshop/index.php?s=/w16/Demo/Demo/login',
      data: {
        mobile: e.detail.value.mobile,
        psw: e.detail.value.psw
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        if(res.data==false){
          wx.showToast({
            title: '手机或密码输入有误',
            icon:'loading'
          })
        }else{
          wx.showToast({
            title: '登录成功',
            icon: 'success',
            success:function(){
              wx.setStorage({
                key: 'userinfo',
                data: {
                  mobile: e.detail.value.mobile,
                  psw: e.detail.value.psw
                },
              })
              wx.navigateBack()
            }
          })
        }
      }
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
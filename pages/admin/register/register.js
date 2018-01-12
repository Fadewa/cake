// pages/admin/register/register.js
const app = getApp();
var url = "https://eaglefly.ltd/cakeshop/";
//60s倒计时
var countdown = 60;
var settime = function (that) {
  if (countdown == 0) {
    that.setData({
      is_show: true
    })
    countdown = 60;
    return;
  } else {
    that.setData({
      is_show: false,
      last_time: countdown
    })
    countdown--;
  }
  setTimeout(function () {
    settime(that)
  }
    , 1000)
};
//手机号码的验证
var mobileFun = function (mobile) {
  if (mobile.length == 0) {
    wx.showToast({
      title: '请输入手机号！',
      icon: 'success',
      duration: 1500
    })
    return false;
  }
  if (mobile.length != 11) {
    wx.showToast({
      title: '手机号长度有误！',
      icon: 'success',
      duration: 1500
    })
    return false;
  }
  var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
  if (!myreg.test(mobile)) {
    wx.showToast({
      title: '手机号有误！',
      icon: 'success',
      duration: 1500
    })
    return false;
  }
  return true;
};
//验证码输入的正确与否
var codeFun = function () {

}
//密码的确认
var pswFun = function (psw1, psw2){
  if (psw1 === psw2){
    return true
  }else{
    wx.showToast({
      title: '密码输入不一致',
      icon: 'loading',
      duration: 2000
    })
    return false
  }
};
Page({

  /**
   * 页面的初始数据
   */
  data: {
    last_time: '',
    is_show: true,
    mobile:'',
    code:'',
    psw1:'',
    psw2:''
  },
  clickVerify: function () {
    var that = this;
    // 将获取验证码按钮隐藏60s，60s后再次显示
    that.setData({
      is_show: (!that.data.is_show)  //false
    })
    settime(that);
  },
  //手机号的输入
  mobileInput:function(e){
    this.setData({
      mobile: e.detail.value
    })
  },
  pswInput1:function(e){
    this.setData({
      psw1: e.detail.value
    })
  },
  pswInput2: function (e) {
    this.setData({
      psw2: e.detail.value
    })
  },
  codeInput: function (e) {
    this.setData({
      code: e.detail.value
    })
  },
  //发送注册信息
  sendInfo:function(){
    var mobile = this.data.mobile
    var code = this.data.code
    var psw1 = this.data.psw1
    var psw2 = this.data.psw2
    var that = this
    
    
    //验证码输入的正确与否
    var codeFun=function(){

    }
    //密码是否一致
    pswFun(psw1,psw2)
    //手机号码输入正确与否的验证
    if (mobileFun(mobile)){
      wx.request({
        url: url + 'index.php?s=/w16/Demo/Demo/mobile',
        data: {
          mobile: this.data.mobile
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
          if(res.data){
            wx.showToast({
              title: '该手机已被注册',
              icon:'loading'
            })
          }else{
            if (pswFun(psw1, psw2)) {
              wx.request({
                url: url + 'index.php?s=/w16/Demo/Demo/userInfo',
                data: {
                  mobile: that.data.mobile,
                  psw: that.data.psw1,
                  code: that.data.code,
                },
                header: {
                  'content-type': 'application/json' // 默认值
                },
                success: function (res) {
                  wx.setStorage({
                    key: 'userinfo',
                    data: {
                      mobile: that.data.mobile,
                      psw: that.data.psw1,
                    },
                    success:function(){
                      wx.showToast({
                        title: '注册成功',
                        iocn: 'success',
                        duration: 1000
                      })
                      setTimeout(function () {
                        wx.navigateBack()
                      }, 1000)
                    }
                  })
                }
              })
            }
          }
        }
      })
    }
    
    //传给后台
    
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
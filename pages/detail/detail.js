// pages/detail/detail.js
var add=function(e,that){
  var x = 0
  for (var i = 0; i < e.length; i++) {
    x += parseInt(e[i].num)
  }
  that.setData({
    nummber: x
  })
}
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls:[],
    cake:[],
    lable:[],
    nummber:null
  },
  tocart:function(){
    wx.switchTab({
      url: '../cart/cart',
    })
  },
  //添加购物车
  addCart:function(e){
    var that = this
    var id = e.currentTarget.dataset.id
    var cart = app.globalData.cart
    var cake = this.data.cake
    var has = false
    //存购物车的信息
    wx.request({
      url: "https://app.lovejia.net/cakeshop/index.php?s=/w16/Demo/Demo/saveCart",
      data:{
        id_num:cake.id,
        ename: cake.ename,
        cname: cake.cname,
        label: cake.label,
        num: cake.num,
        price: cake.price,
        weight: cake.weight
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success:function(res){
        if (res.data){
          that.setData({
            'cake.num': parseInt(cake.num)+1
          })
        }
        //获取购物车里面商品数量
        wx.request({
          url: 'https://app.lovejia.net/cakeshop/index.php?s=/w16/Demo/Demo/getNum',
          header: {
            'content-type': 'application/json' // 默认值
          },
          success: function (res) {
            that.setData({
              nummber: res.data
            })
          }
        })
      }
    })
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var cakes = app.globalData.cakes
    var cart = app.globalData.cart
    var id = cakes.length - options.id
    for(var i=0;i<cakes.length;i++){
      if(id==i){
        var lable = cakes[i].label.split(",")
        that.setData({
          imgUrls: cakes[i].pics,
          cake: cakes[i],
          lable: lable
        })
      }
    }
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
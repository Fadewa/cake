const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'https://app.lovejia.net/cakeshop/Uploads/Picture/bg/bg1.jpg',
      'https://app.lovejia.net/cakeshop/Uploads/Picture/bg/bg2.jpg',
      'https://app.lovejia.net/cakeshop/Uploads/Picture/bg/bg3.jpg',
      'https://app.lovejia.net/cakeshop/Uploads/Picture/bg/bg4.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    cakes: [],
    new_cakes: [
      { src: "/image/cake1.jpg", name: "奶酪" },
      { src: "/image/cake2.jpg", name: "草莓" },
      { src: "/image/cake3.jpg", name: "黑森林" },
      { src: "/image/cake1.jpg", name: "奶酪" }
    ],
  },
  link:function(e){
    var id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + id,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    //蛋糕详情
    wx.request({
      url: 'https://app.lovejia.net/cakeshop/index.php?s=/w16/Demo/Demo/swiper122',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success:function(res){
        app.globalData.cakes=res.data
        var x = []
        for(var i=0;i<res.data.length;i++){
          x.push({ id: res.data[i].id, img: res.data[i].img})
        }
        that.setData({
          cakes:x
        })
      }
    })
    //购物数量
    wx.request({
      url: 'https://app.lovejia.net/cakeshop/index.php?s=/w16/Demo/Demo/swiper122',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success:function(res){
        app.globalData.cakes=res.data
        var x = []
        for(var i=0;i<res.data.length;i++){
          x.push({ id: res.data[i].id, img: res.data[i].img})
        }
        that.setData({
          cakes:x
        })
      }
    })
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
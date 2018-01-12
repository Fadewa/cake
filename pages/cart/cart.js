// pages/cart/cart.js
const app =getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lists:[],
    isshow:false//有无商品的控制开关
  },
  decrease:function(e){
    var i = e.currentTarget.dataset.choose
    var that = this
    if (this.data.lists[i].num>0){
      this.data.lists[i].num -= 1
      this.setData({
        lists: this.data.lists
      })
      wx.request({
        url: "https://eaglefly.ltd/cakeshop/index.php?s=/w16/Demo/Demo/updateList",
        data: {
          num: this.data.lists[i].num,
          id_num: this.data.lists[i].id
        },
        header: {
          'content-type': 'application/json' // 默认值
        }
      })
    }
    if (this.data.lists[i].num == 0) { 
      wx.request({
        url: "https://eaglefly.ltd/cakeshop/index.php?s=/w16/Demo/Demo/deleteList",
        data: {
          id_num: this.data.lists[i].id
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success:function(res){
          var lists = that.data.lists
          lists.splice(i, 1)
          that.setData({
            lists: lists
          })
          wx.request({
            url: 'https://eaglefly.ltd/cakeshop/index.php?s=/w16/Demo/Demo/getList',
            header: {
              'content-type': 'application/json' // 默认值
            },
            //没有商品时显示的东西
            success: function (res) {
              if (res.data == false) {
                that.setData({
                  isshow: false
                })
              }
            }
          })
        },
      })
    }
  },
  add:function(e){
    var a = e.currentTarget.dataset.index
    var num = this.data.lists[a].num
    num = parseInt(num) + 1
    this.data.lists[a].num = num
    this.setData({
      lists: this.data.lists
    })
    wx.request({
      url: "https://eaglefly.ltd/cakeshop/index.php?s=/w16/Demo/Demo/updateList",
      data:{
        num: num,
        id_num: this.data.lists[a].id
      },
      header: {
        'content-type': 'application/json' // 默认值
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
    var that = this
    var cakes = app.globalData.cakes
    var cart = app.globalData.cart
    var y = []
    //获取购物车信息
    wx.request({
      url: 'https://eaglefly.ltd/cakeshop/index.php?s=/w16/Demo/Demo/getList',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res)
        if (res.data) {
          that.setData({
            isshow: true
          })
          //获取商品id
          wx.request({
            url: 'https://eaglefly.ltd/cakeshop/index.php?s=/w16/Demo/Demo/getPro',
            header: {
              'content-type': 'application/json'
            },
            success: function (res) {
              var array_id = res.data
              //向cakes表里面核对与其ID相等的cartlist表里面的项
              wx.request({
                url: 'https://eaglefly.ltd/cakeshop/index.php?s=/w16/Demo/Demo/swiper122',
                header: {
                  'content-type': 'application/json' // 默认值
                },
                success: function (res) {
                  var list = res.data
                  if (array_id != null) {
                    for (var i = 0; i < array_id.length; i++) {
                      if (list != null) {
                        for (var x = 0; x < list.length; x++) {
                          if (array_id[i].id_num == list[x].id) {
                            //把购物车的商品数量给到数组里
                            list[x].num = array_id[i].num
                            y.push(list[x])
                          }
                        }
                      }
                    }
                  }
                  that.setData({
                    lists: y
                  })
                }
              })
            }
          })
        }
      }
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
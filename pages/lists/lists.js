// pages/lists/lists.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: ["蛋糕", "冰淇淋", "小切块", "咖啡", "常温蛋糕", "设计师专区"],
    activeIndex: 0,
    cakes:[
      {
        src:"/image/cake1.jpg",
        ename:"Chinese Date",
        cname:"枣儿",
        intro:"红枣奶油戚风，与姜撞奶慕斯",
        price:"289.00",
        weight:"2.0"
      },
      {
        src: "/image/cake2.jpg",
        ename: "Chinese Date",
        cname: "枣儿",
        intro: "红枣奶油戚风，与姜撞奶慕斯",
        price: "289.00",
        weight: "2.0"
      },
      {
        src: "/image/cake3.jpg",
        ename: "Chinese Date",
        cname: "枣儿",
        intro: "红枣奶油戚风，与姜撞奶慕斯",
        price: "289.00",
        weight: "2.0"
      },
      {
        src: "/image/cake1.jpg",
        ename: "Chinese Date",
        cname: "枣儿",
        intro: "红枣奶油戚风，与姜撞奶慕斯",
        price: "289.00",
        weight: "2.0"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载 
   */
  onLoad: function (e) {
   
  },
  tabClick: function (e) {
    this.setData({
      activeIndex: e.currentTarget.id
    });
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
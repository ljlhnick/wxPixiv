// pages/more/favorite.js
Page({
  data: {
  
  },
  onLoad: function (options) {
    var _this=this
    wx.request({
      url: 'https://api.imjad.cn/pixiv/v1/?type=favorite&id='+options.uid,
      dataType:'json',
      success(res){
        _this.setData({
          favoriteList: res.data.response
        })
      }
    })
    wx.request({
      url: 'https://api.imjad.cn/pixiv/v1/?type=member&id=' + options.uid,
      dataType: 'json',
      success(res) {
        _this.setData({
          member: res.data.response
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
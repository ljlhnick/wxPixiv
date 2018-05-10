//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    isSearch: false,
    per_page: 30,
    words:""
  },
  onLoad: function (options) {
    var _this=this
    this.data.words = options.words
    this.setData({
      words: _this.data.words
    })
    var _this=this
    wx.request({
      url: 'https://api.imjad.cn/pixiv/v1/?type=search&word=' + options.words,
      dataType: 'json',
      success(res) {
        _this.setData({
          searchList: res.data.response,
        })
      }
    })
  },
  /*搜索更多*/
  search_more(){
    var _this = this
    this.data.per_page +=30
    this.setData({
      per_page: _this.data.per_page
    })
    wx.request({
      url: 'https://api.imjad.cn/pixiv/v1/?type=search&word=' + this.data.words +'&per_page='+this.data.per_page,
      dataType: 'json',
      success(res) {
        _this.setData(
          {
            searchList: res.data.response
          }
        )
      }
    })
  }

})

//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    per_page:5,
    loading:false
  },
  onLoad: function () {
    var _this=this
    wx.request({
      url: 'https://api.imjad.cn/pixiv/v1/?type=latest',
      dataType:'json',
      success(res){
        _this.setData({
          latestList: res.data.response
        })
      }
    })
  },
  search(e){
    wx.navigateTo({
      url: '../search/search?words=' + e.detail.value,
    })
  },
  more(e){
    var _this=this
    this.data.loading=true,
    this.data.per_page+=5
    this.setData({
      per_page: _this.data.per_page,
      loading: _this.data.loading
    })
    wx.request({
      url: 'https://api.imjad.cn/pixiv/v1/?type=latest&per_page=' + this.data.per_page,
      dataType: 'json',
      success(res) {
        _this.setData({
          latestList: res.data.response,
          loading:false
        })
      }
    })
  }
})

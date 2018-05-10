const app=getApp()
Page({
  data:{
    per_page: 20, /*默认per_page为20*/
    mode: "daily",/*默认mode为daily*/
    content: "all", /*默认content为all*/
    loading:false,
    plain:false
  },
  onLoad(options){
   var _this=this
   //默认请求内容为all，模式为日榜，数据条数为20
   wx.request({
     url: 'https://api.imjad.cn/pixiv/v1/?type=rank&mode='+this.data.mode+'&per_page=' + this.data.per_page,
     dataType:'json',
     success(res){
       _this.setData(
        {
           rankList: res.data.response[0],
           len: res.data.response[0].works.length
        }
       )
     }
   })
  },
  change_mode(e){
    // console.log(e.target.id)
    if (e.target.id === this.data.mode)  /*如果为日榜就不请求数据了*/
     return ;
    var _this=this
    this.data.mode = e.target.id
    this.setData({
      mode:_this.data.mode
    })
    wx.request({
      url: 'https://api.imjad.cn/pixiv/v1/?type=rank&mode=' + this.data.mode+'&content=' + this.data.content + '&per_page=' + this.data.per_page,
      dataType: 'json',
      success(res) {
        _this.setData(
          {
            rankList: res.data.response[0],
            // len: res.data.response[0].works.length
          }
        )
      }
    })
  },
  change_content(e){
   
    if (e.target.id === this.data.content)  /*如果为日榜就不请求数据了*/
      return;
    var _this = this
    this.data.content = e.target.id
    this.setData({
      content: _this.data.content
    })
    wx.request({
      url: 'https://api.imjad.cn/pixiv/v1/?type=rank&mode=' + this.data.mode + '&content=' + this.data.content + '&per_page=' + this.data.per_page,
      dataType: 'json',
      success(res) {
        _this.setData(
          {
            rankList: res.data.response[0],
            // len: res.data.response[0].works.length
          }
        )
      }
    })
  },
  show_more(){
    var _this=this
    this.data.loading=true,
    this.data.plain = true,
    this.data.per_page +=20
    this.setData({
      per_page: _this.data.per_page,
      loading: _this.data.loading,
      plain: _this.data.plain
    })
    wx.request({
      url: 'https://api.imjad.cn/pixiv/v1/?type=rank&mode=' + this.data.mode + '&content=' + this.data.content + '&per_page=' + this.data.per_page,
      dataType: 'json',
      success(res) {
        _this.setData(
          {
            rankList: res.data.response[0],
            // len: res.data.response[0].works.length
            loading:false
          }
        )
      }
    })
  }
})
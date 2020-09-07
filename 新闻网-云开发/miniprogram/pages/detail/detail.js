var common = require('../../utils/common.js')
const db = wx.cloud.database()
const news = db.collection('news')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isAdd:false
  },
  //添加收藏
  addFavorites(){
    let article = this.data.article;
    wx.setStorageSync(article._id, article);
    this.setData({
      isAdd:true
    })
  },
  //取消收藏
  cancelFavorites(){
    let article = this.data.article
    wx.removeStorageSync(article._id)
    this.setData({
      isAdd:false
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id)
    let id = options.id  
    // let result = common.getNewsDetail(id)
    // if(result.code='200'){
    //   this.setData({
    //     article:result.news
    //   })
    // },

    //检查当前新闻是否在收藏夹中
    var newarticle = wx.getStorageSync(id);
    //新闻已存在
    if(newarticle != ''){
      this.setData({
        isAdd:true,
        article:newarticle
      })
    }
    //不存在
    else{
      // let result = common.getNewsDetail(id)
      // if(result.code = '200'){
      //   this.setData({
      //     article:result.news
      //   })
      // }

      //  根据新闻id在云数据库中查找新闻内容
      news.doc(id).get({
        success:res => {
          //  更新页面上的新闻信息和收藏状态
          this.setData({
            article:res.data,
            isAdd:false
          })
        }
      })
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
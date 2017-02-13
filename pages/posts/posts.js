import postsDate from "../../data/post_data.js";

// const postsDate = require('../../data/post_data.js');

Page({
  data:{
    // 小程序会读取data对象来做数据绑定，，这个动作我们称呼为为动作A
    // 而这个动作A的执行，是在onLoad事件执行后执行
    title: '撒大声地撒旦',
    isVertical: true
  },
  onLoad: function () {
    // 生命周期函数--监听页面加载

    this.setData({
      post_data: postsDate['postList']
    });

  },
  onReady: () => {
    // 生命周期函数--监听页面初次渲染完成
    // String3
  },
  onShow:function(){
    // 生命周期函数--监听页面显示
    // String4
  },
  onHide:function(){
    // 生命周期函数--监听页面隐藏
    // String5
  },
  onUnload:function(){
    // 生命周期函数--监听页面卸载
    // String6
  },
  onPullDownRefresh: function() {
    // 页面相关事件处理函数--监听用户下拉动作
    // String7
  },
  onReachBottom: function() {
    // 页面上拉触底事件的处理函数
    // String8
  },
  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  }
})

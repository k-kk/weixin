Page({
   onTab: () => {

      // wx.navigateTo({
      //   url: '../posts/posts'
      // });

      // 还有多个 参数，回头文档里看
      // 使用绑定 catch 不会冒泡，bind是会冒泡的
      wx.redirectTo({
        url: '../posts/posts'
      });

   },
   onUnload: () => {
     // console.log('onUnload');
   },
   onHide: () => {
     // console.log('onHide');
   }
});

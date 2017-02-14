import * as mod from "lib/package";

Page({
  data: {
    title: '撒大声地撒旦',
    isVertical: true
  },
  onLoad: (option) => {

    console.log(option.id, 'onload');
  }

});

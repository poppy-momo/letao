window.addEventListener('load',function(){
    var letao = new Letao();
    letao.sliderInit();
    letao.scrollInit();
})

/* 创建乐淘构造函数 */
var Letao = function(){};
/* 创建乐淘的 */
Letao.prototype = {
    /* 轮播初始化方法 */
   sliderInit : function() {
       var gallery = mui('.mui-slider');
       gallery.slider({
       interval:1000//自动轮播周期，若为0则不自动播放，默认为0；
    });
  
} ,
 /* 定义一个初始化区域滚动的方法 */
    scrollInit:function() {
        mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
        // options = {
        //     scrollY: true, //是否竖向滚动
        //     scrollX: false, //是否横向滚动
        //     startX: 0, //初始化时滚动至x
        //     startY: 0, //初始化时滚动至y
        //     indicators: true, //是否显示滚动条
        //     deceleration:0.0006, //阻尼系数,系数越小滑动越灵敏
        //     bounce: true //是否启用回弹
        // }
    }

}
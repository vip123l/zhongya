$(function(){
	// 主页左侧菜单伸缩
	$(".cdclose").click(function(){
		$(".layui-side").toggle();
		$(".layui-body,.layui-footer").css("left",($(".layui-side").is(":hidden")) ? '0' : '200px');
		$(".cdclose").html($(".layui-side").is(":hidden") ? '&#xe671;' : '&#xe65f;');
	})

})
 $(function(){
     var x=-210;
     var y=-160;
     $(".dypm .layui-table tr td").mouseover(function(e){
         this.myTitle=this.title;
         this.title="";
         var tooltip="<div id='tplink'>"+this.myTitle+"</div>";   //创建DIV元素
         $(".dypm .layui-table tr td").append(tooltip);     //追加到文档中
         $("#tplink").css({"top": (e.pageY+y) + "px","left": (e.pageX+x) + "px"}).show();    //设置X  Y坐标， 并且显示
     }).mouseout(function(){
         this.title=this.myTitle;
         $("#tplink").remove();    //移除
     }).mousemove(function(e){
         $("#tplink").css({"top": (e.pageY+y) + "px","left": (e.pageX+x) + "px"});
     })
 })
// 四模块提示框
function tsk(idname,idtxt,idcolor){
    var tip_index = 0;
    $(document).on('mouseenter', idname, function(){
    	tip_index = layer.tips(idtxt, idname, {tips: [1,idcolor],time: 0});
    }).on('mouseleave', idname, function(){
    	layer.close(tip_index);
    });
}
tsk('#tstxt1','本月创建的机会和自然注册分配的机会数','#ff8c68');
tsk('#tstxt2','本月所成交的订单数，去除了不算单的项目','#f7d170');
tsk('#tstxt3','本月所成交的业绩，去除了不算业绩的项目','#7ac3f9');
tsk('#tstxt4','本月的有效通话时长','#a3ded9');

//JavaScript代码区域
layui.use('element', function(){
    var element = layui.element;
    //头部导航切换左侧菜单
    var l_o = $('.left-menu'),t_m = 'top-menu';
    element.on('nav(' + t_m + ')',function(data) {
        l_o.hide().eq(data.index()).show();
    });
     l_o.on("click", "li",function() {
        $(this).siblings().removeClass("layui-nav-itemed");
    });
});


   
$(function(){
	$('.body-title .qd').click(function(){
		$(this).html('已签到')
	})
	// 表单展示隐藏
	$(".updown").click(function(){
		$(".updowncon").toggle();
		$(".updown").html($(".updowncon").is(":hidden") ? '<img src="images/plus/bdup.png">' : '<img src="images/plus/bddown.png">');
	})
})
layui.use('laydate', function(){
  	var laydate = layui.laydate;
//	最后沟通时间
  	laydate.render({
	    elem: '#last-time'
	});
	//机会创建时间
  	laydate.render({
	    elem: '#chance-time'
	    ,range: true
    });
    //	下次沟通时间
  	laydate.render({
	    elem: '#gt-time'
	});
	//最后指派时间
  	laydate.render({
	    elem: '#zp-time'
	    ,range: true
    });
});
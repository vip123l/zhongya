$(function(){
	//专业选项卡切换
	$('.object>li').each(function (i, n) {
	    $(this).click(function () {
	        $(this).attr('data-id', i);
	        $(this).siblings().remove('data-id', i);
	        $(this).addClass('check-bg');
	        $(this).siblings().removeClass('check-bg');
	        $('.obj-tab-item').eq(i).show();
	        $('.obj-tab-item').eq(i).siblings().hide();
	    })
	});
	//专业选项卡切换
	$('.obj-title>li').each(function (i, n) {
	    $(this).click(function () {
	        $(this).attr('data-id', i);
	        $(this).siblings().remove('data-id', i);
	        $('.obj-text .text-box').eq(i).show();
	        $('.obj-text  .text-box').eq(i).siblings().hide();
	    })
	});
})

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
	// 点击变换不同背景颜色
	$('.obj-title .li1').click(function(){
		$(this).addClass('li1-click');
		$(this).children('i').addClass('li1-i');

		$('.obj-title .li2').removeClass('li2-click');
		$('.obj-title .li2').children('i').removeClass('li2-i');

		$('.obj-title .li3').removeClass('li3-click');
		$('.obj-title .li3').children('i').removeClass('li3-i');

		$('.obj-title .li4').removeClass('li4-click');
		$('.obj-title .li4').children('i').removeClass('li4-i');
	})
	$('.obj-title .li2').click(function(){
		$(this).addClass('li2-click');
		$(this).children('i').addClass('li2-i');

		$('.obj-title .li1').removeClass('li1-click');
		$('.obj-title .li1').children('i').removeClass('li1-i');

		$('.obj-title .li3').removeClass('li3-click');
		$('.obj-title .li3').children('i').removeClass('li3-i');

		$('.obj-title .li4').removeClass('li4-click');
		$('.obj-title .li4').children('i').removeClass('li4-i');
	})

	$('.obj-title .li3').click(function(){
		$(this).addClass('li3-click');
		$(this).children('i').addClass('li3-i');

		$('.obj-title .li1').removeClass('li1-click');
		$('.obj-title .li1').children('i').removeClass('li1-i');

		$('.obj-title .li2').removeClass('li2-click');
		$('.obj-title .li2').children('i').removeClass('li2-i');

		$('.obj-title .li4').removeClass('li4-click');
		$('.obj-title .li4').children('i').removeClass('li4-i');
	})

	$('.obj-title .li4').click(function(){
		$(this).addClass('li4-click');
		$(this).children('i').addClass('li4-i');

		$('.obj-title .li1').removeClass('li1-click');
		$('.obj-title .li1').children('i').removeClass('li1-i');

		$('.obj-title .li2').removeClass('li2-click');
		$('.obj-title .li2').children('i').removeClass('li2-i');

		$('.obj-title .li3').removeClass('li3-click');
		$('.obj-title .li3').children('i').removeClass('li3-i');
	})
})

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

	//  添加专业弹框
layui.use('form', function(){
	var form = layui.form;
	$('.zy,.table1 .editor').on('click',function(){
		layer.open({
			type: 1,
			title:'添加专业',
			btn: ['确定'],
			skin: 'add-layer', 
			area: ['720px', '360px'], //宽高
			content: $('.add-zy').html(),
			success:function(){
				form.render('select')
			}
		});
	});
});	

	//  添加报名考件弹框
layui.use('form', function(){
	var form = layui.form;
	$('.alert-bm,.table2 .editor').on('click',function(){
		layer.open({
			type: 1,
			title:'添加报名考件',
			btn: ['确定'],
			skin: 'add-layer', 
			area: ['720px', '660px'], //宽高
			content: $('.add-bk').html(),
			success:function(){
				form.render('select')
			}
		});
	});
});

layui.use('layer', function(){
    var layer = layui.layer;
    //	删除弹框
	$('.delete').on('click',function(){
		layer.confirm('确定要删除此条内容吗？', {
			title: '删除',
			btn: ['确定', '取消'],
			skin: 'layer-del',
		});
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

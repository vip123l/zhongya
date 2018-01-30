$(function(){
	$('.body-title .qd').click(function(){
		$(this).html('已签到')
	})
	
	// 表单展示隐藏
	$(".updowncon").hide()
	$(".updown").click(function(){
		$(".updowncon").toggle();
		$(".updown").html($(".updowncon").is(":hidden") ? '<img src="images/plus/bdup.png">' : '<img src="images/plus/bddown.png">');
	})
	
//	来5个
	$('.five li').on('click',function(){
		$(this).addClass('five-click').siblings().removeClass('five-click')
	})
	
//	沟通弹框内隐藏内容
	$(".blue").click(function(){
		$(this).next(".show-box").toggle();
	})
	$('.gt-state li').on('click',function(){
		$(this).addClass('gt-click').siblings().removeClass('gt-click');
	})
//	备注内容
	var remark='';
	function text_remark() {
	    /*去掉多余逗号*/
	    if(remark.indexOf(',')==0){
            remark=remark.replace(',','');
		}
	    if(remark.indexOf(',,')>-1){
            remark=remark.replace(',,',',');
		}
		if(remark.substr(remark.length-1,remark.length)==','){
            remark=remark.substr(0,remark.length-1);
        }
        $(".bz-text").val(remark);
    }
	$('.bz li').click(function(){
	    var this_text=$(this).text();
	    if($(this).hasClass('bz-click')){
			if(remark.indexOf(this_text)>-1){
                remark=remark.replace(this_text,'');
			}
		}else {
            remark+=','+this_text;
		}
		$(this).toggleClass('bz-click');
	    text_remark();
	})
	$(".bz-text").keyup(function(){
        remark=$(this).val();
        text_remark();
        $('.bz li').each(function () {
			if(remark.indexOf($(this).text())==-1){
                $(this).removeClass('bz-click');
			}
        })
	})
	
//	音频显示隐藏
	$('.audioplayer').hide()
	$(".action").click(function() {
        if($(this).next('.audioplayer').css("display")=="none"){
        	$('.audioplayer').hide()
             $(this).next('.audioplayer').show();
        }else {
             $(this).next('.audioplayer').hide();
        }

    })
	
})
layui.use(['laydate','layer','form'], function(){
  	var laydate = layui.laydate,
  	form = layui.form,
  	layer = layui.layer;
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
    laydate.render({
	    elem: '#next-time',
	    format: 'yyyy-MM-dd HH:mm',
	    type: 'datetime'
    });
    //	来5个	
	$('.lw').on('click',function(){
		layer.open({
			type: 1,
			title:'来5个',
			btn: ['确定'],
			skin: 'layer-five', 
			area: ['430px', '290px'], //宽高
			content: $('.five'),
		});
	})

//  查看弹框
	$('.btn-see').on('click',function(){
		layer.open({
			type: 1,
			title:'查看',
			skin: 'layer-see', 
			area: ['620px', '137px'], //宽高
			content: $('.see'),
		});
	});
	//	回库弹框	
	$('.btn-del').on('click',function(){
		layer.confirm('确定把机会回库吗？', {
			title: '删除',
			btn: ['确定', '取消'],
			area: ['430px','250px'],
			skin: 'layer-del',
		});
	})
	
		    //	沟通弹框	
	$('.btn-talk').on('click',function(){
		layer.open({
			type: 1,
			title:'沟通',
			btn: ['确定', '取消'],
			skin: 'layer-talk', 
			area: ['1175px','620px'], //宽高
			content: $('.talk'),
		});
	})
});
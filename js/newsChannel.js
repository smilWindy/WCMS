$(document).ready(function() {
    var settime;
	$(".scrollNotice").hover(function(){
		clearInterval(settime);
		},function(){
			settime=setInterval(function(){
				var $first=$(".scrollNotice ul:first");
				var height=$first.find("li:first").height();
				$first.animate({
					"marginTop":-height+"px"
					},600,function(){
						$first.css({
							marginTop:0
							}).find("li:first").appendTo($first);
						});
				},3000);
			}).trigger("mouseleave");
});

$(document).ready(function(){
	$("#ulPEPlatform .list-group-item").hover(function(){
		$(this).find(".divPicText").stop().animate({
			"height":80
			})
		},function(){
		$(this).find(".divPicText").stop().animate(
		{"height":0}
		);
		});
	});
	
//回到顶部jQuery制作
jQuery(document).ready(function($){
	var offset=300,
	    offset_opacity=1200,
		scroll_top_duration=700,
		$back_to_top=$('.cd-top');
	$(window).scroll(function(){
		($(this).scrollTop()>offset)? $back_to_top.addClass('cd-is-visible'):
		$back_to_top.removeClass('cd-is-visible cd-fade-out');
		if($(this).scrollTop()>offset_opacity){
			$back_to_top.addClass('cd-fade-out');
			}
		});
		$back_to_top.on('click',function(event){
			event.preventDefault();
			$('body,html').animate({
				scrollTop:0,
				},scroll_top_duration);
			});
	});
	
/*****************回到顶部代码完成*********************************/

/**********************侧栏分享功能代码开始**********************/
/*jQuery(document).ready(function($){
	$('#scrollsidebar').fix({
		float:'left',skin:'blue',durationTime:600
		});
	});*/
	(function($){
		$.fn.fix=function(options){
			var defaults={float:'left',minStatue:true,skin:'blue',durationTime:1000}
			var options=$.extend(defaults,options);
			this.each(function(){
				//获取对象
				var thisBox=$(this),
				closeBtn=thisBox.find('.close_btn'),
				show_btn=thisBox.find('.show_btn'),
				sideContent=thisBox.find('.side_content'),
				sideList=thisBox.find('.side_list');
				var defaultTop=thisBox.offset().top;
				thisBox.css(options.float,0);
				if(options.minStatue){
					$('.show_btn').css('float',options.float);
					sideContent.css('width',0);
					show_btn.css('width',25);
					}
				//皮肤控制
				if(options.skin) thisBox.addClass('side_'+options.skin);
				//核心scroll事件
				$('window').bind('scroll',function(){
					var offsetTop=defaultTop+$(window).scrollTop()+'px';
					thisBox.animate({
						top:offsetTop
						},{
							duration:options.durationTime,
							queue:false
							});
					});
					//close事件
					closeBtn.bind('click',function(){
						sideContent.animate({
							width:'0px'
							},'fast');
							show_btn.stop(true,true).delay(300).animate({
								width:'25px'
								},'fast');
						});
					//show事件
					show_btn.click(function(){
						$(this).animate({
							width:'0px'
							},'fast');
							sideContent.stop(true,true).delay(200).animate({
								width:'154px'
								},'fast');
						});
				});
			};
		});
/**********************侧栏分享功能代码结束**********************/
//添加Boostrap提示框
$(document).ready(function(){
	$('a[title]').tooltip({container:'body'});
	//输入信息进行评论
	$('#editor').wysiwyg();
});



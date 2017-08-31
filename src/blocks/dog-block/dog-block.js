$(function() {
	var $block = $('.dog-block');
	if (!$block.length) return;

	var $link = $block.find('.dog-block__link');

	$link.each(function(){
		var $this = $(this);
		var $linkIcon = $this.find('.icon')

		$this.hover(function(){
			TweenMax.to($linkIcon, 1, {x: 10, ease: Elastic.easeOut.config(1, 0.3)});
		}, function(){
			TweenMax.to($linkIcon, .7, {x: 0, ease: Power2.easeIn});
		});	
	})

})
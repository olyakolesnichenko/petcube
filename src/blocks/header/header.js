$(function() {
	var $block = $('.header');
	if (!$block.length) return;
	
	var $join = $block.find('.header__join');
	var $logo = $block.find('.header__logo');
	var $menu = $block.find('.header__menu');
	var $menuItem = $menu.find('.menu__item');
	var $controls = $block.find('.header__controls');
	
	new TimelineMax()
		.set($menu, {autoAlpha: 1})
		.to($logo, .5, {autoAlpha: 1}, .5)
		.staggerFromTo($menuItem, .5, {x: -20, autoAlpha: 0}, {x: 0, autoAlpha: 1}, .2, '-=.3')
		.to($controls, .5, {autoAlpha: 1})
		.fromTo($join, .7, {height: 0, autoAlpha: 0, display: 'block'}, {height: 55, autoAlpha: 1, delay: 1});

});
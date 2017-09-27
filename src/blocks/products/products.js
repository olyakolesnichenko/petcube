$(function() {
    var $product_block = $('.product');
    if (!$product_block.length) return;


    var $product_item = $product_block.find('.product__item');


    new TimelineMax()
        .set($product_item, {autoAlpha: 1})
        .staggerFromTo($product_item, 1, {x: -30, autoAlpha: 0}, {x: 0, autoAlpha: 1}, .5, '-=.5');

});
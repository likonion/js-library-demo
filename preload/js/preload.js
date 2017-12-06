/*
 * @Author: vincent 
 * 图片预加载
 * @Date: 2017-12-05 16:25:14 
 * @Last Modified by: vincent
 * @Last Modified time: 2017-12-06 08:57:15
 */
(function ($) {
    function PreLoad (imgs, options) {
        this.imgs = (typeof imgs === 'string') ? [imgs] : imgs;
        this.opts = $.extend({}, PreLoad.DEFAULTS, options);
        this._unordered();
    }
    PreLoad.DEFAULTS = {
        each: null, // 每一张图片加载完成后执行
        all: null, // 所有图片加载完成后执行
    };
    PreLoad.prototype._unordered = function () { // 无序加载
        var imgs = this.imgs,
            opts = this.opts,
            count = 0,
            len = imgs.length;
        $.each(imgs, function (i, src) {
            if (typeof src !== 'string') return;
            var imgObj = new Image();
            $(imgObj).on('load error', function () {
                opts.each && opts.each(count);
                if (count >= len - 1) {
                    opts.all && opts.all();
                }
                count ++;
            })
            imgObj.src = src;
        })
    }
    
    // jquery的两种封装方法
    // $.fn.extend -> $('#test').preload()
    // $.extend -> $.preload() 
    $.extend({
        preload: function (imgs, opts) {
            new PreLoad(imgs, opts);
        }
    })
})(jQuery);
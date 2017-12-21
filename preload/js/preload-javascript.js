/*
 * @Author: vincent 
 * @Date: 2017-12-06 14:16:48 
 * @Last Modified by: vincent
 * @Last Modified time: 2017-12-06 16:16:42
 */
(function() {
    function PreLoad (imgs, options) {
        this.imgs = (typeof imgs === 'string') ? [imgs] : imgs;
       
        this.opts = Object.assign({}, PreLoad.DEFAULTS, options);
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
        imgs.forEach(function (src) {
            if (typeof src !== 'string') return;
            var imgObj = new Image();
            imgObj.onload = function () {
                imgObj.onload = null;// 去除重复请求
                opts.each && opts.each(count);
                if (count >= len - 1) {
                    opts.all && opts.all();
                }
                count++;
            }
            imgObj.onerror = function () {
                opts.each && opts.each(count);
                if (count >= len - 1) {
                    opts.all && opts.all();
                }
                count++;
                alert("部分图片加载失败")
            }
            imgObj.src = src; // src 属性一定要写到 onload 的后面，否则程序在 IE 中会出错。
        });
    }
    window.preload = PreLoad;
})()
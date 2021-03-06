/*
 * @Author: vincent
 * @Date: 2017-12-06 11:29:14
 * @Last Modified by: vincent
 * @Last Modified time: 2018-05-08 14:28:38
 */

;
(function (window, document) {
  var TabSwitch = function (selector) {
    if (!(this instanceof TabSwitch)) return new TabSwitch(selector);
    if (!selector) {
      throw new Error("请传入选择器")
    }
    /*元素获取*/
    this.elem = typeof selector == 'object' ? selector : document.getElementById(selector);
    //获取选项卡展示部分
    this.tabContent = this.elem.querySelectorAll('ul')[1].querySelectorAll('li');
    //获取选项卡控制部分
    this.tabTitle = this.elem.querySelectorAll('ul')[0].querySelectorAll('li');

    /*变量设置*/
    //选项卡张数
    this.count = this.tabTitle.length;
    //当前第几张
    this.cur = 0;
    this.addClick();
  }
  TabSwitch.prototype = {
    addClick: function () {
      var _this = this;
      for (var i = 0; i < this.count; i++) {
        // 闭包实现索引
        this.tabTitle[i].addEventListener('click', function (i) {
          return function () {
            _this.cur = i;
            _this.control()
          }
        }(i))
      }
      return this;
    },
    control: function (index) {
      // 实现指定显示和点击显示
      var showIndex = index || this.cur;
      for (var i = 0; i < this.count; i++) {
        this.tabTitle[i].className = i == showIndex ? 'active' : '';
        this.tabContent[i].style.display = i == showIndex ? 'block' : 'none';
      }
      return this;
    }
  }
  window.Tab = TabSwitch;
})(window, document)

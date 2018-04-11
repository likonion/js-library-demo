/*
 * @Author: vincent 
 * @Date: 2017-12-06 11:29:14 
 * @Last Modified by: vincent
 * @Last Modified time: 2018-03-28 10:33:55
 */
(function () {
    function TabSwitch(selector) {
        /*元素获取*/
        this.elem = typeof selector == 'object' ? selector : document.getElementById(selector);
        //获取选项卡展示部分
        this.tabContent = this.elem.getElementsByTagName("ul")[1].getElementsByTagName('li');
        //获取选项卡控制部分
        this.tabTitle = this.elem.getElementsByTagName('ul')[0].getElementsByTagName('li');

        /*变量设置*/
        //选项卡张数
        this.count = this.tabTitle.length;
        //当前第几张
        this.cur = 0;
        this.init();
    }
    TabSwitch.prototype = {
        init: function () {
            var _this = this;
            for (var i = 0; i < this.count; i++) {
                //设置索引
                this.tabTitle[i].index = i;
                //给按钮添加事件
                this.tabTitle[i].onclick = function () {
                    _this.cur = this.index;
                    _this.switch(this);
                };
            }
        },
        switch: function (obj) {
            //去掉所有
            for (var i = 0; i < this.count; i++) {
                this.tabTitle[i].className = '';
                this.tabContent[i].style.display = 'none';
            }
            //显示当前
            obj.className = 'active';
            this.tabContent[obj.index].style.display = 'block';
        }
    }
    window.Tab = TabSwitch;
})()
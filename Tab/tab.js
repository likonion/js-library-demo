/**
 * Created by likonion on 2016/4/22.
 */

window.onload = function () {
    var Tab1 = new TabSwitch('Tab1');
    var Tab2 = new TabSwitch('Tab2');
};


function TabSwitch(id) {
    /*元素获取*/
    var tabbox = document.getElementById(id);
    //获取选项卡展示部分
    this.tabContent = tabbox.getElementsByTagName("ul")[1].getElementsByTagName('li');
    //获取选项卡控制部分
    this.tabTitle = tabbox.getElementsByTagName('ul')[0].getElementsByTagName('li');
    
    /*变量设置*/
    //选项卡张数
    this.count = this.tabTitle.length;
    //当前第几张
    this.cur = 0;
    var _this = this;
    for (var i = 0; i < this.count; i++) {
        //设置索引
        this.tabTitle[i].index = i;
        //给按钮添加事件
        this.tabTitle[i].onclick = function () {
            _this.cur = this.index;
            _this.switch();
        };
    }

}
TabSwitch.prototype.switch = function () {
    //去掉所有
    for (var i = 0; i < this.count; i++) {
        this.tabTitle[i].className = '';
        this.tabContent[i].style.display = 'none';
    }
    //显示当前
    this.tabTitle[this.cur].className = 'active';
    this.tabContent[this.cur].style.display = 'block';

};
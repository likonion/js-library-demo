/**
 * Created by likonion on 2016/4/22.
 */

window.onload=function(){
    new TabSwitch('Tab1');
    new TabSwitch('Tab2');
}


function TabSwitch(id) {
    var tabbox = document.getElementById(id);
    this.tabTitle = tabbox.getElementsByTagName('ul')[0].getElementsByTagName('li');
    this.tabContent = tabbox.getElementsByTagName("ul")[1].getElementsByTagName('li');
    var i = 0;
    var _this=this;
    for (i = 0; i < this.tabTitle.length; i++) {
        this.tabTitle[i].index = i;
        this.tabTitle[i].onclick = function(){
            _this.tab(this);
        };
    }
}
TabSwitch.prototype.tab=function(oBtn) {
    for (i = 0; i < this.tabTitle.length; i++) {
        this.tabTitle[i].className = '';
        this.tabContent[i].style.display = 'none';

    }
    oBtn.className = 'active';
    this.tabContent[oBtn.index].style.display = 'block';

}

"use strict";
// 将一个div变为一个可拖拽的块
var dropClass = /** @class */ (function () {
    function dropClass(id) {
        this.id = id;
        this.dropBox = document.getElementById(this.id);
        this.init();
    }
    //初始化
    dropClass.prototype.init = function () {
        this.dropBox.addEventListener('mouseover', function (e) {
            console.log(e.target, 123);
        });
    };
    return dropClass;
}());
var myDrop = new dropClass('dropbox');

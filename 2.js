// 将一个div变为一个可拖拽的块
var dropClass = /** @class */ (function () {
    function dropClass(id) {
        this.id = id;
        this.dropBox = document.getElementById(this.id);
        this.dropflag = false;
        this.init();
    }
    //初始化
    dropClass.prototype.init = function () {
        var _this = this;
        document.addEventListener('mousemove', function (event) {
            var e = event || window.event;
            console.log(e);
            if (_this.dropflag) {
                _this.x = e.clientX - _this.boxLeft;
                _this.y = e.clientY - _this.boxTop * 2;
                _this.dropBox.style.left = _this.x + "px";
                _this.dropBox.style.top = _this.y + "px";
            }
        });
        this.dropBox.addEventListener('mousedown', function (event) {
            //e.clientx 鼠标位于浏览器的X轴位置
            //e.clienty 鼠标位于浏览器的Y轴位置
            _this.dropflag = true;
            var e = event || window.event;
            console.log(_this.dropBox.offsetLeft, _this.dropBox.offsetTop);
            _this.boxLeft = e.clientX - _this.dropBox.offsetLeft;
            _this.boxTop = e.clientY - _this.dropBox.offsetTop;
        });
        document.addEventListener('mouseup', function (event) {
            _this.dropflag = false;
        });
    };
    return dropClass;
}());
var myDrop = new dropClass('dropbox');

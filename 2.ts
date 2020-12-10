// 将一个div变为一个可拖拽的块

class dropClass{
    id:string
    dropBox:any
    x:number
    y:number
    dropflag:boolean
    boxLeft:number
    boxTop:number
    constructor(id:string){
        this.id = id;
        this.dropBox = document.getElementById(this.id)
        this.dropflag = false;
        this.init();
    }
    //初始化
    init():void{
        document.addEventListener('mousemove',(event:any):void=>{
            let e:any = event || window.event;
            console.log(e);
            if(this.dropflag){
                this.x = e.clientX - this.boxLeft;
                this.y = e.clientY - this.boxTop*2;
                this.dropBox.style.left = this.x + "px";
                this.dropBox.style.top = this.y + "px"
            }
        })
        this.dropBox.addEventListener('mousedown',(event:any):void=>{
            //e.clientx 鼠标位于浏览器的X轴位置
            //e.clienty 鼠标位于浏览器的Y轴位置
            this.dropflag = true
            let e:any = event || window.event;
            console.log(this.dropBox.offsetLeft,this.dropBox.offsetTop);
            this.boxLeft = e.clientX - this.dropBox.offsetLeft;
            this.boxTop = e.clientY - this.dropBox.offsetTop;
        })
        document.addEventListener('mouseup',(event:any):void=>{
            this.dropflag = false
        })
    }
}
let myDrop = new dropClass('dropbox');
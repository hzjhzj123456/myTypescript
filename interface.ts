interface labelledObj{
    label:string
}
function printLabel(labelledObj:labelledObj){
    console.log(labelledObj.label);
}
let myobj = {size:10,label:'20'}

printLabel(myobj)

interface params{
    checkString:string
    checkNumber:number
    color?:string //可选属性
    height?:number //可选属性
}
let myparams = {checkString:'你好啊',checkNumber:123,color:"white",height:180}
function getUrl(params:params){
    return params
}
getUrl(myparams);
//只读 初始化后不能更改
 interface point{
     readonly x:number
     readonly y:number
 }

 let point1:point = {x:10,y:20}
 //point1.x =20; //会报错


 //函数接口

interface SearchFunc{
    (source:string,subString:string):boolean
}

let mySearch:SearchFunc = function(source:string,subString:string){
    let result = source.search(subString);
    return result >-1;
}
mySearch('123','456')

//可索引的类型
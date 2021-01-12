function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myobj = { size: 10, label: '20' };
printLabel(myobj);
var myparams = { checkString: '你好啊', checkNumber: 123, color: "white", height: 180 };
function getUrl(params) {
    return params;
}
getUrl(myparams);
var point1 = { x: 10, y: 20 };
var mySearch = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
mySearch('123', '456');

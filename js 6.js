console.log(1 == true);   //相等运算符 == 的使用
console.log(1 == "1");    //相等运算符 == 使用使，如果值的类型不同，自动转型，后比较

console.log(undefined == "null");
console.log(NaN == NaN);

var a = NaN;
console.log(isNaN(a));

console.log(1 === "1");   //false
console.logundefined === "null";   //false

//条件运算符
var b = 1;
var c = 3;
var d = 5;
b > c ? alert("b大") : alert("c大");
//获取b,c较大值
var max = b > c ? b : c;  //max=3
//获取比较b,c,d三值最大值
max = max > d ? max : d;
//合体写法为：
//var max = b > c ? (b > d ? b : d):(c > d ? c : d);
console.log("max = " + max);

//可用逗号，声明多个变量
var e = 1, f = 2, g = 3;

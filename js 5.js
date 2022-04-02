var a = 123; //true
a = NaN
a = Boolean(a);
console.log(typeof a);
console.log(a)

var b = 1;
result = 1 + true;      //1
result = "1" + true;   //1true
//隐式转换为String数据类型
result = 1 + "";      // "1"
result = 1 + 2 + "3"; // "33"
console.log(typeof result);
console.log("result = " + result);

var c = 123;
c = c - 2;   //121
c = 456 + 789;  //1245
c = 9 % 2;  //求余
var result = typeof c;   //将Number类型改为String
console.log(typeof result);
console.log("c = " + c);

// 利用- * / 运算将数据类型转化为Number
var d = "123";
d = d - 0;
console.log(typeof d);
console.log("d = " + d);

//自增与自减
var e = 1;
console.log(typeof e);
console.log("e++ = " + e++);  //等于自增前的值
console.log("e = " + e);     ////等于自增后的值
console.log("++e = " + ++e);  //等于自增后的值
console.log("e = " + e);     ////等于自增后的值

//JS中为我们提供了三种逻辑运算符:
/*!(否)可以用来对一个值进行非运算, 就是值对一个布尔值进行取反操作，
true变false, false变true, 对一个值进行两次取反，它不会变化！！
对非布尔值进行元素，则会将其转换为Boolean后取反,利用该特点可将其数据类型转换为布尔值*/
var f = 123;
f = !!f;
console.log(typeof f);
console.log("f = " + f);

/* && 可以对符号两侧的值进行与运算, 并返回结果:
两个值中只要有一个值为fa1se就返回false,只有两个值都为true时，才会返回true
JS中的“与”属于短路的与，如果第一个值为false，则不会看第二个值*/

/* || 可以对符号两侧的值进行或运算，并返回结果：
两个值中只要有一个true，就返回true，都为false，才返回false
JS中的“或”属于短路的或，若第一个值为true，则不会检查第二个值*/

/*与运算：如果第一个值为true，则必然返回第二个值
      如果第一个值为false，则直接返回第一个值
或运算：如果第一个值为true，则直接返回第一个值
      如果第一个值为false，则返回第二个值*/

//与运算：如果两个值都为true则返回后面的true
var g = 5 && 6;
console.log(typeof g);
console.log("g = " + g);
//与运算：如果两个值都为false则返回前面的false
var h = NaN && 0;
console.log(typeof h);
console.log("h = " + h);

//或运算，如果第一个值为true，则直接返回第一个值
var i = 1 || NaN;
console.log(typeof i);
console.log("i= " + i);
//或运算，如果第一个值为false，则直接返回第二个值
var j = 0 || 2;
console.log(typeof j);
console.log("j= " + j);

/*通过关系运算符可以比较两个值之间的大小关系：
如果关系成立它会返回true，如果关系不成立则返回false
>大于号，判断符号左侧的值是否大于右侧的值，>=大于等于，<小干号,<=小于等于*/
var k = 5 > 10;  //false
//console.10g(1 > "O"); //true
//console.log(10 > null); //true
k = 4 <= 4;  //true
console.log("k= " + k);
//任何值和NaN做任何比较都是false
//比较两个字符串时，比较的是字符串的字符编码
console.log("11" < "5");   //true
console.log("a" < "b");   //true
//比较字符编码时是一位一位进行比较，如果两位一样，则比较下一位
console.log("bbc" < "b");//true
console.log(1 >= true);

//如果比较的两个字符串型的数字，可能会得到不可预期的结果，在比较两个字符串型的数字时，一定要转型
console.log("111231231231" <= "5")  //true
//在字符串中使用转义字符输入Unicode编码,\u四位编码
console.log("\u2620");

//在网页中使用Unicode编码, &#编码；这里的编码需要的是10进制
// <h1 style = "font-size: 200px;">&#9760;</h1>
/*对于非数值进行比较时，会将其转换为数宇然后在比较
如果符号两侧的值都是字符串时，不会将其转化为数字进行比较*/

//可以将符号右侧的值赋值给符号左侧的变量
var a = 10;
a += 5;   //等价于a = a + 5
a *= 5;   //等价于a = a * 5
a /= 5;   //等价于a = a / 5
a %= 5;   //等价干a = a % 5
console.log(a)






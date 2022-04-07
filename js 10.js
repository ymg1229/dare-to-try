//向页面中输出连续数字
document.write(1 + "</br>");
document.write(2 + "</br>");
document.write(3 + "</br>");
document.write(4 + "</br>");

//var n =1;
//document.write(n++ + "</br>");

var n = 1;
/*向这种将条件表达式写死为true的循环，叫做死循环
该循环不会停止，除非浏览器关闭，死循环在开发中慎用
可用break来终止循环
while (true) {
    alert(n++);
    //退出循环
    break;
}*/

while (true) {
    alert(n++);
    if (n == 3) {
        //退出循环
        break;
    }
}

//创建一个循环三步走
//1.创初始化变量
var i = 5;
//2.在循环中设置条件表达式
while (i <= 10) {
    //3.定义更新变量，每次更新初始化变量
    document.write(i++ + "<br/>");
}

//do...while与while
var a = 1;
do {
    document.write(a++ + "<br>");
}
while (a <= 5);
var b = 1;

// while (true) {
//     alert(1);
// }

//加入投资年利率为5%，求从1000元增长到5000要花多少年？
var money = 1000;
var count = 0;
while (money < 5000) {
    money *= 1.05;
    count++;
}
/*第一年的钱数
money *= 1.05;
第二年的钱数
money *= 1.05;
第三年的钱数
money *= 1.05;*/
//console.log(money);
console.log("一共需要" + count + "年");

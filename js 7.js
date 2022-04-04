{
    alert("hello");
    console.log("你好");
    document.write("");
}     //代码块的使用

//if语句
var a = 11;
if (a > 10) {
    alert("if语句控制多条语句");
    alert("将语句同一放进代码块中一同执行");
}

//if条件判断语句1.
var b = 35;
if (b > 10 && b <= 30) {
    alert("b大于10,并且b小于等于30");
}

//if条件判断语句2.
var age = 50;
if (age >= 60) {
    alert("60岁可以退休了")
}
else {
    alert("不足60岁,不给退休")
}

//if条件判断语句3.
if (age > 100) {
    alert("活着挺有意思的");
}
else if (age > 80) {
    alert("你也老大不小的了");
}
else if (age > 60) {
    alert("你也退休了");
}
else if (age > 30) {
    alert("你已经中年了");
}
else if (age > 17) {
    alert("你已经成年了");
}
else {
    alert("你还是个小孩子");
}

//if条件判断语句3.另一形式
if (age > 17 && age <= 30) {
    alert("你已经成年了2");
}
else if (age > 30 && age <= 60) {
    alert("你已经中年了2");
}
else if (age > 60 && age <= 80) {
    alert("你已经退休了2");
}
else {
    alert("你岁数挺大的了2");
}
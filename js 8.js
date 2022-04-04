//练习一：
var score = prompt("请输入小明的期末成绩(0-100):");
//判断是否为合法分数
if (score > 100 || score < 0 || isNaN(score)) {
    alert("分数输入有误")
}
else {
    //score是小明的分数，根据score的值来决定给奖励
    if (score == 100) {
        alert("宝马，拿去");
    }
    else if (score >= 80) {
        alert("手机，拿去玩");
    }
    else if (score >= 60) {
        alert("参考书，拿去看");
    }
    else {
        alert("棍子一根");
    }
}

//练习二：
var height = prompt("请输入你的身高(CM:");
var money = prompt("请输入你的财富（万):");
var face = prompt("请输入你的颜值(PX):");
if (height > 180 && money > 1000 && face > 500) {
    alert("我一定要嫁给他");
}
else if (height > 180 || money > 1000 || face > 500) {
    alert("嫁吧，比上不足，比下有余");
}
else {
    alert("不嫁！");
}

//练习三:
//获取用户输入的三个数 prompt()函数的返回值是String类型的，可通过+ prompt()来改变为number类型
var num1 = +prompt("请输入第一个数：");
var num2 = +prompt("请输入第二个数：");
var num3 = +prompt("请输入第三个数：");
alert(typeof num1);
//找到三个数中最小的数
if (num1 < num2 && num1 < num3) {
    ///num1最小
    if (num2 < num3) {
        //num1 num2 num3
        alert(num1 + "," + num2 + "," + num3);
    }
    else {
        //num1 num3 num2
        alert(num1 + "," + num3 + "," + num2);
    }
}
else if (num2 < num1 && num2 < num3) {
    //num2最小
    if (num1 < num3) {
        //num2 num1 num3
        alert(num2 + "," + num1 + "," + num3);
    }
    else {
        //num2 num3 num1
        alert(num2 + "," + num3 + "," + num1);
    }
}
else if (num3 < num1 && num3 < num2) {
        //num3最小
        if (num1 < num2) {
            //num3 num2 num1
            alert(num3 + "," + num1 + "," + num2);
        }
        else {
            //num3 num2 num1
            alert(num3 + "," + num2 + "," + num1);
        }
    }


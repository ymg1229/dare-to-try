var num = 2;
if (num == 1) {
    console.log("一");
}
else if (num == 2) {
    console.log("二");
}
else if (num == 3) {
    console.log("三");
}

var shu = abc;
switch (shu) {
    case 1:
        console.log("one");
        break;
    case 2:
        console.log("two");
        break;
    case 3:
        console.log("three");
        break;
    default:
        console.log("非法数字");
        break;
}

var score = 58;
switch (parseInt(score / 10)) {
    case 10:
    case 9:
    case 8:
    case 7:
    case 6:
        console.log("合格");
        break;
    default:
        console.log("不合格");
        break;
}

var fen = 99;
switch (fen) {
    case fen >= 60:
        console.log("合格");
        break;
    default:
        console.log("不合格");
        break;
}
alert("据说这个警告框是外部引入的js代码哦");
// 可使用一个运算符typeof来检查一个变量的类型;检查字符串时会返回string,检察数值时会返回number
var apple = 987;
console.log(typeof apple);
// JS中所有数值都是Number类型，包括整数和浮点数（小数）
// JS中可以表示的数字的最大值，Number.MAX_VALUE   1.7976931348623157e+308
// 如果使用Number表示的数字超过了最大值，则会返回一个Infinity,表示正无穷，-Infinity,表示负无穷
// 使用typeof检查Infinity也会返回Number
// NAN是一个特殊的数字，表示Not A Number
console.log(typeof Number.MAX_VALUE);
console.log(typeof Number.MAX_VALUE * Number.MAX_VALUE);


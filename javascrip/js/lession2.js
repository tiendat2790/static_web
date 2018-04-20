
var name = 'Tien Dat', age = 25;
var myLove = name; //>>> Quy tắc lạc đà: viết thường chữ đầu tiên, viết hoa chữ tiếp theo 

var u; // chưa khai báo cho "u" nên "undefined"

var a = 10;
var b = 20;

var c = a + b / 2;
var d = 43 % c;
var e = 'so ' + a;
a--;
a++; // Toán tử + + tăng giá trị thêm 1 cho các số

a = 12;
a += 13; // a = a + 13;
a -= 3; // a = a - 3;
a *= 3; // a = a * 3;
a /= 11; // a = a / 11;
a %= 15; // a = a % 15; >>> số dư của a / 15

// cach su dung getElementById de lay mot phan tu
document.getElementById("demo1").innerHTML = name + ' ' + age + ' ' + myLove;
document.getElementById("demo2").innerHTML = u;
document.getElementById("demo3").innerHTML = a;
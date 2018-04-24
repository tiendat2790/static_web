// length Đếm số lượng ký tự của chuỗi
var hello = 'Hello kitty';
console.log('Chieu dai cua bien hello la ' + hello.length);

// toUpperCase() Chuyển chuỗi về dạng chữ in hoa
console.log(hello.toUpperCase());

// toLowerCase() Chuyển chuỗi về dạng chữ in thường
console.log(hello.toLowerCase());

// concat() Nối các chuỗi lại với nhau( thay vì dùng toán tử +)
var anh = 'anh';
var em = 'em';
var love = anh.concat(' yeu ',em);
console.log(love);

// indexOf() Xác định chỉ số của một chuỗi con (chỉ số của chuỗi trùng khớp được tìm thấy đầu tiên.)
var cha = "Hai cha con buoc di tren cat con te bay ra cat";
var con = "con";
var indexOfCon = cha.indexOf(con);
console.log(indexOfCon);

// lastIndexOf() Xác định chỉ số của một chuỗi con (chỉ số của chuỗi trùng khớp được tìm thấy cuối cùng.)
var lastIndexOfCon = cha.lastIndexOf(con);
console.log(lastIndexOfCon);

// charAt() Trích xuất một ký tự trong chuỗi
var char = cha.charAt(8);
console.log(char);

// substr() Trích xuất một chuỗi con
var string = cha.substr(8, 11);
console.log(string);

// substring()Trích xuất một chuỗi con
var sstring = cha.substring(8, cha.length);
console.log(sstring);

// replace()  Thay thế nội dung trong chuỗi
var newCha = cha.replace('buoc di', 'chay');
console.log(newCha);

// match()
var con = cha.match("con");
console.log(con)
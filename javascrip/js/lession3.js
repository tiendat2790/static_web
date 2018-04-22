var typeInterger = 100;
var typeString = 'Hello';
var typeBoolean = 'true';
var typeObject= {
    name: 'dat',
    age: 25
}


var a = 20 < 3;
var a = 20 > 3;


function introProfile() {
    var name = 'Đạt';
    var height = 175;
    var weight = 60;
    var age = 25;
    var job = 'Công Nhân';
    var wife = 'Giang';
    var son = 'Shin';

   return 'Tôi tên là ' + name + ' .Tôi cao ' + height + ' cm. Tôi nặng ' + weight + ' kg. Tôi ' + age + 'tuổi. Hiện tại tôi đang làm ' + job + '. Vợ tôi là ' + wife + '. Con trai tôi là ' + son;
}

function introProfile2(name, height, weight, age, job, wife, son) {

    return 'Tôi tên là ' + name + ' .Tôi cao ' + height + ' cm. Tôi nặng ' + weight + ' kg. Tôi ' + age + 'tuổi. Hiện tại tôi đang làm ' + job + '. Vợ tôi là ' + wife + '. Con trai tôi là ' + son;
}

var result = introProfile();
var result = introProfile2('Đạt', 175, 60, 25, 'Công Nhân', 'Giang', 'Shin')

document.getElementById('my-profile').innerHTML = result;
document.getElementById('my-profile2').innerHTML = result;

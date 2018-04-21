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
    var name = 'Dat';
    var  age = 26;
    var job = 'student';

   return 'Tôi ten la ' + name + ' .toi ' + age + ' tuoi. Toi la mot ' + job;
}

function introProfile2(name, age, job) {
    return 'Tôi ten la ' + name + ' .toi ' + age + ' tuoi. Toi la mot ' + job;
}

var result = introProfile();
var result = introProfile2('Dat', 26, 'student');
document.getElementById('my-profile').innerHTML = result;
document.getElementById('my-profile2').innerHTML = result;
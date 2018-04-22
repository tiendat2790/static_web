
function introProfile() {
    var name = 'Đạt';
    var age = 25;
    var job = 'Công Nhân';
    
    return 'Tôi tên là ' + name + ', tôi ' + age + ' tuổi. Tôi là một ' + job;
}

function introProfile2(name, age, job) {
    return 'Tôi tên là ' + name + ', tôi ' + age + ' tuổi. Tôi là một ' + job;
}

function getMyProfile(name, age, job) {
    var  profile = 'Tôi tên là ' + name + ', tôi ' + age + ' tuổi. Tôi là một ' + job;
    document.getElementById('my-profile').innerHTML = profile;
}
function hideMyProfile() {
    document.getElementById('my-profile').innerHTML = '';
}

function getNameStudent(student) {
    var name = student.name;
    document.getElementById('student').innerHTML = name;
}

function getAgeStudent(student) {
    var age = student.age;
    document.getElementById('student').innerHTML = age;
}

function getSexStudent(student) {
    var sex = student.sex;
    document.getElementById('student').innerHTML = sex;
}

function Learning(student) {
    student.learn();
}
console.log(student);

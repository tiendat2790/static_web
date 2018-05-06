function submitForm() {
    validateFullName();
    validateEmail();
    validatePhone();
    validatePass();
}
function validateFullName() {
    var fullname = document.getElementById('fullname').value;
    var length = fullname.length;
    if (length < 6 || length > 15) {
        document.getElementById('errorfullname').innerHTML = "Họ và tên không được quá ngắn hoặc quá dài";
    }
}
function validateEmail() {
    var address = document.getElementById('address').value;
    var indexOfA = address.indexOf("@");
    if (indexOfA < 0) {
        document.getElementById('errorEmail').innerHTML = "Địa chỉ email phải có chữ @";

    }
}
function validatePhone() {
    var phone = document.getElementById('phone').value;
    var substring = phone.substring(0, 2);
    if (substring != "09" && substring != "01") {
        document.getElementById('errorPhone').innerHTML = "Số điện thoại phải bắt đầu bằng 09 hoặc 01";

    }

}
function validatePass() {
    var pass_1 = document.getElementById('pass_1').value;
    var pass_2 = document.getElementById('pass_2').value;
    if (pass_1 != pass_2) {
        document.getElementById('errorpass').innerHTML = "Mật khẩu xãc nhận không đúng";
    }
}
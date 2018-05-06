//An: 01643160762
//Hanh: 01656574210
//Dat: 01676893232

function callYou() {
    var name = document.getElementById('name').value;
    var anPhone = '01643160762';
    var hanhPhone = '01656574210';
    var datPhone = '01676893232';

    var currentPhone;
    switch (name) {
        case 'An':
            currentPhone = anPhone;
            break;
        case 'Hanh':
            currentPhone = hanhPhone;
            break;
        case 'Dat':
            currentPhone = datPhone;
            break;
    }

    alert(currentPhone);

}
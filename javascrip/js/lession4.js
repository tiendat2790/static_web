var Color = {
    color: 'red',
    showColor: function () {
        document.getElementById('color').innerHTML = this.color;
    },
    showMultiColor: function () {
        var clor = 'blue';
        document.getElementById('color').innerHTML = this.color + ', ' + clor;
    }
};

function clickTobutton() {
    var a = 'Xin chào',
    
    alert(a)
}

var Song = {
    showLyrics : function() {
        var lyrics = "Hai tay anh ôm xương rồng rất đau\"Đôi vai anh mang nỗi buồn rất lâu\"Chân anh lang thang kiếm em ở khắp trốn";
        document.getElementById('color').innerHTML = lyrics;
    }
};
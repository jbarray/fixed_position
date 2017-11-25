var button=document.getElementsByTagName('li');
// var part=document.getElementsByClassName('part');

//点击右边板块时,颜色改变
function buttonClick() {
    if (document.getElementsByTagName('li')) {
        var button=document.getElementsByTagName('li');
        for (var i = 0; i < button.length; i++) {
            button[i].className=' ';
            button[0].className='on';
            button[i] .onclick=click;
        }
    }
}
function click(){
    var event =arguments[0] || window.event;
    var target =event.currentTarget;
    if (document.getElementsByTagName('li')) {
        var button=document.getElementsByTagName('li');
        for (var j = 0; j < button.length; j++) {
            if (button[j].className='on') {
                button[j].className=' ';
            }
        }
        target.className ='on';
    }
}
buttonClick();
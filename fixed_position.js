var button=document.getElementsByTagName('li');
 var part=document.getElementsByClassName('part');

//滚动条下拉至某个板块时,右边方块也跟着变化.
window.onscroll=function (){
    var screenH=document.body.scrollTop;
    for(var i=0;i<part.length;i++){
        if(screenH>part[i].offsetTop-140){
            changeButton(i);
        }
    }
};
function changeButton(i) {
    for (var j = 0; j < button.length; j++) {
        button[j].className = ' ';
        button[i].className = 'on';
    }
}
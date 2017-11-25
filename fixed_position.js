var button=document.getElementsByTagName('li');
 var part=document.getElementsByClassName('part');

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
//滚动条下拉至某个板块时,右边方块也跟着变化.
window.onscroll=function (){
    var screenW=document.body.clientHeight+document.body.scrollTop;
    var partW=[];
    for(var i=0;i<part.length;i++){
        partW.push(part[i].offsetTop);
    }
    if(screenW<600){
        changeButton(0);
    }
   if(screenW>=600&&screenW<1000){
       changeButton(1);
   }
   if(screenW>=1500&&screenW<1650){
       changeButton(2);
   }
    if(screenW>=1650){
        changeButton(3);
    }
};
function changeButton(i){
    for (var j = 0;j< button.length;j++) {
        button[j].className = ' ';
        button[i].className = 'on';
    }
}
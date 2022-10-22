var intervalo = 4000;

function slide1(){
    document.getElementById('banner').src ="./img/pexels1.jpg";
    setTimeout("slide2()",intervalo);
}
function slide2(){
    document.getElementById('banner').src ="./img/pexels2.jpg";
    setTimeout("slide3()",intervalo);

}
function slide3(){
    document.getElementById('banner').src ="./img/pexels3.jpg";
    setTimeout("slide4()",intervalo);
}
function slide4(){
    document.getElementById('banner').src ="./img/pexels4.jpg";
    setTimeout("slide5()",intervalo);
}
function slide5(){
    document.getElementById('banner').src ="./img/pexels5.jpg";
    setTimeout("slide6()",intervalo);
}
function slide6(){
    document.getElementById('banner').src ="./img/pexels6.jpg";
    setTimeout("slide7()",intervalo);
}
function slide7(){
    document.getElementById('banner').src ="./img/pexels7.jpg";
    setTimeout("slide1()",intervalo);
}

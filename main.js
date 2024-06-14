var icon = document.getElementById("icon");
icon.onclick = function(){
    document.body.classList.toggle("dark-theme");

if(document.body.classList.contains("dark-theme")){
    document.getElementById("icon").src ="sun.jpg";
    document.getElementById("icon").style.width ="50px";
    document.getElementById("icon").style.height= '50px';
}else{
    icon.src = 'moon.png';
    document.getElementById("icon").style.width ="30px";
    document.getElementById("icon").style.height= '30px';
}
}
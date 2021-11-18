canvas=document.getElementById("micanvas");
ctx=canvas.getContext("2d");
Arrayimagenesmarte=["mars.jpg", "mars1.jpg", "mars2.jpg", "mars3.jpg", "mars4.jpg", "mars5.jpg"];
randomnumber = Math.floor(Math.random()*6);
console.log(randomnumber);
rover_width=100;
rover_heigth=90;
rover_x=10;
rover_y=10;
imagen_fondo=Arrayimagenesmarte[randomnumber];
console.log("la imagen de fondo es " + imagen_fondo);
imagen_rover="rover.png";
function agregar(){
    etiquetaimagenfondo=new Image();
    etiquetaimagenfondo.onload=cargar_fondo;
    etiquetaimagenfondo.src=imagen_fondo;
    etiquetaimagenrover=new Image();
    etiquetaimagenrover.onload=cargar_rover;
    etiquetaimagenrover.src=imagen_rover;
}
function cargar_fondo(){
    ctx.drawImage(etiquetaimagenfondo, 0, 0, canvas.width, canvas.height);
}
function cargar_rover(){
    ctx.drawImage(etiquetaimagenrover, rover_x, rover_y, rover_width, rover_heigth);
}
window.addEventListener("keydown", miteclado);
function miteclado(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed =='38'){
        up();
        console.log("arriba");
    }
    if(keyPressed =='40'){
        down();
        console.log("abajo");
    }
    if(keyPressed =='37'){
        left();
        console.log("izquierda");
    }
    if(keyPressed =='39'){
        right();
        console.log("derecha");
    }
}
function up(){
    if(rover_y >= 0)
    {
        rover_y = rover_y-10;
        console.log("cuando se presione la flecha hacia arriba, x = " + rover_x + " , y = " + rover_y);
        cargar_fondo();
        cargar_rover();
    }
}
function down(){
    if(rover_y <= 500)
    {
        rover_y = rover_y+10;
        console.log("cuando se presione la flecha hacia abajo, x = " + rover_x + " , y = " + rover_y);
        cargar_fondo();
        cargar_rover();
    }
}
function left(){
    if(rover_x >= 0)
    {
        rover_x = rover_x-10;
        console.log("cuando se presione la flecha hacia izquierda, x = " + rover_x + " , y = " + rover_y);
        cargar_fondo();
        cargar_rover();
    }
}
function right(){
    if(rover_x <= 700)
    {
        rover_x = rover_x+10;
        console.log("cuando se presione la flecha hacia derecha, x = " + rover_x + " , y = " + rover_y);
        cargar_fondo();
        cargar_rover();
    }
}
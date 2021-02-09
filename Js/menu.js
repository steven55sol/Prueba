let menu = document.getElementById("menu-bar");
let ver = document.getElementById("menu");
let cerrar = document.getElementById("close");

menu.addEventListener("click", () =>{
   
    ver.style.display = "block";
    menu.style.display = "none";
    cerrar.style.display = "block";
});


cerrar.addEventListener("click", () =>{
   
    ver.style.display = "";
    menu.style.display = "block";
    cerrar.style.display = "none";
    
});
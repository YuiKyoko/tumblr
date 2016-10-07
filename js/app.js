window.addEventListener("load", evento)
function evento(){
   // btnPublicar.addEventListener("click", btnPublicar);
    imgTexto.addEventListener("click", creandoTexto);
    imgCita.addEventListener("click",creandoCita);
    imgMeme.addEventListener("click",creandoMeme);
    imgNota.addEventListener("click",creandoNota);
}
var body=document.getElementById("body")
var imgTexto = document.getElementById("texto");
var imgCita = document.getElementById("cita");
var imgMeme = document.getElementById("meme");
var imgNota = document.getElementById("nota");

var  box = document.createElement("section");
box.setAttribute("id", "lista-post");
document.body.appendChild(box);

function creandoTexto() {
  var caja = document.createElement("div");
  body.appendChild(caja);
  var texto=document.createElement("input")
  texto.placeholder="Tìtulo"
  texto.style.display="block";
  caja.appendChild(texto);   
  caja.setAttribute("id","caja");
  var btn = document.createElement("button");
  btn.innerText = "publicar";
  btn.style.display="block";

  var btnCerrar = document.createElement("button");
  btnCerrar.innerText = "cerrar"
  var textarea = document.createElement("textarea");
  textarea.setAttribute("id", "texto-publicar");
  caja.appendChild(textarea);
  textarea.parentNode.appendChild(btn);
  textarea.parentNode.appendChild(btnCerrar);
  btn.addEventListener("click",btnPublicar);
  textarea.placeholder="Aquì va el texto";
  return textarea; 
}
function creandoCita() {
  var caja = document.createElement("div");
  body.appendChild(caja);  
  caja.setAttribute("id","caja");
  var btn = document.createElement("button");
  btn.innerText = "publicar"
  btn.style.display="block";
  var textarea = document.createElement("textarea");
  caja.appendChild(textarea);
  textarea.placeholder = "Cita";
  textarea.parentNode.appendChild(btn);
  var texto=document.createElement("input")
  texto.placeholder="— Autor";
  texto.style.display="block";
  caja.appendChild(texto); 
  return textarea;
}
function creandoMeme() {
  var caja = document.createElement("div");
  body.appendChild(caja);   
  caja.setAttribute("id","caja");
  var btn = document.createElement("button");
  btn.innerText = "publicar"
  btn.style.display="block";
  var btnCerrar = document.createElement("button");
  btnCerrar.innerText = "cerrar"
  var textarea = document.createElement("textarea");
  caja.appendChild(textarea);
  textarea.parentNode.appendChild(btn);
  textarea.parentNode.appendChild(btnCerrar);
  btn.addEventListener("click",btnPublicar);
  textarea.placeholder="Aquì va el texto";
  var img = document.createElement("img");
  img.setAttribute("src", valor);
  img.setAttribute("class","z-depth-3")
  content.insertBefore(img, content.children[0]);
  return img;
  return textarea;  
}
function creandoNota() {
  var caja = document.createElement("div");
  body.appendChild(caja);
  var texto=document.createElement("input")
  texto.placeholder="Tìtulo"
  texto.style.display="block";
  caja.appendChild(texto);   
  caja.setAttribute("id","caja");
  var btn = document.createElement("button");
  btn.innerText = "publicar"
  btn.style.display="block";
  var colorInput = content.style.backgroundColor = input.value;
  return colorInput;
  var btnCerrar = document.createElement("button");
  btnCerrar.innerText = "cerrar"
  var textarea = document.createElement("textarea");
  caja.appendChild(textarea);
  textarea.parentNode.appendChild(btn);
  textarea.parentNode.appendChild(btnCerrar);
  btn.addEventListener("click",btnPublicar);
  textarea.placeholder="Aquì va el texto";
  var btnColor = document.createElement("input");
  btnColor.setAttribute("type", "color");
  textarea.appendChild(btnColor);
  return btnColor;
  return textarea;  
}
function btnPublicar() {
    var caja2= document.createElement("div");
    var contTitulo = document.createElement("div");
    var contTexto =document.createElement("div");
    var textarea = document.getElementById("texto-publicar");
    contTitulo.innerText= caja2.value;
    contTexto.innerText=contTitulo.value;
    caja2.appendChild(contTitulo);
    box.appendChild(caja2);
}

function hora(content){
  var hora = document.createElement("div");
  hora.setAttribute("class", "contHora")
  var horaPublic = new Date(); 
  var spanUno = document.createElement("span");
  spanUno.innerText = horaPublicar.getDate() + "/" + (horaPublic.getMonth() + 1) + "/" + horaPublic.getFullYear() + "    ";
  contHora.appendChild(spanUno);
  var spanDos = document.createElement("span");
  spanDos.innerText = horaPublicar.getHours() + ";" + horaPublicar.getMinutes()+ ";" + horaPublicar.getSeconds(); 
  hora.appendChild(spanDos);
  contenido.appendChild(hora);
  return hora;
}








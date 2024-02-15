const form = document.querySelector(".formulario-fale")
const mascaraform = document.querySelector(".mascara-formulario")
function mostrarform(){
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascaraform.style.visibility = "visible"
}
function esconderform(){
    form.style.left = "-230px"
    form.style.transform = "translateX(0%)"
    mascaraform.style.visibility = "hidden"
}
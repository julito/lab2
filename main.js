const datosForm= document.getElementById("formDatos");
datosForm.addEventListener("submit",ingresar);
function ingresar(e)
{
    e.preventDefault();
    let usuario=document.getElementById("usuario").value;
    let sala=document.getElementById("sala").value;
    let registro={
        usuario:usuario,
        sala:sala
    };
    localStorage.setItem('registro',JSON.stringify(registro));
    window.location="sala.html";
}
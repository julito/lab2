const formMensaje = document.getElementById("formMensaje");
formMensaje.addEventListener("submit", ingresar);
var registro = JSON.parse(localStorage.getItem("registro"));
firebase.initializeApp({
    apiKey: "AIzaSyBl60OmqgDyhYCt6ec03XRR5TWPI0gK_f8",
    authDomain: "salachat-5e4e5.firebaseapp.com",
    projectId: "salachat-5e4e5"
  }) ;
var db =firebase.firestore();
function ingresar(e) {
    e.preventDefault();
    
    let mensaje = document.getElementById("mensajito").value;
    let mensajes = document.getElementById("mensajes");
    
    let usuario=registro.usuario;
    let sala=registro.sala;
    const li = document.createElement("div");
    li.setAttribute("class","alert alert-primary");
    li.setAttribute("role","alert");
    li.innerHTML = usuario + " : " + mensaje;
    mensajes.appendChild(li);
    db.collection(sala).add({
        msj:mensaje,
        usr:usuario
    })
    .then(function(docRef){
        console.log("Registrado con id:",docRef.id);
    })
    .catch(function(error){
        console.log("Error al añadir;",error);
    });
}


db.collection(registro.sala).onSnapshot((querySnapshot)=>{
    mensajes.innerHTML="";
    querySnapshot.forEach((doc)=>{
        let mensaje = doc.data().msj;
        let mensajes = document.getElementById("mensajes");
        let usuario=doc.data().usr;
        const li = document.createElement("div");
        li.setAttribute("class","alert alert-primary");
        li.setAttribute("role","alert");
        li.innerHTML = usuario + " : " + mensaje;
        mensajes.appendChild(li);
    })

  
})



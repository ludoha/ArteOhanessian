// Obtener datos FORMULARIO de contacto y consultas 
let miFormularioCon = document.getElementById("form");
miFormularioCon.addEventListener("submit", validarForm);
//Obtener datos 
function validarForm(e){
    e.preventDefault();
    let formulario = e.target;
    console.log("Nombre y Apellido:");
    console.log(formulario.children[1].value);
    console.log("Teléfono:");
    console.log(formulario.children[4].value);
    console.log("Mail:");
    console.log(formulario.children[7].value);
    console.log("Consulta:");
    var texto = document.getElementById("texto").value;
    console.log(texto);
    //Sweet Alert para avisar que los datos fueron enviados correctamente!
    swal({
        title: "Su consulta fue enviada!",
        text: "En breve nos contactaremos con usted.",
        icon: "success",
        button: "OK",
        background: 'width'
    })
}
//Envio de mail automático al enviar una consulta
function envioMail() {
    var params = { 
        from_name : document.getElementById("nombreApellido").value,
        email_id : document.getElementById("mail").value,
        message : document.getElementById("texto").value,
    }
    emailjs.send("service_kjyspr4","template_330iu4t", params).then(function (res) {
        console.log("Success! Mail enviado " + res.status);
    })
};


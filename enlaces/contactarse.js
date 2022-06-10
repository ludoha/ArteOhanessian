// Obtener datos FORMULARIO de contacto y consultas 

let miFormularioCon = document.getElementById("contacto_form");
miFormularioCon.addEventListener("submit", validarFormulario);
//Obtener datos 
function validarFormulario(e){
    e.preventDefault();
    let formulario = e.target;
    console.log(formulario.children[1].value);
    console.log(formulario.children[5].value);
    console.log(formulario.children[7].value);
    console.log(formulario.children[11].value);
    console.log("Datos para la obra a pedido");
    //Sweet Alert para avisar que los datos fueron enviados correctamente!
    swal({
        title: "Sus datos fueron enviados!",
        text: "En breve nos contactaremos con usted.",
        icon: "success",
        button: "OK",
        background: 'width'
    })
}

/*function SendMail() {
    var params = { 
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        message1 : document.getElementById("tipo").value,
        message2 : document.getElementById("medida").value,
        message3 : document.getElementById("tecnica").value
    }
    emailjs.send("service_kjyspr4","template_8gtnnz5", params).then(function (res) {
        console.log("Success! " + res.status);
    })
};*/
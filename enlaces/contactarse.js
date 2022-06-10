let miFormularioC = document.getElementById("contacto_form");
miFormularioC.addEventListener("submit", validarFormularioC);
//Obtener datos 
function validarFormularioC(f){
    f.preventDefault();
    let formularios = f.target;
    console.log(formularios.children[1]);
    console.log(formularios.children[4]);
    console.log(formularios.children[7]);
    console.log(formularios.children[10]);
    console.log("Datos para contactarse");
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
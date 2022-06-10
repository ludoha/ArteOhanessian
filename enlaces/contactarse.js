
/* Obtener datos de contacto y consultas 
let miFormularioC = document.getElementById("contacto_form");
miFormularioC.addEventListener("submit", validarFormu);
//Obtener datos 
function validarFormu(e){
    e.preventDefault();
    let formu = e.target;
    console.log(formu.children[1].value),
    console.log(formu.children[4].value),
    console.log(formu.children[7].value),
    console.log(formu.children[10].value);
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
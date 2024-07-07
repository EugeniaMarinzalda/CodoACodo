async function grabar(event) {
    event.preventDefault();
    let usuarioNvo = document.getElementById("usuarioNvo");
    let claveNva = document.getElementById("claveNva");
    let error = false;
    document.getElementById("validar_usuarioNvo").innerHTML = "&nbsp; ";
    document.getElementById("validar_claveNva").innerHTML = "&nbsp; ";

    if (usuarioNvo.value == "") {
        document.getElementById("validar_usuarioNvo").innerHTML = "Debe completar el usuario";
        error = true;
        usuarioNvo.focus();
    };
    if (email.value == "") {
        document.getElementById("validar_mail").innerHTML = "Debe completar el mail";
        error = true;
        email.focus();
    };

    if (claveNva.value.length < 8) {
        document.getElementById("validar_claveNva").innerHTML = "Debe completar el clave con 8 caracteres como mínimo";
        error = true;
        claveNva.focus();
    } else {
        // Validar que la contraseña tenga al menos una letra mayúscula
        let tieneMayuscula = false;
        for (let i = 0; i < claveNva.value.length; i++) {
            if (claveNva.value[i] === claveNva.value[i].toUpperCase() && claveNva.value[i] !== claveNva.value[i].toLowerCase()) {
                tieneMayuscula = true;
                break;
            };
        };
        if (!tieneMayuscula) {
            document.getElementById("validar_claveNva").innerHTML = "La contraseña debe contener al menos una letra mayúscula";
            error = true;
            claveNva.focus();
        };
    };
    if (confirmClave.value === "") {
        document.getElementById("validar_confirmClave").innerHTML = "Las claves deben coincidir";
        error = true;
        confirmClave.focus();
    } else if (confirmClave.value !== claveNva.value) {
        document.getElementById("validar_confirmClave").innerHTML = "Las claves deben coincidir";
        error = true;
        confirmClave.focus();
    };

    if (!error) {
        let user = document.getElementById("usuarioNvo");
        let email = document.getElementById("email");
        let clave = document.getElementById("claveNva");
        try{
    
        let usuario = {
        nombre: user.value,
        email: email.value,
        password: clave.value,
        };

        var options = {
        body:JSON.stringify(usuario),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow'
        };
    
        const res = await fetch("http://pysebas.pythonanywhere.com/usuarios", options);
    
        if (!res.ok){
        throw new Error(`Error:${res.status}`);
        
        } else{
        
        alert("Registro grabado");
        localStorage.setItem('user',user.value);
        localStorage.setItem('rol','user');
        window.location.href = "ofertateturno.html";
        
        };
        
        } catch (error) {
        alert("Error al Grabar");
        
        };
    };

}

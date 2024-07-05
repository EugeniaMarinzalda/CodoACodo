function redireccionar() {
    // Redireccionar a la página deseada
    window.location.href = "index.html";
};


const loginForm = document.querySelector('#login-form');
loginForm.onsubmit = login;

async function dataFetch(){
    try{
        const response = await fetch("http://pysebas.pythonanywhere.com/usuarios");
        const users = await response.json();
        return users;  
    }catch(error){
        document.body.textContent =`"Error de red:" ${error.message}`;
    };
};

async function validarUsuario(nombre,password){
    const users = await dataFetch();
    const user = users.find(user => user.nombre === nombre && user.password === password);
    if(user){
        if(user.rol === 'admin'){
            sessionStorage.setItem('admin',true);
            window.location.href = "admin.html";
        }else{
            localStorage.setItem('user',usuario.value);
            redireccionar();    
        };
    }else{
        document.getElementById("validar_usuario").innerHTML = "Usuario inexistente o datos mal ingresados. Reintente";
    };
};    

async function login(event) {
    event.preventDefault(); 
    let usuario = document.getElementById("usuario");
    let clave = document.getElementById("clave");
    let error = false;
    
    if (usuario.value == "") {
        document.getElementById("validar_usuario").innerHTML = "Debe completar el usuario";
        error = true;
        usuario.focus();
    };


    if (clave.value == "") {
        document.getElementById("validar_clave").innerHTML = "Debe ingresar la clave";
        error = true;
        clave.focus();
    };
    
    if(!error){
        validarUsuario(usuario.value,clave.value);
    };
      
};

/*Si la direccion es admin.html pero el usuario no es administrador se redirige al registro 

if(window.location.pathname === '/admin.html' && !sessionStorage.getItem('admin')){
    window.location.href = '/registro.html';

    
};

*/


document.addEventListener('DOMContentLoaded', function () {
    const usuarioHeader = document.getElementById('usuario');
    const btnCerrarAdm = document.getElementById('btnCerrarAdm');

    // Verificar si el usuario está logueado
    const username = localStorage.getItem('user');
    if (username) {
        usuarioHeader.textContent = `Hola, ${username}`;
    } else {
        usuarioHeader.textContent = 'Lo siento, usuario no encontrado';
    }

    // Verificar si el botón de cerrar sesión existe
    if (btnCerrarAdm) {
        btnCerrarAdm.addEventListener('click', function () {
            localStorage.removeItem('user'); 
            window.location.href = 'index.html';
        });
    } 
    const nav = document.querySelector('.nav');
    nav.remove();
    const select = `<select id="options">
            <option value="user">Usuarios</option>
            <option value="trat">Tratamientos</option>
        </select>`;
    const headerContainer = document.getElementById('header-container');
    headerContainer.innerHTML += select; 
    const options = document.querySelector('#options');
    const vueUser = document.querySelector('#vue-user');
    const vueTrat = document.querySelector('#app');
    
    function seleccionar(){
        const valor = options.value;
        if(valor == "user"){
            vueUser.style.display = "block";
            vueTrat.style.display = "none";
        }else{
            vueTrat.style.display = "block";
            vueUser.style.display = "none";
        };
    };
    
    options.onchange = seleccionar;
    
    seleccionar();
});



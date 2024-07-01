document.addEventListener('DOMContentLoaded', function () {
    
    const headerContainer = document.getElementById( 'header-container');
    
    const headerHtml = `
        <a href="index.html">
            <img class="logo" src="./img/ODUJEN1.svg" alt="logo">
        </a>
        
        <div id="saludo"></div>
        
        <button class="abrir-menu" id="abrir"><i class="bi bi-list"></i></button>
        
        <nav class="nav" id="nav">
            <button class="cerrar-menu" id="cerrar"><i class="bi bi-x"></i></button>
            <ul class="nav-list">
                <li><a href="index.html#sec-servi">Tratamientos</a></li>
                <li><a href="index.html#staff">Profesionales</a></li>
                <li><a href="index.html#contact">Contáctanos</a></li>
                <li><a href="index.html#branch">Locales</a></li>
                <li>
                    <a class="btn" href="registro.html" id="login-link">
                        <i class="fas fa-sign-in-alt login-icon"></i>
                        <span id="login-text" class="login-text">Iniciar Sesion</span>
                    </a>
                </li>
            </ul>
        </nav>` ;
        
    headerContainer.innerHTML = headerHtml;
    
    
    const msjSaludo = document.querySelector('#saludo');

if (localStorage.getItem('user')){
        msjSaludo.innerHTML=`Hola ${localStorage.getItem('user')} <button id="sesion-off">Cerrar sesion<button/>`;
        
    const sesionOff = document.querySelector('#sesion-off');
        
    seOff = () => {
            localStorage.removeItem('user');
            window.location.href ='index.html';
    };
        
    sesionOff.onclick = seOff;
};
    
    const abrirMenuBtn = document.getElementById('abrir');
    const cerrarMenuBtn = document.getElementById('cerrar');
    const nav = document.getElementById('nav');

    abrirMenuBtn.addEventListener('click', function() {
        nav.classList.add('visible');
    });

    cerrarMenuBtn.addEventListener('click', function() {
        nav.classList.remove('visible');
    });
});

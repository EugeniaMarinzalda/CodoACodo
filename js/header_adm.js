document.addEventListener('DOMContentLoaded', function () {
    const headerContainer = document.getElementById('header-container');

    // Contenido del encabezado
    const headerHtml = `
        <a href="index.html">
            <img class="logo" src="./img/ODUJEN1.svg" alt="logo">
        </a>
        
        <button class="abrir-menu" id="abrir"><i class="bi bi-list"></i></button>
        
        <nav class="nav" id="nav">
            <button class="cerrar-menu" id="cerrar"><i class="bi bi-x"></i></button>
            <ul class="nav-list">
                 <select class="nav-select" id="navSelect" onchange="navigateToPage()">
            <option value="">Selecciona una opción</option>
            <option value="admin.html">Usuarios</option>
            <option value="tratamientos.html">Tratamientos</option>
        </select>
                    <a class="btn" href="index.html" id="logout-link">
            <i class="fas fa-sign-out-alt"></i>
            Cerrar sesión
        </a>
                </li>
            </ul>
        </nav>`;


        

    headerContainer.innerHTML = headerHtml;

    // Verificar estado de sesión y actualizar texto del enlace de inicio de sesión
    const loginLink = document.getElementById('login-link');
    const loginText = document.getElementById('login-text');

    if (localStorage.getItem('user')) {
        loginText.innerHTML = `${localStorage.getItem('user')}`;
        loginLink.href = 'admin.html'; 
    } else {
        loginText.innerHTML = `Iniciar Sesión`;
        loginLink.href = 'registro.html'; 
    }

    // Menú hamburguesa
    const abrirMenuBtn = document.getElementById('abrir');
    const cerrarMenuBtn = document.getElementById('cerrar');
    const nav = document.getElementById('nav');

    abrirMenuBtn.addEventListener('click', function () {
        nav.classList.add('visible');
    });

    cerrarMenuBtn.addEventListener('click', function () {
        nav.classList.remove('visible');
    });

    // Desplazamiento suave del scroll para enlaces internos en index.html
    if (window.location.pathname.includes('index.html')) {
        const header = document.querySelector('header');
        const headerHeight = header ? header.offsetHeight : 0;

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight - 30;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
});

function navigateToPage() {
    var select = document.getElementById("navSelect");
    var selectedValue = select.value;
    if (selectedValue) {
        window.location.href = selectedValue;
    }
}

document.getElementById("cerrar").addEventListener("click", function() {
    document.getElementById("nav").style.display = "none";
});
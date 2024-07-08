/*
console.log(location.search);     // lee los argumentos pasados a este formulario
var id = location.search.substr(4);  // producto_update.html?id=1
console.log(id);

const { createApp } = Vue;

createApp({
    data() {
        return {
            url: "https://pysebas.pythonanywhere.com/usuarios/" + id,
            nombre: '',
            email: '',
            password: '',
            rol: '',
            error: false,
            cargando: true,
        };
    },
    created() {
        this.dataFetch();
    },
    methods: {
        async dataFetch() {
            try {
                const res = await fetch(this.url);
                if (!res.ok) {
                    throw new Error('mala respuesta de red');
                }
                const data = await res.json();
                this.nombre = data.nombre;
                this.email = data.email;
                this.password = data.password;
                this.rol = data.rol;
                this.cargando = false;
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        },
        async modificar() {
            try {

                let usuario = {
                    nombre: this.nombre,
                    email: this.email,
                    password: this.password,
                    rol: this.rol,
                };

                var options = {
                    body: JSON.stringify(usuario),
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    redirect: 'follow'
                };

                const res = await fetch(this.url, options);

                if (!res.ok) {
                    throw new Error(`Error:${res.status}`);

                } else {

                    alert("usuario actualizado");
                    window.location.href = "admin.html";

                };

            } catch (error) {
                alert(`Error al Grabar ${error.message}`);

            };
        }
    }
}).mount('#app');

*/

document.addEventListener('DOMContentLoaded', (event) => {
    const evento = document.getElementById('evento');

    console.log(location.search);     // lee los argumentos pasados a este formulario
    var id = location.search.substr(4);  // producto_update.html?id=1
    console.log(id);

    async function dataFetch() {
        try {
            const url = "https://pysebas.pythonanywhere.com/usuarios/" + id;
            const res = await fetch(url);
            if (!res.ok) {
                throw new Error('Mala respuesta de red');
            }
            const data = await res.json();
            document.getElementById('nombre').value = data.nombre;
            document.getElementById('email').value = data.email;
            document.getElementById('password').value = data.password;
            document.getElementById('rol').value = data.rol;
        } catch (error) {
            evento.innerText = "Error fetching data: " + error.message;
        }
    }

    async function modificar() {
        try {
            const url = "https://pysebas.pythonanywhere.com/usuarios/" + id;
            let usuario = {
                nombre: document.getElementById('nombre').value,
                email: document.getElementById('email').value,
                password: document.getElementById('password').value,
                rol: document.getElementById('rol').value,
            };

            var options = {
                body: JSON.stringify(usuario),
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            };

            const res = await fetch(url, options);

            if (!res.ok) {
                throw new Error(`Error: ${res.status}`);
            } else {
                evento.innerText = "Usuario actualizado correctamente";
                evento.style.color = "#f8b1b0";
                setTimeout(() => {
                    window.location.href = "admin.html";
                }, 2000);
            }
        } catch (error) {
            evento.innerText = "Error al grabar: " + error.message;
            evento.style.color = "red";
        }
    }

    document.querySelector('.grabar').addEventListener('click', modificar);

    dataFetch();
});


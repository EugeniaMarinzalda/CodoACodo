const { createApp } = Vue;

createApp({
    data() {
        return {
            usuarios: [],
            url: "http://pysebas.pythonanywhere.com/usuarios",
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
                const res = await fetch("http://pysebas.pythonanywhere.com/usuarios");
                if (!res.ok) {
                    throw new Error('mala respuesta de red');
                }
                const data = await res.json();
                this.usuarios = data;
                this.cargando = false;
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        },
        async eliminar(id) {

            const url = this.url + '/' + id;

            var options = {

                method: 'DELETE',

            }
            try {
                const res = await fetch(url, options);
                if (!res.ok) {
                    throw new Error('mala respuesta de red');
                }
                alert('Registro Eliminado');
                location.reload();

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
    }
}).mount('#app');

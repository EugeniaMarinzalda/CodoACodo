const { createApp } = Vue;

createApp({
    data() {
        return {
            tratamientos: [],
            url: 'https://lorenacantella.pythonanywhere.com/tratamientos',
            error: false,
            cargando: true,
            id: 0,
            nombre: "",
            descripcion: "",
            duracion: "",
            dia_semana: "",
            hora: "",
            whatsappNumber: '1234567890'  // Reemplaza con el número de teléfono de WhatsApp
        }
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.tratamientos = data;
                    this.cargando = false;
                })
                .catch(err => {
                    console.error(err);
                    this.error = true;
                });
        },
        eliminar(id) {
            const url = `${this.url}/${id}`;
            fetch(url, { method: 'DELETE' })
                .then(res => res.text())
                .then(() => {
                    alert('Registro Eliminado');
                    this.fetchData(this.url); // Actualiza los datos en lugar de recargar la página
                });
        },
        grabar() {
            let tratamiento = {
                nombre: this.nombre,
                descripcion: this.descripcion,
                duracion: this.duracion,
                dia_semana: this.dia_semana,
                hora: this.hora
            };
            fetch(this.url, {
                body: JSON.stringify(tratamiento),
                method: 'POST',
                headers: { 'Content-Type': 'application/json' }
            })
                .then(() => {
                    alert("Registro grabado");
                    this.fetchData(this.url); // Actualiza los datos en lugar de redirigir
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Grabar");
                });
        },
        turno(elemento) {
            const message = `Hola, me gustaría pedir un turno para el tratamiento: ${elemento.nombre}.`;
            const url = `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(message)}`;
            window.location.href = url;
        }
    },
    created() {
        this.fetchData(this.url);
    }
}).mount('#app');

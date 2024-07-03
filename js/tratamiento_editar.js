console.log(location.search); // lee los argumentos pasados a este formulario
var id = location.search.substr(4); // producto_update.html?id=1
console.log(id); // Debe mostrar el id correcto
const { createApp } = Vue;
createApp({
  data() {
    return {
      id: 0,
      nombre: "",
      descripcion: "",
      duracion: "",
      dia_semana: "",
      hora: "",
      url: 'https://lorenacantella.pythonanywhere.com/tratamientos/' + id, // Asegúrate de que la URL esté bien formada
    }
  },
  methods: {
    fetchData(url) {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log(data); // Verificar los datos recibidos
          this.id = data.id;
          this.nombre = data.nombre;
          this.descripcion = data.descripcion;
          this.duracion = data.duracion;
          this.dia_semana = data.dia_semana;
          this.hora = data.hora;
        })
        .catch(err => {
          console.error(err);
          this.error = true;
        });
    },
    modificar() {
      let tratamiento = {
        nombre: this.nombre,
        descripcion: this.descripcion,
        duracion: this.duracion,
        dia_semana: this.dia_semana,
        hora: this.hora,
      };
      var options = {
        body: JSON.stringify(tratamiento),
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow',
      };
      fetch(this.url, options)
        .then(function () {
          alert("Registro modificado");
          window.location.href = "./tratamientos.html"; // navega a tratamientos.html
        })
        .catch(err => {
          console.error(err);
          alert("Error al Modificar");
        });
    },
  },
  created() {
    this.fetchData(this.url);
  },
}).mount('#app');

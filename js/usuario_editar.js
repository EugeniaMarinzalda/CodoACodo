console.log(location.search);     // lee los argumentos pasados a este formulario
var id=location.search.substr(4);  // producto_update.html?id=1
console.log(id);

const { createApp } = Vue;

createApp({
  data() {
    return {
        url:"http://pysebas.pythonanywhere.com/usuarios/" + id,
        nombre:'',
        email:'',
        password:'',
        error:false,
        cargando:true,
    };
  },
    created(){
        this.dataFetch();
    },
  methods: {
    async dataFetch() {
        try {
           const res =  await fetch(this.url);
           if (!res.ok) {
               throw new Error('mala respuesta de red');    
           }
           const data = await res.json();
           this.nombre = data.nombre;
           this.email = data.email;
           this.password = data.password;
           this.cargando = false;
        } catch(error) {
            console.error("Error fetching data:", error);
          }
     },
     async modificar() {
            try{
    
            let usuario = {
            nombre: this.nombre,
            email: this.email,
            password: this.password,
            };

            var options = {
            body:JSON.stringify(usuario),
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            redirect: 'follow'
            };
    
            const res = await fetch(this.url, options);
    
            if (!res.ok){
                throw new Error(`Error:${res.status}`);
        
            } else{
        
            alert("usuario actualizado");
            window.location.href = "admin.html";
        
            };
        
            } catch (error) {
            alert(`Error al Grabar ${error.name}`);
        
            };
       } 
   }
}).mount('#app');

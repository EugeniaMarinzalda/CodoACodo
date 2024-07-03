document.getElementById("header").innerHTML=` <nav class="navbar navbar-expand-sm navbar-light bg-light">
<div class="container">
  <a class="navbar-brand" href="index.html">Codo a Codo</a>
  <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
      aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavId">
      <ul class="navbar-nav me-auto mt-2 mt-lg-0">
          <li class="nav-item">
              <a class="nav-link active" href="index.html" aria-current="page">Home<span class="visually-hidden">(current)</span></a>
          </li>
        
          <li class="nav-item dropdown" id="crud"   >
              <a class="nav-link dropdown-toggle" href="#" id="dropdownId"  data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Administracion</a>
              <div class="dropdown-menu" aria-labelledby="dropdownId" >
                  <a class="dropdown-item" href="productos.html">Productos</a>
                  <a class="dropdown-item" href="tipoproductos.html">Tipo Producto</a>
              </div>
          </li>
        <li class="nav-item">
              <a class="nav-link" href="registro.html">Registro</a>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="login.html">Login</a>
          </li>
      </ul>
  </div>
</div>
</nav>
`
if (sessionStorage.getItem("adm")!="1"){
    document.querySelector("#crud").setAttribute('style', 'display:none')
}else{
    document.querySelector("#crud").setAttribute('style', 'display:on')
}
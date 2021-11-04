let botonRegistrar = document.querySelector(".btn-registrar");

let arrayProductos = [];

function impExterior(valor) {
  return valor * 1.65
}

class Hardware {
  constructor(id, nombre, precio, img) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.img = img
  }
}


botonRegistrar.addEventListener("click", function(e){
  e.preventDefault()
  
  let inputID = document.querySelector(".input-id").value;
  let inputNombre = document.querySelector(".input-nombre").value;
  let inputPrecio = document.querySelector(".input-precio").value;
  let inputImagen = document.querySelector(".input-stock").value;
  

  
    let contenedor  = `
                        <div class="card card-style row">
                          <img src="${inputImagen}" class="card-img-top" alt="...">
                          <div class="card-body">
                          <p class="listado-productos">
                          id: ${inputID}
                          <br>
                          Nombre: ${inputNombre}
                          <br>
                          Precio: ${impExterior(inputPrecio)}
                        </div>
                        </div>
                        <br>                                          
                      `
  
 document.querySelector(".productos-registrados").innerHTML += contenedor;
  
  arrayProductos.push(new Hardware(inputID, inputNombre, impExterior(inputPrecio), inputImagen))

  localStorage.setItem("Producto", JSON.stringify(arrayProductos));

  
})



function obtenerStorage(){
  let obtenerStorage = JSON.parse( localStorage.getItem("Producto"))
  console.log(obtenerStorage)
}


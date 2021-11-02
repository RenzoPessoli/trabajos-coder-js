let botonRegistrar = document.querySelector(".btn-registrar");

let arrayProductos = [];

function impExterior(valor) {
  return valor * 1.65
}

class Hardware {
  constructor(id, nombre, precio, stock) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
  }
}


botonRegistrar.addEventListener("click", function(e){
  e.preventDefault()
  
  let inputID = document.querySelector(".input-id").value;
  let inputNombre = document.querySelector(".input-nombre").value;
  let inputPrecio = document.querySelector(".input-precio").value;
  let inputStock = document.querySelector(".input-stock").value;

  
    let contenedor  = `
                        <p class="listado-productos">
                          id: ${inputID}
                          <br>
                          Nombre: ${inputNombre}
                          <br>
                          Precio: ${impExterior(inputPrecio)}
                          <br>
                          Stock: ${inputStock}
                        <p/>
                                                                  
                      `
  
  document.querySelector(".productos-registrados").innerHTML += contenedor;
  
  arrayProductos.push(new Hardware(inputID, inputNombre, impExterior(inputPrecio), inputStock))

  

  console.log(arrayProductos)
})
  

 



  
  

 
                                                              










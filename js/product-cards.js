function cargarProductos() {
  // Cargar el JSON de forma síncrona
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "productos.json", false);
  xhr.send();

  // Parsear el JSON
  var data = JSON.parse(xhr.responseText);

  // Renderizar el título
  document.getElementById("titulo").textContent = data.titulo;

  // Renderizar productos
  var productosContainer = document.getElementById("productos");
  data.productos.forEach(function (producto) {
    var columnDiv = document.createElement("div");
    columnDiv.className = "col-12 col-md-6 col-lg-3 mb-2";

    var cardDiv = document.createElement("div");
    cardDiv.className = "card";

    // Crear elementos para nombre, precio e imagen
    var imagenElement = document.createElement("img");
    imagenElement.src = producto.imagen;
    imagenElement.alt = producto.nombre;
    imagenElement.classList.add("card-img-top");

    var cardBody = document.createElement("div");
    cardBody.className = "card-body d-flex flex-column justify-content-around";

    var nombreElement = document.createElement("h5");
    nombreElement.className = "card-title";
    nombreElement.textContent = producto.nombre;

    var precioElement = document.createElement("p");
    precioElement.className = "card-text";
    precioElement.textContent = "Precio: $" + producto.precio;

    // Agregar Elementos al cuerpo de la tarjeta
    cardBody.appendChild(nombreElement);
    cardBody.appendChild(precioElement);

    // Agregar elementos a la tarjeta
    cardDiv.appendChild(imagenElement);
    cardDiv.appendChild(cardBody);

    // Agregar tarjeta a la columna
    columnDiv.appendChild(cardDiv);

    // Agregar el contenedor del producto al contenedor de productos
    productosContainer.appendChild(columnDiv);
  });
}

// Llamar a la función para cargar y renderizar productos al cargar la página
window.onload = cargarProductos;

// Crear un elemento y sus hijos
var navBar = document.createElement("nav");
navBar.classList.add("navbar", "navbar-expand-lg");
navBar.innerHTML = `<div class="container-fluid">
<a class="navbar-brand" href="/">Meraki & Blue</a>
<button
  class="navbar-toggler"
  type="button"
  data-bs-toggle="collapse"
  data-bs-target="#navbarSupportedContent"
  aria-controls="navbarSupportedContent"
  aria-expanded="false"
  aria-label="Toggle navigation"
>
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav d-flex ms-auto mb-2 mb-lg-0">
    <li class="nav-item">
      <a class="nav-link" aria-current="page" href="/index.html"
        >Home</a
      >
    </li>
    <li class="nav-item dropdown">
      <a
        class="nav-link dropdown-toggle"
        href="/productos"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Productos
      </a>
      <ul class="dropdown-menu">
        <li>
          <a class="dropdown-item" href="/productos"
            >Todos los Productos</a
          >
        </li>
        <li><a class="dropdown-item" href="/productos/collares">Collares</a></li>
        <li><a class="dropdown-item" href="/productos/accesorios">Accesorios</a></li>
        <li><a class="dropdown-item" href="/productos/anillos">Anillos</a></li>
        <li>
          <a class="dropdown-item" href="/productos/temporada">Productos de temporada</a>
        </li>
        <li><a class="dropdown-item" href="/productos/aritos">Aritos</a></li>
      </ul>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/nosotros">Nosotros</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/contactanos">Contáctanos</a>
    </li>
  </ul>
</div>
</div>`;

// Agregar como primer elemento dentro del body
document.body.insertBefore(navBar, document.body.firstChild);

// Crear otro elemento y sus hijos
var footer = document.createElement("footer");
footer.classList.add("text-center");
footer.innerHTML = `<div class="container p-4">
  <p>Meraki & Blue</p>
  <section class="m-4">
    <p>Instagram - @Meraki&Blue</p>
    <p>Tik tok - @MerakiandBlue</p>
  </section>
</div>
<div class="container-fluid p-2" id="copyright">
  <p>© 2023 Meraki & Blue. All rights reserved</p>
</div>`;

// Agregar al final del body
document.body.appendChild(footer);

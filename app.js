// Datos simulados de productos para café molido
const cafeMolido = [
  {
    id: 101,
    name: "Café Molido Clásico22",
    price: 9000,
    image: "cafeuno.jpeg",
  },
  {
    id: 102,
    name: "Café Molido Clásico33",
    price: 9000,
    image: "cafedos.jpeg",
  },
  {
    id: 101,
    name: "Café Molido Clásico22",
    price: 9000,
    image: "cafetres.jpeg",
  },

  {
    id: 101,
    name: "Café Molido Clásico22",
    price: 9000,
    image: "cafecuatro.jpeg",
  },

  {
    id: 101,
    name: "Café Molido Clásico22",
    price: 9000,
    image: "cafecinco.jpeg",
  },

  //SEGUNDA SECCION CAFE
  {
    id: 101,
    name: "Café Molido Clásico22",
    price: 9000,
    image: "cafeuno.jpeg",
  },
  {
    id: 101,
    name: "Café Molido Clásico22",
    price: 9000,
    image: "cafeuno.jpeg",
  },
  {
    id: 101,
    name: "Café Molido Clásico22",
    price: 9000,
    image: "cafedos.jpeg",
  },
  {
    id: 101,
    name: "Café Molido Clásico22",
    price: 9000,
    image: "cafecuatro.jpeg",
  },
  {
    id: 101,
    name: "Café Molido Clásico22",
    price: 9000,
    image: "cafecuatro.jpeg",
  },

  // Agrega más productos de café molido aquí
];

//************************************************************************** */

// Datos simulados de productos para café en grano
const cafeEnGrano = [
  {
    id: 201,
    name: "Café en Grano Premium",
    price: 10000,
    image: "granouno.jpeg",
  },
  {
    id: 202,
    name: "Café en Grano Orgánico",
    price: 9500,
    image: "granodos.jpeg",
  },

  {
    id: 202,
    name: "Café en Grano Orgánico",
    price: 9500,
    image: "granotres.jpeg",
  },
  {
    id: 202,
    name: "Café en Grano Orgánico",
    price: 9500,
    image: "cafecuatro.jpeg",
  },
  {
    id: 202,
    name: "Café en Grano Orgánico",
    price: 9500,
    image: "cafecinco.jpeg",
  },
  {
    id: 202,
    name: "Café en Grano Orgánico",
    price: 9500,
    image: "granoseis.jpeg",
  },
  {
    id: 202,
    name: "Café en Grano Orgánico",
    price: 9500,
    image: "granodos.jpeg",
  },
  {
    id: 202,
    name: "Café en Grano Orgánico",
    price: 9500,
    image: "granotres.jpeg",
  },
  {
    id: 202,
    name: "Café en Grano Orgánico",
    price: 9500,
    image: "granouno.jpeg",
  },
  {
    id: 202,
    name: "Café en Grano Orgánico",
    price: 9500,
    image: "granodos.jpeg",
  },

  // Agrega más productos de café en grano aquí
];

// Función para cargar imágenes dinámicamente en una sección
function cargarImagenesEnSeccion(seccion, productos) {
  const contenedor = document.querySelector(seccion);

  productos.forEach((producto) => {
    const productItem = document.createElement("div");
    productItem.classList.add("product-item");

    const productImage = document.createElement("img");
    productImage.src = `imagenes/${producto.image}`;
    productImage.alt = producto.name;
    productImage.classList.add("product-image");
    productItem.appendChild(productImage);

    const productName = document.createElement("div");
    productName.textContent = producto.name;
    productName.classList.add("product-name");
    productItem.appendChild(productName);

    const productPrice = document.createElement("div");
    productPrice.textContent = `$${producto.price}`;
    productPrice.classList.add("product-price");
    productItem.appendChild(productPrice);

    contenedor.appendChild(productItem);
  });
}

// Cargar imágenes de café molido en la sección "Café molido"
cargarImagenesEnSeccion("#cafe-molido-section", cafeMolido);

// Cargar imágenes de café en grano en la sección "Café en Grano"
cargarImagenesEnSeccion("#cafe-en-grano-section", cafeEnGrano);

// Evento de clic para mostrar/ocultar el menú desplegable al hacer clic en el botón "Productos"

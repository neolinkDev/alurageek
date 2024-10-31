import { getProducts } from '../services/api.js';

 // Función asíncrona que renderiza los productos de la API y los muestra en el DOM
export async function renderProducts() {

  // Llamamos a la función `getProducts` para obtener los datos de los productos
  const products = await getProducts();

  // Selecciona el elemento donde se van a renderizar los productos
  const $productsContainer = document.getElementById('products-list');

  // Usamos forEach para crear y agregar elementos HTML directamente al DOM
  products.forEach((product) => {
    const productElement = document.createElement('div');
    productElement.classList.add('product');

    // Card del item
    productElement.innerHTML = `
      <div class="card" style="width: 196px;">

        <div class="card-img-container">
          <img
            src="${product.image}"
            class="card-img-top"
            alt="Imagen del producto"
          />
        </div>
      
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
      
          <div class="card-actions">
            <p class="card-price">
              ${product.price}
            </p>
            <img src="public/icon-trash2.svg" alt="Eliminar card">
          </div>

        </div>
      </div> 
    `;

    $productsContainer.appendChild(productElement);
  });
}

import { deleteProduct, getProducts } from '../services/api.js';
import { formatPrice } from '../utils/formatPrice.js';

 // Función asíncrona que renderiza los productos de la API y los muestra en el DOM
export async function renderProducts() {

  // Llamamos a la función `getProducts` para obtener los datos de los productos
  const products = await getProducts();
  
  // Selecciona el elemento donde se van a renderizar los productos
  const $productsContainer = document.getElementById('products-list');

  if(products.length === 0){
    $productsContainer.innerHTML = '<p class="err">No hay productos</p>';
  } else {
    const fragment = document.createDocumentFragment();

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
                ${formatPrice(product.price)}
              </p>
              <button id="delete-btn" data-id=${product.id}>
                <img src="public/icon-trash2.svg" alt="Eliminar card">
              </button>
            </div>
  
          </div>
        </div> 
      `;
  
      fragment.appendChild(productElement);
      
    });
    $productsContainer.appendChild(fragment);
  }

  deleteProductCard()
}

/**
 * Llama a la función `deleteProduct` para eliminar la card mediante la requisición DELETE
 */
function deleteProductCard() {
  const $deleteButtons = document.querySelectorAll('#delete-btn');
  
  $deleteButtons.forEach(( deleteBtn ) => {
    deleteBtn.addEventListener('click', async (e) => {
      const productId = e.target.closest('button').dataset.id;
      await deleteProduct(productId)
    })
  })

 
}

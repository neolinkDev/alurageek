/**
 * Si la solicitud fetch es exitosa, devuelve un array de objetos con los productos
 * Si ocurre un error, muestra un mensaje de error y devuelve null
 *
 * @returns {Promise<Array<Object>|null>}
 */
export async function getProducts() {
  const $productsContainer = document.getElementById('products-list');

  try {
    const response = await fetch('http://localhost:3000/products');
    const json = await response.json();

    if (!response.ok)
      throw { status: response.status, statusText: response.statusText };

    return json;
  } catch (err) {
    let message = err.statusText || 'Error al cargar productos';
    $productsContainer.classList.remove('scroll-container');
    $productsContainer.innerHTML = `<p class="err">Error ${err.status}: ${message}</p>`;
  }
}

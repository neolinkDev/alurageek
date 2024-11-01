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

/**
 * Envía una solicitud HTTP POST para crear un nuevo producto en la API fake
 *
 * @param {Object} newProduct
 */
export async function postProduct(newProduct) {
  const $form = document.querySelector('[data-form]');

  try {
    const response = await fetch('http://localhost:3000/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    });

    const json = await response.json();
    // console.log(json);

    if (!response.ok) {
      throw {
        status: json.status,
        statusText: json.statusText,
      };
    }

    //TODO agregar fn de alerta
    alert('Producto agregado correctamente');
  } catch (err) {
    if (
      !$form.nextElementSibling ||
      !$form.nextElementSibling.classList.contains('err')
    ) {
      let mensaje =
        err.status || 'Ocurrió un Error! No sé pudo agregar el producto.';
      $form.insertAdjacentHTML(
        'afterend',
        `<p class="err"><b>Error: ${mensaje}</b></p>`
      );

      // Seleccionamos el elemento del mensaje de error
      const errElement = $form.nextElementSibling;

      // Eliminamos el elemento después de 2 segundos
      setTimeout(() => {
        errElement.remove();
      }, 2000);
    }
  }
}

/**
 * Realiza la solicitud DELETE a la API fake para eliminar el producto mediante su ID
 * 
 * @param {string} productId 
 */
export async function deleteProduct(productId) {
  const $productsContainer = document.querySelector('.products-container');

  let isDelete = confirm('¿Seguro qué deseas eliminar este Producto?');

  if (isDelete) {
    try {
      const response = await fetch(
        `http://localhost:3000/products/${productId}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const json = await response.json();

      if (!response.ok) {
        throw {
          status: json.status,
          statusText: json.statusText,
        };
      }
    } catch (err) {

      if (
        !$productsContainer.previousElementSibling ||
        !$productsContainer.previousElementSibling.classList.contains('err')
      ) {

        let mensaje =
          err.status || 'Ocurrió un Error! No sé pudo borrar la card.';
  
        $productsContainer.insertAdjacentHTML(
          'beforebegin',
          `<p class="err"><b>Error: ${mensaje}</b></p>`
        );
  
        // Seleccionamos el elemento del mensaje de error
        const errElement = $productsContainer.previousElementSibling;
  
        // Eliminamos el elemento después de 2 segundos
        setTimeout(() => {
          errElement.remove();
        }, 3000);
      }
    }
  }
}

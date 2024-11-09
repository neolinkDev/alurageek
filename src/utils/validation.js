/**
 * Valida el input de Nombre
 * @param {string} name
 * @returns {boolean}
 */
export function validateInputName(name) {
  // elimina espacios en blanco
  const inputNameValue = name;

  if (inputNameValue.length > 13) {
    alert('El campo Nombre no puede tener más de 13 caracteres.');
    return false;
  }

  return true;
}

/**
 * Valida el input de Nombre
 * @param {string} price
 * @returns {boolean}
 */
export function validateInputPrice(price) {
  // elimina espacios en blanco
  const inputPriceValue = parseFloat(price);

  if (isNaN(inputPriceValue) || inputPriceValue <= 0 || price.length > 6 ) {
    alert('El precio debe ser un número válido.');
    return false;
  }

  return true;
}



/**
 * Valida que la url sea correcta
 *
 * @param {string} url
 * @returns {boolean}
 */
export function isValidImageUrl(url) {
  const urlPattern = /^(https?:\/\/\S*\.(?:png|jpg|jpeg|gif|bmp|webp))$/i;

  if (!urlPattern.test(url)) {
    alert('Por favor, introduce una URL válida para la imagen');
    return false;
  }
  return true;
}

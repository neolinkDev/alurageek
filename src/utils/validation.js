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

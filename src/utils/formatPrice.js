/**
 *
 * @param {Number} price
 * @returns {String} A string that represents the formatted price in Mexican pesos
 */
export const formatPrice = (price) => {

  const formatter = new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN'
  }).format( price );

  return formatter;
};

/**
 * Muestra el año actual
*/
export const yearFn = () => {
  const $year = document.getElementById('year');
  const currentYear = new Date().getFullYear();
  $year.textContent = currentYear
}
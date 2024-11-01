import { handlerProductFormSubmit } from './presentation/formHandler.js';
import { renderProducts } from './presentation/renderProducts.js';
import { yearFn } from './utils/year.js';


document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  handlerProductFormSubmit();
  yearFn();
});

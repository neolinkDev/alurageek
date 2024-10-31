import { handlerProductFormSubmit } from "./presentation/formHandler.js";
import { renderProducts } from "./presentation/renderProducts.js"
import { yearFn } from "./utils/year.js";
// import { getProducts } from "./services/api.js"



document.addEventListener('DOMContentLoaded', () => {
  // getProducts();
  renderProducts();
  handlerProductFormSubmit();
  yearFn();
})
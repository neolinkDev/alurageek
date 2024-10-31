import { postProduct } from '../services/api.js';
import { isValidImageUrl } from '../utils/validation.js';

export function handlerProductFormSubmit() {
  const $form = document.querySelector('[data-form]');

  $form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const { name, price, image } = $form.elements;

    const newProduct = {
      name: name.value.trim(),
      price: price.value,
      image: image.value,
    };

    //
    if ([newProduct.name, newProduct.price, newProduct.image].includes('')) {
      alert('Todos los campos son requeridos');
      return;
    }

    //
    if (!isValidImageUrl(newProduct.image)) return;

    await postProduct(newProduct);
  });
}

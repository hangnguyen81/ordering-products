export const products_url = '/api/products';
export const order_url = '/order';

export const formatPrice = (number) => {
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
    }).format(number)
  }
export const products_url = 'http://localhost:3003/api/products';

export const formatPrice = (number) => {
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
    }).format(number)
  }
import { API_BASE_URL } from "./apiConfig";





export const addToCart = async ({userId, product, quantity}) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/cart/cart/add/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('access_token')}`, 
        },
        body: JSON.stringify({
          cost: product.price,
          cart: userId,
          product: product.id,
          quantity: quantity,
        }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to add to cart');
      }
  
      const data = await response.json();
      console.log(data)
      
      
    } catch (error) {
      console.error('An error occurred while adding to cart', error);
    }
  };
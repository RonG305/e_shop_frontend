
export const API_BASE_URL = "http://192.168.1.196:8000";



export const getToken = () => {
    return localStorage.getItem('access_token');
};

export const fetchCartItems = async() => {
    try {
        const response = await fetch(`${API_BASE_URL}/api/cart/cart`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${getToken()}`
            }
        });

        if(response.ok) {
            const data = await response.json();
            return data.items;
        } else {
            console.log("Error occurred while retrieving cart items");
            return [];
        }
    } catch(error) {
        console.log("An error occurred while retrieving cart items", error);
        return [];
    }
};

export const addToCart = async(product_id, quantity) => {
    try {
        const response = await fetch(`${API_BASE_URL}/api/cart/cart/add/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken()}`
            },
            body: JSON.stringify({ product_id, quantity })
        });

        if(response.ok) {
            console.log("Item added to cart successfully");
        } else {
            console.log("Adding item to cart failed");
        }
    } catch(error) {
        console.log('Error while adding to cart', error);
    }
};

export const removeFromCart = async(item_id) => {
    try {
        const response = await fetch(`${API_BASE_URL}/api/cart/cart/remove/${item_id}/`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${getToken()}`
            }
        });

        if(response.ok) {
            console.log("Item removed from cart successfully");
        } else {
            console.log("Item removal failed");
        }
    } catch(error) {
        console.log('Error while removing item from cart', error);
    }
};


export const clearCart = async () => {
    try {
  
      const response = await fetch(`${API_BASE_URL}/api/cart/cart/clear/`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`
        }
      })
  
      if(!response.ok) {
        throw new Error("Error while clearing cart items")
      }
  
      const data = await response.json()
      console.log(data)
  
    } catch(error) {
      console.log("An error occured while clearing the cart")
    }
  }
  

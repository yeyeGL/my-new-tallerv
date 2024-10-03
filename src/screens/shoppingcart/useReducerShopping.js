// cartReducer.js
export const initialState = {
    cartItems: [],
    total: 0,
  };
  
  export const cartReducer = (state, action) => {
    switch (action.type) {
      case 'SET_CART':
        return { ...state, cartItems: action.payload };
      case 'ELIMINAR_ITEM':
        return {
          ...state,
          cartItems: state.cartItems.filter((item) => item.id !== action.payload),
        };
      case 'CAMBAIR_CANTIDAD':
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: Math.max(1, item.quantity + action.payload.change) }
              : item
          ),
        };
      case 'TOTAL_VENTA':
        return {
          ...state,
          total: state.cartItems.reduce((total, item) => {
            const priceToUse = item.discountedPrice ? item.discountedPrice : item.price;
            return total + priceToUse * item.quantity;
          }, 0),
        };
      default:
        return state;
    }
  };
  
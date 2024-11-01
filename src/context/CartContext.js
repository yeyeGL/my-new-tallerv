import React, { createContext, useReducer } from 'react';
import { cartReducer, initialState } from '../screens/shoppingcart/useReducerShopping';

const CartContext = createContext();

const CartProvider = ({ children, initialCart }) => {
  const [state, dispatch] = useReducer(cartReducer, { ...initialState, cartItems: initialCart });

  return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>;
};

export { CartContext, CartProvider };

import React from 'react';
import { View } from'react-native';
import Rutas from './src/routes/Rutas';
import { CartProvider } from './src/context/CartContext';

export default function App() {
  return (
    <CartProvider initialCart={[]}>
      <View style={{ flex: 1 }}>
        <Rutas />
      </View>
    </CartProvider>
  );
}

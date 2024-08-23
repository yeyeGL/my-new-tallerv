import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import styles from '../components/stylesPurchases';

const Purchases = ({ route }) => {
  const { cartItems } = route.params || {}; 
  if (!cartItems) {
    return (
      <View style={styles.container}>
        <Text>No items in the cart</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Resumen de Compras</Text>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            <Image source={item.image} style={styles.productImage} />
            <View style={styles.productDetails}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
              <Text style={styles.productDescription}>{item.description}</Text>
              <Text style={styles.productQuantity}>Cantidad: {item.quantity}</Text>
              <Text style={styles.productStatus}>Estado: {'Cancelado'}</Text>
            </View>
          </View>
        )}
      />
      <Text style={styles.totalText}>
        Total: ${cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)}
      </Text>
    </View>
  );
};


export default Purchases;

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet, Alert, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../components/stylesCart';

const ShoppingCart = ({ route, navigation }) => {
  const { cart } = route.params;
  const [cartItems, setCartItems] = useState(cart);
  const [paymentAmount, setPaymentAmount] = useState('');

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleQuantityChange = (id, change) => {
    setCartItems(
      cartItems.map((item) => {
        if (item.id === id) {
          const newQuantity = item.quantity + change;
          if (newQuantity < 1) {
            Alert.alert('Error', 'La cantidad debe ser al menos 1');
            return item;
          }
          return { ...item, quantity: newQuantity };
        }
        return item;
      }),
    );
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const Botoncomprar = () => {
    const total = calculateTotal();
    const payment = parseFloat(paymentAmount);

    if (isNaN(payment) || payment < total) {
      Alert.alert('Error', 'El monto ingresado no es suficiente para cubrir el total');
    } else {
      Alert.alert('Exito', 'Pago realizado con exito. ¿Desea ver sus compras?', [
        {
          text: 'Si',
          onPress: () => navigation.navigate('Purchases', { cartItems }),
        },
        {
          text: 'No',
          style: 'cancel',
        },
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Carrito de Compras</Text>
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
              <View style={styles.quantityContainer}>
                <TouchableOpacity style={styles.quantityButton} onPress={() => handleQuantityChange(item.id, -1)}>
                  <Ionicons name="remove" size={20} color="black" />
                </TouchableOpacity>
                <Text style={styles.quantityText}>{item.quantity}</Text>
                <TouchableOpacity style={styles.quantityButton} onPress={() => handleQuantityChange(item.id, 1)}>
                  <Ionicons name="add" size={20} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.removeButton} onPress={() => handleRemoveItem(item.id)}>
                  <Ionicons name="trash" size={20} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: ${calculateTotal().toFixed(2)}</Text>
      </View>
      <View style={styles.paymentContainer}>
        <TextInput
          style={styles.paymentInput}
          placeholder="Ingrese monto para pagar"
          keyboardType="numeric"
          value={paymentAmount}
          onChangeText={setPaymentAmount}
        />
        <TouchableOpacity style={styles.checkoutButton} onPress={Botoncomprar}>
          <Text style={styles.checkoutButtonText}>Proceder al Pago</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ShoppingCart;

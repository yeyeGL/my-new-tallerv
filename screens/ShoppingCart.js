import React, { useState } from 'react';
import { View, Text, Button, FlatList, Image, Alert, TextInput } from 'react-native';
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

  const handleCheckout = () => {
    const total = calculateTotal();
    const payment = parseFloat(paymentAmount);

    if (isNaN(payment) || payment < total) {
      Alert.alert('Error', 'El monto ingresado no es suficiente para cubrir el total');
    } else {
      Alert.alert('Éxito', 'Pago realizado con éxito. ¿Desea ver sus compras?', [
        {
          text: 'Sí',
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
                <Button title="-" onPress={() => handleQuantityChange(item.id, -1)} />
                <Text style={styles.quantityText}>{item.quantity}</Text>
                <Button title="+" onPress={() => handleQuantityChange(item.id, 1)} />
                <Button title="Eliminar" onPress={() => handleRemoveItem(item.id)} color="red" />
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
        <Button title="Proceder al Pago" onPress={handleCheckout} color={"#6200EE"} />
      </View>
    </View>
  );
};

export default ShoppingCart;

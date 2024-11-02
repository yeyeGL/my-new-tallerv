import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Button, FlatList, Image, Alert, TextInput } from 'react-native';
import styles from './stylesCart';
import { CartContext } from '../../context/CartContext';
import { useNavigation } from '@react-navigation/native';
import { handleIntregrationMP } from '../../utils/MPReference';
import * as WebBrowser from 'expo-web-browser'; // Importa WebBrowser correctamente

const ShoppingCart = ({ route }) => {
  const navigation = useNavigation();
  const { state, dispatch } = useContext(CartContext);
  const { cart } = route.params;
  const [paymentAmount, setPaymentAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  useEffect(() => {
    dispatch({ type: 'SET_CART', payload: cart });
  }, [cart]);

  useEffect(() => {
    dispatch({ type: 'TOTAL_VENTA' });
  }, [state.cartItems]);

  const handleRemoveItem = (id) => {
    dispatch({ type: 'ELIMINAR_ITEM', payload: id });
  };

  const handleQuantityChange = (id, change) => {
    dispatch({ type: 'CAMBAIR_CANTIDAD', payload: { id, change } });
  };

  const calculateTotal = () => {
    dispatch({ type: 'TOTAL_VENTA' });
    return state.total;
  };

  const handleCheckout = () => {
    const total = calculateTotal();
    const payment = paymentMethod === 'Monto' ? parseFloat(paymentAmount) : total;

    if (paymentMethod === 'Monto' && (isNaN(payment) || payment < total)) {
      Alert.alert('Error', 'El monto ingresado no es suficiente para cubrir el total');
    } else {
      Alert.alert('Exito', `Pago realizado con exito mediante ${paymentMethod}. ¿Desea ver sus compras?`, [
        {
          text: 'Si',
          onPress: () => navigation.navigate('Purchases', { cartItems: state.cartItems }),
        },
        {
          text: 'No',
          style: 'cancel',
        },
      ]);
    }
  };

  const handleBuy = async () => {
    try {
      const initPoint = await handleIntregrationMP(state.cartItems);
      await WebBrowser.openBrowserAsync(initPoint);
    } catch (error) {
      Alert.alert('Error', 'Hubo un problema al procesar el pago. Por favor, inténtelo de nuevo.');
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Carrito de Compras</Text>
      <FlatList
        data={state.cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            <Image source={item.image} style={styles.productImage} />
            <View style={styles.productDetails}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>
                ${item.discountedPrice ? item.discountedPrice.toFixed(2) : item.price.toFixed(2)}
              </Text>
              <Text style={styles.productDescription}>{item.description}</Text>
              <View style={styles.quantityContainer}>
                <Button title="-" onPress={() => handleQuantityChange(item.id, -1)} color={'#6200EE'} />
                <Text style={styles.quantityText}>{item.quantity}</Text>
                <Button title="+" onPress={() => handleQuantityChange(item.id, 1)} color={'#6200EE'} />
                <Text> </Text>
                <Button title="Eliminar" onPress={() => handleRemoveItem(item.id)} color="red" />
              </View>
            </View>
          </View>
        )}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: ${state.total.toFixed(2)}</Text>
      </View>
      <View style={styles.paymentContainer}>
        
        {paymentMethod === 'Monto' && (
          <TextInput
            style={styles.paymentInput}
            placeholder="Ingrese monto para pagar"
            keyboardType="numeric"
            value={paymentAmount}
            onChangeText={setPaymentAmount}
          />
        )}
        <Button title="Proceder al Pago" onPress={handleBuy} color={'#2700EE'} />
      </View>
    </View>
  );
};

export default ShoppingCart;

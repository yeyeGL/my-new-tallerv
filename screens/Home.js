import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Modal, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../components/stylesHome';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => setMenuVisible(!isMenuVisible);

  const menuItems = [
   
    { name: 'Compras', screen: 'Purchases' },
    { name: 'Ofertas', screen: 'Offers' },
    { name: 'Categorías de artículos', screen: 'Categories' },
    { name: 'Lista de artículos', screen: 'ListProducts' },
    { name: 'Detalle de productos', screen: 'ProductDetail' },
    { name: 'Sucursal de pago', screen: 'PaymentBranch' },
    { name: 'Ayuda y Soporte', screen: 'HelpSupport' },
  ];

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
        <Ionicons name="menu" size={30} color="black" />
      </TouchableOpacity>

      <View style={styles.accountSection}>
        <TouchableOpacity onPress={() => navigation.navigate('UserProfile')}>
          <Ionicons name="person-circle" size={40} color="black" />
        </TouchableOpacity>
        <Text style={styles.accountText}>Mi Cuenta</Text>
      </View>

      <TouchableOpacity style={styles.searchBar} onPress={() => navigation.navigate('SearchScreen')}>
        <Ionicons name="search" size={20} color="gray" />
        <TextInput placeholder="Buscar productos..." style={styles.searchInput} />
      </TouchableOpacity>

      <View style={styles.iconRow}>
        <TouchableOpacity onPress={() => navigation.navigate('Favorites')}>
          <Ionicons name="heart" size={30} color="red" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ShoppingCart')}>
          <Ionicons name="cart" size={30} color="black" />
        </TouchableOpacity>
      </View>

      <Modal visible={isMenuVisible} transparent={true} animationType="slide" onRequestClose={toggleMenu}>
        <View style={styles.menuContainer}>
          <View style={styles.menuContent}>
            <FlatList
              data={menuItems}
              keyExtractor={(item) => item.name}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.menuItem}
                  onPress={() => {
                    navigation.navigate(item.screen);
                    toggleMenu();
                  }}
                >
                  <Text style={styles.menuItemText}>{item.name}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default HomeScreen;

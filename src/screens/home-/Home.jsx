import React, { useState } from 'react';
import { View, FlatList, Alert } from 'react-native';
import styles from './stylesHome';
import { products, menuItems } from '../../constants/const';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import IconRow from '../../components/IconRow';
import ProductCard from '../../components/ProductCard';
import MenuModal from '../../components/MenuModal';

const Home = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchText, setSearchText] = useState('');

  const toggleMenu = () => setMenuVisible(!isMenuVisible);

  const filteredProducts = searchText.trim()
    ? products.filter((product) => product.name.toLowerCase().includes(searchText.toLowerCase()))
    : products;

  const handleAddToCart = (product) => {
    const priceToUse = product.discountedPrice || product.price;
    const updatedCart = cart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));

    if (!cart.some((item) => item.id === product.id)) {
      updatedCart.push({ ...product, price: priceToUse, quantity: 1 });
    }
    setCart(updatedCart);
    Alert.alert('Carrito', `Has agregado ${product.name} a tu carrito`);
  };

  const handleAddToFavorites = (product) => {
    if (!favorites.some((item) => item.id === product.id)) {
      setFavorites([...favorites, product]);
      Alert.alert('Favoritos', `Has agregado ${product.name} a tus favoritos`);
    } else {
      Alert.alert('Favoritos', `${product.name} ya esta en tus favoritos`);
    }
  };

  return (
    <View style={styles.container}>
      {/*Componente de Header*/}
      <Header onToggleMenu={toggleMenu} />

      {/*Componente de SearchBar*/}
      <SearchBar searchText={searchText} setSearchText={setSearchText} />

      {/*Componente de IoonRow*/}
      <IconRow cart={cart} />

      {/*Componente de Header*/}
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard product={item} onAddToFavorites={handleAddToFavorites} onAddToCart={handleAddToCart} />
        )}
      />

      {/*Componente de Menu hamburguesa*/}
      <MenuModal isVisible={isMenuVisible} onClose={toggleMenu} menuItems={menuItems} />
    </View>
  );
};

export default Home;

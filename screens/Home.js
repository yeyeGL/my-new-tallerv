import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, Modal, FlatList, Image, Alert, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../components/stylesHome';

const products = [
  {
    id: '1',
    name: 'Estuche del Galaxy Ultra',
    price: 40.0,
    description: 'Protege tu Galaxy Ultra con estilo y seguridad con este estuche premium.',
    image: require('../assets/ProductosCelucos/Estuchegalaxy.png'),
    categoria: 'Celulares',
  },
  {
    id: '2',
    name: 'Galaxy 23 Ultra',
    price: 3200.0,
    description: 'El smartphone más avanzado de Samsung, con cámara de alta resolución y rendimiento ultra rápido.',
    image: require('../assets/ProductosCelucos/galaxy23ultra.png'),
    categoria: 'Celulares',
  },
  {
    id: '3',
    name: 'Iphone 15',
    price: 3000.0,
    description: 'Descubre la nueva generación del iPhone con su diseño elegante y potente tecnología.',
    image: require('../assets/ProductosCelucos/iphone15.png'),
    categoria: 'Celulares',
  },
  {
    id: '4',
    name: 'Asus 14',
    price: 2400.0,
    description: 'Laptop compacta y eficiente, ideal para el trabajo y el entretenimiento diario.',
    image: require('../assets/ProductosComp/asus14.png'),
    categoria: 'Computadores',
  },
  {
    id: '5',
    name: 'Computador Gaming',
    price: 5000.0,
    description: 'Máquina de alto rendimiento para los gamers más exigentes, con gráficos y velocidad excepcionales.',
    image: require('../assets/ProductosComp/compugaming.png'),
    categoria: 'Computadores',
  },
  {
    id: '6',
    name: 'Ideapad 5',
    price: 1900.0,
    description: 'Laptop versátil con un diseño delgado y batería de larga duración.',
    image: require('../assets/ProductosComp/Ideapad-5.png'),
    categoria: 'Computadores',
  },
  {
    id: '7',
    name: 'Balón de Baloncesto',
    price: 120.0,
    description: 'Balón oficial de baloncesto, perfecto para competiciones y entrenamientos.',
    image: require('../assets/ProductosDeportes/balon-baloncesto-oficial.png'),
    categoria: 'Deportes',
  },
  {
    id: '8',
    name: 'Balón de Fútbol',
    price: 200.0,
    description: 'Balón de fútbol de alta calidad, diseñado para un rendimiento óptimo en el campo.',
    image: require('../assets/ProductosDeportes/balon-futbol.png'),
    categoria: 'Deportes',
  },
  {
    id: '9',
    name: 'Camisa de la Cabra',
    price: 9000.0,
    description: 'Edición limitada de la camisa inspirada en el icónico "GOAT" del deporte.',
    image: require('../assets/ProductosDeportes/camisathegoat.png'),
    categoria: 'Deportes',
  },
  {
    id: '10',
    name: 'Cama',
    price: 2100.0,
    description: 'Cama cómoda y moderna para un descanso placentero.',
    image: require('../assets/ProductosHogar/cama.png'),
    categoria: 'AccesoriosDeCasa',
  },
  {
    id: '11',
    name: 'Comedor',
    price: 1300.0,
    description: 'Juego de comedor elegante y funcional para cualquier hogar.',
    image: require('../assets/ProductosHogar/comedor.png'),
    categoria: 'AccesoriosDeCasa',
  },
  {
    id: '12',
    name: 'Lámpara de Noche',
    price: 600.0,
    description: 'Lámpara de mesa con un diseño moderno, ideal para iluminar cualquier espacio.',
    image: require('../assets/ProductosHogar/lampara-de-mesa.png'),
    categoria: 'AccesoriosDeCasa',
  },
  {
    id: '13',
    name: 'Play 5',
    price: 2600.0,
    description:
      'La consola de videojuegos más avanzada de Sony, con gráficos impresionantes y un rendimiento superior.',
    image: require('../assets/ProductosConsolas/play-5.png'),
    categoria: 'Games',
  },
  {
    id: '14',
    name: 'Play 2',
    price: 400.0,
    description: 'Consola retro de Sony, perfecta para los amantes de los juegos clásicos.',
    image: require('../assets/ProductosConsolas/play-2.png'),
    categoria: 'Games',
  },
  {
    id: '15',
    name: 'Xbox 360',
    price: 550.0,
    description: 'La clásica consola de Microsoft, conocida por su catálogo de juegos y rendimiento.',
    image: require('../assets/ProductosConsolas/xbox-360.png'),
    categoria: 'Games',
  },
];
export { products }; 
const Home = () => {
  const navigation = useNavigation();
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]); // Estado para favoritos
  const [searchText, setSearchText] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const toggleMenu = () => setMenuVisible(!isMenuVisible);

  const menuItems = [
    { name: 'Ofertas', screen: 'Offers' },
    { name: 'Categorías de artículos', screen: 'Categories' },
    { name: 'Lista de artículos', screen: 'ListProducts' },
    { name: 'Sucursal de pago', screen: 'PaymentBranch' },
    { name: 'Ayuda y Soporte', screen: 'HelpSupport' },
  ];
  
  useEffect(() => {
    if (searchText.trim() === '') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) => product.name.toLowerCase().includes(searchText.toLowerCase()));
      setFilteredProducts(filtered);
    }
  }, [searchText]);

  const handleAddToCart = (product) => {
    const productExists = cart.find((item) => item.id === product.id);
    if (productExists) {
      setCart(cart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    Alert.alert('Carrito', `Has agregado ${product.name} a tu carrito.`);
  };

  const handleAddToFavorites = (product) => {
    const productExists = favorites.find((item) => item.id === product.id);
    if (!productExists) {
      setFavorites([...favorites, product]);
      Alert.alert('Favoritos', `Has agregado ${product.name} a tus favoritos.`);
    } else {
      Alert.alert('Favoritos', `El producto ${product.name} ya está en tus favoritos.`);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.accountSection}>
        <TouchableOpacity onPress={() => navigation.navigate('UserProfile')}>
          <Ionicons name="person-circle" size={40} color="black" />
        </TouchableOpacity>
        <Text style={styles.accountText}>Mi Cuenta</Text>
        <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
          <Ionicons name="menu" size={30} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.searchBar}>
        <Ionicons name="search" size={20} color="gray" />
        <TextInput
          placeholder="Buscar productos..."
          style={styles.searchInput}
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      <View style={styles.iconRow}>
        <TouchableOpacity onPress={() => navigation.navigate('Favorites')}>
          <Ionicons name="heart" size={30} color="red" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ShoppingCart', { cart })}>
          <Ionicons name="cart" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ProductDetail', { products })}>
          <Ionicons name="information-circle" size={30} color="blue" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            <Image source={item.image} style={styles.productImage} />
            <View style={styles.productDetails}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
              <Text style={styles.productDescription}>{item.description}</Text>
              <View style={styles.buttonRow}>
                <Pressable style={styles.favoritesButton} onPress={() => handleAddToFavorites(item)}>
                  <Ionicons name="heart" size={20} color="red" />
                  <Text style={styles.buttonText}>Favoritos</Text>
                </Pressable>
                <Pressable style={styles.cartButton} onPress={() => handleAddToCart(item)}>
                  <Ionicons name="cart" size={20} color="black" />
                  <Text style={styles.buttonText}>Carrito</Text>
                </Pressable>
              </View>
            </View>
          </View>
        )}
      />

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

// Exportar products al final del archivo
export default Home;

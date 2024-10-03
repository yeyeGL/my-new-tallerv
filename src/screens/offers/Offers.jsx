import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './stylesOffers';
import { products } from '../../constants/const';

const Offers = () => {
  const navigation = useNavigation();
  const [discountedProducts, setDiscountedProducts] = useState([]);

  // Otra implementacion del useefect
  useEffect(() => {
    const filteredProducts = products.filter(product => product.discountedPrice);
    setDiscountedProducts(filteredProducts);
  }, []);

  const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    const discount = ((originalPrice - discountedPrice) / originalPrice) * 100;
    return discount.toFixed(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Ofertas Especiales</Text>
      <FlatList
        data={discountedProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            <Image source={item.image} style={styles.productImage} />
            <View style={styles.productDetails}>
              <Text style={styles.productName}>{item.name}</Text>
              <View style={styles.priceContainer}>
                <Text style={styles.strikethroughPrice}>${item.price.toFixed(2)}</Text>
                <Text style={styles.discountedPrice}>${item.discountedPrice.toFixed(2)}</Text>
              </View>
              <Text style={styles.discountPercentage}>
                {calculateDiscountPercentage(item.price, item.discountedPrice)}% de descuento
              </Text>
              <Text style={styles.productDescription}>{item.description}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Offers;

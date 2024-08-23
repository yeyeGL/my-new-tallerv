import React from 'react';
import { View, Text, Image, FlatList, Button } from 'react-native';
import styles from '../components/stylesProductDetail';

const ProductDetail = ({ route, navigation }) => {
  const { products } = route.params;

  const handleProductSelect = (product) => {
    navigation.navigate('ProductOptions', { product });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            <Image source={item.image} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
            <View style={styles.buttonContainer}>
              <Button
                title="Ver detalles"
                onPress={() => handleProductSelect(item)}
                color="#6200EE"
              />
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default ProductDetail;

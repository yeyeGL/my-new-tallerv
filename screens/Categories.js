import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../components/stylesCategories';
import { products } from './Home';

const Categories = () => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Agrupar productos por categoría
  const categories = products.reduce((acc, product) => {
    if (!acc[product.categoria]) {
      acc[product.categoria] = [];
    }
    acc[product.categoria].push(product);
    return acc;
  }, {});

  // Crear una lista de categorías con al menos 5 categorías
  const categoryList = Object.keys(categories)
    .map((key, index) => ({
      id: index.toString(),
      name: key,
      products: categories[key],
    }))
    .slice(0, 5); // Asegurarse de tener al menos 5 categorías

  return (
    <View style={styles.container}>
      {selectedCategory ? (
        <View style={styles.categoryContainer}>
          <TouchableOpacity onPress={() => setSelectedCategory(null)}>
            <Text style={styles.backButton}>Volver</Text>
          </TouchableOpacity>
          <Text style={styles.categoryTitle}>{selectedCategory.name}</Text>
          <View style={styles.itemContainer}>
            {selectedCategory.products.map((product) => (
              <TouchableOpacity key={product.id} onPress={() => navigation.navigate('ProductDetail', { product })}>
                <View style={styles.item}>
                  <Image source={product.image} style={styles.categoryImage} />
                  <Text style={styles.text}>{product.name}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      ) : (
        <FlatList
          data={categoryList}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => setSelectedCategory(item)}>
              <View style={styles.categoryCard}>
                <Text style={styles.categoryTitle}>{item.name}</Text>
                <Ionicons name="arrow-forward" size={24} color="black" />
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
};

export default Categories;

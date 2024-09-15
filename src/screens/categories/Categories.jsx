import React, { useState } from 'react';
import { View, Text, FlatList, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../categories/stylesCategories';
import { products } from '.././../constants/const';

const Categories = () => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = products.reduce((acc, product) => {
    if (!acc[product.categoria]) {
      acc[product.categoria] = [];
    }
    acc[product.categoria].push(product);
    return acc;
  }, {});

  const categoryList = Object.keys(categories)
    .map((key, index) => ({
      id: index.toString(),
      name: key,
      products: categories[key],
    }))
    .slice(0, 5); 

  return (
    <View style={styles.container}>
      {selectedCategory ? (
        <View style={styles.categoryContainer}>
          <Pressable onPress={() => setSelectedCategory(null)}>
            <Text style={styles.backButton}>Volver</Text>
          </Pressable>
          <Text style={styles.categoryTitle}>{selectedCategory.name}</Text>
          <View style={styles.itemContainer}>
            {selectedCategory.products.map((product) => (
              <Pressable
                key={product.id}
                onPress={() => navigation.navigate('ProductOptions', { product })}
              >
                <View style={styles.item}>
                  <Image source={product.image} style={styles.categoryImage} />
                  <Text style={styles.text}>{product.name}</Text>
                </View>
              </Pressable>
            ))}
          </View>
        </View>
      ) : (
        <FlatList
          data={categoryList}
          renderItem={({ item }) => (
            <Pressable onPress={() => setSelectedCategory(item)}>
              <View style={styles.categoryCard}>
                <Text style={styles.categoryTitle}>{item.name}</Text>
                <Ionicons name="arrow-forward" size={24} color="black" />
              </View>
            </Pressable>
          )}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
};

export default Categories;
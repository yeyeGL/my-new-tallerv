import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, } from 'react-native';
import styles from './stylesFavorites';
import { products } from '../../constants/const';
import { Ionicons } from '@expo/vector-icons';

const Favorites = () => {

  const favoriteProducts = products.filter(product => product.favorite);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Mis favoritos</Text>
      <FlatList
        data={favoriteProducts}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <Text style={styles.price}>${item.price}</Text>
              <View style={styles.favoriteContainer}><Text style={styles.status}>
                Estado: {item.available ? 'Disponible' : 'No disponible'}               
                </Text>   
                <Ionicons  name="heart" size={20} color="red" />             
              </View>
            </View>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
export default Favorites;

import React from 'react';
import { View, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../screens/home-/stylesHome';
import { useNavigation } from '@react-navigation/native';

const IconRow = ({ cart }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.iconRow}>
      <Pressable onPress={() => navigation.navigate('Favorites')}>
        <Ionicons name="heart" size={30} color="red" />
      </Pressable>
      <Pressable onPress={() => navigation.navigate('ShoppingCart', { cart })}>
        <Ionicons name="cart" size={30} color="black" />
      </Pressable>
      <Pressable onPress={() => navigation.navigate('ProductDetail')}>
        <Ionicons name="information-circle" size={30} color="blue" />
      </Pressable>
    </View>
  );
};

export default IconRow;

// Header.js
import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../screens/home-/stylesHome';
import { useNavigation } from '@react-navigation/native';

const Header = ({ onToggleMenu }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.accountSection}>
      <Pressable onPress={() => navigation.navigate('UserProfile')}>
        <Ionicons name="person-circle" size={40} color="black" />
      </Pressable>
      <Text style={styles.accountText}>Mi Cuenta</Text>
      <Pressable style={styles.menuButton} onPress={onToggleMenu}>
        <Ionicons name="menu" size={30} color="black" />
      </Pressable>
    </View>
  );
};

export default Header;

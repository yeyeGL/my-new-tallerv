import React from 'react';
import { View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../screens/home-/stylesHome';

const SearchBar = ({ searchText, setSearchText }) => {
  return (
    <View style={styles.searchBar}>
      <Ionicons name="search" size={20} color="gray" />
      <TextInput
        placeholder="Buscar productos..."
        style={styles.searchInput}
        value={searchText}
        onChangeText={setSearchText}
      />
    </View>
  );
};

export default SearchBar;

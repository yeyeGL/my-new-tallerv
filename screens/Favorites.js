import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from '../components/stylesRegister';

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);

    const getFavorites = () => {
        
        const simulatedFavorites = [
            { id: '1', name: 'Producto 1' },
            { id: '2', name: 'Producto 2' },
            { id: '3', name: 'Producto 3' },
        ];
        setFavorites(simulatedFavorites);
    };

    useEffect(() => {
        getFavorites();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Favoritos</Text>
            <FlatList
                data={favorites}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.favoriteItem}>
                        <Text style={styles.favoriteName}>{item.name}</Text>
                    </View>
                )}
            />
        </View>
    );
};
export default Favorites;

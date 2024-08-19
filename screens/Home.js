import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bienvenido a la Aplicación</Text>
            
            <View style={styles.buttonContainer}>
                <Button
                    title="Carrito de Compras"
                    onPress={() => navigation.navigate('ShoppingCart')}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Compras"
                    onPress={() => navigation.navigate('Purchases')}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Favoritos"
                    onPress={() => navigation.navigate('Favorites')}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Ayuda y Soporte"
                    onPress={() => navigation.navigate('HelpSupport')}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Perfil de Usuario"
                    onPress={() => navigation.navigate('UserProfile')}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Ofertas"
                    onPress={() => navigation.navigate('offers')}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Categorias de articulos"
                    onPress={() => navigation.navigate('Categories')}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Lista de articulos"
                    onPress={() => navigation.navigate('ListProducts')}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Detalle de productos"
                    onPress={() => navigation.navigate('Productdetail')}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Sucursal de pago"
                    onPress={() => navigation.navigate('Paymentbranch')}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    buttonContainer: {
        marginVertical: 10,
        width: '80%',
    },
});

export default Home;

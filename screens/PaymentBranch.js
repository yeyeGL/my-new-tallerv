
import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, FlatList, Alert} from 'react-native';
import styles from '../components/stylesPaymentBranch';

const products = [
    {
        id: '1',
        image: 'https://cdn-icons-png.flaticon.com/512/1312/1312307.png',
        description: 'Producto 1 de alta calidad',
        value: 1000,
    },
    {
        id: '2',
        image: 'https://cdn-icons-png.flaticon.com/512/1312/1312307.png',
        description: 'Producto 2 de alta calidad',
        value: 2000,
    },
    {
        id: '3',
        image: 'https://cdn-icons-png.flaticon.com/512/1312/1312307.png',
        description: 'Producto 2 de alta calidad',
        value: 2000,
    },
];

const PaymentBranch = () => {
    const [quantities, setQuantities] = useState({});
    const [address, setAddress] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [paymentHistory, setPaymentHistory] = useState([]);

    const handleIncrement = (id) => {
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [id]: Math.min((prevQuantities[id] || 0) + 1, 99),
        }));
    };

    const handleDecrement = (id) => {
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [id]: Math.max((prevQuantities[id] || 0) - 1, 0),
        }));
    };

    const totalValue = products.reduce((sum, product) => {
        const quantity = quantities[product.id] || 0;
        return sum + (product.value * quantity);
    }, 0);

    const simulatePaymentAPI = (paymentData) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const isSuccess = Math.random() > 0.2; // 80% chance of success
                if (isSuccess) {
                    resolve('Aprobado');
                } else {
                    reject('Rechazado');
                }
            }, 2000); // Simulate a 2-second delay
        });
    };

    const handlePayment = async () => {
        if (!address) {
            Alert.alert('Error', 'Por favor, ingrese una dirección de entrega.');
            return;
        }

        if (!paymentMethod) {
            Alert.alert('Error', 'Por favor, seleccione una forma de pago.');
            return;
        }

        // Collect necessary data
        const paymentData = {
            totalValue,
            address,
            paymentMethod,
            items: products.map(product => ({
                id: product.id,
                description: product.description,
                value: product.value,
                quantity: quantities[product.id] || 0,
            })),
        };

        // Simulate payment process
        Alert.alert('Procesando pago', 'Por favor, espere mientras procesamos su pago.');

        try {
            const result = await simulatePaymentAPI(paymentData);
            Alert.alert('Pago realizado', `El pago de ${totalValue} ha sido ${result} mediante ${paymentMethod}.`);
            setPaymentHistory([...paymentHistory, { ...paymentData, status: result }]);
        } catch (error) {
            Alert.alert('Pago fallido', `El pago de ${totalValue} ha sido ${error} mediante ${paymentMethod}.`);
        }
    };
    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={styles.productContainer}>
                        <Image 
                            source={{ uri: item.image }} 
                            style={styles.productImage}
                        />
                        <View style={styles.productDetails}>
                            <Text style={styles.productDescription}>{item.description}</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Valor"
                                value={String(item.value)}
                                keyboardType="numeric"
                                maxLength={8}
                                editable={false}
                            />
                            <View style={styles.quantityContainer}>
                                <TouchableOpacity onPress={() => handleDecrement(item.id)} style={styles.quantityButton}>
                                    <Text style={styles.quantityButtonText}>-</Text>
                                </TouchableOpacity>
                                <Text style={styles.quantityText}>{quantities[item.id] || 0}</Text>
                                <TouchableOpacity onPress={() => handleIncrement(item.id)} style={styles.quantityButton}>
                                    <Text style={styles.quantityButtonText}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                )}
            />
            <TextInput
                style={styles.input}
                placeholder="Dirección de entrega"
                value={address}
                onChangeText={setAddress}
                maxLength={30}
            />
            <Text style={styles.totalValue}>Valor total: {totalValue}</Text>
            <Text style={styles.paymentMethodTitle}>Seleccione una forma de pago:</Text>
            <View style={styles.paymentMethodsContainer}>
                <TouchableOpacity 
                    style={[styles.paymentMethodButton, paymentMethod === 'PSE' && styles.selectedPaymentMethod]} 
                    onPress={() => setPaymentMethod('PSE')}
                >
                    <Text style={styles.paymentMethodText}>PSE</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[styles.paymentMethodButton, paymentMethod === 'Tarjeta de crédito' && styles.selectedPaymentMethod]} 
                    onPress={() => setPaymentMethod('Tarjeta de crédito')}
                >
                    <Text style={styles.paymentMethodText}>Tarjeta de crédito</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[styles.paymentMethodButton, paymentMethod === 'Efecty' && styles.selectedPaymentMethod]} 
                    onPress={() => setPaymentMethod('Efecty')}
                >
                    <Text style={styles.paymentMethodText}>Efecty</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button} onPress={handlePayment}>
                <Text style={styles.buttonText}>Proceder con el pago</Text>
            </TouchableOpacity>
            <Text style={styles.paymentHistoryTitle}>Historial de pagos:</Text>
            <FlatList
                data={paymentHistory}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.paymentHistoryItem}>
                        <Text>{`Pago de ${item.totalValue} mediante ${item.paymentMethod} - ${item.status}`}</Text>
                    </View>
                )}
            />
        </View>
    );
};
export default PaymentBranch;
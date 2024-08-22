import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    productContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    productImage: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    productDetails: {
        flex: 1,
    },
    productDescription: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    quantityButton: {
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    quantityButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    quantityText: {
        fontSize: 16,
        marginHorizontal: 10,
    },
    totalValue: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 20,
    },
    paymentMethodTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    paymentMethodsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    paymentMethodButton: {
        backgroundColor: '#ccc',
        padding: 10,
        borderRadius: 5,
        flex: 1,
        alignItems: 'center',
        marginHorizontal: 5,
    },
    selectedPaymentMethod: {
        backgroundColor: '#007BFF',
    },
    paymentMethodText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    button: {
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
});
export default styles;
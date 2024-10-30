import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  productCard: {
    flexDirection: 'row',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 10,
  },
  productImage: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
    color: '#888',
  },
  productDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  quantityText: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  totalContainer: {
    marginVertical: 20,
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  paymentContainer: {
    marginTop: 20,
  },
  paymentInput: {
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
  },
  buttonSpacing: {
    marginHorizontal: 5,
  },
});

export default styles;

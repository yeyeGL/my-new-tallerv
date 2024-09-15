import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  productCard: {
    flexDirection: 'row',
    marginBottom: 16,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
  },
  productImage: {
    width: 60,
    height: 60,
    marginRight: 16,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  productPrice: {
    fontSize: 16,
    color: '#555',
  },
  strikethroughPrice: {
    fontSize: 16,
    color: 'gray',
    textDecorationLine: 'line-through',
    marginRight: 8,
  },
  discountedPrice: {
    fontSize: 16,
    color: 'red',
    fontWeight: 'bold',
  },
  productDescription: {
    fontSize: 14,
    color: 'gray',
    marginTop: 4,
  },
  discountPercentage: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 5,
  }
});

export default styles;

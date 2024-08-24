import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
  },
  menuButton: {
    marginTop: 20,
    left: 180,
    top: -8,
  },
  menuContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  menuContent: {
    backgroundColor: 'white',
    width: 250,
    height: '100%',
    paddingTop: 50,
  },
  menuItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  menuItemText: {
    fontSize: 18,
  },
  accountSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  accountText: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  searchInput: {
    marginLeft: 10,
    fontSize: 16,
    flex: 1,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  productCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  productDetails: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 14,
    color: 'green',
    marginVertical: 5,
  },
  productDescription: {
    fontSize: 12,
    color: '#777',
  },
  favoritesButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 4,
  },
  cartButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 4,
  },
  buttonText: {
    marginLeft: 1,
    fontSize: 14,
  },
  buttonRow: {
    flexDirection: 'row',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  strikethroughPrice: {
    textDecorationLine: 'line-through',
    color: 'gray',
    marginRight: 8,
  },
  discountedPrice: {
    color: 'red',
    fontWeight: 'bold',
  },
});

export default styles;

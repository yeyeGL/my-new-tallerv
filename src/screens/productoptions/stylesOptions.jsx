import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  productDetailImage: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  productDetailName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  productDetailDescription: {
    fontSize: 16,
    marginBottom: 10,
  },
  productDetailPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productDetailSubtitle: {
    fontSize: 18,
    marginBottom: 5,
  },
  productDetailText: {
    fontSize: 16,
    marginBottom: 10,
  },
  commentInput: {
    height: 60,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  comment: {
    marginBottom: 10,
  },
  commentText: {
    fontSize: 16,
  },
});

export default styles;

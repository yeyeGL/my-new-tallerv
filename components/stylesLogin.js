import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
      paddingHorizontal: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
      color: '#333',
    },
    text:{
      fontSize: 16,
      color: '#333',
      fontWeight: 'bold',
      textAlign: 'start',
      paddingBottom: 10,
    },
    input: {
      height: 50,
      borderColor: '#ddd',
      borderWidth: 1,
      borderRadius: 8,
      marginBottom: 15,
      paddingLeft: 10,
      backgroundColor: '#fff',
      fontSize: 16,
  },
  button: {
    backgroundColor: '#007bff',
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 60,
},
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
},
});

export default styles;
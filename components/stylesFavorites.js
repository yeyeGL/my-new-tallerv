import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 10,
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    item: {
      flexDirection: 'row',
      marginBottom: 20,
      padding: 10,
      backgroundColor: '#f9f9f9',
      borderRadius: 5,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 3,
    },
    favoriteContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'start',
        columnGap: 30,
    },
    image: {
      width: 100,
      height: 100,
      resizeMode: 'contain',
    },
    info: {
      marginLeft: 10,
      flex: 1,
    },
    name: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    description: {
      fontSize: 14,
      color: '#666',
      marginTop: 5,
    },
    price: {
      fontSize: 16,
      color: '#888',
      marginTop: 5,
    },
    status: {
      fontSize: 14,
      color: '#666',
      marginTop: 5,
      marginRight: 10,
    },
  });

export default styles;

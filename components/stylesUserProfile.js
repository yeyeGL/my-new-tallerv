import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'start',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  text: {
    marginTop: 10,
    fontSize: 18,
    color: '#808000',
    marginBottom: 10,
    textAlign: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  imageContainer: {
    height: 150,
    width: 150,
    borderRadius: 75,
    marginTop: 20,
    flexDirection: 'column',
  },
  buttonContainer: {
    flexDirection: 'row', // Asegura que los botones estén en una fila
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    alignItems: 'center',
    width: '30%',
    borderRadius: 5,
    marginRight: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  iconButton: {
    padding: 10,
    width: '10%',
  },
});
export default styles;
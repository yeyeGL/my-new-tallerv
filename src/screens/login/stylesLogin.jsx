import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#fff', 
    padding: 20, 
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center', 
  },
  text: {
    fontSize: 18,
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    width: '80%', 
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%', 
    marginBottom: 15,
  },
  showPasswordButton: {
    marginLeft: 15,
    top:-7,
  },
  showPasswordButtonText: {
    color: '#007BFF',
    fontSize: 16,
  },
  button: {
    width: '80%', 
    padding: 15,
    backgroundColor: '#6200EE',
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;

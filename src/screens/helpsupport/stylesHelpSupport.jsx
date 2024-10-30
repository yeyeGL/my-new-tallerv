import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#6200EE',
    textAlign: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333',
  },
  requestTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  textInput: {
    height: 100,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    textAlignVertical: 'top',
    marginBottom: 20,
    borderRadius: 5,
  },
});

export default styles;

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 10,
  },
  requestTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  requestTypeButton: {
    flex: 1,
    marginHorizontal: 5,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
  },
  selectedButton: {
    backgroundColor: '#6200ee',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '500',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#d0d0d0',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#ffffff',
  },
  submitButton: {
    backgroundColor: '#6200ee',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default styles;

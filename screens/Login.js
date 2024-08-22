import React, { useState } from 'react';
import { View, Text, TextInput,   TouchableOpacity, Alert } from 'react-native';
import styles from '../components/stylesLogin';

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[0-9]).{8,}$/;
    return regex.test(password);
  };

  const handleLogin = () => {
    if (!validatePassword(password)) {
      Alert.alert('Error', 'La contraseña debe incluir al menos una letra mayúscula, un carácter especial, letras y números.');
      return;
    }
    // Aquí iría la lógica para iniciar sesión
    Alert.alert('Inicio de sesión', 'Sesión iniciada correctamente.');
  };

  const handleRegister = () => {
    navigation.navigate('Register'); // Navegar al formulario de registro de usuario
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log In</Text>
      <Text style={styles.text}>User:</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre de usuario (max 10 caracteres)"
        maxLength={10}
        value={username}
        onChangeText={setUsername}
      />
      <Text style={styles.text}>Password:</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password (max 8 caracteres)"
          maxLength={8}
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.showPasswordButton}>
          <Text style={styles.showPasswordButtonText}>{showPassword ? 'Ocultar' : 'Mostrar'}</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

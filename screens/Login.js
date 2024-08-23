import React, { useState } from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity } from 'react-native';
import styles from '../components/stylesLogin';
import Icon from 'react-native-vector-icons/FontAwesome';

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[0-9]).{1,8}$/;
    return regex.test(password);
  };

  const handleLogin = () => {
    if (!validatePassword(password)) {
      Alert.alert('Error', 'La contraseña debe incluir al menos una letra mayúscula, un carácter especial, letras y números.');
      return;
    }
    
    navigation.navigate('Home'); 
  };

  const handleRegister = () => {
    navigation.navigate('Register');
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
        <View
          style={styles.showPasswordButton}
          onTouchEnd={() => setShowPassword(!showPassword)}
        >
          <Icon name={showPassword ? 'eye-slash' : 'eye'} size={20} color="#000" />
        </View>
      </View>
      <View style={styles.button} onTouchEnd={handleLogin}>
        <Text style={styles.buttonText}>Log In</Text>
      </View>
      <View style={styles.button} onTouchEnd={handleRegister}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </View>
    </View>
  );
};

export default Login;

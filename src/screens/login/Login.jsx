import React, { useState } from 'react';
import { View, Text, TextInput, Alert ,Pressable } from 'react-native';
import styles from './stylesLogin';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const validatePassword = (password) => {
    const validation = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[0-9]).{1,8}$/;
    return validation.test(password);
  };

  const validateUsername = (username) => {
    return username && username.trim().length > 0;
  };


  const handleLogin = () => {
    if (!validatePassword(password)) {
      Alert.alert('Error', 'La contraseña debe incluir por lo menos una mayuscula, un caracter especial, letras y que tenga numeros');
      return;
    }
    if (!validateUsername(username)) {
      Alert.alert('Error', 'El nombre de usuario debe ser completado');
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

      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log In</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </Pressable>

    </View>
  );
};

export default Login;

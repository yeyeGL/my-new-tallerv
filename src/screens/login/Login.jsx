import React, { useState } from 'react';
import { View, Text, TextInput, Alert, Pressable } from 'react-native';
import styles from './stylesLogin';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import firebase from '../../firebase/firebase'; 

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

  const handleLogin = async () => {
    if (!validatePassword(password)) {
      Alert.alert('Error', 'La contraseña debe incluir por lo menos una mayuscula, un caracter especial letras y numeros');
      return;
    }
    if (!validateUsername(username)) {
      Alert.alert('Error', 'El nombre de usuario debe ser completado');
      return;
    }

    try {
      const snapshot = await firebase.db.collection('users').where('username', '==', username).get();
      
      if (snapshot.empty) {
        Alert.alert('Error', 'Usuario no encontrado');
        return;
      }

      let userFound = null;

      snapshot.forEach(doc => {
        userFound = { id: doc.id, ...doc.data() };
      });

      if (userFound.password !== password) {
        Alert.alert('Error', 'Contraseña incorrecta');
      } else {
        Alert.alert('Exito', 'Inicio de sesion exitoso');
        navigation.navigate('Home'); 
      }
    } catch (error) {
      Alert.alert('Error', 'Hubo un problema al iniciar sesion: ' + error.message);
    }
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

        <Pressable style={styles.showPasswordButton} onPress={() => setShowPassword(!showPassword)}>
          <Icon name={showPassword ? 'eye-slash' : 'eye'} size={20} color="#000" />
        </Pressable>
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

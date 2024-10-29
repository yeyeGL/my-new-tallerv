import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import styles from './stylesHelpSupport';
import firebase from '../../firebase/firebase'; 

const HelpSupport = () => {
  const [requestType, setRequestType] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async () => {
    if (!requestType || !description) {
      Alert.alert('Error', 'Por favor completa todos los campos.');
      return;
    }

    try {
      
      await firebase.db.collection('helpsupport').add({
        requestType,
        description,
        createdAt: new Date(),
      });

      Alert.alert('Solicitud Enviada', 'Gracias por tu mensajeTe responderemos pronto.');
      setRequestType('');
      setDescription('');
    } catch (error) {
      Alert.alert('Error', 'Hubo un problema al enviar la solicitud: ' + error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ayuda y Soporte</Text>

      <Text style={styles.label}>Tipo de Solicitud : </Text>
      <View style={styles.requestTypeContainer}>
        <Button
          title="Queja"
          onPress={() => setRequestType('Queja')}
          color={requestType === 'Queja' ? '#6200EE' : '#ccc'}
        />
        <Button
          title="Peticion"
          onPress={() => setRequestType('Peticion')}
          color={requestType === 'Peticion' ? '#6200EE' : '#ccc'}
        />
        <Button
          title="Recurso"
          onPress={() => setRequestType('Recurso')}
          color={requestType === 'Recurso' ? '#6200EE' : '#ccc'}
        />
      </View>

      <Text style={styles.label}>Descripcion del problema : </Text>
      <TextInput
        style={styles.textInput}
        multiline
        numberOfLines={4}
        value={description}
        onChangeText={setDescription}
        placeholder="Describe la causa del problema aqui......."
      />

      <Button title="Enviar" onPress={handleSubmit} color="#6200EE" />
    </View>
  );
};

export default HelpSupport;

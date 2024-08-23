import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import styles from '../components/stylesHelpSupport';

const HelpSupport = () => {
  const [requestType, setRequestType] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    Alert.alert('Solicitud Enviada', 'Gracias por tu mensaje. Te responderemos pronto');
    setRequestType('');
    setDescription('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ayuda y Soporte</Text>

      <Text style={styles.label}>Tipo de Solicitud:</Text>
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

      <Text style={styles.label}>Descripción del Problema:</Text>
      <TextInput
        style={styles.textInput}
        multiline
        numberOfLines={4}
        value={description}
        onChangeText={setDescription}
        placeholder="Describe tu problema aquí..."
      />

      <Button title="Enviar" onPress={handleSubmit} color="#6200EE" />
    </View>
  );
};

export default HelpSupport;

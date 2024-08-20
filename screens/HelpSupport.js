import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
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
        <TouchableOpacity
          style={[styles.requestTypeButton, requestType === 'Queja' && styles.selectedButton]}
          onPress={() => setRequestType('Queja')}
        >
          <Text style={styles.buttonText}>Queja</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.requestTypeButton, requestType === 'Peticion' && styles.selectedButton]}
          onPress={() => setRequestType('Peticion')}
        >
          <Text style={styles.buttonText}>Peticion</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.requestTypeButton, requestType === 'Recurso' && styles.selectedButton]}
          onPress={() => setRequestType('Recurso')}
        >
          <Text style={styles.buttonText}>Recurso</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Descripcion del Problema:</Text>
      <TextInput
        style={styles.textInput}
        multiline
        numberOfLines={4}
        value={description}
        onChangeText={setDescription}
        placeholder="Describe tu problema aqui..."
      />

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HelpSupport;

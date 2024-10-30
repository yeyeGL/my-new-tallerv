import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './stylesOptions';
import firebase from '../../firebase/firebase'; 

const ProductOptions = ({ route }) => {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(null);

  const { product } = route.params;

  const handleAddComment = async () => {
    if (!rating) {
      Alert.alert('Error', 'Debes seleccionar una calificacion');
      return;
    }
    if (rating < 1 || rating > 5) {
      Alert.alert('Error', 'La calificacion debe ser entre 1 y 5');
      return;
    }

    try {
      await firebase.db.collection('comments').add({
        productId: product.id, 
        comment,
        rating,
        createdAt: new Date(),
      });

      Alert.alert('Comentario Agregado', 'Gracias por tu comentario.');
      setComment('');
      setRating(null);
    } catch (error) {
      Alert.alert('Error', 'Hubo un problema al agregar el comentario: ' + error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={product.image} style={styles.productDetailImage} />
      <Text style={styles.productDetailName}>{product.name}</Text>
      <Text style={styles.productDetailDescription}>{product.description}</Text>
      <Text style={styles.productDetailPrice}>$ {product.price}.00</Text>

      <Text style={styles.productDetailSubtitle}>Medios de pago aceptados:</Text>
      <Text style={styles.productDetailText}>Visa, Mastercard, PayPal</Text>

      <TextInput
        placeholder="Agrega un comentario..."
        value={comment}
        onChangeText={setComment}
        style={styles.commentInput}
      />
      <View style={styles.ratingContainer}>
        {[1, 2, 3, 4, 5].map((star) => (
          <Ionicons
            key={star}
            name={star <= rating ? 'star' : 'star-outline'}
            size={30}
            color="gold"
            onPress={() => setRating(star)}
          />
        ))}
      </View>
      <Button title="Agregar comentario" onPress={handleAddComment} color="#6200EE" />
    </View>
  );
};

export default ProductOptions;

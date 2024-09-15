import { View, Text, Image, Pressable, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../screens/home-/stylesHome';

const ProductCard = ({ product, onAddToFavorites, onAddToCart }) => {

  return (
    <View style={styles.productCard}>
      <Image source={product.image} style={styles.productImage} />
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{product.name}</Text>
        <View style={styles.priceContainer}>
          {product.discountedPrice ? (
            <View>
              <Text style={styles.strikethroughPrice}>${product.price.toFixed(2)}</Text>
              <Text style={styles.discountedPrice}>${product.discountedPrice.toFixed(2)}</Text>
            </View>
          ) : (
            <Text style={styles.productPrice}>${product.price.toFixed(2)}</Text>
          )}
        </View>
        <Text style={styles.productDescription}>{product.description}</Text>
        <View style={styles.buttonRow}>
          <Pressable style={styles.favoritesButton} onPress={() => onAddToFavorites(product)}>
            <Ionicons name="heart" size={20} color="red" />
            <Text style={styles.buttonText}>Favoritos</Text>
          </Pressable>
          <Pressable style={styles.cartButton} onPress={() => onAddToCart(product)}>
            <Ionicons name="cart" size={20} color="black" />
            <Text style={styles.buttonText}>Carrito</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default ProductCard;

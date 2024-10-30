import React from 'react';
import { View, Text, Pressable, FlatList, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../screens/home-/stylesHome';
import { useNavigation } from '@react-navigation/native';

const MenuModal = ({ isVisible, onClose, menuItems }) => {
  const navigation = useNavigation();

  return (
    <Modal visible={isVisible} transparent={true} animationType="slide">
      <View style={styles.menuContainer}>
        <View style={styles.menuContent}>
          <Pressable style={styles.closeButton} onPress={onClose}>
            <Ionicons name="close" size={30} color="black" />
          </Pressable>
          <FlatList
            data={menuItems}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <Pressable
                style={styles.menuItem}
                onPress={() => {
                  navigation.navigate(item.screen);
                  onClose();
                }}
              >
                <Text style={styles.menuItemText}>{item.name}</Text>
              </Pressable>
            )}
          />
        </View>
      </View>
    </Modal>
  );
};

export default MenuModal;

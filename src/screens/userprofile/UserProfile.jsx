import React from "react";
import { View, Text, Image, Button } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from "./stylesUserProfile";
import { useNavigation } from '@react-navigation/native';

const UserProfile = () => {

 const navigation = useNavigation();
  
  const handleLogOut = () => {
    navigation.navigate("Login")
  }
  return (
    <View style={styles.container}>
      <Image style={styles.imageContainer} source={require('../../assets/Avatar.png')} />
      <Text style={styles.text}>Welcome!!</Text>
      <Text style={styles.title}>Juan Perez</Text>
      <Text>29/05/2002</Text>
      <View style={styles.buttonContainer}>
         <Button title="Log Out" onPress={handleLogOut} color={"#6200EE"} />
        <View style={styles.iconButton}>
          <Icon name="cog" size={20} color="#fff" />
        </View>
      </View>
    </View>
  );
};

export default UserProfile;

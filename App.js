import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './screens/Register';
import Login from './screens/Login';
import Home from './screens/Home';
import HelpSupport from './screens/HelpSupport';
import ShoppingCart from './screens/ShoppingCart';
import ProductDetail from './screens/ProductDetail';
import ProductOptions from './screens/ProductOptions';
import Offers from './screens/Offers';
import Favorites from './screens/Favorites';
import Purchases from './screens/Purchases';
import PaymentBranch from './screens/PaymentBranch';
import UserProfile from './screens/UserProfile';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="HelpSupport" component={HelpSupport} />
        <Stack.Screen name="ShoppingCart" component={ShoppingCart} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
        <Stack.Screen name="ProductOptions" component={ProductOptions} />
        <Stack.Screen name="Offers" component={Offers} />
        <Stack.Screen name="Favorites" component={Favorites} />
        <Stack.Screen name="Purchases" component={Purchases} />
        <Stack.Screen name="PaymentBranch" component={PaymentBranch} />
        <Stack.Screen name="UserProfile" component={UserProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

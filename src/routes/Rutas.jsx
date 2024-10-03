import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from '../screens/register/Register';
import Login from '../screens/login/Login';
import Home from '../screens/home-/Home';
import HelpSupport from '../screens/helpsupport/HelpSupport';
import ShoppingCart from '../screens/shoppingcart/ShoppingCart';
import ProductDetail from '../screens/productdetail/ProductDetail';
import ProductOptions from '../screens/productoptions/ProductOptions';
import Offers from '../screens/offers/Offers';
import Categories from '../screens/categories/Categories';
import Favorites from '../screens/favorites/Favorites';
import Purchases from '../screens/purchases/Purchases';
import PaymentBranch from '../screens/paymentbranch/PaymentBranch';
import UserProfile from '../screens/userprofile/UserProfile';

const Stack = createNativeStackNavigator();

export default function Rutas() {
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
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="Offers" component={Offers} />
        <Stack.Screen name="Favorites" component={Favorites} />
        <Stack.Screen name="Purchases" component={Purchases} />
        <Stack.Screen name="PaymentBranch" component={PaymentBranch} />
        <Stack.Screen name="UserProfile" component={UserProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

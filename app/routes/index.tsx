import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/inicio';
import Cadastro from '../screens/cadastro';
import BottomRoutes from './bottom.routes';


export default function Routes() {
  
    const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} >


      <Stack.Screen 
      name="Login" 
      component={Login} />

      <Stack.Screen 
      name="Cadastro" 
      component={Cadastro} />

      <Stack.Screen 
      name="BottomRoutes" 
      component={BottomRoutes} />
    </Stack.Navigator>
  );
}
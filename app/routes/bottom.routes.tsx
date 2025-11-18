import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/home';
import Perfil from '../screens/perfil';

const Tab = createBottomTabNavigator();

export default function BottomRoutes() {
  return (
    <Tab.Navigator
     screenOptions={{ headerShown: false }}>

      <Tab.Screen
       name="Home"
       component={Home} 
       />
      <Tab.Screen
       name="Perfil"
       component={Perfil} 
       />
    </Tab.Navigator>
  );
}
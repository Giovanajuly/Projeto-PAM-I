// import './gesture-handler';
// import { StatusBar } from 'expo-status-bar';
import { StatusBar, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './app/routes/index';
// import Login from './app/screens/inicio';



export default function App() {
  return (
<NavigationContainer>
      <Routes />
      {/* <StatusBar Style="auto"/> */}
    </NavigationContainer>
    );
}


const styles = StyleSheet.create({
    container: {
    flex:1
    },
 });
   
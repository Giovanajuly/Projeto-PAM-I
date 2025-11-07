//pasta que vai aparecer quando conectar o app ]
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import  Login from './inicio'; // colocar o endereço da pag do index;

export default function App(){
    return (
         <View style={styles.container}>
            <StatusBar style='auto' />
         <Login />
         </View>
    );
 }
 const styles = StyleSheet.create({
    container: {
    //  flex:1,
    //  width:'100%',
    //  height:'100%',
    //  backgroundColor://cor > no video ta branca
    //  allignItems: 'center',
    //  justifyContent:'center',
    // 
    },
 });

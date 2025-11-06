import { Feather } from "@expo/vector-icons"; 
import React from "react"; 
import { StyleSheet, Text, View } from "react-native"; 

export default function App() { 
    return ( 
    <View style={style.container}>
            <View style={style.boxTop}>
                <Image source={require("../assets/images/logo.png")}></Image>
                <Text>TOP</Text>
            </View>
           <View style={style.boxMid}>
                <Text>MID</Text>
            </View>
            <View style={style.boxBottom}>
                <Text>BOTTOM
                    
             </Text>
           </View>
        </View>
    
    
    )}

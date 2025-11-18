import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { style } from "./styles";
import { themas } from "@/app/constants/theme";
import { Input } from "@/app/components/input";

import { useNavigation, NavigationProp } from "@react-navigation/native";



export default function Login() {

  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <View style={style.container}>
      <View style={style.boxTop}>
        <Image source={require("../assets/images/logo.png")}
          style={style.logo}>

        </Image>

        <Text style={style.titulo}>Iniciar Sessão</Text>
      </View>


      <View style={style.boxMid}> {/* separaçao > meio da tela*/}

        <Input
          // IconLeft={MaterialIcons}
          // iconLeftName="looks"
          placeholder="Digite seu email" />
        <Input
          placeholder="Escreva sua senha"
        />

        

      </View>

      <View style={style.boxBottom}>
         <TouchableOpacity onPress={() => navigation.navigate("BottomRoutes")} style={style.button}>
            <Text style={style.textobutton}>
              Iniciar Sessão</Text>
              </TouchableOpacity>



        <Text style={style.textbottom}>Não tem conta? Registre-se agora!</Text>
      </View>

    </View>


  )
}

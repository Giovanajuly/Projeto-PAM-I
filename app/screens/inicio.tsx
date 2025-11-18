 import { MaterialIcons } from "@expo/vector-icons"; 
import React from "react"; 
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from "react-native"; 
import { style } from "./styles";
import { themas } from "@/app/constants/theme";
import { Input } from "@/app/components/input";
import { useNavigation, NavigationProp } from "@react-navigation/native";

// const navigation = useNavigation<NavigationProp<any>>();



export default function Login() { 

  const navigation = useNavigation<NavigationProp<any>>();

    return ( 
    <View style={style.container}>
            <View style={style.boxTop}>
                <Image source={require("../assets/images/logo.png")} 
                style={style.logo}
                // rezideMode="contain" nao ta funcionando > serve para designar uma caixa
                ></Image>
                <Text style={style.titulo}>Iniciar Sessão</Text> 
                {/* no video ta text ^^ */}
            </View>

           <View style={style.boxMid}> {/* separaçao > meio da tela*/}
              <Input
                IconLeft={MaterialIcons}
               iconLeftName="looks"
              placeholder="Digite seu email"/>
              <Input
              placeholder="Escreva sua senha"
              />

              <View style={style.boxBottom}>
            <TouchableOpacity onPress={() => navigation.navigate("BottomRoutes")} style={style.button}>
                <Text style={style.textobutton}>
                  Iniciar Sessão</Text>

            </TouchableOpacity>
            </View>
               {/* <MaterialIcons
              name ='email'
              size ={20}
              color={themas.colors.gray} coloca icon   
                 == coloca icone junto com o import da linha 1
              /> */}
              
               {/* <View style={style.boxInput}> caixainput */}
                {/* <TextInput  */}
                 {/* {/* style={style.input}    /* nome da estilização*/  }
                 {/* placeholder ="Endereço de Email"/> texto dentro do input */}
                {/* </View> */}

                 {/* <View style={style.boxInput}> */}
                {/* <TextInput  */}
                 {/* style={style.input} */}
                  {/* placeholder="Senha"/>  o style e o p.h estao dentro do textInput, tendo seu fechamento dps da senha "/>" */}
            
                {/* </View> */}
             </View> 

            <View style={style.boxBottom}>
            {/* <TouchableOpacity onPress={() => navigation.navigate("HomeTabs")} style={style.button}>
                <Text style={style.textobutton}>
                  Iniciar Sessão</Text>

            </TouchableOpacity> */}
            
              <Text style={style.textbottom}>Não tem conta? Registre-se agora!</Text>
           </View>
           {/* <Text style={style.textbottom}>Não tem conta? Registre-se agora!</Text> */}
        </View>
    
    
    )}

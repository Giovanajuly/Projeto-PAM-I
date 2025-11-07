// import { Feather } from "@expo/vector-icons"; 
import React from "react"; 
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from "react-native"; 
import { style } from "./styles";

export default function Login() { 
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

               <View style={style.boxInput}> {/* caixainput*/}
                <TextInput 
                 style={style.input}    /* nome da estilização*/
                 placeholder ="Endereço de Email"/> {/* texto dentro do input*/}
                </View>

                 <View style={style.boxInput}>
                <TextInput 
                 style={style.input}
                  placeholder="Senha"/>  {/* o style e o p.h estao dentro do textInput, tendo seu fechamento dps da senha "/>"*/}
            
                </View>
            </View>

            <View style={style.boxBottom}>
            <TouchableOpacity style={style.button}>
                <Text style={style.textobutton}>Iniciar Sessão</Text>

            </TouchableOpacity>
            
              <Text style={style.textbottom}>Não tem conta? Registre-se agora!</Text>
           </View>
           {/* <Text style={style.textbottom}>Não tem conta? Registre-se agora!</Text> */}
        </View>
    
    
    )}

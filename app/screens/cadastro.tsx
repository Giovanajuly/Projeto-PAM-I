import React from "react"; 
import { Dimensions, StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from "react-native";
import { themas } from '../constants/theme';
import { Input } from "@/app/components/input";
 import { MaterialIcons } from "@expo/vector-icons"; 
import { style } from "./styles";

//  import { useNavigation, NavigationProp } from "@react-navigation/native";

export default function Cadastro (){

    return(
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image source={require("../assets/images/logo.png")} 
                style={style.logo}
                // rezideMode="contain" nao ta funcionando > serve para designar uma caixa
                ></Image>
                <Text style={style.titulo}>Cadastre-se</Text> 
                {/* no video ta text ^^ */}
            </View>

           <View style={style.boxMid}> {/* separaçao > meio da tela*/}
              <Input
            //     IconLeft={MaterialIcons}
            //    iconLeftName="looks"
              placeholder="Digite seu email"/>
              <Input
              placeholder="Escreva sua senha"
              />

              <View style={style.boxBottom}>
            {/* <TouchableOpacity 
            // onPress={() => navigation.navigate("BottomRoutes")} 
            style={style.button}>
                <Text style={style.textobutton}>
                  Cadastrar</Text>
                  </TouchableOpacity> */}
                              </View>
</View> 

            <View style={style.boxBottom}>

                 <TouchableOpacity 
            // onPress={() => navigation.navigate("BottomRoutes")} 
            style={style.button}>
                <Text style={style.textobutton}>
                  Cadastrar</Text>
                  </TouchableOpacity>
            
              <Text style={style.textbottom}>Ja tem uma conta? Faça login!</Text>
 




            </View>
          
            
        </View>
    )
}

const cadastroS = StyleSheet.create({
 
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent:'center'
    },
    boxTop:{
        height:Dimensions.get('window').height/3,
        width:'100%',
        backgroundColor:themas.colors.primary,
        alignItems:'center',
        justifyContent:'center'
    },
    boxMid:{
        height:Dimensions.get('window').height/3,
        width:'100%',
        backgroundColor:themas.colors.primary,
        paddingHorizontal:37
    

    },
    boxBottom:{
        height:Dimensions.get('window').height/3,
        width:'100%',
        backgroundColor:themas.colors.primary,
        alignItems:'center',
        // justifyContent:'center'

    },
    logo:{
        marginTop:40,
        width:80,
        height:80
    },
    titulo:{   //no video ta text
    //   fontWeight:'bold',
      marginTop:30,
      fontSize: 18
    },
     textoInput:{
        //DEIXANDO POR DESENCARGO DE CONSCIENCIA
        //TA SEM USO PQ TO ESTILIZANDO NO INPUT
        // marginLeft:5,
         color:themas.colors.gray // cor do texto input
        //  marginTop:20
     },
    
    boxInput:{ // ta no do componente
        width:'100%',
        height:40,
        // borderWidth:1,
        borderRadius:10,
        marginTop:30,
        flexDirection:'row',
        shadowColor: "#7a6e6eff",
         shadowOffset: {
          width: 0,
          height: 5,
          },
          shadowOpacity: 0.36,
          shadowRadius: 6.68,
          elevation: 11,
    },
    input:{ // ta no do componente
        color:themas.colors.gray,
        height:'100%',
        width:'100%',
        backgroundColor:themas.colors.white,
        borderRadius:10,
        paddingLeft:10
    },

    button:{
        width:140,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:themas.colors.secondary,
        borderRadius:10


    },
    textobutton:{
        color:themas.colors.white,
        fontWeight:'bold'
    },
    textbottom:{
        color:themas.colors.gray,
        paddingTop:60
    }

})
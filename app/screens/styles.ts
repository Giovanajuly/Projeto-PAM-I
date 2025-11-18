import { Redirect } from "expo-router";
import { Dimensions, StyleSheet} from "react-native";
import { themas } from '../constants/theme';


export const style = StyleSheet.create({
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


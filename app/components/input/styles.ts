import { themas } from "@/app/constants/theme";
import { StyleSheet } from "react-native";


export const style = StyleSheet.create({

 container:{

 },

    boxInput:{
        width:'100%',
        height:40,     
        borderRadius:10,
        marginTop:30,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:themas.colors.white,

        shadowColor: "#7a6e6eff",
         shadowOffset: {
	      width: 0,
	      height: 5,
          },
          shadowOpacity: 0.36,
          shadowRadius: 6.68,
          elevation: 11,
    },

    input:{
        flex:1,
            color:themas.colors.gray,
            height:'100%',
            borderRadius:10,
            paddingLeft:10
        },

         titleInput:{
             marginLeft:5,
            color:themas.colors.gray,
             marginTop:20 
         },

         icon:{
         marginLeft:10,
          marginRight: 10,
         }

        
})
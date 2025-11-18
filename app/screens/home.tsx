import { Button, StyleSheet, Text, View, Image } from "react-native";
import { themas } from '../constants/theme';

import { Input } from "@/app/components/input";
 import { MaterialIcons } from "@expo/vector-icons"; 
export default function Home(){

    return(
        <View style={style.container}> 

            <View style={style.header}>
              <Image source={require("../assets/images/logo.png")} 
                              style={style.logo}></Image>

              <Input style={{ width: "100%", height: 30, }} 
                IconLeft={MaterialIcons}
               iconLeftName="search"
              placeholder="Encontrar receitas"/>

              {/* de alguma forma jesus cristo senhor arrumar essa porra desse input do caralho */}

 




            </View>
          
            
        </View>
    )
}

const style = StyleSheet.create({
 
container :{
    flex:1,
    alignItems: 'center',
    backgroundColor:'red'
},

header:{
    width:'100%',
    height:60,
    backgroundColor:'blue',
    alignItems:'center',
    flexDirection:'row'

},

logo:{ 
    marginTop:10,
    marginLeft:10,
    marginRight:10,
        width:30,
        height:30


}

})
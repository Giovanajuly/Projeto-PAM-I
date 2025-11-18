import { Button, Dimensions, FlatList, StyleSheet, Text, View, Image } from "react-native";
import { themas } from '../constants/theme';


import { MaterialIcons } from "@expo/vector-icons";
export default function Home() {

    return (
        <View style={style.container}>


            <View style={style.header}>
                <MaterialIcons name="arrow-back" size={28} color="#000" />
                <Text style={style.titulo}> Sorvete de matcha</Text>
                {/* material icons */}

            </View>
            <View style={style.mid}>

                <Image
                    source={{ uri: "https://static.itdg.com.br/images/640-400/53c2861596936e9f83c61e029869dc96/shutterstock-652699975.jpg" }}
                    style={style.sorvete}
                />
            </View>
            <View style={style.middle}>

                <Text style={style.subtitulo}> Ingredientes</Text>

                <Text style={style.ingredientes}>

                    1.   3 gemas {"\n"}
                    2.   100 g de açúcar refinado{"\n"}
                    3.   1 colher (chá) de chá verde de matcha em pó{"\n"}
                    4.   500ml de leite integral{"\n"}
                    5.   100 ml de creme de leite fresco


                </Text>

            </View>



        </View>
    )
}

const style = StyleSheet.create({

    container: {

        flex: 1,
        alignItems: 'center',
        backgroundColor: themas.colors.white
    },

    header: {

        width: '100%',
        height: 70,
        // height:Dimensions.get('window').height/5,
        backgroundColor: themas.colors.primary,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        justifyContent: 'flex-start',
        gap: 10


    },
    titulo: {
        fontSize: 20,
        fontWeight: "bold"

    },

    subtitulo: {
        fontSize: 17,
        fontWeight: "bold",
        paddingTop: 20

    },

    sorvete: {
        width: 300,
        height: 200,


    },
    ingredientes: {
        paddingTop: 50,
        fontWeight: "700",
    },

    mid: {
        width: '100%',
        alignItems: 'center',
        padding: 10,
    },
    middle: {
        width: '100%',
        height: '100%',
        alignItems: 'center'
    }

})
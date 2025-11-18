import { Button, Dimensions, FlatList, TouchableOpacity, StyleSheet, Text, View, Image } from "react-native";
import { themas } from '../constants/theme';
import { Flags } from "@/app/components/flags";
import { Container } from "../components/container";
import { receitas, Receita } from '../data/receitas'

import { MaterialIcons } from "@expo/vector-icons";
export default function Home() {

    return (
        <View style={style.container}>

            <View style={style.header}>
<MaterialIcons name="arrow-back" size={28} color="#000" />
            </View>
            <View style={style.mid}>

                <Image
                    source={{ uri: "https://i.pinimg.com/736x/b5/d6/45/b5d645ec7460614931d24366ee289990.jpg" }}
                    style={style.foto}></Image>

                <Text style={style.nome}> Pocoyo</Text>
                <Text style={style.user}> @ÉoPocoyo</Text>


                <View style={style.caixabutton}>
                    <TouchableOpacity style={style.button}>Editar perfil</TouchableOpacity>
                    <TouchableOpacity style={style.button}>Encerrar Sessão</TouchableOpacity>
                </View>
                 <Text style={style.nome}> Minhas receitas</Text>

            </View>
            <View style={style.middle}>
                <FlatList
                    data={receitas}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }: { item: Receita }) => (
                        <Container
                            image={item.image}
                            title={item.title}
                            description={item.description}
                            flags={item.flags}
                        />
                    )}
                    contentContainerStyle={{ padding: 20 }}
                />


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
        // backgroundColor: themas.colors.primary,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        justifyContent: 'flex-start',
        gap: 10


    },

    logo: {
        marginTop: 30,
        marginLeft: 10,
        marginRight: 10,
        width: 40,
        height: 40


    },
    mid: {
        width: '100%',
        // flexDirection: "row",
        padding: 10,
        // backgroundColor: 'pink',
        // justifyContent: 'space-between'
        alignItems: 'center'

    },

    foto: {
        width: 150,
        height: 150,
        borderRadius: 600,


    },

    nome: {
        fontSize: 20,
        fontWeight: "bold",

    },

    user: {
        paddingBottom: 20,
        color: themas.colors.gray
    },
    button: {
        width: 140,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: themas.colors.secondary,
        borderRadius: 10,
        color: themas.colors.white



    },

    caixabutton: {

        flexDirection: "row",
        gap: 10,
        paddingBottom:15
    },
    middle: {
        width: '100%',
        height: '100%',


    }

})
import { Dimensions, FlatList, StyleSheet, View, Image } from "react-native";
import { themas } from '../constants/theme';

import { Input } from "@/app/components/input";
import { Flags } from "@/app/components/flags";
import { Container } from "../components/container";
import { receitas, Receita } from '../data/receitas'

import { MaterialIcons } from "@expo/vector-icons";
export default function Home() {

    return (
        <View style={style.container}>

            <View style={style.header}>
                <Image source={require("../assets/images/logo.png")}
                    style={style.logo}></Image>

                <Input containerStyle={{ width: 220, height: 40 }}
                    IconLeft={MaterialIcons}
                    iconLeftName="search"
                    placeholder="Encontrar receitas" />


            </View>
            <View style={style.mid}>
                <Flags label="Mexicana"
                    style={{ backgroundColor: themas.colors.primary, borderColor: "#e37e7eff" }}
                    textStyle={{ color: "#000000ff" }}
                />
                <Flags label="Argentina"
                    style={{ backgroundColor: themas.colors.primary, borderColor: "#e37e7eff" }}
                    textStyle={{ color: "#000000ff" }} />
                <Flags label="Brasileira"
                    style={{ backgroundColor: themas.colors.primary, borderColor: "#e37ec1ff" }}
                    textStyle={{ color: "#000000ff" }}
                />

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
        height: 100,
        backgroundColor: themas.colors.primary,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        justifyContent: 'center',
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
        flexDirection: "row",
        padding: 10,
        justifyContent: 'space-between'


    },
    middle: {
        width: '100%',
        height: '100%',
    }

})
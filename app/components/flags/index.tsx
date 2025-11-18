import React, { forwardRef } from "react";
import { View, Text, TextStyle, ViewStyle, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors, themas } from "@/app/constants/theme";



type Props = {
    label?: string
    style?: ViewStyle | ViewStyle[];       // permite estilos externos para o TouchableOpacity
    textStyle?: TextStyle | TextStyle[];
}

export function Flags({ label, style, textStyle }: Props) {
    return (
        <TouchableOpacity
            style={[styles.flag, style]}>
            <Text style={[styles.flagText, textStyle]}>
                {label}
            </Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({

    flag: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
        backgroundColor: themas.colors.tertiary,
        borderWidth: 1,
        borderColor: "#ccc",
        marginRight: 10,
    },

    flagText: {
        color: themas.colors.white,
        fontSize: 14,
        fontWeight: "600",
    }
});


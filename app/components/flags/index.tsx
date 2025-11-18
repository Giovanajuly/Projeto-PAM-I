import React, { forwardRef } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { style } from "../input/styles";
import { themas } from "@/app/constants/theme";



type Props = {
    label?:string
}

export function Flags ({ label}: Props) {
    return (
        <TouchableOpacity 
            style={styles.flag}>
            <Text style={styles.flagText}>
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
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#ccc",
        marginRight: 10,
    },

    flagText: {
        color: "#444",
        fontSize: 14,
        fontWeight: "600",
    }
});


import React, { forwardRef } from "react";
import { View, Text, Image, StyleSheet } from 'react-native';
import { style } from "../input/styles";
import { themas } from "@/app/constants/theme";



type ContainerProps = {
    label?:string;
    image?: string;
    title?: string;
    description?: string;
    
}

export function Container ({ label, image, title, description}: ContainerProps) {
    return (
         <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
    );
}
   const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 15,
    padding: 10,
    borderRadius: 8,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 6,
  },
  info: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  description: {
    color: '#555',
  },
});


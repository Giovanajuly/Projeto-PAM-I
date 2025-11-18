import React, { forwardRef } from "react";
import { View, Text, TextInput, TextInputProps, TouchableOpacity } from 'react-native';
import { style } from "./styles";

import { themas } from "@/app/constants/theme";
import { MaterialIcons, FontAwesome, Octicons } from '@expo/vector-icons';

type IconComponent =
    React.ComponentType<React.ComponentProps<typeof MaterialIcons>> |
    React.ComponentType<React.ComponentProps<typeof FontAwesome>> |
    React.ComponentType<React.ComponentProps<typeof Octicons>>;


type InputProps = TextInputProps & {
    placeholder?: string;
    title?: string
    IconLeft?: IconComponent,
    IconRight?: IconComponent,
    iconLeftName?: string,
    iconRightName?: string,
    onIconLeftPress?: () => void,
    onIconRightPress?: () => void
    containerStyle?: object;
}

export const Input = forwardRef<TextInput, InputProps>(
    ({ containerStyle, placeholder, IconLeft, IconRight, iconLeftName, iconRightName, title, onIconLeftPress, onIconRightPress, ...rest }, ref) => {
        return (

            <>
                <View style={[style.boxInput, containerStyle]}>

                    {IconLeft && iconLeftName && (
                        <IconLeft
                            name={iconLeftName as any}
                            size={22}
                            color={themas.colors.gray}
                            style={style.icon}
                        />)}

                    <TextInput
                        style={style.input} /* nome da estilização*/
                        placeholder={placeholder}
                        {...rest}
                    /> {/* texto dentro do input*/}

                    {IconRight && iconRightName && (
                        <IconRight
                            name={iconRightName as any}
                            size={22}
                            color={themas.colors.gray}
                            style={style.icon}
                        />

                    )}


                </View>

            </>

        )
    })


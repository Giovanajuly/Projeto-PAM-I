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
    title?: string  // se for colocar tem q fazer o title input e estilizar, aq msm
    IconLeft?: IconComponent,
    IconRight?: IconComponent,
    iconLeftName?: string,
    iconRightName?: string,
    onIconLeftPress?: () => void,
    onIconRightPress?: () => void
    containerStyle?: object;
}

export const Input = forwardRef<TextInput, InputProps>( // parei em 18:00 no video
    ({ placeholder, IconLeft, IconRight, iconLeftName, iconRightName, title, onIconLeftPress, onIconRightPress,containerStyle, ...rest }, ref) => {
        return (
           
            <><View style={style.boxInput}>

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
                    // se for usar <TouchableOpacity onPress={onIconRightPress}>
                    <IconRight
                        name={iconRightName as any}
                        size={22}
                        color={themas.colors.gray}
                        style={style.icon}
                    />
                    // </TouchableOpacity>
                )}


            </View>

            </>

        )
    })


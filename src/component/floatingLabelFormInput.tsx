import React, { useState } from "react"
import { StyleSheet, Text, TextInput, View } from "react-native"
import { moderateScale } from "../utility/responsiveDimension";

interface FloatingProps {
    label?: any,
    value?: any,
    field?: any,
    secureText?:boolean,
    multiline?:boolean,
    name?: string
}

const FloatingLabelFormInput = (props: FloatingProps) => {
    const [isFocused, handleFocus] = useState(false);
    const labelStyle: any = {
        position: 'absolute',
        left: 0,
        top: !isFocused && !props.field.value  ?28 : 0,
        fontSize: !isFocused ? 14 : 14,
        color: !isFocused ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.6)',
        fontWeight: "400", lineHeight: moderateScale(17.5),
        fontfamily:"Lexend-Regular"
    };

    const errorText:any = {
        color: "#DB626C", alignSelf: "center", fontWeight: "400", fontSize: moderateScale(11), lineHeight: moderateScale(1),fontFamily:"Lexend-Regular"
    };
    return (
        <View style={{ marginBottom: 15 }} >
            <Text style={labelStyle}>
                {props.label}
            </Text>
            <TextInput style={{ borderBottomColor: "#6F7076", borderBottomWidth: 1, paddingTop: 20, fontSize: 16, color: "rgba(255, 255, 255, 0.8)", fontWeight: "400", lineHeight: moderateScale(17.5), left: 0,fontFamily:"Lexend-Regular" }}
                onFocus={() => handleFocus(true)}
                onBlur={props.field.onBlur}
                onChangeText={props.field.onChange}
                blurOnSubmit
                secureTextEntry={props.secureText && true}
                selectionColor="white"
                multiline={props.multiline}
                value={props.field.value}
            ></TextInput>
             
        </View>
    )
}

export default FloatingLabelFormInput;
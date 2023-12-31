import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from "react-native";
import { moderateScale } from "../utility/responsiveDimension";
import Icon from 'react-native-vector-icons/Ionicons';

interface FloatingProps {
  label?: any,
  value?: any,
  onChangeText?: any,
  onBlur?: any,
  secureText?: boolean,
  multiline?: boolean,
  validationQuery?: any,
  register?: any,
  name?: string
}

const FloatingLabelInput = (props: FloatingProps) => {
  const [isFocused, handleFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const labelStyle: any = {
    position: 'absolute',
    left: 0,
    top: !isFocused ? 28 : 0,
    fontSize: !isFocused ? 14 : 14,
    color: !isFocused ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.6)',
    fontWeight: "400", lineHeight: moderateScale(17.5),
    fontFamily: "Lexend-Regular"
  };

  return (
    <View style={{ marginBottom: 20 }} >
      <Text style={labelStyle}>
        {props.label}
      </Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TextInput
          style={{
            borderBottomColor: "#6F7076",
            borderBottomWidth: 1,
            paddingTop: 20,
            fontSize: 16,
            color: "rgba(255, 255, 255, 0.8)",
            fontWeight: "400",
            lineHeight: moderateScale(17.5),
            left: 0,
            fontFamily: "Lexend-Regular",
            flex: 1 // Take up remaining space
          }}
          onFocus={() => handleFocus(true)}
          onBlur={props.onBlur}
          onChangeText={props.onChangeText}
          blurOnSubmit
          secureTextEntry={!showPassword && props.secureText}
          selectionColor="white"
          multiline={props.multiline}
          {...(props.register && props.register(props.value, props.validationQuery))}
        />
        {props.secureText && (
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={{ position: 'absolute', right: 3, bottom:10 }}
          >
            <Icon name={showPassword ? 'eye-off' : 'eye'} size={20} color="gray" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

export default FloatingLabelInput;

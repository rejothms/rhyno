import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from "react-native";
import { moderateScale } from "../utility/responsiveDimension";
import Icon from 'react-native-vector-icons/Ionicons';
import { Calendar } from "react-native-calendars";

interface FloatingProps {
    label?: any,
    value?: any,
    field?: any,
    secureText?: boolean,
    multiline?: boolean,
    name?: string
}

const FloatingLabelFormCalendar = (props: FloatingProps) => {
    const [isFocused, handleFocus] = useState(false);
    const [showCalendar, setShowCalendar] = useState(false);
    const [selectedDate, setSelectedDate] = useState('');
    const [inputValue, setInputValue] = useState('');

    const onDayPress = (day: any) => {
        setSelectedDate(day.dateString);
        handleFocus(true)
        props.field.onChange(day.dateString); // Update the field value
        setShowCalendar(false);
        setShowCalendar(false);
    };

    const toggleCalendar = () => {
        setShowCalendar(!showCalendar);
    };

    const labelStyle: any = {
        position: 'absolute',
        left: 0,
        top: !isFocused && !props.field.value ? 28 : 0,
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
                    onBlur={props.field.onBlur}
                    onChangeText={props.field.onChange}
                    blurOnSubmit
                    secureTextEntry={props.secureText && true}
                    selectionColor="white"
                    multiline={props.multiline}
                    value={props.field.value}
                />
                {
                    <TouchableOpacity onPress={toggleCalendar}
                        style={{ position: 'absolute', right: 3, bottom: 10 }}
                    >
                        <Icon name="calendar" size={20} color="white" />
                    </TouchableOpacity>
                }
            </View>
            {showCalendar && (
                <Calendar
                    onDayPress={onDayPress}
                    markedDates={{
                        [selectedDate]: { selected: true, selectedColor: 'blue' },
                    }}
                />
            )}
        </View>
    );
}

export default FloatingLabelFormCalendar;

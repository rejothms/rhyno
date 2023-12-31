import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { horizontalScale, moderateScale, verticalScale } from "../utility/responsiveDimension";
import { appStyle } from "../utility/appStyles";


interface mainBtnProps {
    name?: string;
    btnPress?: any
}

export const MainBtn = (props: mainBtnProps) => {
    return (
        <LinearGradient
            style={styles.buttonContainer}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}  
            colors={['rgba(148, 148, 148, 0.7)', 'rgba(176, 176, 176, 0.32)']}
        >
            <TouchableOpacity style={styles.buttonInner} onPress={props.btnPress}>
                <Text style={styles.txt}>{props.name}</Text>
                <Icon name="arrow-forward" size={moderateScale(20)} color="#fff" style={{ marginHorizontal: moderateScale(20) }} />
            </TouchableOpacity>
        </LinearGradient>
    )
}

export default MainBtn;

const styles = StyleSheet.create({

    buttonContainer: {
        width: horizontalScale(271),
        height: verticalScale(55),
        overflow: 'hidden',
        borderBottomWidth: 3,
        borderBottomColor: '#353535',
        borderRightWidth: 2.5,
        borderRightColor: '#5F5F5F',
        borderTopRightRadius: 1
    },
    buttonInner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        flexDirection: "row",
    },

    txt: {
        color: "rgba(255, 255, 255, 1)",
        fontSize: moderateScale(14),
        fontWeight: "bold",
        lineHeight: moderateScale(16.94),
        fontFamily: "Inter"
    },

})


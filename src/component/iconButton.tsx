import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { horizontalScale, moderateScale, verticalScale } from "../utility/responsiveDimension";
import { appStyle } from "../utility/appStyles";
import { Images } from "../assets/images";


interface iconBtnProps {
    name?: string;
    btnPress?: any;
    iconImage?: any;
}

export const IconBtn = (props: iconBtnProps) => {
    return (
        <View >
            <TouchableOpacity onPress={props.btnPress} >
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                    colors={['rgba(48, 48, 48, 0.7)', "rgba(76, 76, 76, 0.3)",]}
                    style={[styles.linearGradient, appStyle.iconBtnViews]}>
                    <Image source={props.iconImage} />
                    <View style={{ display: "flex", flexDirection: "row" }}>
                        <Text style={styles.txt}>{props.name}</Text>
                        <Icon name="arrow-forward" size={moderateScale(20)} color="#fff" style={{ marginHorizontal: moderateScale(20) }} />
                    </View>
                </LinearGradient>
            </TouchableOpacity>
        </View>

    )
}

export default IconBtn;

const styles = StyleSheet.create({
    linearGradient: {
        width: horizontalScale(295),
        height: verticalScale(80),
        alignSelf: "center",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        marginTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: moderateScale(30),

    },
    txt: {
        color: "#D2D2D2",
        fontSize: moderateScale(16),
        fontWeight: "normal",
        lineHeight: moderateScale(16.94),
        fontFamily: "Inter"
    },

})


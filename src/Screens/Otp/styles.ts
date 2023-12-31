import React from "react";
import { StyleSheet } from "react-native";
import { horizontalScale, moderateScale } from "../../utility/responsiveDimension";

export const styles = StyleSheet.create({
    inputView: {
        flex: 5, width: horizontalScale(271), alignSelf: "center",justifyContent:"center"
    },
    headerView: {
        fontSize: moderateScale(20), color: "white", fontWeight: "600", lineHeight: moderateScale(24.5), paddingBottom: moderateScale(20),marginTop:moderateScale(20),fontFamily:"Inter-Regular"
    },
    msg: {
        fontSize: 14, color: "#fff", fontWeight: "400", lineHeight: moderateScale(16.94), fontFamily:"Inter-Regular"
    },
    errorText: {
        color: "#DB626C", alignSelf: "center", fontWeight: "400", fontSize: moderateScale(11), lineHeight: moderateScale(13.75),marginBottom:moderateScale(20) ,fontFamily:"Lexend-Regular"
    },
    sinupText: {
        alignSelf: "center", fontWeight: "400", fontSize: moderateScale(11), lineHeight: moderateScale(13.75),fontFamily:"Lexend-Regular"
    }

})
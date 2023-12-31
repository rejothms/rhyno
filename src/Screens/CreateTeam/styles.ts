import React from "react";
import { StyleSheet } from "react-native";
import { horizontalScale, moderateScale } from "../../utility/responsiveDimension";

export const styles = StyleSheet.create({
    inputView: {
        flex: 5, width: horizontalScale(310), alignSelf: "center",
    },
    headerView: {
        fontSize: moderateScale(20), color: "white", fontWeight: "bold", lineHeight: moderateScale(24.5), paddingBottom: moderateScale(20), fontFamily: "Lexend-Regular"
    },
    forgotPassword: {
        fontSize: 11, color: "#6F7076", fontWeight: "400", lineHeight: moderateScale(13.75), alignSelf: "flex-end", marginTop: -10
    },
    errorText: {
        color: "#DB626C", alignSelf: "center", fontWeight: "400", fontSize: moderateScale(11), lineHeight: moderateScale(13.75), fontFamily: "Lexend-Regular"
    },
    emailText: {
        fontWeight: "400", fontSize: moderateScale(11), lineHeight: moderateScale(13.75), fontFamily: "Lexend-Regular"
    },
    labelStyle: {
        left: 0,
        paddingBottom: moderateScale(20),
        fontSize: 14,
        color: 'rgba(255, 255, 255, 0.6)',
        fontWeight: "400", lineHeight: moderateScale(17.5),
        fontfamily: "Lexend-Regular"
    },
    emailView: {
        paddingTop: moderateScale(20),
        paddingBottom: moderateScale(15)
    }
})
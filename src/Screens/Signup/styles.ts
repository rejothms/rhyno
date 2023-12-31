import React from "react";
import { StyleSheet } from "react-native";
import { horizontalScale, moderateScale } from "../../utility/responsiveDimension";

export const styles = StyleSheet.create({
    inputView: {
        flex: 5, width: horizontalScale(271), alignSelf: "center",
    },
    headerView: {
        fontSize: moderateScale(20), color: "white", fontWeight: "bold", lineHeight: moderateScale(24.5), paddingBottom: moderateScale(20),fontFamily:"Inter-Regular"
    },
    forgotPassword: {
        fontSize: 11, color: "#6F7076", fontWeight: "400", lineHeight: moderateScale(13.75), alignSelf: "flex-end"
    },
    errorText: {
        color: "#DB626C", alignSelf: "center", fontWeight: "400", fontSize: moderateScale(11), lineHeight: moderateScale(13.75),fontFamily:"Lexend-Regular"
    },
    sinupText: {
        alignSelf: "center", fontWeight: "400", fontSize: moderateScale(11), lineHeight: moderateScale(13.75),fontFamily:"Lexend-Regular"
    }

})
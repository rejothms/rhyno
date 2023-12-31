import React from "react";
import { StyleSheet } from "react-native";
import { horizontalScale, moderateScale } from "../../utility/responsiveDimension";

export const styles = StyleSheet.create({
    inputView: {
        flex: 6.5, width: horizontalScale(271), alignItems:"center",alignSelf:"center"
    },
    headerView: {
        fontSize: moderateScale(20), color: "#60C213", fontWeight: "600", lineHeight: moderateScale(24.5), paddingBottom: moderateScale(20),marginTop:40,fontFamily:"Inter-Regular"
    },
    forgotPassword: {
        fontSize: 11, color: "#6F7076", fontWeight: "400", lineHeight: moderateScale(13.75), alignSelf: "flex-end"
    },
    errorText: {
        color: "#DB626C", alignSelf: "center", fontWeight: "400", fontSize: moderateScale(11), lineHeight: moderateScale(13.75)
    },
    sinupText: {
        alignSelf: "center", fontWeight: "400", fontSize: moderateScale(11), lineHeight: moderateScale(13.75),
    },
    msg: {
        fontSize: 14, color: "#fff", fontWeight: "400", lineHeight: moderateScale(16.94), fontFamily:"Inter-Regular"
    },

})
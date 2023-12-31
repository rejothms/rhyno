import React from "react";
import { StyleSheet } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../../utility/responsiveDimension";

export const styles = StyleSheet.create({
   
    headerView: {
        fontSize: moderateScale(20), color: "white", fontWeight: "bold", lineHeight: moderateScale(24.5), 
        paddingBottom: verticalScale(20),fontFamily:"Inter-SemiBold"
    },
    forgotPassword: {
        fontSize: 11, color: "#6F7076", fontWeight: "400", lineHeight: moderateScale(13.75), alignSelf: "flex-end"
    },
    sinupText: {
        fontWeight: "400", fontSize: moderateScale(11), lineHeight: moderateScale(13.75),color: "rgba(255, 255, 255, 0.9)" ,fontFamily:"Lexend-Regular"
    },
    errorText: {
        color: "#DB626C", alignSelf: "center", fontWeight: "400", fontSize: moderateScale(11), lineHeight: moderateScale(13.75),fontFamily:"Lexend-Regular"
    },
    bottomView:{
        width: horizontalScale(270), alignSelf: "center", marginTop: verticalScale(40) 
    }


})
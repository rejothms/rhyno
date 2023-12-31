import React from "react";
import { StyleSheet } from "react-native";
import { colors } from "./colors";
import { horizontalScale, moderateScale, verticalScale } from "./responsiveDimension";
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const appStyle = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        height: height,
        backgroundColor: "black"
    },
    bgImage: {
        resizeMode: "cover",
        width: width,
        height: height
    },
    bgHome: {
        resizeMode: "cover",
        width: width
    },
    mainLogo: {
        height: verticalScale(100),
        width: horizontalScale(224),
        justifyContent: "center",
        alignSelf: "center",
        marginTop: verticalScale(90)
    },
    sideLogo: {
        height: moderateScale(85),
        width: moderateScale(85),
        justifyContent: "center",
        alignSelf: "center",
        marginTop: verticalScale(20),

    },
    headerLogo: {
        height: moderateScale(65),
        width: moderateScale(65),
        right: 30
        //marginTop: verticalScale(20),

    },
    icons: {
        width: 20,
        height: 20
    },
    sh: {
        backgroundColor: "transparent",
        alignItems: "center",
        //shadowColor: "rgba(53, 53, 53, 1)",
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 5,
        elevation: 5,
        width: horizontalScale(271),
        height: verticalScale(60),
        shadowColor: "green",
        alignSelf: "center",

    },
    iconBtnViews: {
     borderColor: "#393939",
     borderRadius: 5,
     borderWidth: 2
    }

})
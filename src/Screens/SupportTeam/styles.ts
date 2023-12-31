import React from "react";
import { StyleSheet } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../../utility/responsiveDimension";

export const styles = StyleSheet.create({

    teamView: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center"
    },
    tsLogo: {
        height: verticalScale(81),
        width: horizontalScale(61),
        justifyContent: "center",
        alignSelf: "center",

    },
    titleView: {
        width: 170,
        textAlign: "center",
        marginTop: verticalScale(90)
    },
    headerView: {
        fontSize: moderateScale(20),
        color: "white",
        fontWeight: "bold",
        lineHeight: moderateScale(24.5),
        paddingBottom: moderateScale(20),
        fontFamily: "Lexend-Regular",
        textAlign: "center"
    },
    buttonView: {
        marginTop: verticalScale(50),
        display: "flex",
        flexDirection: "column"
    },
    boxView: {
        display: "flex",
        flexDirection: "row",
        margin: 15
    },
    imageView: {
        width: horizontalScale(100),
        height: horizontalScale(100),
        backgroundColor: "#222222",
        borderColor: "#373737",
        borderRadius: 100,
        justifyContent: "center",
        position: "relative",
        left: 27,
        bottom: 17,
        zIndex: 1
    },
    supportButton: {
        width: horizontalScale(310),
        height: horizontalScale(75),
        padding: 16,
        backgroundColor: "#0A0A0A",
        borderColor: "#313131",
        borderWidth: 1,
        position: "relative",
        right: 45,
        borderRadius: 5
    },
    contactSupport: {
        fontSize: moderateScale(20),
        color: "white",
        fontWeight: "bold",
        fontFamily: "Lexend-Regular",
        textAlign: "center"
    },
    contactSubSupport: {
        fontSize: moderateScale(16),
        color: "#BABABA",
        fontWeight: "bold",
        fontFamily: "Lexend-Regular",
        textAlign: "center"
    }
})
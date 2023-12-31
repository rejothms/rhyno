import React from "react";
import { StyleSheet } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../../../utility/responsiveDimension";

export const styles = StyleSheet.create({

    teamView: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },
    container: {
        marginVertical: moderateScale(20)
    },
    linearGradient: {
        width: horizontalScale(295),
        height: verticalScale(102),
        alignSelf: "center",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        marginTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        
    },
    txtYear: {
        color: "#fff",
        fontSize: moderateScale(16),
        fontWeight: "600",
        lineHeight: moderateScale(20),
        fontFamily: "Inter"
    },
    txtActive: {
        color: "#787676",
        fontSize: moderateScale(11),
        fontWeight: "300",
        lineHeight: moderateScale(13),
        fontFamily: "Inter",
        marginLeft: 20
    },
    txtCurrency: {
        color: "#94EA76",
        fontSize: moderateScale(22),
        fontWeight: "600",
        lineHeight: moderateScale(27),
        fontFamily: "Lexend"
    },
    cardView: {
        marginTop: 10,
        marginRight: 6,
        marginBottom: 10,
        marginLeft: 10
    },
    contentView: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center"
    },
    twoYear: {
        color: "#17E7E7"
    },
    threeYear: {
        color: "#E78E26"
    },
    fourYear: {
        color: "#E326E7"
    },

})
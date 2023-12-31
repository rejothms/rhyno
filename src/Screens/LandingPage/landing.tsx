import { useLinkProps } from "@react-navigation/native";
import React from "react";
import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { Images } from "../../assets/images";
import MainBtn from "../../component/mainBtn";
import { appStyle } from "../../utility/appStyles";
import { moderateScale } from "../../utility/responsiveDimension";
import { styles } from "../Congratulation/styles";

interface landingProps {
    navigation: any
}

const rider = () => {
   
}


const LandingPage = (props: landingProps) => {
    return (
        <View style={appStyle.container}>
            <ImageBackground source={Images.background} style={appStyle.bgImage}>
                <Image source={Images.appMainLogo} style={appStyle.mainLogo} />
                <View style={{ marginTop: moderateScale(110), backgroundColor: "transparent" }}>
                
                    <View style={appStyle.sh}>
                        <MainBtn name="RIDER" btnPress={rider()} />
                    </View>
                    <View style={[appStyle.sh,{marginTop:20}]}>
                        <MainBtn name="CLUB" btnPress={() => props.navigation.navigate('Login', {})} />
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default LandingPage;
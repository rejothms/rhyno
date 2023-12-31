import React from "react";
import { Image, ImageBackground, Keyboard, KeyboardAvoidingView, Platform, ScrollView, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { Images } from "../../assets/images";
import ImageIcon from "../../component/imageIcon";
import MainBtn from "../../component/mainBtn";
import { appStyle } from "../../utility/appStyles";
import { deviceHeight, moderateScale } from "../../utility/responsiveDimension";
import { styles } from "./styles";
import { LinearGradientText } from 'react-native-linear-gradient-text';


interface CongratulationsProps{
    navigation: any
}

const Congratulation =(props:CongratulationsProps)=>{
    return(
        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={appStyle.container}
      >
    
       <ScrollView style={{height:deviceHeight}}>
      
           <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      
            <ImageBackground source={Images.backgroundMain} style={appStyle.bgImage} resizeMode="cover" >
    
    
              <View style={{ flex: 3.5 }}>
                <Image source={Images.appMainLogo} style={[appStyle.mainLogo,]} />
              </View>
    
              <View style={styles.inputView}>
              <Image source={Images.congartulation} style={{width:moderateScale(140),height:moderateScale(120)}}/>

              <LinearGradientText
        colors={['rgba(255, 255, 255, 1)', 'rgba(96, 194, 19, 1)']}
        text="Congratulations"
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
        textStyle={{ fontSize: moderateScale(20), color: "#60C213", fontWeight: "bold", lineHeight: moderateScale(24.5), paddingBottom: moderateScale(20),marginTop:40,fontFamily:"Inter-Regular"}}
      />
              <Text style={styles.msg}>You have registered successfully.</Text>
              <View style={{ marginVertical: moderateScale(20) }}></View>
              <MainBtn name="LOGIN HERE" btnPress={() => props.navigation.navigate('Login', {})} />
          
              </View >
            </ImageBackground>
         
          </TouchableWithoutFeedback>
          </ScrollView></KeyboardAvoidingView>
    )
}

export default Congratulation;
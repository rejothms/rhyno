import React from "react";
import { Image, ImageBackground, Keyboard, KeyboardAvoidingView, Platform, ScrollView, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { Images } from "../../assets/images";
import ImageIcon from "../../component/imageIcon";
import MainBtn from "../../component/mainBtn";
import { appStyle } from "../../utility/appStyles";
import { deviceHeight, moderateScale } from "../../utility/responsiveDimension";
import { styles } from "./styles";

interface PasswordSetSuccessProps{
    navigation: any
}

const PasswordSetSuccess =(props:PasswordSetSuccessProps)=>{
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
              <Image source={Images.checkmark} style={{width:moderateScale(80),height:moderateScale(80)}}/>
              <Text style={styles.headerView}>New password </Text>
<Text style={[styles.headerView,{marginTop:-20}]}>updated successfully</Text>
              <Text style={styles.msg}>Now login with your new password</Text>
              <View style={{ marginVertical: moderateScale(20) }}></View>
              <MainBtn name="LOGIN" btnPress={() => props.navigation.navigate('Login', {})} />
          
              </View >
            </ImageBackground>
         
          </TouchableWithoutFeedback>
          </ScrollView></KeyboardAvoidingView>
    )
}

export default PasswordSetSuccess;
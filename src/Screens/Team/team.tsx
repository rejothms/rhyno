import React, { useState } from "react";
import { Button, Image, ImageBackground, Keyboard, KeyboardAvoidingView, Platform, ScrollView, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { Images } from "../../assets/images";
import { appStyle } from "../../utility/appStyles";
import { horizontalScale, moderateScale } from "../../utility/responsiveDimension";
import { styles } from "./styles";
import IconBtn from "../../component/iconButton";


interface loginProps {
  navigation: any
}

const Team = (props: loginProps) => {
  const [email, setEmail] = useState("")
  const handleTextChange = (text: string) => {
    setEmail(text)
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={appStyle.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ImageBackground source={Images.backgroundMain} style={appStyle.bgImage} resizeMode="cover" >
          <View style={styles.teamView}>
            <View style={{ marginVertical: moderateScale(120) }} >
              <IconBtn name="Add Team Member" iconImage={Images.addTeam} btnPress={()=>props.navigation.navigate('CreateTeam',{})} />
            </View>
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>  
    </KeyboardAvoidingView>
  );
};

export default Team;
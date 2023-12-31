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

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={appStyle.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ImageBackground source={Images.backgroundMain} style={appStyle.bgImage} resizeMode="cover" >
          <View style={styles.teamView}>

            <View style={styles.titleView}>
              <Text style={styles.headerView}>How can we help you?</Text>
              <Image source={Images.csService} style={[styles.tsLogo]} />
            </View>

            <View style={styles.buttonView}>

              <View style={styles.boxView}>

                <View style={styles.imageView}>
                  <Image source={Images.techSupport} style={[styles.tsLogo]} />
                </View>

                <View style={styles.supportButton}>
                  <Text style={styles.contactSupport}>Contact Support</Text>
                  <Text style={styles.contactSubSupport}>+91 887 999 9999</Text>
                </View>

              </View>

              <View style={styles.boxView}>

                <View style={styles.imageView}>
                  <Image source={Images.emailSupport} style={[styles.tsLogo]} />
                </View>

                <View style={styles.supportButton}>
                  <Text style={styles.contactSupport}>Email Support</Text>
                  <Text style={styles.contactSubSupport}>info@rhyno.com</Text>
                </View>

              </View>

            </View>

          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Team;
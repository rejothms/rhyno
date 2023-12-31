import React, { useState } from "react";
import { Button, Image, ImageBackground, Keyboard, KeyboardAvoidingView, Platform, ScrollView, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { Images } from "../../../assets/images";
import { appStyle } from "../../../utility/appStyles";
import { horizontalScale, moderateScale } from "../../../utility/responsiveDimension";
import { styles } from "./styles";
import IconBtn from "../../../component/iconButton";
import LinearGradient from "react-native-linear-gradient";
import AnimatedSwitchButton from "../../../component/SwitchButton";



interface planViewProps {
  navigation: any
}

const PlanView = (props: planViewProps) => {
  const onChange = () => {

  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={[appStyle.container]}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ImageBackground source={Images.backgroundMain} style={appStyle.bgImage} resizeMode="cover" >
          <View style={[styles.teamView, styles.container]}>
            <View >

              <View >
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                  colors={['rgba(21, 21, 21, 1)', "rgb(29, 30, 32)",]}
                  style={[styles.linearGradient]}>
                  <View style={styles.cardView}>
                    <View style={styles.contentView}>
                      <View style={{ display: "flex", flexDirection: "column", marginRight: 120 }}>
                        <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                          <Text style={styles.txtYear}>1 Year</Text>
                          <Text style={styles.txtActive}>ACTIVE</Text>
                        </View>
                        <View>
                          <Text style={styles.txtCurrency}>Rs. 499.00</Text>
                        </View>
                      </View>
                      <AnimatedSwitchButton onChange={onChange} value="true" containerStyle={0.2} />
                    </View>
                  </View>
                </LinearGradient>
              </View>

            </View>

            <View style={{ marginVertical: moderateScale(30) }} >

              <View >
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                  colors={['rgba(21, 21, 21, 1)', "rgb(29, 30, 32)",]}
                  style={[styles.linearGradient]}>
                  <View style={styles.cardView}>
                    <View style={styles.contentView}>
                      <View style={{ display: "flex", flexDirection: "column", marginRight: 120 }}>
                        <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                          <Text style={styles.txtYear}>2 Year</Text>
                          <Text style={styles.txtActive}>ACTIVE</Text>
                        </View>
                        <View>
                          <Text style={[styles.txtCurrency, styles.twoYear]}>Rs. 999.00</Text>
                        </View>
                      </View>
                      <AnimatedSwitchButton onChange={onChange} value="true" containerStyle={0.2} />
                    </View>
                  </View>
                </LinearGradient>
              </View>

            </View>

            <View  >

              <View >
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                  colors={['rgba(21, 21, 21, 1)', "rgb(29, 30, 32)",]}
                  style={[styles.linearGradient]}>
                  <View style={styles.cardView}>
                    <View style={styles.contentView}>
                      <View style={{ display: "flex", flexDirection: "column", marginRight: 120 }}>
                        <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                          <Text style={styles.txtYear}>3 Year</Text>
                          <Text style={styles.txtActive}>ACTIVE</Text>
                        </View>
                        <View>
                          <Text style={[styles.txtCurrency, styles.threeYear]}>Rs. 1499.00</Text>
                        </View>
                      </View>
                      <AnimatedSwitchButton onChange={onChange} value="true" containerStyle={0.2} />
                    </View>
                  </View>
                </LinearGradient>
              </View>

            </View>
            <View  >

              <View style={{ marginVertical: moderateScale(30) }} >
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                  colors={['rgba(21, 21, 21, 1)', "rgb(29, 30, 32)",]}
                  style={[styles.linearGradient]}>
                  <View style={styles.cardView}>
                    <View style={styles.contentView}>
                      <View style={{ display: "flex", flexDirection: "column", marginRight: 120 }}>
                        <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                          <Text style={styles.txtYear}>4 Year</Text>
                          <Text style={styles.txtActive}>ACTIVE</Text>
                        </View>
                        <View>
                          <Text style={[styles.txtCurrency, styles.fourYear]}>Rs. 2999.00</Text>
                        </View>
                      </View>
                      <AnimatedSwitchButton onChange={onChange} value="true" containerStyle={0.2} />
                    </View>
                  </View>
                </LinearGradient>
              </View>

            </View>

          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default PlanView;
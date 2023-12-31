import React, { useState } from "react";
import { Image, ImageBackground, Keyboard, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { Images } from "../../assets/images";
import MainBtn from "../../component/mainBtn";
import { appStyle } from "../../utility/appStyles";
import { deviceHeight, moderateScale } from "../../utility/responsiveDimension";
import { styles } from "./styles";
import OTPInputView from 'saymee-react-native-otp-input';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { verifyOTP } from "../../store/reducers/verification/verificationSlice";
import Loader from "../../component/Loader";

interface OtoProps {
  navigation: any
}
const ForgotPasswordOTP = (props: OtoProps) => {
  const [OTP, setOTP] = useState("");
  const [otpValid, setOtpValid] = useState(true);
  const { fpEmail } = useSelector((state: RootState) => state.verify);
  const dispatch = useDispatch<AppDispatch>();
  const verifyOtp = () => {
    const vOtpDetails = {
      emailId: fpEmail,
      otp: OTP
    }
    dispatch(verifyOTP(vOtpDetails)).unwrap().then((res: boolean) => {
      if (res) {
        props.navigation.navigate('SetPassword', {});
      } else {
        setOtpValid(false);
      }

    }).catch((error: any) => {
      setOtpValid(false);
    })
  }

  const resendOTP = () => {
    props.navigation.navigate('ForgotPassword', {})
  }


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={appStyle.container}
    >

      <ScrollView style={{ height: deviceHeight }}>

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

          <ImageBackground source={Images.backgroundMain} style={appStyle.bgImage} resizeMode="cover" >
            <View style={{ flex: 3.5 }}>
              <Loader />
              <Image source={Images.appMainLogo} style={[appStyle.mainLogo,]} />
            </View>
            <View style={{ alignItems: "center", flex: 7 }}>
              <Image source={Images.mailLogo} style={{ width: moderateScale(80), height: moderateScale(80) }} />
              <Text style={styles.headerView}>OTP Verification</Text>
              <Text style={styles.msg}>We have sent the code verification</Text>
              <Text style={styles.msg}>to Your Email Address</Text>

              <OTPInputView pinCount={4} style={{ width: '60%', height: 100 }} onCodeChanged={(data: string) => { setOTP(data) }}
                codeInputFieldStyle={otpStyles.underlineStyleBase}
                codeInputHighlightStyle={otpStyles.underlineStyleHighLighted}
              />

              {!otpValid && <Text style={styles.errorText}>Please enter a vaild code</Text>}
              <TouchableOpacity style={{ flexDirection: "row", alignSelf: "center" }} onPress={() => resendOTP()} >
                <Text style={[styles.sinupText, { color: "#6F7076", }]}>Didn't you receive the OTP?  </Text>
                <Text style={[styles.sinupText, { color: "#fff" }]}>Resend OTP</Text>

              </TouchableOpacity>
              <View style={{ marginVertical: moderateScale(20) }}>
                <MainBtn name="VERIFY OTP" btnPress={verifyOtp} />
              </View>
            </View>
          </ImageBackground>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>

  )
}

export default ForgotPasswordOTP;
const otpStyles = StyleSheet.create({
  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
  },

  underlineStyleHighLighted: {
    borderColor: "#ea0015",
  },
});
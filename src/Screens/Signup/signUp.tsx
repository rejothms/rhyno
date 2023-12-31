import React, { useState } from "react";
import { Image, ImageBackground, Keyboard, KeyboardAvoidingView, Platform, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { Images } from "../../assets/images";
import FloatingLabelInput from "../../component/floatingLabelInput";
import { MainBtn } from "../../component/mainBtn";
import { appStyle } from "../../utility/appStyles";
import { moderateScale } from "../../utility/responsiveDimension";
import { styles } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { setEmail, verifyEmail } from "../../store/reducers/verification/verificationSlice";
import Loader from "../../component/Loader";

interface signUpInterface {
  navigation: any
}

const SignUp = (props: signUpInterface) => {
  //props.navigation.navigate('OTP', {})
  const { email } = useSelector((state: RootState) => state.verify);
  const dispatch = useDispatch<AppDispatch>();
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [errorMessage, setErrorMessage] = useState('Incorrect Email')
  const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
  const signUp = () => {
    const isValidEmail = emailRegex.test(email);
    setIsValidEmail(isValidEmail);
    if (isValidEmail) {
      const signUpData = { email }
      dispatch(verifyEmail(signUpData))
        .unwrap()
        .then((data: any) => {
          if (data.status === "success") {
            props.navigation.navigate('OTP', {});
            setIsValidEmail(true)
          } else {
            setErrorMessage(data.message);
            setIsValidEmail(false);
          }

        })
        .catch((error: any) => {
          // Handle error
          console.error(error);
        });
    }
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={appStyle.container}
    >

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

        <ImageBackground source={Images.backgroundMain} style={appStyle.bgImage} resizeMode="cover" >
          <View style={{ flex: 3.5 }}>
            <Loader />
            <Image source={Images.appMainLogo} style={[appStyle.mainLogo,]} />
          </View>
          <View style={styles.inputView}>
            <Text style={styles.headerView}>Sign Up </Text>
            <FloatingLabelInput
              label="Enter your email address"
              onChangeText={(email: string) => dispatch(setEmail(email))}
            />
            {!isValidEmail && <Text style={styles.errorText}>{errorMessage}</Text>}

            <View style={{ marginVertical: moderateScale(20) }}>
              <MainBtn name="CONTINUE" btnPress={() => signUp()} />
            </View>
            <TouchableOpacity style={{ flex: 1.5, flexDirection: "row", alignSelf: "center" }} onPress={() => props.navigation.navigate('Login', {})} >
              <Text style={[styles.sinupText, { color: "#6F7076" }]}>Alreday have an account?  </Text>
              <Text style={[styles.sinupText, { color: "#fff" }]}>Sign In</Text>
            </TouchableOpacity>

          </View >
        </ImageBackground>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>

  )
}
export default SignUp;
import React, { useState } from "react";
import { Button, Image, ImageBackground, Keyboard, KeyboardAvoidingView, Platform, ScrollView, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { Screen } from "react-native-screens";
import { Images } from "../../assets/images";
import FloatingLabelInput from "../../component/floatingLabelInput";
import MainBtn from "../../component/mainBtn";
import { appStyle } from "../../utility/appStyles";
import { horizontalScale, moderateScale } from "../../utility/responsiveDimension";
import { styles } from "./styles";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { signIn } from "../../store/reducers/auth/authSlice";
import Loader from "../../component/Loader";

interface loginProps {
  navigation: any
}

const Login = (props: loginProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setError] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const login = () => {
    if (!email && !password) {
      setError(true);
      return;
    }
    const singInData = {
      emailId: email,
      password: password
    }
    dispatch(signIn(singInData)).unwrap().then((res: any) => {
      if (res.status === "success") {
        setError(false);
        props.navigation.navigate('Root', {})
      }

    }).catch((error: any) => {
      setError(true);
    })
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
            <Text style={styles.headerView}>Login</Text>
            <FloatingLabelInput
              label="Email Address"
              onChangeText={(email: string) => setEmail(email)}
            />
            <FloatingLabelInput
              label="Password"
              onChangeText={(password: string) => setPassword(password)}
              secureText={true}
            />
            <TouchableOpacity onPress={() => props.navigation.navigate('ForgotPassword', {})}><Text style={styles.forgotPassword}>Forgot your password ? </Text></TouchableOpacity>
            <View style={{ marginVertical: moderateScale(20) }}>
              <MainBtn name="LOGIN" btnPress={() => login()} />
            </View>
            {isError && <Text style={styles.errorText}>Incorrect Email/Password!</Text>}

          </View >
          <TouchableOpacity style={{ flex: 1.5, flexDirection: "row", alignSelf: "center" }} onPress={() => props.navigation.navigate('SignUp', {})} >
            <Text style={[styles.sinupText, { color: "#6F7076" }]}>Don't have an account?  </Text>
            <Text style={[styles.sinupText, { color: "#fff" }]}>Sign Up</Text>
          </TouchableOpacity>

        </ImageBackground>

      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Login;
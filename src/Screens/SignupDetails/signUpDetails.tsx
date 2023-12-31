import React, { useState } from "react";
import { Button, Image, ImageBackground, Keyboard, KeyboardAvoidingView, Platform, ScrollView, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { Screen, ScreenContainer } from "react-native-screens";
import { Images } from "../../assets/images";
import FloatingLabelFormInput from "../../component/floatingLabelFormInput";
import MainBtn from "../../component/mainBtn";
import { appStyle } from "../../utility/appStyles";
import { horizontalScale, moderateScale } from "../../utility/responsiveDimension";
import { styles } from "./styles";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Dimensions } from 'react-native';
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { signUp } from "../../store/reducers/auth/authSlice";
import Loader from "../../component/Loader";

const { width, height } = Dimensions.get('window');

interface SignUpDetailsprops {
  navigation: any
}

const SignUpDetails = (props: SignUpDetailsprops) => {
  const { email } = useSelector((state: RootState) => state.verify);
  const { control, handleSubmit, formState: { errors }, watch } = useForm();
  const dispatch = useDispatch<AppDispatch>();
  const onSubmit = (data: any) => {
    const signUpData = {
      emailId: email,
      clubName: data.clubname,
      password: data.password
    }
    dispatch(signUp(signUpData)).unwrap().then((res: any) => {
      if (res.status === "success") {
        props.navigation.navigate('Congratulation', {})
      }
    }).catch((error: any) => {
    })
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={appStyle.container}
    >

      <ScrollView style={{ height: height }}>

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

          <ImageBackground source={Images.backgroundMain} style={appStyle.bgImage} resizeMode="cover" >


            <View style={{ flex: 2 }}>
              <Loader />
              <Image source={Images.appMainLogo} style={[appStyle.mainLogo,]} />
            </View>



            <View style={styles.inputView}>
              <Text style={styles.headerView}>Sign UP</Text>
              <Controller control={control}
                render={({ field }) => <FloatingLabelFormInput
                  label="Full Name"
                  name="clubname"
                  field={field}

                />}
                name="clubname"
                rules={{
                  required: 'clubname is required',

                }}
              />
              {errors.clubname && <Text style={styles.errorText}>Please enter the club name</Text>}
              <Controller control={control}
                render={({ field }) => <FloatingLabelFormInput
                  label="Password"
                  name="password"
                  field={field}
                  secureText={true}
                />}
                name="password"
                rules={{
                  required: 'Password is required',
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message: 'Password does not meet the requirements'
                  }
                }}
              />
              {errors.password && <Text style={styles.errorText}>Must be at least 6 characters, Include at least one number, special character (i.e. #!@$)</Text>}

              <View style={{marginTop: 10}}>
                <Controller control={control}
                  render={({ field }) => <FloatingLabelFormInput
                    label="Confirm Password"
                    name="confirmpassword"
                    field={field}
                    secureText={true}
                  />}
                  name="confirmpassword"
                  rules={{
                    required: 'Confirm Password is required',
                    validate: value => value === watch('password') || 'Passwords do not match'
                  }}
                />
                {(errors.confirmpassword && !errors.password) && <Text style={styles.errorText}>Passwords do not match</Text>}
              </View>

              <View style={{ marginVertical: moderateScale(25) }}>
                <MainBtn name="SIGN UP" btnPress={handleSubmit(onSubmit)} />
              </View>
              <TouchableOpacity style={{ flexDirection: "row", alignSelf: "center" }} onPress={() => props.navigation.navigate('', {})} >
                <Text style={[styles.sinupText, { color: "#6F7076" }]}>Already have an account? </Text>
                <Text style={[styles.sinupText, { color: "#fff" }]}>Sign In</Text>
              </TouchableOpacity>
            </View >




          </ImageBackground>

        </TouchableWithoutFeedback>
      </ScrollView></KeyboardAvoidingView >
  );
};

export default SignUpDetails;
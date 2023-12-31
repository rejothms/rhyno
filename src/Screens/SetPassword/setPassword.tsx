import React, { useState } from "react";
import { Button, Image, ImageBackground, Keyboard, KeyboardAvoidingView, Platform, ScrollView, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { Screen, ScreenContainer } from "react-native-screens";
import { Images } from "../../assets/images";
import FloatingLabelInput from "../../component/floatingLabelInput";
import MainBtn from "../../component/mainBtn";
import { appStyle } from "../../utility/appStyles";
import { horizontalScale, moderateScale } from "../../utility/responsiveDimension";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Dimensions } from 'react-native';
import { styles } from "./styles";
import { Controller, useForm } from "react-hook-form";
import FloatingLabelFormInput from "../../component/floatingLabelFormInput";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { forgotPassword } from "../../store/reducers/auth/authSlice";
const { width, height } = Dimensions.get('window');

interface SetPasswordsprops {
  navigation: any
}

const SetPassword = (props: SetPasswordsprops) => {
  const { fpEmail } = useSelector((state: RootState) => state.verify);
  const { control, handleSubmit, formState: { errors }, watch } = useForm();
  const dispatch = useDispatch<AppDispatch>();
  const onSubmit = (data: any) => {
    const passwordReset = {
      emailId: fpEmail,
      password: data.password
    }
    dispatch(forgotPassword(passwordReset)).unwrap().then((res: any) => {
      console.log(res);
      if (res.status === "success") {
        props.navigation.navigate('PasswordSetSuccess', {})
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


            <View style={{ flex: 3.5 }}>
              <Image source={Images.appMainLogo} style={[appStyle.mainLogo,]} />
            </View>

            <View style={styles.inputView}>
              <Text style={styles.headerView}>Please, enter a new
                password below.</Text>


              <Controller control={control}
                render={({ field }) => <FloatingLabelFormInput
                  label="New Password"
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
              <Controller control={control}
                render={({ field }) => <FloatingLabelFormInput
                  label="Confirm a New Password"
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
              <View style={{ marginVertical: moderateScale(20) }}>
                <MainBtn name="SAVE" btnPress={handleSubmit(onSubmit)}  />{/* btnPress={() => props.navigation.navigate('PasswordSetSuccess', {})} */}
              </View>

            </View >

          </ImageBackground>

        </TouchableWithoutFeedback>
      </ScrollView></KeyboardAvoidingView>
  );
};

export default SetPassword;
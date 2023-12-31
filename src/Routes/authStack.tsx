import React from "react";
import { Screen } from "react-native-screens";
import Congratulation from "../Screens/Congratulation/congratulation";
import ForgotPassword from "../Screens/ForgotPassword/forgotPassword";
import ForgotPasswordOTP from "../Screens/ForgotPasswordOtp/fOtp";
import LandingPage from "../Screens/LandingPage/landing";
import Login from "../Screens/Login/login";
import OTP from "../Screens/Otp/Otp";
import PasswordSetSuccess from "../Screens/PasswordsetSuccess/passwordsetSuccess";
import SetPassword from "../Screens/SetPassword/setPassword";
import SignUp from "../Screens/Signup/signUp";
import SignUpDetails from "../Screens/SignupDetails/signUpDetails";
import { DefaultOptions } from "./rootNavigation";

const AuthStack = (Stack: any) => {
  return (
    <>
      <Stack.Screen
        name="Login"
        component={Login}
        options={DefaultOptions}
      />
      <Stack.Screen
        name="LandingPage"
        component={LandingPage}
        options={DefaultOptions}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={DefaultOptions}
      />

      <Stack.Screen
        name="SignUpDetails"
        component={SignUpDetails}
        options={DefaultOptions}
      />

      <Stack.Screen
        name="OTP"
        component={OTP}
        options={DefaultOptions}
      />

      <Stack.Screen
      name="Congratulation"
      component={Congratulation}
      options={DefaultOptions}
      />

      <Stack.Screen
      name="ForgotPassword"
      component={ForgotPassword}
      options={DefaultOptions}
      />

      <Stack.Screen
      name="ForgotPasswordOTP"
      component={ForgotPasswordOTP}
      options={DefaultOptions}
      />

      <Stack.Screen 
      name="SetPassword"
      component={SetPassword}
      options={DefaultOptions}
      />

      <Stack.Screen 
      name="PasswordSetSuccess"
      component={PasswordSetSuccess}
      options={DefaultOptions}
      />
    </>
  )
}
export default AuthStack;
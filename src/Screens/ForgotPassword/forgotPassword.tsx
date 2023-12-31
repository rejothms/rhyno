import React, { useState } from "react";
import { Image, ImageBackground, Keyboard, KeyboardAvoidingView, Platform, ScrollView, Text, TouchableWithoutFeedback, View } from "react-native";
import { Images } from "../../assets/images";
import FloatingLabelInput from "../../component/floatingLabelInput";
import ImageIcon from "../../component/imageIcon";
import MainBtn from "../../component/mainBtn";
import { appStyle } from "../../utility/appStyles";
import { deviceHeight, horizontalScale, moderateScale, verticalScale } from "../../utility/responsiveDimension";
import { styles } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { setFpEmail, verifyFpEmail } from "../../store/reducers/verification/verificationSlice";

interface ForgotPasswordProps {
    navigation: any
}

const ForgotPassword = (props: ForgotPasswordProps) => {
    const { fpEmail } = useSelector((state: RootState) => state.verify);
    const dispatch = useDispatch<AppDispatch>();
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [errorMessage, setErrorMessage] = useState('Incorrect Email');
    const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");

    const verifyEmailId = () => {
        const isValidEmail = emailRegex.test(fpEmail);
        setIsValidEmail(isValidEmail);

        if (isValidEmail) {
            const signUpData = { email: fpEmail }
            dispatch(verifyFpEmail(signUpData))
                .unwrap()
                .then((data: any) => {
                    if (data.status === "success") {
                        setIsValidEmail(true)
                        props.navigation.navigate('ForgotPasswordOTP', {})
                    } else {
                        setErrorMessage("This account doesn't exist");
                        setIsValidEmail(false);
                    }
                })
                .catch((error: any) => {
                    -
                        console.error(error);
                });
        }
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
                            <Image source={Images.appMainLogo} style={[appStyle.mainLogo,]} />
                        </View>
                        <View style={{ flex: 8 }}>
                            <View style={{ alignItems: "center" }}>
                                <Image source={Images.key} style={{ width: moderateScale(80), height: moderateScale(80) }} />
                            </View>
                            <View style={styles.bottomView}>
                                <Text style={styles.headerView}>Forgot</Text>
                                <Text style={[styles.headerView, { marginTop: -20 }]}>Password?</Text>
                                <Text style={styles.sinupText}>Didn't worry! It happened. Please enter the</Text>
                                <Text style={[styles.sinupText, { marginBottom: verticalScale(20) }]}>address associated with your account</Text>
                                <FloatingLabelInput
                                    label="Email ID"
                                    onChangeText={(email: string) => dispatch(setFpEmail(email))}
                                />
                                {!isValidEmail && <Text style={styles.errorText}>{errorMessage}</Text>}
                                <View style={{ marginTop: 60 }}>
                                    <MainBtn name="SUBMIT" btnPress={() => verifyEmailId()} />
                                </View>

                            </View>


                        </View>
                    </ImageBackground>
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default ForgotPassword;
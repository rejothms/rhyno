import React, { useState } from "react";
import { ScrollView, ImageBackground, Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, View, Text } from "react-native";
import { Images } from "../../assets/images";
import FloatingLabelInput from "../../component/floatingLabelInput";
import MainBtn from "../../component/mainBtn";
import { appStyle } from "../../utility/appStyles";
import { moderateScale } from "../../utility/responsiveDimension";
import { styles } from "./styles";
import { useForm, Controller } from "react-hook-form";

interface CreateTeamProps {
  navigation: any
}

const CreateTeam = (props: CreateTeamProps) => {
  // const { register, setValue, handleSubmit, formState: { errors } } = useForm<FormData>();

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      firstName: '',
      lastName: ''
    }
  });

  const onSubmit = handleSubmit(data => console.log(data));
  //const styles = {inputView: {},emailView:{},labelStyle:{},emailText:{}}
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={appStyle.container}
    >
      <ScrollView style={{ paddingTop: 30 }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

          <ImageBackground source={Images.backgroundMain} style={appStyle.bgHome} resizeMode="cover" >


            <View style={styles.inputView}>

              {/*  <FloatingLabelInput
                label="Full name*"
              /> */}
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <FloatingLabelInput
                    label="Name*"
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="firstName"
              />
              <FloatingLabelInput
                label="Designation*"
              />

             
             
              <FloatingLabelInput
                label="Mobile Number*"
              />
              <FloatingLabelInput
                label="Email id*"
              />
              <FloatingLabelInput
                label="Photo*"
               
              />
              
              <View style={{ marginVertical: moderateScale(20) }}>
                <MainBtn name="Submit" btnPress={() => props.navigation.navigate('Root', {})} />
              </View>
              {/*  <Text style={styles.errorText}>Incorrect Email/Password</Text> */}

            </View >



          </ImageBackground>

        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default CreateTeam;
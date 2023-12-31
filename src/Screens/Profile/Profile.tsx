import React, { useState, useEffect } from "react";
import { ScrollView, ImageBackground, StyleSheet, Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, View, Text, Image } from "react-native";
import { Icons, Images } from "../../assets/images";
import FloatingLabelInput from "../../component/floatingLabelInput";
import MainBtn from "../../component/mainBtn";
import { appStyle } from "../../utility/appStyles";
import { moderateScale } from "../../utility/responsiveDimension";
import { styles } from "./styles";
import { useForm, Controller } from "react-hook-form";
import FloatingLabelFormInput from "../../component/floatingLabelFormInput";
import FloatingLabelFormCalendar from "../../component/floatingLabelFormCalendar";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { getProfile, profileUpdate } from "../../store/reducers/auth/authSlice";
import { TouchableOpacity } from "react-native-gesture-handler";
interface ProfileProps {
  navigation: any
}

const Profile = (props: ProfileProps) => {
  // const { register, setValue, handleSubmit, formState: { errors } } = useForm<FormData>();

  const { control, handleSubmit, setValue, formState: { errors }, watch } = useForm();
  const [editView, setEditView] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const { profile } = useSelector((state: RootState) => state.auth);
  useEffect(() => {
    const email: string = "rejothms@gmail.com";
    dispatch(getProfile(email)).unwrap().then((res: any) => {

      Object.entries(res).forEach(([fieldName, value]) => {
        setValue(fieldName, value);
      });

    }).catch((error: any) => {
      console.log(error);
    })
  }, []);

  const onSubmit = (data: any) => {
    dispatch(profileUpdate(data)).unwrap().then((res: any) => {
      if (res.status === "success") {

      }
    }).catch((error: any) => {
      console.log(error);
    })
  }

  return (

    <View style={{ flex: 1, backgroundColor: "#000" }}>
      { !editView &&
      <ScrollView>
        <ImageBackground source={Images.background} resizeMode="cover" >

          <View style={{ flex: 1, paddingLeft: 38, paddingRight:38 }}>
            <View style={{paddingTop:20, paddingBottom: 10, display: "flex", flexDirection:"row", justifyContent: "flex-end"}}>
            <TouchableOpacity style={pstyles.editButton} onPress={()=>setEditView(true)} >
                <Text style={pstyles.buttonLabel}>Edit</Text>
                <Image source={Icons.edit} />
            </TouchableOpacity>
            </View>
            <View >
              <Text style={pstyles.labelStyle}>
                Full Name:
              </Text>
              <Text style={pstyles.vStyle}>{profile.fullName}</Text>
            </View>
            <View style={{ paddingTop: 16 }}>
              <Text style={pstyles.labelStyle}>
                Founded:
              </Text>
              <Text style={pstyles.vStyle}>{profile.founded}</Text>
            </View>
            <View style={{ paddingTop: 16 }}>
              <Text style={pstyles.labelStyle}>
                State:
              </Text>
              <Text style={pstyles.vStyle}>{profile.state}</Text>
            </View>
            <View style={{ paddingTop: 16 }}>
              <Text style={pstyles.labelStyle}>
                District:
              </Text>
              <Text style={pstyles.vStyle}>{profile.district}</Text>
            </View>
            <View style={{ paddingTop: 16 }}>
              <Text style={pstyles.labelStyle}>
                Email Id:
              </Text>
              <Text style={pstyles.vStyle}>{profile.emailId}</Text>
            </View>
            <View style={{ paddingTop: 16 }}>
              <Text style={pstyles.labelStyle}>
                Mobile Number:
              </Text>
              <Text style={pstyles.vStyle}>{profile.phoneNumber}</Text>
            </View>
            <View style={{ paddingTop: 16 }}>
              <Text style={pstyles.labelStyle}>
                Tag line:
              </Text>
              <Text style={pstyles.vStyle}>{profile.tagLine}</Text>
            </View>
            <View style={{ paddingTop: 16 }}>
              <Text style={pstyles.labelStyle}>
                Select Type:
              </Text>
              <Text style={pstyles.vStyle}>{profile.type}</Text>
            </View>
            <View style={{ paddingTop: 16 }}>
              <Text style={pstyles.labelStyle}>
                Modal:
              </Text>
              <Text style={pstyles.vStyle}>{profile.modal}</Text>
            </View>
            <View style={{ paddingTop: 16 }}>
              <Text style={pstyles.labelStyle}>
                Description:
              </Text>
              <Text style={pstyles.vStyle}>{profile.description}</Text>
            </View>
            <View style={{ paddingTop: 16 }}>
              <Text style={pstyles.labelStyle}>
                Rules & Regulations:
              </Text>
              <Text style={pstyles.vStyle}>{profile.regulations}</Text>
            </View>
            <View style={{ paddingTop: 16 }}>
              <Text style={pstyles.labelStyle}>
                Address:
              </Text>
              <Text style={pstyles.vStyle}>{profile.address}</Text>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
}

      {editView &&
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={appStyle.container}
        >
          <ScrollView style={{ paddingTop: 30 }}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

              <ImageBackground source={Images.backgroundMain} style={appStyle.bgHome} resizeMode="cover" >


                <View style={styles.inputView}>
                  <Controller control={control}
                    render={({ field }) => <FloatingLabelFormInput
                      label="Full Name"
                      name="fullName"
                      field={field}

                    />}
                    name="fullName"
                    rules={{
                      required: 'clubname is required',

                    }}
                  />
                  {/*  {errors.fullname && <Text style={styles.errorText}>Please enter the full name</Text>} */}


                  <Controller control={control}
                    render={({ field }) => <FloatingLabelFormCalendar
                      label="Founded"
                      name="founded"
                      field={field}

                    />}
                    name="founded"
                    rules={{
                      required: 'Founded is required',
                    }}
                  />

                  {/*  {errors.founded && <Text style={styles.errorText}>Please select founded date</Text>} */}





                  <Controller control={control}
                    render={({ field }) => <FloatingLabelFormInput
                      label="State"
                      name="state"
                      field={field}

                    />}
                    name="state"
                    rules={{
                      required: 'state is required',

                    }}
                  />

                  <Controller control={control}
                    render={({ field }) => <FloatingLabelFormInput
                      label="District"
                      name="district"
                      field={field}

                    />}
                    name="district"
                    rules={{
                      required: 'district is required',

                    }}
                  />

                  <Controller control={control}
                    render={({ field }) => <FloatingLabelFormInput
                      label="Email"
                      name="emailId"
                      field={field}

                    />}
                    name="emailId"
                    rules={{
                      required: 'emailId is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: 'Invalid email address',
                      },
                    }}
                  />

                  <Controller control={control}
                    render={({ field }) => <FloatingLabelFormInput
                      label="Mobile Number"
                      name="phoneNumber"
                      field={field}

                    />}
                    name="phoneNumber"
                    rules={{
                      required: 'phoneNumber is required',

                    }}
                  />

                  <Controller control={control}
                    render={({ field }) => <FloatingLabelFormInput
                      label="Tag line"
                      name="tagLine"
                      field={field}

                    />}
                    name="tagLine"
                    rules={{
                      required: 'tagline is required',

                    }}
                  />

                  <Controller control={control}
                    render={({ field }) => <FloatingLabelFormInput
                      label="Select Type"
                      name="type"
                      field={field}

                    />}
                    name="type"
                    rules={{
                      required: 'selecttype is required',
                    }}
                  />

                  <Controller control={control}
                    render={({ field }) => <FloatingLabelFormInput
                      label="Modal"
                      name="modal"
                      field={field}

                    />}
                    name="modal"
                    rules={{
                      required: 'modal is required',
                    }}
                  />

                  <Controller control={control}
                    render={({ field }) => <FloatingLabelFormInput
                      label="Description"
                      name="description"
                      field={field}
                      multiline={true}
                    />}
                    name="description"
                    rules={{
                      required: 'description is required',
                    }}
                  />

                  <Controller control={control}
                    render={({ field }) => <FloatingLabelFormInput
                      label="Rules & Regulations"
                      name="regulations"
                      field={field}
                      multiline={true}
                    />}
                    name="regulations"
                    rules={{
                      required: 'regulations is required',
                    }}
                  />

                  <Controller control={control}
                    render={({ field }) => <FloatingLabelFormInput
                      label="Address"
                      name="address"
                      field={field}
                      multiline={true}
                    />}
                    name="address"
                    rules={{
                      required: 'address is required',
                    }}
                  />

                  {/* {errors.email && <p>{errors.email?.message}</p>} */}

                  {/* <View style={styles.emailView}>
                <Text style={styles.labelStyle}>
                  Email Id:
                </Text>
                <Text style={[styles.emailText, { color: "#fff" }]}>abc@gmail.com</Text>
              </View> */}
                  {Object.keys(errors).length > 0 && <Text style={styles.errorText}>All * fields are required</Text>}
                  <View style={{ marginVertical: moderateScale(20) }}>
                    <MainBtn name="Save" btnPress={handleSubmit(onSubmit)} />
                  </View>

                </View >



              </ImageBackground>

            </TouchableWithoutFeedback>
          </ScrollView>
        </KeyboardAvoidingView>
      }
    </View >
  );


};
const pstyles = StyleSheet.create({
  labelStyle: {
    fontSize: 14,
    color: '#FDFDFD99',
    fontWeight: "400",
    fontFamily: "Lexend-Regular"
  },
  vStyle: {
    fontSize: 14,
    color: '#FFF',
    fontWeight: "400",
    lineHeight: moderateScale(33.5),
    fontFamily: "Lexend-Regular"
  },
  editButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent:"center",
    alignItems: "center",
    width: 55,
    height:24,
    borderWidth: 1,
    borderColor: "#444444",
    borderRadius: 3

  },
  buttonLabel: {
   color: "#ADADAD",
   fontFamily: "Lexend",
   fontSize: 13,
   fontWeight: "400",
   paddingRight:3
  }
});
export default Profile;
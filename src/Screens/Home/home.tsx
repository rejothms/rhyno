/* import React from "react"; 
import { Text, View } from "react-native";
const HomeScreen = ({ }) => {
    return (
      <View>
        <Text>Honeeee</Text>
      </View>
    );
  };

  export  default HomeScreen; */

import { useLinkProps } from "@react-navigation/native";
import React, { useState, useRef, useCallback } from "react";
import { Image, ImageBackground, Text, TouchableOpacity, View, Modal, StyleSheet, Pressable, Platform,PermissionsAndroid } from "react-native";
import { Icons, Images } from "../../assets/images";
import MainBtn from "../../component/mainBtn";
import { appStyle } from "../../utility/appStyles";
import { moderateScale } from "../../utility/responsiveDimension";
import BottomSheet, { BottomSheetRefProps } from "../../component/BottomSheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import AnimatedSwitchButton from "../../component/SwitchButton";

interface homeProps {
  navigation: any
}
interface Rationale {
  title: string;
  message: string;
  buttonPositive: string; // Add the required property
}
const HomeScreen = (props: homeProps) => {

  const ref = useRef<BottomSheetRefProps>(null);

  const onPress = useCallback(() => {
    ref?.current?.scrollTo(-380);
    /*  const isActive = ref?.current?.isActive();
     console.log(isActive);
     if (isActive) {
       ref?.current?.scrollTo(-300);
     } else {
       
     } */
  }, []);


  const [filePath, setFilePath] = useState({});

  const requestCameraPermission = async () => {
    const rationale: Rationale = {
      title: "Camera Permission",
      message: "App needs camera permission",
      buttonPositive: "OK", // Provide a value for the required property
    };
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          rationale,
        );
        // If CAMERA Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else return true;
  };

  const requestExternalWritePermission = async () => {
    const rationale: Rationale = {
      title: "External Storage Write Permission",
      message: "App needs camera permission",
      buttonPositive: "OK", // Provide a value for the required property
    };
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          rationale
        );
        // If WRITE_EXTERNAL_STORAGE Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        //alert('Write permission err', err);
      }
      return false;
    } else return true;
  };
  //https://aboutreact.com/example-of-image-picker-in-react-native/
  const captureImage = async (type: any) => {
    let options: any = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      videoQuality: 'low',
      durationLimit: 30, //Video max duration in seconds
      saveToPhotos: true,
    };
    let isCameraPermitted = await requestCameraPermission();
    let isStoragePermitted = await requestExternalWritePermission();
    if (isCameraPermitted && isStoragePermitted) {
      launchCamera(options, (response) => {
        console.log('Response = ', response);

        if (response.didCancel) {
         // alert('User cancelled camera picker');
          return;
        } else if (response.errorCode == 'camera_unavailable') {
        //  alert('Camera not available on device');
          return;
        } else if (response.errorCode == 'permission') {
          //alert('Permission not satisfied');
          return;
        } else if (response.errorCode == 'others') {
          //alert(response.errorMessage);
          return;
        }
        /* console.log('base64 -> ', response.base64);
        console.log('uri -> ', response.uri);
        console.log('width -> ', response.width);
        console.log('height -> ', response.height);
        console.log('fileSize -> ', response.fileSize);
        console.log('type -> ', response.type);
        console.log('fileName -> ', response.fileName); */
        setFilePath(response);
      });
    }
  };

 


  const chooseFile = (type: any) => {
    let options:any = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      selectionLimit:5
    };
    launchImageLibrary(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        //alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        //alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        //alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        //alert(response.errorMessage);
        return;
      }
     /*  console.log('base64 -> ', response.base64);
      console.log('uri -> ', response.uri);
      console.log('width -> ', response.width);
      console.log('height -> ', response.height);
      console.log('fileSize -> ', response.fileSize);
      console.log('type -> ', response.type);
      console.log('fileName -> ', response.fileName); */
      setFilePath(response);
    });
  };
  const onChange = () => {

  }

  const [modalVisible, setModalVisible] = useState(false);
  return (



    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
      <AnimatedSwitchButton onChange={onChange} value="true" containerStyle={0.2}/>
        <TouchableOpacity style={styles.button} onPress={onPress}><Text>Files</Text></TouchableOpacity>
        <BottomSheet ref={ref}>
          <View style={{ flex: 1, backgroundColor: '#111', borderTopColor: "red", borderTopWidth: 0.9 }} >

            <View style={styles.bsContainer}>

              <Text style={{ fontSize: moderateScale(15), color: "white"}}>Upload a photo</Text>

              <View style={styles.bsView}>
                <TouchableOpacity onPress={() => chooseFile('photo')}>
                  <View style={styles.customItem}>
                    <View style={styles.menuItem}>
                      <Image source={Icons.photos} style={[appStyle.icons]} />
                      <Text style={{ fontSize: moderateScale(13), color: "white", paddingLeft: 20 }}
                      >
                        Choose form gallery
                      </Text>
                    </View>
                    <Image source={Icons.rightarrow} />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => captureImage('photo')}>
                  <View style={[styles.customItem, styles.borderLine]}>
                    <View style={styles.menuItem}>
                      <Image source={Icons.photos} style={[appStyle.icons]} />
                      <Text style={{ fontSize: moderateScale(13), color: "white", paddingLeft: 20 }}
                      >
                        Take a photo
                      </Text>
                    </View>
                    <Image source={Icons.rightarrow} />
                  </View>
                </TouchableOpacity>
              </View>

            </View>

          </View>

        </BottomSheet>
      </View>
    </GestureHandlerRootView>



  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    height: 25,
    width: 140,
    borderRadius: 7,
    aspectRatio: 2.5,
    backgroundColor: 'white',
    opacity: 0.6,
    display:"flex",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bsContainer: {
    flex: 1,
    margin: 28
  },
  bsView: {
    marginTop: 18,
    borderColor: "#393939",
    borderWidth: 1,
    height: 110
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menuItem: {
    flexDirection: 'row'
  },
  borderLine: {
    borderTopColor: "#393939",
    borderTopWidth: 1
  }
});
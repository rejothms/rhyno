import React, { useState } from 'react';
import { View, Image, TouchableOpacity, FlatList, StyleSheet, Text, BackHandler } from 'react-native';
import { Icons } from '../../assets/images';
import { moderateScale } from '../../utility/responsiveDimension';
import MainBtn from '../../component/mainBtn';

interface uploadProps {
  navigation: any
}

const UploadFiles = (props: uploadProps) => {
  const handleBackPress = () => {
    return true;
  };

  const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackPress);
  return (
    <View style={styles.container}>
      <View style={styles.screenContainer}>
        <View style={styles.headerView}>
          <TouchableOpacity onPress={() => props.navigation.navigate('PhotoGallery', {})} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Image source={Icons.closeIcon} />
          </TouchableOpacity>
          <View style={styles.titleView}>
            <Text style={styles.title}>Upload Image</Text>
          </View>
        </View>
      </View>

      <View style={styles.uploadContainer}>
        <View style={{ flex: 3, borderRadius: 8, borderWidth: 1, borderColor: "#464646", borderStyle: "dashed" }}>

        </View>
        <View style={{ flex: 2, }}>

        </View>
        <View style={{ flex: 1, justifyContent: "flex-end", alignItems: "center" }}>
        <MainBtn name="UPLOAD"  />
        </View>
      </View>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  screenContainer: {
    backgroundColor: "#000",
    marginTop: 22
  },
  headerView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 10,
    margin: 30
  },
  titleView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: moderateScale(20),
    color: "white",
    fontWeight: "600",
    lineHeight: moderateScale(24.5),
    fontFamily: "Inter",
  },
  uploadContainer: {
    margin: 50,
    marginTop: 10,
    marginBottom: 10,
    flex: 1
  }
});

export default UploadFiles;


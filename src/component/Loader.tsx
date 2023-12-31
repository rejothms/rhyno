import * as React from 'react';
import { ActivityIndicator, View, StyleSheet } from "react-native";
import { useSelector } from 'react-redux';
import { RootState } from '../store';
const  Loader = () => {

    const { loading } = useSelector((state: RootState) => state.loader);

    return(
        <>
          {loading && <View><ActivityIndicator size="large" color="#ff22ff" /></View> }
        </>
    )

}
export default Loader;

const styles = StyleSheet.create({
   
});
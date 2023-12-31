import React from 'react';
import { Image, View } from 'react-native';
import { moderateScale } from '../utility/responsiveDimension';

interface props{
    name:any
}

const ImageIcon = (props:props) =>{
    console.log("Name...",props.name)
    return(
        <View style={{width:moderateScale(81),height:moderateScale(81),borderRadius:moderateScale(40.5),alignItems:"center",justifyContent:"center",borderWidth:1,borderStyle:"dashed",borderColor:"#fff"}}>
            <View style={{width:moderateScale(73),height:moderateScale(73),borderRadius:moderateScale(36.5),backgroundColor:"#2E2E2E",alignItems:"center",justifyContent:"center"}}>
                <Image source={props.name} style={{width:moderateScale(36),height:moderateScale(36)}}></Image>
            </View>
        </View>
    )
}

export default ImageIcon;
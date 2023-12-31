import React from 'react';

import {StackActions} from '@react-navigation/native'

export const navigationRef : any = React.createRef();

export function navigate(name:any,params:any){
    navigationRef.current?.navigate(name,params)
}

export function goBack(){
    navigationRef.current?.goBack();
}

export function pop(controller:any){
    controller.pop();
}
export function push(name : any,params : any){
    navigationRef.current?.dispatch(StackActions.push(name,params));
}
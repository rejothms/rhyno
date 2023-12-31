import React from "react";
import HomeScreen from "../Screens/Home/home";
import { DefaultOptions } from "./rootNavigation";

const HomeStack = (Drawer:any) =>{
    return(
        <Drawer.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={DefaultOptions}
        />
    )
}
export default HomeStack;
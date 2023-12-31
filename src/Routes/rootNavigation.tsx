import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationRef } from './navigation'
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

import AuthStack from './authStack';
import HomeStack from './homeStack';
import HomeScreen from '../Screens/Home/home';
import LandingPage from '../Screens/LandingPage/landing';
import { Image, ImageBackground, Keyboard, KeyboardAvoidingView, Platform, ScrollView, Text, TouchableWithoutFeedback, View } from "react-native";
import CustomSidebarMenu from '../component/sideBar';
import Profile from '../Screens/Profile/Profile';
import { Icons, Images } from '../assets/images';
import { appStyle } from '../utility/appStyles';
import Team from '../Screens/Team/team';
import CreateTeam from '../Screens/CreateTeam/createTeam';
import SupportTeam from '../Screens/SupportTeam/supportTeam';
import Home from '../Screens/MembershipPlans/Home/home';
import PlanView from '../Screens/MembershipPlans/PlanView/planView';
import PhotoGallery from '../Screens/Photos/photoGallery';
import VideoGallery from '../Screens/Videos/videoGallery';
import Loader from '../component/Loader';
import UploadFiles from '../Screens/Upload/uploadFiles';
const Stack = createNativeStackNavigator();

export const DefaultOptions = {
    headerShown: false,
    gestureEnabled: false,
};

function Root() {
    return (
        <Drawer.Navigator drawerContent={(props) => <CustomSidebarMenu {...props} />}>
            <Drawer.Screen name="HomeScreen" component={HomeScreen} options={({ navigation, route }) => ({
                title: 'Home',
                headerTitleAlign: 'center',
                //headerTitle: (props) => <Text style={{color: "white", fontWeight: 'bold'}}>Profile</Text>,
                headerStyle: {
                    backgroundColor: 'black',
                    borderBottomWidth: 1,
                    borderBottomColor: "#8A0202",
                    height: 105
                },
                headerTintColor: '#fff',
                headerRight: (props) => <Image source={Images.appSidebarlogo} style={[appStyle.headerLogo]} />
            })} />
            <Drawer.Screen name="Profile" component={Profile} options={({ navigation, route }) => ({
                title: 'Profile',
                headerTitleAlign: 'center',
                //headerTitle: (props) => <Text style={{color: "white", fontWeight: 'bold'}}>Profile</Text>,
                headerStyle: {
                    backgroundColor: 'black',
                    borderBottomWidth: 1,
                    borderBottomColor: "#8A0202",
                    height: 105
                },
                headerTintColor: '#fff',
                headerRight: (props) => <Image source={Images.appSidebarlogo} style={[appStyle.headerLogo]} />
            })} />

            <Drawer.Screen name="Teams" component={Team} options={({ navigation, route }) => ({
                title: 'Team',
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: 'black',
                    borderBottomWidth: 1,
                    borderBottomColor: "#8A0202",
                    height: 105
                },
                headerTintColor: '#fff',
                headerRight: (props) => <Image source={Images.appSidebarlogo} style={[appStyle.headerLogo]} />
            })} />

            <Drawer.Screen name="CreateTeam" component={CreateTeam} options={({ navigation, route }) => ({
                title: 'Team',
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: 'black',
                    borderBottomWidth: 1,
                    borderBottomColor: "#8A0202",
                    height: 105
                },
                headerTintColor: '#fff',
                headerRight: (props) => <Image source={Images.appSidebarlogo} style={[appStyle.headerLogo]} />
            })} />

            <Drawer.Screen name="HelpAndSupport" component={SupportTeam} options={({ navigation, route }) => ({
                title: 'Help & Support',
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: 'black',
                    borderBottomWidth: 1,
                    borderBottomColor: "#8A0202",
                    height: 105
                },
                headerTintColor: '#fff',
                headerRight: (props) => <Image source={Images.appSidebarlogo} style={[appStyle.headerLogo]} />
            })} />

            <Drawer.Screen name="MembershipHome" component={Home} options={({ navigation, route }) => ({
                title: 'Membership Plans',
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: 'black',
                    borderBottomWidth: 1,
                    borderBottomColor: "#8A0202",
                    height: 105
                },
                headerTintColor: '#fff',
                headerRight: (props) => <Image source={Images.appSidebarlogo} style={[appStyle.headerLogo]} />
            })} />

            <Drawer.Screen name="MembershipPlanView" component={PlanView} options={({ navigation, route }) => ({
                title: 'Membership Plans',
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: 'black',
                    borderBottomWidth: 1,
                    borderBottomColor: "#8A0202",
                    height: 105
                },
                headerTintColor: '#fff',
                headerRight: (props) => <Image source={Images.appSidebarlogo} style={[appStyle.headerLogo]} />
            })} />

            <Drawer.Screen name="PhotoGallery" component={PhotoGallery} options={({ navigation, route }) => ({
                title: 'Photos',
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: 'black',
                    borderBottomWidth: 1,
                    borderBottomColor: "#8A0202",
                    height: 105
                },
                headerTintColor: '#fff',
                headerRight: (props) => <Image source={Images.appSidebarlogo} style={[appStyle.headerLogo]} />
            })} />

            <Drawer.Screen name="VideoGallery" component={VideoGallery} options={({ navigation, route }) => ({
                title: 'Videos',
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: 'black',
                    borderBottomWidth: 1,
                    borderBottomColor: "#8A0202",
                    height: 105
                },
                headerTintColor: '#fff',
                headerRight: (props) => <Image source={Images.appSidebarlogo} style={[appStyle.headerLogo]} />
            })} />

            <Drawer.Screen name="UploadFiles" component={UploadFiles} options={{ headerShown: false }} />


        </Drawer.Navigator>
    );
}



const RootNavigation = () => {

    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator initialRouteName='LandingPage' >
                {AuthStack(Stack)}
                <Stack.Screen name="Root" component={Root} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigation;
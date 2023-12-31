import React from 'react';
import {
    SafeAreaView,
    View,
    StyleSheet,
    Image,
    Text,
    Linking,
    TouchableOpacity,
} from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import { Icons, Images } from '../assets/images';
import { appStyle } from '../utility/appStyles';
import { moderateScale } from '../utility/responsiveDimension';

const CustomSidebarMenu = (props: any) => {


    return (
        <SafeAreaView style={{ flex: 1, borderColor: '#393939', borderRightWidth: 1.1 }}>
            <View style={{ paddingTop: 10, paddingBottom: 10, backgroundColor: '#1C1C1C', borderColor: '#8A0202', borderBottomWidth: 1.1 }} >
                <Image source={Images.appSidebarlogo} style={[appStyle.sideLogo,]} />
                <Text style={{
                    justifyContent: "center", alignSelf: "center",
                    fontSize: moderateScale(15), color: "white", fontWeight: "bold", lineHeight: moderateScale(24.5), paddingBottom: moderateScale(20), fontFamily: "Lexend-Regular"
                }}>Riders of Banglore</Text>

            </View>
            {/* <DrawerItemList {...props} /> */}
            {/* <DrawerItem
                    label="Profile"
                    onPress={() => Linking.openURL('https://www.nicesnippets.com/')}
                /> */}

            <DrawerContentScrollView {...props} style={{ backgroundColor: '#000000' }}>

                <View style={{ backgroundColor: '#000000', borderColor: '#393939', borderBottomWidth: 1.1 }}>
                    <TouchableOpacity  onPress={()=>props.navigation.navigate('Profile',{})}>
                        <View style={styles.customItem}>
                            <View style={styles.menuItem}>
                                <Image source={Icons.profile} style={[appStyle.icons]} />
                                <Text style={{ fontSize: moderateScale(15), color: "white", paddingLeft: 20 }}
                                >
                                    Profile
                                </Text>
                            </View>
                            <Image source={Icons.rightarrow} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={()=>props.navigation.navigate('Teams',{})}>
                        <View style={styles.customItem}>
                            <View style={styles.menuItem}>
                                <Image source={Icons.team} style={[appStyle.icons]} />
                                <Text style={{ fontSize: moderateScale(15), color: "white", paddingLeft: 20 }}
                                >
                                    Team
                                </Text>
                            </View>
                            <Image source={Icons.rightarrow} />
                        </View>
                    </TouchableOpacity>

                   
                    <TouchableOpacity  onPress={()=>props.navigation.navigate('MembershipHome',{})}>
                        <View style={styles.customItem}>
                            <View style={styles.menuItem}>
                                <Image source={Icons.membership} style={[appStyle.icons]} />
                                <Text style={{ fontSize: moderateScale(15), color: "white", paddingLeft: 20 }}
                                >
                                     Membership Plan
                                </Text>
                            </View>
                            <Image source={Icons.rightarrow} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ backgroundColor: '#000000', borderColor: '#393939', borderBottomWidth: 1.1 }}>
                <TouchableOpacity  onPress={()=>props.navigation.navigate('PhotoGallery',{})}>
                        <View style={styles.customItem}>
                            <View style={styles.menuItem}>
                                <Image source={Icons.photos} style={[appStyle.icons]} />
                                <Text style={{ fontSize: moderateScale(15), color: "white", paddingLeft: 20 }}
                                >
                                     Photos
                                </Text>
                            </View>
                            <Image source={Icons.rightarrow} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={()=>props.navigation.navigate('VideoGallery',{})}>
                        <View style={styles.customItem}>
                            <View style={styles.menuItem}>
                                <Image source={Icons.video} style={[appStyle.icons]} />
                                <Text style={{ fontSize: moderateScale(15), color: "white", paddingLeft: 20 }}
                                >
                                     Videos
                                </Text>
                            </View>
                            <Image source={Icons.rightarrow} />
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{ backgroundColor: '#000000', borderColor: '#393939', borderBottomWidth: 1.1 }}>
                    <View style={styles.customItem}>
                        <View style={styles.menuItem}>
                            <Image source={Icons.bank} style={[appStyle.icons]} />
                            <Text style={{ fontSize: moderateScale(15), color: "white", paddingLeft: 20 }}

                            >
                                Bank
                            </Text>
                        </View>
                        <Image source={Icons.rightarrow} />
                    </View>
                </View>

                <View style={{ backgroundColor: '#000000', borderColor: '#393939', borderBottomWidth: 1.1 }}>
                    <View style={styles.customItem}>
                        <View style={styles.menuItem}>
                            <Image source={Icons.network} style={[appStyle.icons]} />
                            <Text style={{ fontSize: moderateScale(15), color: "white", paddingLeft: 20 }}

                            >
                                Network
                            </Text>
                        </View>
                        <Image source={Icons.rightarrow} />
                    </View>
                </View>


                <View style={{ backgroundColor: '#000000', borderColor: '#393939' }}>
                    <View style={styles.customItem}>
                        <View style={styles.menuItem}>
                            <Image source={Icons.settings} style={[appStyle.icons]} />
                            <Text style={{ fontSize: moderateScale(15), color: "white", paddingLeft: 20 }}

                            >
                                Settings
                            </Text>
                        </View>
                        <Image source={Icons.rightarrow} />
                    </View>
            
                    <TouchableOpacity  onPress={()=>props.navigation.navigate('HelpAndSupport',{})}>
                        <View style={styles.customItem}>
                            <View style={styles.menuItem}>
                                <Image source={Icons.help} style={[appStyle.icons]} />
                                <Text style={{ fontSize: moderateScale(15), color: "white", paddingLeft: 20 }}
                                >
                                    Help & Support
                                </Text>
                            </View>
                            <Image source={Icons.rightarrow} />
                        </View>
                    </TouchableOpacity>

                    <View style={styles.customItem}>
                        <View style={styles.menuItem}>
                            <Image source={Icons.signout} style={[appStyle.icons]} />
                            <Text style={{ fontSize: moderateScale(15), color: "white", paddingLeft: 20 }}

                            >
                                Sign Out
                            </Text>
                        </View>
                        <Image source={Icons.rightarrow} />
                    </View>
                </View>



            </DrawerContentScrollView>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    sideMenuProfileIcon: {
        resizeMode: 'contain',
        width: '95%',
        height: 60,
    },
    customItem: {
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    menuItem: {
        flexDirection: 'row',
    }
});

export default CustomSidebarMenu;
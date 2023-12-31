import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import { SafeAreaView, Text } from 'react-native';
import RootNavigation from './src/Routes/rootNavigation';
import { store } from "./src/store";


const App = () => {
  const init = () => {
   SplashScreen.hide();
  }
 
  useEffect(() => {
    init();
    }, []);
  return (
    <Provider store={store}>
    <SafeAreaView style={{flex:1}}>
      <RootNavigation/>
   </SafeAreaView>
   </Provider>
  );
}

export default App;
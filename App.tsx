/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import React, {useEffect} from 'react';
import {StatusBar, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import HeaderHome from './src/components/HeaderHome';
import {color} from './src/config/colors';
import globalStyles from './src/config/globalStyles';
import {defaultHeaderOptions} from './src/config/navigationConfig';
import {configureStore} from './src/redux/store';
import FavoriteScreen from './src/screens/Favorite/FavoriteScreen';
import HomeScreen from './src/screens/Home/HomeScreen';
import SearchScreen from './src/screens/Search/SearchScreen';
import NavigationService from './src/services/NavigationService';

const App: React.FC = () => {
  const Stack = createNativeStackNavigator();
  const store = configureStore();

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View style={globalStyles.pageContainer}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={color.themeBlack}
      />
      <Provider store={store}>
        <NavigationContainer
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}>
          <Stack.Navigator>
            <Stack.Screen
              options={{
                ...defaultHeaderOptions,
                title: 'HOME',
                headerRight: () => <HeaderHome />,
              }}
              name="HomeScreen"
              component={HomeScreen}
            />
            <Stack.Screen
              options={{
                ...defaultHeaderOptions,
                title: 'FAVORITES',
              }}
              name="FavoriteScreen"
              component={FavoriteScreen}
            />
            <Stack.Screen
              options={{
                ...defaultHeaderOptions,
                headerTitle: '',
              }}
              name="SearchScreen"
              component={SearchScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </View>
  );
};

export default App;

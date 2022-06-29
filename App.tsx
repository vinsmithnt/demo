/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import React from 'react';
import {StatusBar, View} from 'react-native';
import {Provider} from 'react-redux';
import HeaderFavorite from './src/components/HeaderFavourite';
import { color } from './src/config/colors';
import globalStyles from './src/config/globalStyles';
import {defaultHeaderOptions} from './src/config/navigationConfig';
import {configureStore} from './src/redux/store';
import FavoriteScreen from './src/screens/Favorite/FavoriteScreen';
import HomeScreen from './src/screens/Home/HomeScreen';
import NavigationService from './src/services/NavigationService';

const App: React.FC = () => {
  const Stack = createNativeStackNavigator();
  const store = configureStore();

  return (
    <View style={globalStyles.pageContainer}>
      <StatusBar barStyle={'light-content'} backgroundColor={color.themeBlack} />
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
                headerRight: () => <HeaderFavorite />,
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
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </View>
  );
};

export default App;

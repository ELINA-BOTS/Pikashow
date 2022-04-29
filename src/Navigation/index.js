import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../View/SplashScreen';
import HomeScreen from '../View/HomeScreen';
import BollywoodScreen from '../View/BollywoodScreen';
import HollywoodScreen from '../View/HollywoodScreen';
import HistoryScreen from '../View/HistoryScreen';
import SeriesScreen from '../View/SeriesScreen';
import LiveTvScreen from '../View/LiveTvScreen';

const Stack = createNativeStackNavigator();

function Navigation() {
  const [isSplashScreenVisible, setIsSplashScreenVisible] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsSplashScreenVisible(false);
    }, 3000);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        {/* Splash Screen */}
        {isSplashScreenVisible ? (
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{headerShown: false}}
          />
        ) : null}

        {/* HomeScreen */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Bollywood"
          component={BollywoodScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Hollywood"
          component={HollywoodScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="History"
          component={HistoryScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Series"
          component={SeriesScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LiveTv"
          component={LiveTvScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;

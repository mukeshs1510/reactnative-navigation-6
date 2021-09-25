
import React from 'react';
import FrontPage from './screen/FrontPage';
import HomePage from './screen/HomePage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={FrontPage} name="Front"
          options={{headerShown: false}}
        ></Stack.Screen>
        <Stack.Screen component={HomePage} name="Home"></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;



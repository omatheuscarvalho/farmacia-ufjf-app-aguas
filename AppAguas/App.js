// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Telainicial from './Telainicial.js';
import ReportScreen from './ReportScreen.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Telainicial">
        <Stack.Screen
          name="Telainicial"
          component={Telainicial}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ReportScreen"
          component={ReportScreen}
          options={{ title: 'Relatório' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

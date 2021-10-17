import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import layouit1 from './layouit1';
import Layoutlist from './Layoutlist';
import test from './test';
const Stack = createStackNavigator();
export default function naviigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Layoutlist"
          component={Layoutlist}
          options={{
            headerShown: false,
          }}
        />
      <Stack.Screen
          name="test"
          component={test}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="layouit1"
          component={layouit1}
          options={{
            headerShown: false,
          }}
        />
        
         
      </Stack.Navigator>
    </NavigationContainer>
  );
}

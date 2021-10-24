import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import layouit1 from './layouit1';
import Layoutlist from './Layoutlist';
import test from './test';
import layout3 from './layout3';
import layout4 from './layout4';
import layout5 from './layout5';
import layout6 from './layout6';
import layout7 from './layout7';
import layout8 from './layout8';

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
          <Stack.Screen
          name="layout3"
          component={layout3}
          options={{
            headerShown: false,
          }}
        />
           <Stack.Screen
          name="layout4"
          component={layout4}
          options={{
            headerShown: false,
          }}
        />
             <Stack.Screen
          name="layout5"
          component={layout5}
          options={{
            headerShown: false,
          }}
        />
          <Stack.Screen
          name="layout6"
          component={layout6}
          options={{
            headerShown: false,
          }}
        />
           <Stack.Screen
          name="layout7"
          component={layout7}
          options={{
            headerShown: false,
          }}
        />
         <Stack.Screen
          name="layout8"
          component={layout8}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

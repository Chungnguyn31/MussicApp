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
import layout9 from './layout9';
import layout10 from './layout10';
import llayout11 from './llayout11';
import layout12 from './layout12';
import layout13 from './layout13';
import layout14 from './layout14';

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
         <Stack.Screen
          name="layout9"
          component={layout9}
          options={{
            headerShown: false,
          }}
        />
         <Stack.Screen
          name="layout10"
          component={layout10}
          options={{
            headerShown: false,
          }}
        />
           <Stack.Screen
          name="llayout11"
          component={llayout11}
          options={{
            headerShown: false,
          }}
        />
         <Stack.Screen
          name="layout12"
          component={layout12}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="layout13"
          component={layout13}
          options={{
            headerShown: false,
          }}
        />
         <Stack.Screen
          name="layout14"
          component={layout14}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

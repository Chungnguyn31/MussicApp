import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Caption, Colors, ProgressBar, Surface, Title} from 'react-native-paper';

export default function layout14() {
  return (
    <View style={{flex: 1, alignItems: 'center',justifyContent:'center'}}>
      <Surface style={s.row}>
        <View style={{flexDirection: 'row'}}>
          <View>
            <View style={s.right}>
              <Title>4.4</Title>
              <Image source={require('./img/star.png')}></Image>
            </View>
            <Caption>32 reviews</Caption>
          </View>
          
        </View>
      </Surface>
    </View>
  );
}
const s = StyleSheet.create({
  row: {
    width: 296,
    height: 100,
    elevation: 14,
    borderRadius: 24,
    justifyContent:'center'
  },
  right: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  ps: {
    top:10
  },
});

import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import * as React from 'react';
import {
  Card,
  Surface,
  ProgressBar,
  Appbar,
  Button,
  TouchableRipple,
} from 'react-native-paper';

export default function layouit1({navigation}) {
  const _goBack = () => console.log('Went back');
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Appbar.Header>
        <Appbar.BackAction
          onPress={() => {
            navigation.goBack();
          }}
        />
      </Appbar.Header>
      <Surface style={s.container}>
        <Card style={s.row}>
          <Image
            style={s.background}
            source={require('../src/img/layout1.png')}
          />
          <View style={{alignItems: 'center', bottom: 40}}>
            <Text style={s.test1}>FIND MY WAY</Text>
            <Text style={{fontSize: 12, color: '#000000'}}>DaBaby</Text>
          </View>
          <View>
            <ProgressBar style={s.bar} progress={0.5} color="#8643FF" />
            <View style={s.time}>
              <Text>1:21</Text>
              <Text>-2:36</Text>
            </View>
            <Surface style={s.body}>
              <TouchableRipple onPress={() => {}} rippleColor="#E1DFE5">
                <Image
                  source={require('../src/img/tuangc1.png')}
                  style={{marginHorizontal: 20}}
                />
              </TouchableRipple>
              <TouchableRipple onPress={() => {}} rippleColor="#ffff">
                <Image source={require('../src/img/tuangc.png')} />
              </TouchableRipple>
              <TouchableRipple style={{top:10}} onPress={() => {}} rippleColor="#E1DFE5">
                <Image source={require('../src/img/button1.png')} />
              </TouchableRipple>
              <TouchableRipple onPress={() => {}} rippleColor="#ffff">
                <Image source={require('../src/img/tuatoi.png')} />
              </TouchableRipple>
              <TouchableRipple onPress={() => {}} rippleColor="#ffff">
                <Image
                  source={require('../src/img/tuatoi1.png')}
                  style={{marginHorizontal: 20}}
                />
              </TouchableRipple>
            </Surface>
          </View>
        </Card>
      </Surface>
    </View>
  );
}
const s = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    width: 280,
    height: 472,
    borderRadius: 32,
    elevation: 4,
  },
  img: {
    width: 248,
    height: 248,
  },

  row: {
    width: 280,
    height: 472,
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
  },
  background: {
    width: 280,
    height: 280,
    alignItems: 'center',
    shadowColor: 'black',
  },
  Button: {
    margin: 4,
    backgroundColor: 'red',
  },
  button1: {
    alignContent: 'center',
    backgroundColor: 'red',
  },
  test1: {
    fontSize: 18,
    color: '#000000',
    fontWeight: 'bold',
  },
  body: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 280,
    justifyContent: 'center',
  },
  ripple: {
    borderRadius: 20,
    top: 10,
  },
  time: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 20,
    width: 247,
  },
  bar: {
    width: 247,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
});

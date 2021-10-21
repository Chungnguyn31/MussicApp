import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {
  Appbar,
  Card,
  Colors,
  Surface,
  Title,
  IconButton,
  ToggleButton,
  Caption,
} from 'react-native-paper';

export default function layout7({navigation}) {
  const [value, setValue] = React.useState('left');
  return (
    <View style={s.container}>
      <Appbar.Header>
        <Appbar.BackAction
          onPress={() => {
            navigation.goBack();
          }}
        />
      </Appbar.Header>
      <Surface style={s.row}>
        <View style={s.body}>
          <Image style={s.img1} source={require('./img/pizza.png')} />
          <View style={{flexDirection: 'column', marginHorizontal: 50}}>
            <Title style={s.text1}>Papa’s Pizzeria</Title>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginRight: 50,
              }}>
              <Image
                style={s.img}
                source={require('./img/Location.png')}></Image>
              <Caption style={s.text2}>3.2km</Caption>
            </View>
          </View>
          <ToggleButton.Row
            onValueChange={value => setValue(value)}
            value={value}>
            <ToggleButton
              style={s.button1}
              icon="chat-processing"
              color={'#B7B3F9'}
              value="left"
            />
            <ToggleButton
              style={s.button}
              icon="heart-half-full"
              color={'#FF009B'}
              value="right"
            />
          </ToggleButton.Row>
        </View>
      </Surface>
    </View>
  );
}
const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img1: {
    position: 'absolute',
    right: 250,
  },
  body: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 300,
    position: 'relative',
    height: 100,
    element: 10,
    borderRadius: 24,
  },
  text1: {
    marginHorizontal: 20,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000000',
  },
  text2: {
    marginHorizontal: 5,
    fontSize: 12,
  },
  img: {
    top: 6,
    width: 8,
    height: 12,
  },
  row: {
    borderRadius: 24,
    element: 10,
    elevation: 5,
  },
  button: {
    marginHorizontal: 10,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 30,
    right: 10,
    borderRadius: 14,
    borderTopLeftRadius: 14,
    borderBottomLeftRadius: 14,
    elevation: 5,
    tintColor: '#4B41F1',
  },
  button1: {
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 30,
    right: 70,
    borderRadius: 14,
    borderTopRightRadius: 14,
    borderBottomRightRadius: 14,
    elevation: 5,
    tintColor: '#FF99DS7',
  },
});

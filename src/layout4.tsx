import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Appbar, Card, Chip, Surface, Title} from 'react-native-paper';

export default function layout4({navigation}) {
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
            <Card.Title
              title="FIND MY WAY"
              titleStyle={s.text1}
              subtitle="DaBaby"
              subtitleStyle={s.text2}
              left={(props: any) => (
                <Image
                  style={s.img1}
                  {...props}
                  source={require('./img/layout2.png')}
                />
              )}
              right={(props: any) => (
                <Image
                  style={s.img}
                  {...props}
                  source={require('./img/button1.png')}
                />
              )}
            />
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
      right: 10,
     
    },
    body: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: 342,
  
      height: 100,
      element: 10,
      borderRadius: 24,
    },
    text1: {
      marginLeft: 50,
      fontSize: 15,
      fontWeight: 'bold',
      color: '#000000',
    },
    text2: {
      marginLeft: 50,
      fontSize: 12,
    },
    img: {
      top: 10,
    },
    row:{
      borderRadius: 24,
      element: 10,
      elevation:5
    }
  });
  
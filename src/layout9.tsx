import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Appbar, Caption, Card,  Colors, Surface, Title, ToggleButton} from 'react-native-paper';

export default function layout9({navigation}) {
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
              title="Coffee mug"
              titleStyle={s.text1}
              subtitle="Beautiful and durable"
              subtitleStyle={s.text2}
              left={(props: any) => (
                <Image
                  style={s.img1}
                  {...props}
                  source={require('./img/coffe.png')}
                />
              )}
              right={(props: any) => (
            <Title style={s.text3}>$7.99</Title>
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
     position:'absolute',
     right:1
    },
    body: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: 300,
  position:'relative',
      height: 100,
      element: 10,
      borderRadius: 24,
    },
    text1: {
      marginLeft: 10,
      fontSize: 15,
      fontWeight: 'bold',
      color: '#000000',
    },
    text2: {
      marginLeft: 10,
      fontSize: 12,
    },
    img: {
      top: 10,
    },
    row:{
      borderRadius: 24,
      element: 10,
      elevation:5
    },
    button:{
   marginHorizontal:10,
   backgroundColor:'#00A0061A',
    },button1:{
      backgroundColor:'#CE00001A',
      
    },
    text3: {
        marginHorizontal: 10,
        fontSize: 12,
        color:'#4136F1',
        fontWeight:'bold'
      },
  });
  
  
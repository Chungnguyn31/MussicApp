import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {
    Appbar,
  Avatar,
  Badge,
  Caption,
  Colors,
  Headline,
  Surface,
  Title,
  ToggleButton,
} from 'react-native-paper';


export default function layout6({navigation}) {
    const [value, setValue] = React.useState('left');
    return (
        <View style={{flex:1}}>
            
             <Appbar.Header style={{}}>
        <Appbar.BackAction   onPress={() => {
              navigation.goBack();
            }}/>
      </Appbar.Header>
      <View style={{alignItems: 'center', justifyContent: 'center', flex:9}}>

        <View style={s.row}>
          <Surface style={s.container}>
          <ToggleButton
            style={s.button}
            icon="chat"
            color="#B7B3F9"
            value="left"
          />
          <ToggleButton
            style={s.button1}
            icon="phone"
            color={Colors.green600}
            value="right"
          />
            <View style={{alignItems: 'center'}}>
             <Image style={s.img} source={require('../src/img/Rectangle1.png')}></Image>
             <Title style={s.text1}>Mark Philips</Title>
         <Caption style={s.text2}>Teacher</Caption>
            </View>
        
              
          </Surface>
        </View>
      </View>
      </View>
    );
  }
  const s = StyleSheet.create({
    container: {
      width: 232,
      height: 314,
      elevation: 3,
      borderRadius: 32,
      position: 'relative',
  
      alignItems: 'stretch',
    },
    button: {
      marginHorizontal: 10,
      backgroundColor: '#fff',
      borderRadius: 14,
      borderTopRightRadius: 14,
      borderBottomRightRadius: 14,
      position: 'absolute',
      bottom: 280,
      left: 120,
      elevation: 8,
    },
    button1: {
      backgroundColor: '#ffff',
      borderRadius: 14,
      borderTopLeftRadius: 14,
      borderBottomLeftRadius: 14,
      position: 'absolute',
      bottom: 280,
      left: 180,
      elevation: 8,
    },
    row: {
      width: 233,
      height: 299,
    },
   
    text1: {
      fontSize: 18,
      color: '#000000',
      fontWeight: 'bold',
    },
    text2: {
      bottom:5 ,
    },
    line: {
      fontWeight: 'bold',
    },
    img: {
      marginTop:20,
      
    },
  });
  

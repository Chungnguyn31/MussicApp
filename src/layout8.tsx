import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {
  Surface,
  Title,
  useTheme,
  RadioButton,
  Paragraph,
  List,
  Colors,
  TouchableRipple,
  Button,
} from 'react-native-paper';

export default function layout8() {
  const [checked, setChecked] = React.useState('first');
  const [value2, setValue2] = React.useState<string>('first');

  const {
    colors: {background, primary},
  } = useTheme();
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Surface style={s.row}>
        <View style={{alignItems: 'center', marginTop: 20}}>
          <Image source={require('./img/Wallet.png')}></Image>
        </View>
        <View style={{alignItems:'center'}}>
          <Title style={s.text1}>New payment method</Title>
          <View>
            <View style={s.layout}>
              <RadioButton
                value="first"
                color={Colors.black}
                status={checked === 'first' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('first')}
              />
              <Image style={{bottom:10,marginHorizontal:20}} source={require('./img/visa.png')}></Image>
            </View>
            <View style={s.layout} >
              <RadioButton
                value="second"
                color={Colors.black}
                status={checked === 'second' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('second')}
              />
              <Image style={s.img} source={require('./img/mastercard.png')}></Image>
            </View>
            <View style={s.layout}>
              <RadioButton
                value="three"
                color={Colors.black}
                status={checked === 'three' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('three')}
              />
              <Image style={s.img} source={require('./img/paypal.png')}></Image>
            </View>
            <View style={s.layout}>
              <RadioButton
                value="four"
                color={Colors.black}
                status={checked === 'four' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('four')}
              />
              <Image style={s.img}source={require('./img/google.png')}></Image>
            </View>
          </View>
        </View>
 
        <View style={{alignItems:'center',position:'relative',justifyContent:'flex-start',elevation:5}}>
       <TouchableRipple  onPress={() => {}} rippleColor="#ffff">
  <Image source={require(('./img/buttonlayout8.png'))}></Image>
  </TouchableRipple>
    <Text style={s.text}>Continue</Text>
        </View>
    
      </Surface>
    </View>
  );
}
const s = StyleSheet.create({
  row: {
    alignItems: 'center',
    width: 280,
    position: 'relative',
    height: 448,
    element: 10,
    borderRadius: 24,
  },
  layout: {
    flexDirection:'row',
    alignItems:'flex-start',
    width:248,
    height:50,
    marginTop:10,
  
  },
  text1: {
    fontSize: 18,
    color: '#000000',
    fontWeight: 'bold',
   
  },
  img:{
    marginHorizontal:20,
    top:10
  },button:{
    margin: 4,
    backgroundColor:'#'
  },linearGradient:{

  },text:{
    fontSize:14,
    position:'absolute',
    color:'#ffff',
top:30
  }
});

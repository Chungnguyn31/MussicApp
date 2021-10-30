import React from 'react'
import { View, Text ,StyleSheet, TouchableOpacity} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Button, FAB, TouchableRipple } from 'react-native-paper'

export default function layout12() {
    return (
        <View style={{flex:1}}>
<View style={s.container}>
      <TouchableRipple     onPress={() => console.log('Pressed')}
    rippleColor="rgba(0, 0, 0, .3)" style={s.button}>
      <LinearGradient   start={{x: 0.0, y: 0.5}} end={{x: 1, y: 0.0}}
 colors={['#4136F1','#8743FF']} style={s.gradient}>
        <Text style={s.text}> Button Text</Text>
      </LinearGradient>
      </TouchableRipple>
      <TouchableOpacity style={s.button1}>
      <LinearGradient   start={{x: 0.0, y: 0.5}} end={{x: 1, y: 0.0}}
 colors={['#4136F1','#8743FF']} style={s.gradient1}>
        <Text style={s.text}> Button Text</Text>
      </LinearGradient>
      </TouchableOpacity>
      </View>
        </View>
    )
}
const s =StyleSheet.create({
  button:{

width:344,
height:56,
borderRadius:16
  },
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
  },
  text: {
    color: 'white',
    fontSize: 16
  },
  gradient: {
 flexDirection:'row',
    justifyContent: 'center',
    alignItems:'center',
    borderRadius: 16,
    width:344,
height:56
},
button1:{
 marginTop:10,
    width:144,
    height:56,
    borderRadius:16
      },
      gradient1: {
        flexDirection:'row',
           justifyContent: 'center',
           alignItems:'center',
           borderRadius: 16,
           width:144,
       height:56
       },
})
import React from 'react'
import { View, Text, StyleSheet ,Image} from 'react-native'
import { Caption, Paragraph, RadioButton, Surface, Title } from 'react-native-paper'

export default function layout10() {
    return (
        <View style={s.container}>
           <Surface style={s.row}>
               <Image source={require('./img/Sunny.png')}></Image>
           <View style={s.body}>   
           <Text style={s.text}>27°</Text>
           </View> 
           <Title style={s.text1}>Sunny</Title>
           </Surface>
        </View>
    )
}
const s=StyleSheet.create({
    row:{
        width:145,
        height:174,
        backgroundColor:'#fff',
        alignItems:'center',
        borderRadius:32,
        borderStartColor:'red',
        elevation:10
    },
    container:{
        alignItems:'center',
        justifyContent:'center',
        flex:1
    },
    text:{
        fontSize:60,
        fontWeight:'bold',
       color:'#000000'
    },
    body:{
       marginLeft:10,
        alignItems:'center'
    },text1:{
        fontSize:13
    }
})
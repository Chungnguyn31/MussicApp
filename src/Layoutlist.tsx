import React from 'react'

import { View, Text, TouchableOpacity } from 'react-native'
import { Button } from 'react-native-paper'
export default function Layoutlist({navigation} ) {
  return (
    <View >
      <Button onPress ={()=>navigation.navigate('layouit1')}>
      <Text>Layout1</Text>
      </Button>
      <Button onPress ={()=>navigation.navigate('test')}>
      <Text>Layout2</Text>
      </Button>
      <Button onPress ={()=>navigation.navigate('layout3')}>
      <Text>Layout3</Text>
      </Button>
      <Button onPress ={()=>navigation.navigate('layout4')}>
      <Text>Layout4</Text>
      </Button>
      <Button onPress ={()=>navigation.navigate('layout5')}>
      <Text>Layout5</Text>
      </Button>
      <Button onPress ={()=>navigation.navigate('layout6')}>
      <Text>Layout6</Text>
      </Button>
    </View>
  )
}


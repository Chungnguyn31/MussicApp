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
      <Button onPress ={()=>navigation.navigate('layout7')}>
      <Text>Layout7</Text>
      </Button>
      <Button onPress ={()=>navigation.navigate('layout8')}>
      <Text>Layout8</Text>
      </Button>
      <Button onPress ={()=>navigation.navigate('layout9')}>
      <Text>Layout9</Text>
      </Button>
      <Button onPress ={()=>navigation.navigate('layout10')}>
      <Text>Layout10</Text>
      </Button>
      <Button onPress ={()=>navigation.navigate('llayout11')}>
      <Text>Layout11</Text>
      </Button>
      <Button onPress ={()=>navigation.navigate('layout12')}>
      <Text>Layout12</Text>
      </Button>
      <Button onPress ={()=>navigation.navigate('layout13')}>
      <Text>Layout13</Text>
      </Button>
    </View>
  )
}


import React from 'react'
import { View, Text,StyleSheet ,Image} from 'react-native'
import { Caption, List, Subheading, Surface, Title, useTheme } from 'react-native-paper'

export default function layout13() {
    const {
        colors: { background },
      } = useTheme();
    
    return (
        <View style={{flex:1,alignItems:'center'}}>
            <Surface style={s.row}>
            <List.Section>
        <List.Item
          left={() => (
            <Image
              source={require('./img/book.png')}
              style={s.image}
            />
          )}
      right={() => (
<View style={s.right}>
<Title>Boring Girls</Title>
            <Subheading>Sara Taylor</Subheading>
            <Caption style={s.text}>Amazing, very interesting novel by Sara Taylor. Must read for everyone!</Caption>
</View>
      )}
       
        >
            
        </List.Item>
        
      </List.Section>
            </Surface>
        </View>
    )
}
const s=StyleSheet.create({
  row:{
      width:342,
      height:176,
      elevation:10,
      borderRadius:20
  },
  image:{
    height: 130,
    width: 86,
    margin: 8,
  },
  right:{
      width:183,
      height: 120,
      marginTop:10,
      right:20
  },text:{
      fontSize:12
  }

})
import * as React from 'react';
import { Appbar, Card,ProgressBar,Colors } from 'react-native-paper';
import { Platform, View  } from 'react-native';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

const HomePage = () => {
 
  
    return (
        <View>
      
      <Card>
    <Card.Cover style={{width:248,height:248,marginHorizontal:50,marginTop :50,justifyContent:'center'}} source={require('../src/img/layout1.png')}/>
  </Card>
  
      </View>
    );
  };
export default HomePage;
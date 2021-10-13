import * as React from 'react';
import { BottomNavigation,Card,ProgressBar,Colors , Text,Title,Button ,Avatar, Surface} from 'react-native-paper';
import HomePage from './home';
import { View,Image, TouchableOpacity,StyleSheet } from 'react-native';
import { Icon } from 'react-native-vector-icons/Icon';
const MusicRoute = () =>  <View  style={{}}>
  <View style={{alignItems:'center'}}>  
<Card style={{width:280,height:472,alignItems:'center',borderRadius:20,backgroundColor:'#FFFFFF'}}>
<Image style={{width:280,height:280,alignItems:'center',shadowColor:'black'}} source={require('../src/img/layout1.png')}/>
<View style={{alignItems:'center',bottom:40}}>
<Text style={{fontSize:18,color:'#000000',fontWeight:'bold'}} >FIND MY WAY</Text>
<Text style={{fontSize:12,color:'#000000'}}>DaBaby</Text>
</View>
<View >
<ProgressBar icon={"checkbox-blank-circle"} style={{width:247,alignItems:'center',justifyContent:'center',marginHorizontal:10}} progress={0.5} color={ '#4136F1','#8743FF'}/>
<View style={{justifyContent:'space-between',flexDirection:'row',marginHorizontal:10,width:247}}>
    <Text>1:21</Text>
    <Text>-2:36</Text>
</View>
<View style={{flexDirection:'row',alignItems:'center',width:280,justifyContent:'center'}}>
<TouchableOpacity >
<Image source={require('../src/img/tuangc1.png')}
style={{marginHorizontal:20}} />

</TouchableOpacity>
<TouchableOpacity >
<Image source={require('../src/img/tuangc.png')}/>

</TouchableOpacity>
<TouchableOpacity  style={{top:10}} >
<Image source={require('../src/img/button1.png')}/>

</TouchableOpacity>
<TouchableOpacity >
<Image source={require('../src/img/tuatoi.png')}/>

</TouchableOpacity>
<TouchableOpacity >
<Image source={require('../src/img/tuatoi1.png')}
style={{marginHorizontal:20}}/>

</TouchableOpacity>
</View>
</View>
</Card>
</View>   

</View>;

const AlbumsRoute = () =>
<View style={{alignItems:'center'}}>
<Card style={{width:280,height:378,borderRadius:20}}>
 <View style={{alignItems:'center',marginTop:20}}>
<Image  style={{  backgroundColor:'#fff',alignItems:'center'}} source={require('../src/img/Folder.png')} />
</View>
<View style={{alignItems:'center',marginTop:10}}>
<Text style={{fontSize:18,fontWeight:'bold'}}>Files uploading…</Text>
</View>
<View style={{marginHorizontal:20,marginTop:20,flexDirection:'row'}}>
<Surface style={styles.surface}>
    <Image  source={require('../src/img/document.png')}/>
  </Surface>
  <View style={{marginHorizontal:20,justifyContent:'center'}}>
    <Text style={{fontSize:13,fontWeight:'bold'}}>design.psd</Text>
    <View style={{flexDirection:'row',justifyContent:'space-between',width:150}}>   
       <ProgressBar style={{width:100,alignItems:'center',justifyContent:'center',marginTop:10}} progress={0.5}  color={ '#4136F1','#8743FF'}/>
<Text>50%</Text>
    </View>
  </View>
</View>
<View style={{marginHorizontal:20,marginTop:20,flexDirection:'row'}}>
<Surface style={styles.surface}>
    <Image  source={require('../src/img/document.png')}/>
  </Surface>
  <View style={{marginHorizontal:20,justifyContent:'center'}}>
    <Text style={{fontSize:13,fontWeight:'bold'}}>resume.docx</Text>
    <View style={{flexDirection:'row',justifyContent:'space-between',width:150}}>   
       <ProgressBar style={{width:100,alignItems:'center',justifyContent:'center',marginTop:10}} progress={0.32}  color={ '#4136F1','#8743FF'}/>
<Text>32%</Text>
    </View>
  </View>
</View>
<View style={{marginHorizontal:20,marginTop:20,flexDirection:'row'}}>
<Surface style={styles.surface}>
    <Image  source={require('../src/img/document.png')}/>
  </Surface>
  <View style={{marginHorizontal:20,justifyContent:'center'}}>
    <Text style={{fontSize:13,fontWeight:'bold'}}>message.docx</Text>
    <View style={{flexDirection:'row',justifyContent:'space-between',width:150}}>   
       <ProgressBar style={{width:100,alignItems:'center',justifyContent:'center',marginTop:10}} progress={0.21}  color={ '#4136F1','#8743FF'}/>
<Text>21%</Text>
    </View>
  </View>
</View>
</Card>
</View>;

const RecentsRoute = () => <Text>Recents</Text>;

const Layoutlist = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'music', icon: 'home' },
    { key: 'albums', icon: 'view-grid' },
    { key: 'recents', icon:'account' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default Layoutlist;

const styles = StyleSheet.create({
  surface: {
    padding: 8,
    height: 52,
    width: 52,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    borderRadius:20
  },
});
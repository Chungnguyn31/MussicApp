import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {Appbar, Button, Card, ProgressBar, Surface} from 'react-native-paper';
import naviigation from './naviigation';

export default function test({navigation}) {
  return (
   <View style={styles.row}>
         <Appbar.Header>
        <Appbar.BackAction
          onPress={() => {
            navigation.goBack();
          }}
        />
      </Appbar.Header>
      <Surface style={styles.container}>
        <Card style={{width: 280, height: 378, borderRadius: 20}}>
          <View style={{alignItems: 'center', marginTop: 20}}>
            <Image
              style={{backgroundColor: '#fff', alignItems: 'center'}}
              source={require('../src/img/Folder.png')}
            />
          </View>
          <View style={{alignItems: 'center', marginTop: 10}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              Files uploading…
            </Text>
          </View>
          <View
            style={{marginHorizontal: 20, marginTop: 20, flexDirection: 'row'}}>
            <Surface style={styles.surface}>
              <Image source={require('../src/img/document.png')} />
            </Surface>
            <View style={{marginHorizontal: 20, justifyContent: 'center'}}>
              <Text style={{fontSize: 13, fontWeight: 'bold'}}>design.psd</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: 150,
                }}>
                <ProgressBar
                  style={{
                    width: 100,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 10,
                  }}
                  progress={0.5}
                  color={'#8743FF'}
                />
                <Text>50%</Text>
              </View>
            </View>
          </View>
          <View
            style={{marginHorizontal: 20, marginTop: 20, flexDirection: 'row'}}>
            <Surface style={styles.surface}>
              <Image source={require('../src/img/document.png')} />
            </Surface>
            <View style={{marginHorizontal: 20, justifyContent: 'center'}}>
              <Text style={{fontSize: 13, fontWeight: 'bold'}}>
                resume.docx
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: 150,
                }}>
                <ProgressBar
                  style={{
                    width: 100,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 10,
                  }}
                  progress={0.32}
                  color={'#8743FF'}
                />
                <Text>32%</Text>
              </View>
            </View>
          </View>
          <View
            style={{marginHorizontal: 20, marginTop: 20, flexDirection: 'row'}}>
            <Surface style={styles.surface}>
              <Image source={require('../src/img/document.png')} />
            </Surface>
            <View style={{marginHorizontal: 20, justifyContent: 'center'}}>
              <Text style={{fontSize: 13, fontWeight: 'bold'}}>
                message.docx
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: 150,
                }}>
                <ProgressBar
                  style={{
                    width: 100,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 10,
                  }}
                  progress={0.21}
                  color={'#8743FF'}
                />
                <Text>21%</Text>
              </View>
            </View>
          </View>
        </Card>
      </Surface>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 280,
    height: 378,
    borderRadius: 32,
    elevation: 4,

  },
  surface: {
    padding: 8,
    height: 52,
    width: 52,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    borderRadius: 20,
  },
  row:{
      justifyContent:'center',
      alignItems:'center',
    flex:1,
  }
});

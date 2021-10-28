import * as React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import {
  Paragraph,
  Switch,
  Colors,
  TouchableRipple,
  useTheme,
} from 'react-native-paper';

export default function llayout11() {
    const [valueNormal, setNormalValue] = React.useState<boolean>(true);
  const [valueCustom, setCustomValue] = React.useState<boolean>(true);

  const {
    colors: { background },
  } = useTheme();

  const switchValueNormalLabel = `switch ${
    valueNormal === true ? 'on' : 'off'
  }`;
  const switchValueCustomlLabel = `switch ${
    valueCustom === true ? 'on' : 'off'
  }`;
    return  Platform.OS === 'android' ? (
        <View
        style={[
          styles.container,
          {
            backgroundColor: background,
          },
        ]}
      >
      
        <TouchableRipple onPress={() => setCustomValue(!valueCustom)}>
          <View style={styles.row}>
            <Paragraph> {switchValueCustomlLabel}</Paragraph>
            <View pointerEvents="none">
              <Switch value={valueCustom}  color={'#4136F1'}/>
            </View>
          </View>
        </TouchableRipple>
        {/* <View style={styles.row}>
          <Paragraph>Switch on (disabled)</Paragraph>
          <Switch disabled value />
        </View>
        <View style={styles.row}>
          <Paragraph>Switch off (disabled)</Paragraph>
          <Switch disabled />
        </View> */}
      </View>
    ) : (
      <View
        style={[
          styles.container,
          {
            backgroundColor: background,
          },
        ]}
      >
       
        <View style={styles.row}>
          <Paragraph> {switchValueCustomlLabel}</Paragraph>
          <Switch
            value={valueCustom}
            onValueChange={() => setCustomValue(!valueCustom)}
            color={Colors.red900}
          />
        </View>
      </View>
    );
  };
  
  llayout11.title = 'Switch';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.red300,
      paddingVertical: 8,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 8,
      paddingHorizontal: 16,
    },
  });

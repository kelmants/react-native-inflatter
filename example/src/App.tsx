import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import RNInflatter from 'react-native-inflatter';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Text</Text>
      <RNInflatter horizontal={20} vertical={20} />
      <Text style={styles.text}>Another Text</Text>
      <RNInflatter horizontal={20} vertical={20} />
      <View style={styles.row}>
        <RNInflatter horizontal={20} vertical={20} />
        <Text style={styles.text}>Text</Text>
        <Text style={styles.text}>Another Text</Text>
        <RNInflatter horizontal={20} vertical={20} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  row: {
    flexDirection: 'row',
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
});

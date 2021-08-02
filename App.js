/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useContext, useState} from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import Payment from './src/screen/Payment';
import {AppProvider} from './src/context/AppContext';

const App = () => {
  return (
    <AppProvider>
      <View style={styles.container}>
        <Payment />
      </View>
    </AppProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f7',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
  },
});

export default App;

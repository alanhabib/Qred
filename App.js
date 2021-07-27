/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import Payment from './src/screen/Payment';
import MockLanding from './src/screen/MockLanding';

const App = () => {
  const [invoice, setInvoice] = useState(false);

  const invoiceHandler = React.useCallback(() => {
    setInvoice(i => !i);
  }, []);

  return (
    <View style={styles.container}>
      {invoice ? (
        <Payment invoiceHandler={invoiceHandler} />
      ) : (
        <MockLanding invoiceHandler={invoiceHandler} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f7',
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
    paddingVertical: 40,
  },
});

export default App;

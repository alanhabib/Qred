import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const MockLanding = ({invoiceHandler}) => {
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={invoiceHandler}>
        <Text style={styles.buttonTitle}>{'Start'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MockLanding;

const styles = StyleSheet.create({
  button: {
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#34c759',
    borderRadius: 8,
  },
  buttonTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
    paddingVertical: 16,
  },
});

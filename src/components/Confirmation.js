import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';

const Confirmation = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Confirm payment with your BankID</Text>
      <ActivityIndicator size="large" color="#34c759" />
    </View>
  );
};

export default Confirmation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 16,
    margin: 16,
    borderRadius: 8,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 16,
    paddingBottom: 46,
    color: '#34c759',
    fontWeight: '700',
  },
});

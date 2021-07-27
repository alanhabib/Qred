import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Invoice = () => {
  return (
    <View style={styles.container}>
      <View style={styles.editContainer}>
        <View style={styles.textWrapper}>
          <Text style={styles.text}>Invoice</Text>
        </View>
        <TouchableOpacity style={styles.textWrapper}>
          <Text style={styles.text}>Edit</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.invoiceContainer}>
        <View style={styles.invoiceTextWrapper}>
          <Text style={styles.invoiceText}>Receiver:</Text>
          <Text style={styles.invoiceText}>Tele2 AB</Text>
        </View>
        <View style={styles.invoiceTextWrapper}>
          <Text style={styles.invoiceText}>Amount:</Text>
          <Text style={styles.invoiceText}>19 157 kr</Text>
        </View>
        <View style={styles.invoiceTextWrapper}>
          <Text style={styles.invoiceText}>Due date:</Text>
          <Text style={styles.invoiceText}>2020-06-06</Text>
        </View>
      </View>
    </View>
  );
};

export default Invoice;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  editContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textWrapper: {
    color: 'white',
    fontWeight: '600',
    paddingVertical: 16,
    alignItems: 'center',
    backgroundColor: '#34c759',
    borderRadius: 8,
    width: 100,
  },
  invoiceContainer: {
    paddingHorizontal: 32,
    paddingVertical: 16,
    marginVertical: 32,
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  invoiceTextWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 8,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
  invoiceText: {
    color: '#34c759',
    fontSize: 16,
    fontWeight: '700',
  },
});

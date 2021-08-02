import React, {useContext, useEffect, useState} from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {AppContext} from '../context/AppContext';

const mockdata = [
  {
    id: 1,
    title: 'Pay now',
    amount: '19 157 kr',
  },
  {
    id: 2,
    title: 'Pay in 30 days',
    amount: '19 444 kr',
  },
  {
    id: 3,
    title: 'Split in 12 months',
    amount: '1 620 kr',
  },
];
const Payments = () => {
  const {checked, setChecked} = useContext(AppContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>When do you want to pay?</Text>
      {mockdata?.map(option => {
        return (
          <View style={styles.paymentOptionsWrapper} key={option.id}>
            <View style={styles.checkBoxWrapper}>
              <TouchableOpacity onPress={() => setChecked(option.id)}>
                <View
                  style={[
                    styles.checkBox,
                    {
                      backgroundColor: checked === option.id ? 'pink' : 'white',
                    },
                  ]}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.optionTextWrapper}>
              <Text style={styles.optionTitle}>{option.title}</Text>
              <Text style={styles.amount}>{option.amount}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default Payments;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  checkBox: {
    width: 40,
    height: 40,
    borderRadius: 8,
    borderColor: '#34c759',
    borderWidth: 2,
    backgroundColor: '#fff',
  },
  title: {
    color: '#34c759',
    fontSize: 20,
    fontWeight: '700',
  },
  paymentOptionsWrapper: {
    width: '100%',
    flexDirection: 'row',
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    marginTop: 16,
  },
  checkBoxWrapper: {
    paddingHorizontal: 8,
  },
  optionTextWrapper: {
    paddingLeft: 8,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: '700',
  },
  amount: {
    color: '#34c759',
    fontWeight: '700',
  },
});

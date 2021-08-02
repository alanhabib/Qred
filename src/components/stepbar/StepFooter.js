import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {AppContext} from '../../context/AppContext';

const StepFooter = ({currentStep, steps, setCurrentStep}) => {
  const {setInvoice, invoice} = useContext(AppContext);

  const next = () => {
    setCurrentStep(currentStep >= steps.length ? currentStep : currentStep + 1);
  };

  const stepHandler = () => {
    if (currentStep === steps.length && invoice) {
      setInvoice(false);
      setCurrentStep(1);
    } else {
      next();
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => stepHandler()}>
        <Text style={styles.buttonTitle}>
          {currentStep === steps.length ? 'Confirm' : 'Next'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default StepFooter;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderTopColor: 'black',
    borderTopWidth: 1,
    position: 'relative',
  },
  button: {
    flex: 1,
    backgroundColor: '#34c759',
    borderRadius: 8,
    justifyContent: 'center',
    flexDirection: 'row',
    margin: 12,
  },
  buttonTitle: {
    padding: 16,
    color: 'white',
    fontWeight: '700',
    fontSize: 20,
  },
});

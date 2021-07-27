import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const StepFooter = ({currentStep, steps, setCurrentStep, invoiceHandler}) => {
  const next = () => {
    setCurrentStep(currentStep >= steps.length ? currentStep : currentStep + 1);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={currentStep === steps.length ? invoiceHandler : next}>
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
  overlay: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(172, 191, 177, 0.5)',
    position: 'absolute',
    top: 0,
    bottom: 0,
    zIndex: 20,
  },
  button: {
    backgroundColor: '#34c759',
    width: Dimensions.get('screen').width - 32,
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

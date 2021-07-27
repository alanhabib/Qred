import React from 'react';
import {View, StyleSheet, Dimensions, ScrollView} from 'react-native';

const StepContent = ({steps, currentStep}) => {
  return (
    <View style={styles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        {steps.length > 0 ? steps[currentStep - 1].component() : <></>}
      </ScrollView>
    </View>
  );
};

export default StepContent;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    flex: 2,
  },
});

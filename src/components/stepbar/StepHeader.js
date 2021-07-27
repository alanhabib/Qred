import React from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';

const Circle = ({index, selectedIndex}) => {
  return (
    <View
      style={
        index === selectedIndex
          ? {...styles['circle'], backgroundColor: '#34c759'}
          : {...styles['circle'], backgroundColor: 'white'}
      }>
      <Text
        style={
          index === selectedIndex
            ? styles['selectedcircleTitle']
            : styles['circleTitle']
        }>
        {index}
      </Text>
    </View>
  );
};

const StepHeader = ({currentStep, steps}) => {
  const MAX_NUMBER_LINES = 2;

  return (
    <View style={styles.container}>
      {steps.map((step, index) => (
        <View key={index} style={styles.stepContainer}>
          <Circle selectedIndex={currentStep} index={++index} />
          <Text
            numberOfLines={MAX_NUMBER_LINES}
            ellipsizeMode="tail"
            style={styles.titleCircle}>
            {step.title}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default StepHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  stepContainer: {
    flexDirection: 'column',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleCircle: {
    marginTop: 10,
    fontSize: 12,
    paddingBottom: 8,
    color: '#34c759',
    fontWeight: '600',
  },
  circle: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 50,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    zIndex: 10,
  },
  circleTitle: {
    fontSize: 12,
    color: '#34c759',
  },
  selectedcircleTitle: {
    fontSize: 12,
    color: 'white',
  },
});

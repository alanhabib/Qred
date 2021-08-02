import React, {useContext, useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import StepHeader from '../components/stepbar/StepHeader';
import StepContent from '../components/stepbar/StepContent';
import StepFooter from '../components/stepbar/StepFooter';
import Invoice from '../components/Invoice';
import Payments from '../components/Payments';
import Confirmation from '../components/Confirmation';
import {AppContext} from '../context/AppContext';
import MockLanding from './MockLanding';

const Payment = () => {
  const {invoice} = useContext(AppContext);

  const [currentStep, setCurrentStep] = useState(0);
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    setSteps([
      {
        title: 'Invoice',
        component: () => <Invoice />,
      },
      {
        title: 'Options',
        component: () => <Payments />,
      },
      {
        title: 'Confirm',
        component: () => <Confirmation />,
      },
    ]);
    setCurrentStep(1);
  }, []);

  return (
    <View>
      {invoice ? (
        <View style={styles.container}>
          <StepHeader currentStep={currentStep} steps={steps} />
          <StepContent steps={steps} currentStep={currentStep} />
          <StepFooter
            steps={steps}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
          />
        </View>
      ) : (
        <MockLanding />
      )}
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

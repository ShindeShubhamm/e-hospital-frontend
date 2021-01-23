import React, { useState } from 'react';

import { Button, Container, Step, StepLabel, Stepper } from '@material-ui/core';
import { connect } from 'react-redux';

import FormHandler from '../../lib/forms';

const Registration = (props) => {
  const { auth } = props;
  const { userInfo } = auth;
  const [step, setStep] = useState(0);

  const initialData = {
    firstName: userInfo?.firstName,
    lastName: userInfo?.lastName,
    email: userInfo?.email,
    mobileNumber: userInfo?.mobileNumber,
  };

  const handleData = (data) => {
    if (step === 1) {
      // eslint-disable-next-line
      console.log(data);
    }
    if (step < 1) setStep((prevStep) => prevStep + 1);
  };

  const steps = [
    { schema: 'DOCTOR_BASIC_INFO', label: 'Personal Info' },
    { schema: 'DOCTOR_REGISTRATION_DETAILS', label: 'Registration Details' },
  ];

  return (
    <Container maxWidth="md">
      <h1 className="">Doctor Registration</h1>
      <Stepper activeStep={step} alternativeLabel>
        {steps.map((s) => (
          <Step key={s.schema}>
            <StepLabel>{s.label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <FormHandler
        form={steps[step].schema}
        onSubmit={handleData}
        submitButtonLabel="Next"
        populateData={step === 0 ? initialData : undefined}
      />
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(Registration);

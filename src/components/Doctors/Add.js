import React, { useEffect, useState } from 'react';

import { Button, Container, Step, StepLabel, Stepper } from '@material-ui/core';
import { MdFileUpload } from 'react-icons/md';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import FormHandler from '../../lib/forms';
import { switchToProvider } from '../../lib/redux/actions/prodActions';

const DoctorAdd = (props) => {
  const { auth, switchToProvider } = props;

  const history = useHistory();

  useEffect(() => {
    if (auth.userInfo) {
      if (auth.userInfo.isProvider) {
        history.push('/dashboard');
      }
    }
  }, [auth.userInfo]);

  const { userInfo } = auth;
  const [step, setStep] = useState(0);
  const [data, setData] = useState(null);
  const [error, setError] = useState(true);
  const [file, setFile] = useState('');

  const handleData = (data) => {
    if (step === 2) {
      delete data.firstName;
      delete data.lastName;
      delete data.email;
      delete data.mobileNumber;
      setData(data);
    }
    if (step < 3) setStep(step + 1);
  };

  const handleFile = (e) => {
    if (!e.target.value) {
      setError(true);
      return;
    }
    setError(false);
    setFile(e.target.files[0]);
  };

  const handleSubmit = () => {
    if (error) {
      return;
    }
    const formData = new FormData();
    formData.append('collection', 'providers');
    formData.append('urlfield', 'idProof');
    formData.append('file', file);
    switchToProvider(userInfo._id, 'doctor', data, formData);
  };

  const steps = [
    { schema: 'DOCTOR_REGISTRATION_DETAILS', label: 'Registration Details' },
    { schema: 'DOCTOR_OTHER_DETAILS', label: 'Other Details' },
    { schema: 'DOCTOR_EDU_DETAILS', label: 'Qualification Details' },
    { label: 'Upload ID Proof' },
  ];

  return (
    <Container maxWidth="md" className="doctor-add">
      <div className="header">
        <img src="/images/doctor.png" alt="Doctor" className="header-image" />
        <h1 className="heading">Doctor Registration</h1>
      </div>
      <Stepper activeStep={step} alternativeLabel>
        {steps.map((s, i) => (
          <Step key={i}>
            <StepLabel>{s.label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {step < 3 && (
        <FormHandler
          form={steps[step].schema}
          onSubmit={handleData}
          submitButtonLabel="Next"
        />
      )}
      {step === 3 && (
        <div className="id-proof">
          <p className="text">Upload Identity Proof*</p>
          <label htmlFor="proof" className="file-upload-container">
            <input
              type="file"
              name="file"
              id="proof"
              className="file-input"
              onChange={handleFile}
              onClick={(e) => (e.target.value = '')}
            />
            <div className="disp-content">
              <MdFileUpload className="d-icon" />
              <p className="d-text">Choose file</p>
            </div>
            {error && <p className="d-error">This is a required field.</p>}
          </label>
          <div className="submit-doctor">
            <Button onClick={handleSubmit} color="primary" variant="contained">
              Create
            </Button>
          </div>
        </div>
      )}
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    switchToProvider: (id, type, data, formData) => {
      dispatch(switchToProvider(id, type, data, formData));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorAdd);

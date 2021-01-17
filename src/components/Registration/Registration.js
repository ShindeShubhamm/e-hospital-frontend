import React from 'react';

import { Container } from '@material-ui/core';
import { connect } from 'react-redux';

import FormHandler from '../../lib/forms';

const Registration = (props) => {
  const { auth } = props;
  const { userInfo } = auth;

  const initialData = {
    firstName: userInfo?.firstName,
    lastName: userInfo?.lastName,
    email: userInfo?.email,
    mobileNumber: userInfo?.mobileNumber,
  };

  const handleData = (data) => {
    // eslint-disable-next-line
    console.log(data);
  };

  return (
    <Container maxWidth="md">
      <h1 className="">Doctor Registration</h1>
      <FormHandler
        form="DOCTOR_BASIC_INFO"
        onSubmit={handleData}
        submitButtonLabel="Next"
        populateData={initialData}
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

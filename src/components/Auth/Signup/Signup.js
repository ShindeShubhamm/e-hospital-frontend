import React from 'react';

import { connect } from 'react-redux';

import FormHandler from '../../../lib/forms';
import { authSignup } from '../../../lib/redux/actions/authActions';
import AuthLayout from '../AuthLayout';

const Signup = (props) => {
  const { onSignup, auth } = props;

  const handleSignup = (data) => {
    onSignup(data);
  };

  return (
    <AuthLayout type="signup">
      <FormHandler
        form="SIGNUP"
        onSubmit={handleSignup}
        submitButtonLabel="Signup"
      />
    </AuthLayout>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSignup: (data) => dispatch(authSignup(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);

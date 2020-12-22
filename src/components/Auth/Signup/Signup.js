import React from 'react';

import FormHandler from '../../../lib/forms';
import AuthLayout from '../AuthLayout';

const Signup = (props) => {
  const handleSignup = (data) => {
    // console.log(data)
  };

  return (
    <AuthLayout type="signup">
      <FormHandler form="SIGNUP" onSubmit={handleSignup} submitButtonLabel="Signup" />
    </AuthLayout>
  );
};

export default Signup;

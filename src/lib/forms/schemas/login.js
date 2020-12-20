export const login = () => {
  return {
    fields: [
      {
        component: 'textfield',
        name: 'email',
        label: 'Email*',
        placeholder: 'johndoe@example.com',
        validate: [
          {
            type: 'required',
          },
          {
            type: 'email',
          },
        ],
        grid: {
          xs: 12,
          sm: 6,
          md: 6,
          lg: 6,
          xl: 6,
        },
      },
      {
        component: 'textfield',
        name: 'password',
        label: 'Password*',
        placeholder: '********',
        type: 'password',
        validate: [
          {
            type: 'required',
          },
          {
            type: 'min-chars',
            length: 6,
          },
        ],
        grid: {
          xs: 12,
          sm: 6,
          md: 6,
          lg: 6,
          xl: 6,
        },
      },
      {
        component: 'select',
        name: 'age',
        label: 'Age*',
        options: [
          { value: '<16', label: 'Under 16' },
          { value: '17', label: '17' },
          { value: '18', label: '18' },
          { value: '19', label: '19' },
          { value: '20', label: '20' },
          { value: '>20', label: 'Over 20' },
        ],
        validate: [
          {
            type: 'required',
          },
        ],
      },
      {
        component: 'textarea',
        name: 'description',
        label: 'About',
        placeholder: 'Enter you bio',
      },
      {
        component: 'checkbox',
        name: 'tnc',
        label: 'I agree to terms and conditions.',
        validate: [
          {
            type: 'required',
            message: 'You must agree to terms and conditions.',
          },
        ],
      },
      {
        component: 'switch',
        name: 'darkTheme',
        label: 'Use dark theme',
      },
      {
        component: 'radio',
        name: 'gender',
        label: 'Gender*',
        options: [
          { label: 'Male', value: 'male' },
          { label: 'Female', value: 'female' },
        ],
        validate: [
          {
            type: 'required',
          },
        ],
      },
    ],
  };
};

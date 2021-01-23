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
      },
    ],
  };
};

export const signup = () => {
  return {
    fields: [
      {
        component: 'textfield',
        name: 'firstName',
        label: 'First Name*',
        placeholder: 'John',
        validate: [
          {
            type: 'required',
          },
        ],
        grid: {
          xs: 12,
          sm: 6,
          md: 6,
          ls: 6,
          xl: 6,
        },
      },
      {
        component: 'textfield',
        name: 'lastName',
        label: 'Last Name*',
        placeholder: 'Doe',
        validate: [
          {
            type: 'required',
          },
        ],
        grid: {
          xs: 12,
          sm: 6,
          md: 6,
          ls: 6,
          xl: 6,
        },
      },
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
      },
      {
        component: 'textfield',
        name: 'mobileNumber',
        label: 'Mobile Number*',
        placeholder: '+91 8888888888',
        validate: [
          {
            type: 'required',
          },
        ],
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
      },
    ],
  };
};

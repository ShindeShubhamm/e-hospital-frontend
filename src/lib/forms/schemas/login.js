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

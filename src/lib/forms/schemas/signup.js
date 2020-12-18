export const signup = () => {
  return {
    fields: [
      {
        component: 'textfield',
        name: 'firstName',
        label: 'First Name*',
        placeholder: 'John',
        grid: {
          xs: 12,
          sm: 12,
          md: 6,
          lg: 6,
          xl: 6,
        },
      },
      {
        component: 'textfield',
        name: 'lastName',
        label: 'Last Name*',
        placeholder: 'Doe',
        grid: {
          xs: 12,
          sm: 12,
          md: 6,
          lg: 6,
          xl: 6,
        },
      },
    ],
  };
};

export const doctorBasicInfo = () => {
  return {
    fields: [
      {
        component: 'textfield',
        name: 'firstName',
        label: 'First Name*',
        readOnly: true,
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
        readOnly: true,
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
        readOnly: true,
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
          ls: 6,
          xl: 6,
        },
      },
      {
        component: 'textfield',
        name: 'mobileNumber',
        label: 'Mobile Number*',
        readOnly: true,
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
    ],
  };
};

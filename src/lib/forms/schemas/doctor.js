export const basicInfo = () => {
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

export const registrationDetails = () => {
  return {
    fields: [
      {
        component: 'textfield',
        name: 'registrationNumber',
        label: 'Registration Number*',
        validate: [
          {
            type: 'required',
          },
        ],
      },
      {
        component: 'select',
        name: 'registrationCouncil',
        label: 'Registration Council*',
        options: [
          {
            value: 'Maharashtra Medical Council',
            label: 'Maharashtra Medical Council',
          },
        ],
        validate: [
          {
            type: 'required',
          },
        ],
      },
      {
        component: 'select',
        name: 'registrationYear',
        label: 'Registration Year*',
        options: [
          { value: '1947', label: '1947' },
          { value: '1948', label: '1948' },
          { value: '1949', label: '1949' },
          { value: '1950', label: '1950' },
          { value: '1951', label: '1951' },
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

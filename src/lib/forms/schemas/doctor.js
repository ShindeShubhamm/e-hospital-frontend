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
          {
            value: 'Andhra Pradesh Medical Council',
            label: 'Andhra Pradesh Medical Council',
          },
          {
            value: 'Arunachal Pradesh Medical Council',
            label: 'Arunachal Pradesh Medical Council',
          },
          {
            value: 'Bhopal Medical Council',
            label: 'Bhopal Medical Council',
          },
          {
            value: 'Bihar Medical Council',
            label: 'Bihar Medical Council',
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
        options: [...new Array(new Date().getFullYear() - 1947)].map(
          (_, i) => ({
            label: `${i + 1947}`,
            value: `${i + 1947}`,
          }),
        ),
        validate: [
          {
            type: 'required',
          },
        ],
      },
    ],
  };
};

export const otherDetails = () => {
  return {
    fields: [
      {
        component: 'select',
        name: 'specialization',
        label: 'Specialization*',
        options: [
          { label: 'Aerospace Medicine', value: 'Aerospace Medicine' },
          { label: 'Anaesthesia', value: 'Anaesthesia' },
          {
            label: 'Allergists/Immunologists',
            value: 'Allergists/Immunologists',
          },
          { label: 'Cardiologists', value: 'Cardiologists' },
          {
            label: 'Colon and Rectal Surgeons',
            value: 'Colon and Rectal Surgeons',
          },
          {
            label: 'Critical Care Medicine Specialists',
            value: 'Critical Care Medicine Specialists',
          },
          { label: 'Dermatologists', value: 'Dermatologists' },
          { label: 'Endocrinologists', value: 'Endocrinologists' },
          { label: 'Family Physicians', value: 'Family Physicians' },
        ],
        validate: [
          {
            type: 'required',
          },
        ],
      },
      {
        component: 'textfield',
        name: 'location',
        label: 'Location*',
        validate: [
          {
            type: 'required',
          },
        ],
      },
      {
        component: 'radio',
        name: 'gender',
        label: 'Gender*',
        options: [
          { label: 'Male', value: 'male' },
          { label: 'Female', value: 'female' },
          { label: 'Other', value: 'other' },
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

export const qualificationDetails = () => {
  return {
    fields: [
      {
        component: 'textfield',
        name: 'degree',
        label: 'Degree*',
        validate: [
          {
            type: 'required',
          },
        ],
      },
      {
        component: 'textfield',
        name: 'college',
        label: 'College*',
        validate: [
          {
            type: 'required',
          },
        ],
      },
      {
        component: 'select',
        name: 'yearOfCompletion',
        label: 'Year of Completion*',
        options: [...new Array(new Date().getFullYear() - 1947)].map(
          (_, i) => ({
            label: `${i + 1947}`,
            value: `${i + 1947}`,
          }),
        ),
        validate: [
          {
            type: 'required',
          },
        ],
      },
      {
        component: 'textfield',
        name: 'yearsOfExperience',
        label: 'Years of Experience*',
        validate: [
          {
            type: 'required',
          },
        ],
      },
    ],
  };
};

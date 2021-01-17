import {
  FaAmbulance,
  FaBookMedical,
  FaCalendarCheck,
  FaFilePrescription,
  FaPrescription,
  FaRegSmile,
  FaStethoscope,
  FaUserCheck,
} from 'react-icons/fa';

export const servicesData = [
  {
    icon: <FaStethoscope size={22} className="ic-icon" />,
    title: 'Qualified Doctors',
    description: 'Only 100% verified and qualified doctors listed.',
  },
  {
    icon: <FaAmbulance size={24} className="ic-icon" />,
    title: '24x7 Service',
    description: 'We ensure 24 hrs a day, 7 days a week service. No downtime.',
  },
  {
    icon: <FaCalendarCheck size={20} className="ic-icon" />,
    title: 'Confirmed Appointments',
    description: 'Book confirmed appointments within seconds.',
  },
  {
    icon: <FaFilePrescription size={18} className="ic-icon" />,
    title: 'Authentic Prescription',
    description: 'Now get 100% authentic prescriptions with Rx.Online',
  },
];

export const feedbackData = [
  {
    text:
      'One of the best services at our fingertips. This will change the healthcare system in India.',
    name: 'Dr. Harshwardhan',
  },
  {
    text:
      'This system is helping lot of patients all over the country. Rx.Online is definitely an revolution in India.',
    name: 'Ajay Mestry',
  },
  {
    text:
      'No more medicines without prescriptions. No more side effects. Rx.Online is doing a great job.',
    name: 'Rakesh Singh',
  },
  {
    text:
      'Best service in healthcare industry till date. Very fast and reliable. Will definitely advance the healthcare in India.',
    name: 'Abhishek Shrivastav',
  },
];

export const statsData = [
  {
    number: '200',
    text: 'Happy Patients',
    icon: <FaRegSmile size={35} className="stat-icon" />,
  },
  {
    number: '30',
    text: 'Experienced Doctors',
    icon: <FaUserCheck size={35} className="stat-icon" />,
  },
  {
    number: '536',
    text: 'Digital Prescriptions',
    icon: <FaPrescription size={35} className="stat-icon" />,
  },
  {
    number: '600+',
    text: 'Appointments Booked',
    icon: <FaBookMedical size={35} className="stat-icon" />,
  },
];

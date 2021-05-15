import React, { Fragment } from 'react';

import {
  RiCalendarEventFill,
  RiCalendarEventLine,
  RiDashboardFill,
  RiDashboardLine,
  RiFoldersFill,
  RiFoldersLine,
} from 'react-icons/ri';
import { connect } from 'react-redux';

import BookAppointment from './BookAppointment';
import Pharma from './Pharma';
import Profile from './Profile';
import Records from './Records';
import Schedule from './Schedule';

export const dashboardMenu = [
  { text: 'Profile', icon: RiDashboardLine, iconSelected: RiDashboardFill },
  { text: 'Records', icon: RiFoldersLine, iconSelected: RiFoldersFill },
  {
    text: 'Book Appointment',
    icon: RiCalendarEventLine,
    iconSelected: RiCalendarEventFill,
  },
];

export const doctorMenu = [
  { text: 'Profile', icon: RiDashboardLine, iconSelected: RiDashboardFill },
  {
    text: 'Appointments Today',
    icon: RiCalendarEventLine,
    iconSelected: RiCalendarEventFill,
  },
];

export const pharmaMenu = [
  { text: 'Profile', icon: RiDashboardLine, iconSelected: RiDashboardFill },
  {
    text: 'Prescriptions Today',
    icon: RiCalendarEventLine,
    iconSelected: RiCalendarEventFill,
  },
];

const Dashboard = (props) => {
  const { dashboard, auth } = props;

  const getComponent = (id, isProvider) => {
    switch (id) {
      case 0:
        return <Profile />;
      case 1:
        return !isProvider ? (
          <Records />
        ) : isProvider === 'doctor' ? (
          <Schedule />
        ) : (
          <Pharma />
        );
      case 2:
        return <BookAppointment />;
      default:
        return '';
    }
  };

  return (
    <div className="dashboard">
      {getComponent(dashboard.selectedMenu, auth?.userInfo?.isProvider)}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    dashboard: state.dashboard,
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(Dashboard);

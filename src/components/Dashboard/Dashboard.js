import React, { Fragment } from 'react';

import {
  RiCalendarEventFill,
  RiCalendarEventLine,
  RiDashboardFill,
  RiDashboardLine,
  RiFoldersFill,
  RiFoldersLine,
  RiTimer2Fill,
  RiTimer2Line,
} from 'react-icons/ri';
import { connect } from 'react-redux';

import BookAppointment from './BookAppointment';
import PastAppointment from './PastAppointment';
import Profile from './Profile';
import Records from './Records';

export const dashboardMenu = [
  { text: 'Profile', icon: RiDashboardLine, iconSelected: RiDashboardFill },
  { text: 'Records', icon: RiFoldersLine, iconSelected: RiFoldersFill },
  {
    text: 'Book Appointment',
    icon: RiCalendarEventLine,
    iconSelected: RiCalendarEventFill,
  },
  { text: 'Past Appointments', icon: RiTimer2Line, iconSelected: RiTimer2Fill },
];

export const doctorMenu = [
  { text: 'Profile', icon: RiDashboardLine, iconSelected: RiDashboardFill },
  {
    text: 'Appointments Today',
    icon: RiCalendarEventLine,
    iconSelected: RiCalendarEventFill,
  },
];

const Dashboard = (props) => {
  const { dashboard } = props;

  const getComponent = (id) => {
    switch (id) {
      case 0:
        return <Profile />;
      case 1:
        return <Records />;
      case 2:
        return <BookAppointment />;
      case 3:
        return <PastAppointment />;
      default:
        return '';
    }
  };

  return (
    <div className="dashboard">{getComponent(dashboard.selectedMenu)}</div>
  );
};

const mapStateToProps = (state) => {
  return {
    dashboard: state.dashboard,
  };
};

export default connect(mapStateToProps)(Dashboard);

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

export const dashboardMenu = [
  { text: 'Profile', icon: RiDashboardLine, iconSelected: RiDashboardFill },
  { text: 'Record', icon: RiFoldersLine, iconSelected: RiFoldersFill },
  {
    text: 'Book Appointment',
    icon: RiCalendarEventLine,
    iconSelected: RiCalendarEventFill,
  },
  { text: 'History', icon: RiTimer2Line, iconSelected: RiTimer2Fill },
];

const Dashboard = (props) => {
  const { dashboard } = props;

  return (
    <Fragment>
      <h1>Dashboard {dashboard.selectedMenu}</h1>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    dashboard: state.dashboard,
  };
};

export default connect(mapStateToProps)(Dashboard);

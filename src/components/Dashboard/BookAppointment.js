import React, { Fragment, useEffect } from 'react';

import { connect } from 'react-redux';

import {
  bookAppointment,
  cancelAppointment,
  fetchUserAppointments,
} from '../../lib/redux/actions/appointActions';
import Loader from '../common/Loader';

const BookAppointment = (props) => {
  const { appoint, auth, book, cancel, fetchMyAppoints } = props;

  const { userInfo } = auth;

  useEffect(() => {
    if (appoint.myAppointments.length === 0) {
      fetchMyAppoints(userInfo._id);
    }
  }, []);

  return (
    <div className="bookapt">
      <h1 className="heading">Book Appointments</h1>
      {appoint.loading ? (
        <Loader text="Fetching your appointments" />
      ) : (
        <div className="apts-wrapper">
          {appoint.myAppointments.length === 0 ? (
            <p>No appointents previously booked.</p>
          ) : (
            <Fragment>
              {appoint.myAppointments.map((appt) => (
                <p>My apt</p>
              ))}
            </Fragment>
          )}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    appoint: state.appoint,
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    book: (data) => dispatch(bookAppointment(data)),
    cancel: (id, appoints) => dispatch(cancelAppointment(id, appoints)),
    fetchMyAppoints: (userId) => dispatch(fetchUserAppointments(userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookAppointment);

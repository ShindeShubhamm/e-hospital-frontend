import React, { useEffect, useState } from 'react';

import { Button } from '@material-ui/core';
import moment from 'moment';
import { FiExternalLink } from 'react-icons/fi';
import { connect } from 'react-redux';

import {
  cancelAppointment,
  fetchDoctorAppointments,
} from '../../lib/redux/actions/appointActions';
import { isValidImage, isValidRecord } from '../../utils/validateFile';

const api = process.env.REACT_APP_API_ENDPOINT;

const Schedule = (props) => {
  const { fetchMyAppoints, cancel, auth, prod, appoint } = props;
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetchMyAppoints(prod.data._id);
  }, []);

  const { myAppointments } = appoint;

  const handleCancel = (a, b, c) => {
    // eslint-disable-next-line
    const confirmation = confirm('You are about to change status. Continue?');
    if (confirmation) {
      cancel(a, b, c);
    }
  };

  const getLink = (arr) => {
    arr.shift();
    return arr.join('-');
  };

  return (
    <div>
      <h1 className="heading">Schedule</h1>
      <div className="my-apts-wrapper">
        {myAppointments.length !== 0 ? (
          <div className="appt-list">
            {myAppointments.map((appt) => (
              <div className="appt-card" key={appt._id}>
                <p className="info-name">
                  <span>Patient: </span>{' '}
                  {`${appt.userData[0]?.firstName} ${appt.userData[0]?.lastName}`}
                </p>
                <p className="info-name">
                  <span>When:</span> {moment(appt.date).calendar()}
                </p>
                <p className="info-name">
                  <span>Mode:</span>{' '}
                  {appt.mode.includes('online') ? 'Online / Meet' : 'Home Care'}
                </p>
                {appt.mode.includes('online') && (
                  <p className="info-name">
                    <span>Link:</span>{' '}
                    <a href={appt.mode.split('-')[1]}>
                      {getLink(appt.mode.split('-'))}
                    </a>
                  </p>
                )}
                <p className="info-name">
                  <span>Status: </span> {appt.status}
                </p>
                <div className="buttons-wrapper">
                  <Button
                    color="secondary"
                    variant="contained"
                    size="small"
                    style={{ marginTop: '10px' }}
                    onClick={() => {
                      handleCancel(
                        appt._id,
                        appoint.myAppointments,
                        'cancelled by doctor',
                      );
                    }}
                    disabled={
                      moment().utc().isAfter(moment.utc(appt.date)) ||
                      appt.status === 'cancelled' ||
                      appt.status === 'cancelled by doctor' ||
                      appt.status === 'done'
                    }
                  >
                    Cancel
                  </Button>
                  <Button
                    color="primary"
                    variant="contained"
                    size="small"
                    style={{ marginTop: '10px', marginLeft: '10px' }}
                    onClick={() => {
                      handleCancel(appt._id, appoint.myAppointments, 'done');
                    }}
                    disabled={
                      moment().utc().isAfter(moment.utc(appt.date)) ||
                      appt.status === 'cancelled' ||
                      appt.status === 'cancelled by doctor' ||
                      appt.status === 'done'
                    }
                  >
                    Done
                  </Button>
                  <Button
                    color="primary"
                    variant="contained"
                    size="small"
                    style={{
                      marginTop: '10px',
                      marginLeft: '10px',
                      backgroundColor: '#aaa',
                    }}
                    onClick={() => {
                      setRecords(appt?.userData[0]?.records);
                    }}
                    disabled={
                      moment().utc().isAfter(moment.utc(appt.date)) ||
                      appt.status === 'cancelled' ||
                      appt.status === 'cancelled by doctor' ||
                      appt.status === 'done'
                    }
                  >
                    Records
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No appointments booked.</p>
        )}
      </div>
      <div className="records-doctor">
        {records.map((r) => (
          <div className="record" key={r.file}>
            {isValidImage(r.file) ? (
              <img src={`${api}/file/${r.file}`} alt="" className="r-thumb" />
            ) : (
              <iframe
                src={`${api}/file/${r.file}`}
                title={r.name}
                className="r-thumb"
              />
            )}
            <p className="r-name">{r.name}</p>
            <a
              href={`${api}/file/${r.file}`}
              target="_blank"
              rel="noreferrer"
              className="r-link"
            >
              View File
              <FiExternalLink />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    appoint: state.appoint,
    auth: state.auth,
    prod: state.prod,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    cancel: (id, appoints, byDoctor) => {
      dispatch(cancelAppointment(id, appoints, byDoctor));
    },
    fetchMyAppoints: (userId) => dispatch(fetchDoctorAppointments(userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);

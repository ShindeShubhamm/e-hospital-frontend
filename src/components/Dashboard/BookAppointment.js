import React, { Fragment, useEffect, useState } from 'react';

import {
  Button,
  Container,
  FormGroup,
  MenuItem,
  Select,
  Step,
  StepLabel,
  Stepper,
  TextField,
} from '@material-ui/core';
import moment from 'moment';
import { FaGraduationCap, FaStethoscope } from 'react-icons/fa';
import { RiTimerFill } from 'react-icons/ri';
import { connect } from 'react-redux';

import {
  bookAppointment,
  cancelAppointment,
  fetchUserAppointments,
} from '../../lib/redux/actions/appointActions';
import { loadAllDoctors } from '../../lib/redux/actions/prodActions';
import Loader from '../common/Loader';

const api = process.env.REACT_APP_API_ENDPOINT;

const BookAppointment = (props) => {
  const {
    appoint,
    auth,
    book,
    cancel,
    fetchMyAppoints,
    prod,
    loadDoctors,
  } = props;
  const [step, setStep] = useState(0);
  const [aptData, setAptData] = useState({});
  const [showLink, setShowLink] = useState(false);
  const [link, setLink] = useState('');
  const [linkError, setLinkError] = useState(false);
  const [date, setDate] = useState('2021-06-12');

  const { userInfo } = auth;
  const { allDoctors, loadingDoctors } = prod;
  const steps = [
    {
      label: 'Choose Doctor',
    },
    {
      label: 'Choose Mode',
    },
    {
      label: 'Select Date',
    },
  ];

  useEffect(() => {
    if (appoint.myAppointments.length === 0) {
      fetchMyAppoints(userInfo._id);
    }
    loadDoctors();
  }, []);

  const handleApt = (name, value) => {
    if (step === 1) {
      if (showLink && !link.trim()) {
        setLinkError(true);
        return;
      }
    }
    if (step < 2) {
      setAptData({
        ...aptData,
        [name]: value,
      });
      setStep(step + 1);
      return;
    }
    book({
      ...aptData,
      date: value,
      status: 'active',
      userId: auth?.userInfo?._id,
    });
  };

  const handleMode = (e) => {
    if (e.target.value === 'online') {
      setShowLink(true);
      return;
    }
    setShowLink(false);
  };

  const handleCancel = (a, b) => {
    // eslint-disable-next-line
    const confirmation = confirm(
      'You are about to cancel appointment. Continue?',
    );
    if (confirmation) {
      cancel(a, b);
    }
  };

  return (
    <div className="bookapt">
      <h1 className="heading">Appointments</h1>
      {appoint.loading ? (
        <Loader text="Fetching your appointments" />
      ) : (
        <div className="apts-wrapper">
          {appoint.myAppointments.length === 0 ? (
            <p>No appointents previously booked.</p>
          ) : (
            <Container>
              <div className="appt-list">
                {appoint.myAppointments.map((appt) => {
                  return (
                    <div key={appt._id} className="appt-card">
                      <p className="info-name">
                        <span>For:</span> {moment(appt.date).calendar()}
                      </p>
                      <p className="info-name">
                        <span>Status:</span>{' '}
                        {moment().utc().isAfter(moment.utc(appt.date)) &&
                        appt.status === 'active'
                          ? 'inactive'
                          : appt.status}
                      </p>
                      <p className="info-name">
                        <span>Type:</span>{' '}
                        {appt.doctorData
                          ? appt.doctorData[0]?.data?.specialization
                          : ''}
                      </p>
                      <Button
                        color="primary"
                        variant="contained"
                        size="small"
                        style={{ marginTop: '10px' }}
                        onClick={() => {
                          handleCancel(appt._id, appoint.myAppointments);
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
                    </div>
                  );
                })}
              </div>
            </Container>
          )}
          <div className="book-apt">
            <p className="heading">Book New</p>
            <Stepper activeStep={step} alternativeLabel>
              {steps.map((s, i) => (
                <Step key={i}>
                  <StepLabel>{s.label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            {step === 0 && (
              <Fragment>
                {loadingDoctors && <Loader text="Loading doctors list..." />}
                {!loadingDoctors &&
                  (allDoctors.length !== 0 ? (
                    <Container className="doctors-wrapper">
                      {allDoctors.map((doctor, i) => (
                        <div className="doctor-card" key={i}>
                          <div className="left">
                            <img
                              src={`${api}/file/${
                                doctor.userData[0].profilePhoto ||
                                'cc86e064a1c27d3cd8b5d42c24285266.webp'
                              }`}
                              alt=""
                              className="photo"
                            />
                          </div>
                          <div className="right">
                            <h2 className="fullname">
                              {doctor.userData[0].firstName}{' '}
                              {doctor.userData[0].lastName}
                            </h2>
                            <div className="info">
                              <FaGraduationCap className="icon" />
                              <p className="text">{doctor.data.degree}</p>
                            </div>
                            <div className="info">
                              <FaStethoscope className="icon" />
                              <p className="text">
                                {doctor.data.specialization}
                              </p>
                            </div>
                            <div className="info">
                              <RiTimerFill className="icon" />
                              <p className="text">
                                {doctor.data.yearsOfExperience} years
                              </p>
                            </div>
                            <Button
                              color="primary"
                              variant="contained"
                              size="small"
                              style={{ marginTop: '10px' }}
                              onClick={() => {
                                handleApt('providerId', doctor._id);
                              }}
                            >
                              Select
                            </Button>
                          </div>
                        </div>
                      ))}
                    </Container>
                  ) : (
                    <p>No doctors registered on website!</p>
                  ))}
              </Fragment>
            )}
            {step === 1 && (
              <Container>
                <FormGroup>
                  <label htmlFor="mode">Select Mode</label>
                  <Select
                    id="mode"
                    variant="outlined"
                    onChange={(e) => handleMode(e)}
                    size="small"
                    placeholder="Mode"
                  >
                    <MenuItem value="online">Online</MenuItem>
                    <MenuItem value="offline">Offline</MenuItem>
                  </Select>
                  {showLink && (
                    <TextField
                      onChange={(e) => setLink(e.target.value)}
                      variant="outlined"
                      value={link}
                      placeholder="Please provide link"
                      required
                      style={{ marginTop: '10px' }}
                      label="Link"
                      error={linkError}
                    />
                  )}
                </FormGroup>
                <Button
                  color="primary"
                  variant="contained"
                  size="small"
                  style={{ marginTop: '10px' }}
                  onClick={() => {
                    handleApt('mode', showLink ? `online-${link}` : 'offline');
                  }}
                >
                  Next
                </Button>
              </Container>
            )}
            {step === 2 && (
              <div className="date-picker-wrapper">
                <div className="date-picker">
                  <TextField
                    id="date"
                    label="Next appointment"
                    type="date"
                    value={date}
                    required
                    onChange={(e) => setDate(e.target.value)}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </div>
                <Button
                  color="primary"
                  variant="contained"
                  size="small"
                  style={{ marginTop: '10px' }}
                  onClick={() => {
                    handleApt('date', date);
                  }}
                >
                  Book
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
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
    book: (data) => dispatch(bookAppointment(data)),
    cancel: (id, appoints) => dispatch(cancelAppointment(id, appoints)),
    fetchMyAppoints: (userId) => dispatch(fetchUserAppointments(userId)),
    loadDoctors: () => dispatch(loadAllDoctors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookAppointment);

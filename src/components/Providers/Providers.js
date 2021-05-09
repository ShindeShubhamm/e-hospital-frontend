import React, { useEffect, useState } from 'react';

import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@material-ui/core';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Providers = (props) => {
  const { auth } = props;
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState('');

  const history = useHistory();

  useEffect(() => {
    if (auth.userInfo) {
      if (auth.userInfo.isProvider) {
        history.push('/dashboard');
      }
    }
  }, [auth.userInfo]);

  const redirectToProvider = () => {
    history.replace(page);
  };

  const handleClick = (link) => {
    setOpen(true);
    setPage(link);
  };

  const handleCancel = () => {
    setPage('');
    setOpen(false);
  };

  return (
    <div className="providers-wrapper">
      <Container>
        <h1 className="heading">Providers</h1>
        <div className="section">
          <img
            src="/images/doctor.png"
            alt="Doctor"
            className="provider-image"
          />
          <div className="pro-content">
            <p>
              Register as doctor to be able to access advance tool on the
              Rx.Online portal.
            </p>
            <button
              onClick={() => handleClick('/doctor/add')}
              type="button"
              className="link"
            >
              Register as Doctor
            </button>
          </div>
        </div>
        <div className="section">
          <img
            src="/images/hospital.png"
            alt="Hospital"
            className="provider-image"
          />
          <div className="pro-content">
            <p>
              Register as doctor to be able to access advance tool on the
              Rx.Online portal.
            </p>
            <button
              onClick={() => handleClick('/hospital/add')}
              type="button"
              className="link"
            >
              Register as Hospital
            </button>
          </div>
        </div>
        <div className="section">
          <img
            src="/images/pharma.png"
            alt="Pharmacy"
            className="provider-image"
          />
          <div className="pro-content">
            <p>
              Register as doctor to be able to access advance tool on the
              Rx.Online portal.
            </p>
            <button
              onClick={() => handleClick('/pharmacy/add')}
              type="button"
              className="link"
            >
              Register as Pharmacy
            </button>
          </div>
        </div>
      </Container>
      <Dialog open={open} onClose={handleCancel}>
        <DialogTitle>Check</DialogTitle>
        <DialogContent>
          Are you sure you want to switch your account to provider account? This
          action can't be undone.
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button color="primary" onClick={redirectToProvider}>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Providers);

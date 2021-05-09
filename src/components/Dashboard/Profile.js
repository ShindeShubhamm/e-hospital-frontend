import React, { useMemo } from 'react';

import { MdFileUpload } from 'react-icons/md';
import { RiCloseFill } from 'react-icons/ri';
import { connect } from 'react-redux';

import {
  deleteProfilePic,
  uploadProfilePic,
} from '../../lib/redux/actions/authActions';
import Loader from '../common/Loader';

const api = process.env.REACT_APP_API_ENDPOINT;

const Profile = (props) => {
  const { auth, uploadProfilePic, deleteProfilePic } = props;

  const {
    firstName,
    lastName,
    email,
    mobileNumber,
    profilePhoto,
  } = useMemo(() => {
    return auth.userInfo ? auth.userInfo : {};
  }, [auth.userInfo]);

  const handleProfilePhoto = (e) => {
    if (!e.target.value) {
      return;
    }
    const formData = new FormData();
    formData.append('collection', 'users');
    formData.append('id', auth.userInfo._id);
    formData.append('urlfield', 'profilePhoto');
    formData.append('file', e.target.files[0]);
    uploadProfilePic(formData);
  };

  const handleDeletePic = () => {
    deleteProfilePic(auth.userInfo.profilePhoto, auth.userInfo._id);
  };

  return (
    <div className="profile">
      <h1 className="heading">Your Profile</h1>
      {auth.loading ? (
        <Loader text="Fetching your data..." />
      ) : (
        <div className="udetails">
          <input
            type="file"
            onChange={handleProfilePhoto}
            onClick={(e) => (e.target.value = '')}
            style={{ display: 'none' }}
            id="photo"
            accept="image/png,image/jpg,image/jpeg"
          />
          <div className="pp-wrapper">
            <label htmlFor="photo" className="icon-button u-btn">
              <MdFileUpload />
            </label>
            {profilePhoto && (
              <button
                className="icon-button c-btn "
                type="button"
                onClick={handleDeletePic}
              >
                <RiCloseFill />
              </button>
            )}
            <img
              src={`${api}/file/${
                profilePhoto || 'e42544de9ff0743ec38fb5cafdee44b8.png'
              }`}
              alt=""
              className="pp"
            />
          </div>
          <div className="inline">
            <div className="datagroup">
              <p className="datatype">First Name</p>
              <p className="data">{firstName}</p>
            </div>
            <div className="datagroup">
              <p className="datatype">Last Name</p>
              <p className="data">{lastName}</p>
            </div>
          </div>
          <div className="datagroup">
            <p className="datatype">Email</p>
            <p className="data">{email}</p>
          </div>
          <div className="datagroup">
            <p className="datatype">Mobile Number</p>
            <p className="data">{mobileNumber}</p>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    uploadProfilePic: (data) => dispatch(uploadProfilePic(data)),
    deleteProfilePic: (filename, userId) => {
      dispatch(deleteProfilePic(filename, userId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

import React, { useMemo } from 'react';

import { FiExternalLink } from 'react-icons/fi';
import { MdFileUpload } from 'react-icons/md';
import { RiCloseFill } from 'react-icons/ri';
import { connect } from 'react-redux';

import {
  deleteProfilePic,
  uploadProfilePic,
} from '../../lib/redux/actions/authActions';
import { snackSet } from '../../lib/redux/actions/snackbarActions';
import { isValidImage } from '../../utils/validateFile';
import Loader from '../common/Loader';

const api = process.env.REACT_APP_API_ENDPOINT;

const Profile = (props) => {
  const {
    auth,
    uploadProfilePic,
    deleteProfilePic,
    prod: { data },
    snackSet,
  } = props;

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
    if (!isValidImage(e.target.value)) {
      snackSet({ message: 'Only image files allowed', severity: 'warning' });
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
                profilePhoto || 'cc86e064a1c27d3cd8b5d42c24285266.webp'
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
          {auth?.userInfo?.isProvider && data && (
            <div className="pdetails">
              <h1 className="prod-title">Provider Details</h1>
              <div className="datagroup">
                <p className="datatype">Provider Type</p>
                <p className="data">{data.type?.toUpperCase()}</p>
              </div>
              <h3 className="il-title">Registration Details</h3>
              <div className="inline">
                <div className="datagroup">
                  <p className="datatype">Registration Council</p>
                  <p className="data">{data?.data?.registrationCouncil}</p>
                </div>
                <div className="datagroup">
                  <p className="datatype">Registration Number</p>
                  <p className="data">{data?.data?.registrationNumber}</p>
                </div>
                <div className="datagroup">
                  <p className="datatype">Registration Year</p>
                  <p className="data">{data?.data?.registrationYear}</p>
                </div>
              </div>
              <h3 className="il-title">Qualification Details</h3>
              <div className="inline">
                <div className="datagroup">
                  <p className="datatype">College Name</p>
                  <p className="data">{data?.data?.college}</p>
                </div>
                <div className="datagroup">
                  <p className="datatype">Degree</p>
                  <p className="data">{data?.data?.degree}</p>
                </div>
                <div className="datagroup">
                  <p className="datatype">Year of Completion</p>
                  <p className="data">{data?.data?.yearOfCompletion}</p>
                </div>
              </div>
              <h3 className="il-title">Other Details</h3>
              <div className="inline">
                <div className="datagroup">
                  <p className="datatype">Specialization</p>
                  <p className="data">{data?.data?.specialization}</p>
                </div>
                <div className="datagroup">
                  <p className="datatype">Uploaded ID Proof</p>
                  <a
                    href={`${api}/file/${data.idProof}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="data"
                  >
                    View
                    <FiExternalLink
                      style={{ marginLeft: '10px', paddingTop: '2px' }}
                    />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    prod: state.prod,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    uploadProfilePic: (data) => dispatch(uploadProfilePic(data)),
    deleteProfilePic: (filename, userId) => {
      dispatch(deleteProfilePic(filename, userId));
    },
    snackSet: (data) => dispatch(snackSet(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

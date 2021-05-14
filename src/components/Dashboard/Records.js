import React, { useState } from 'react';

import { Button, TextField } from '@material-ui/core';
import { FiExternalLink } from 'react-icons/fi';
import { MdDelete, MdFileUpload } from 'react-icons/md';
import { connect } from 'react-redux';

import {
  deleteRecord,
  uploadRecord,
} from '../../lib/redux/actions/authActions';
import { snackSet } from '../../lib/redux/actions/snackbarActions';
import { isValidImage, isValidRecord } from '../../utils/validateFile';

const api = process.env.REACT_APP_API_ENDPOINT;

const Records = (props) => {
  const { snackSet, auth, uploadRecord, deleteRecord } = props;
  const [file, setFile] = useState(null);
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(false);

  const { userInfo } = auth;

  const handleFile = (e) => {
    if (!e.target.value) {
      return;
    }
    if (!isValidRecord(e.target.value)) {
      snackSet({
        message: 'Only image and pdf files allowed',
        severity: 'warning',
      });
      return;
    }
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!name.trim()) {
      setNameError(true);
      return;
    }
    const form = new FormData();
    form.append('file', file);
    const fileInfo = {
      form,
      name,
    };
    uploadRecord(fileInfo, userInfo);
    setNameError(false);
    setName('');
    setFile(null);
  };

  const handleDelete = (id) => {
    deleteRecord(id, userInfo);
  };

  return (
    <div className="records">
      <h1 className="heading">Records</h1>
      <label htmlFor="proof" className="file-upload-container">
        <input
          type="file"
          name="file"
          id="proof"
          className="file-input"
          onChange={handleFile}
          onClick={(e) => (e.target.value = '')}
        />
        <div className="disp-content">
          <MdFileUpload className="d-icon" />
          <p className="d-text">Choose file</p>
          {file && <p className="d-filename">{file.name}</p>}
        </div>
      </label>
      {file && (
        <TextField
          variant="outlined"
          color="primary"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter record name"
          size="small"
          error={nameError}
          helperText={nameError ? 'Record name is required' : ''}
          style={{ marginRight: '10px' }}
          label="Record Name"
        />
      )}
      {file && (
        <Button onClick={handleUpload} color="primary" variant="contained">
          Upload
        </Button>
      )}
      <div className="records-wrapper">
        {userInfo?.records && userInfo?.records.length !== 0 ? (
          <div className="records-content">
            {userInfo.records.map((r) => (
              <div className="record" key={r.file}>
                {isValidImage(r.file) ? (
                  <img
                    src={`${api}/file/${r.file}`}
                    alt=""
                    className="r-thumb"
                  />
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
                <button
                  className="icon-button r-delete"
                  type="button"
                  onClick={() => handleDelete(r.file)}
                >
                  <MdDelete className="delete-icon" />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p>Currently no records available!</p>
        )}
      </div>
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
    snackSet: (data) => dispatch(snackSet(data)),
    uploadRecord: (fileInfo, userInfo) => {
      dispatch(uploadRecord(fileInfo, userInfo));
    },
    deleteRecord: (id, userInfo) => {
      dispatch(deleteRecord(id, userInfo));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Records);

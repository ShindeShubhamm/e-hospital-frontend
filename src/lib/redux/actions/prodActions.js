import FileAPI from '../../../api/FileAPI';
import ProviderAPI from '../../../api/ProviderAPI';
import UserAPI from '../../../api/UserAPI';
import {
  ALERT_ERROR,
  ALERT_SET,
  BDROP_SET,
  BDROP_UNSET,
  CREATE_PROVIDER_ACC,
  LOAD_PROVIDER_DATA,
  UPDATE_USER,
} from './types';

export const switchToProvider = (userId, type, data, formData) => async (
  dispatch,
) => {
  dispatch({ type: BDROP_SET });
  try {
    const res = await ProviderAPI.createProvider({
      userId,
      type,
      data,
    });
    formData.append('id', res.data._id);
    const fileRes = await FileAPI.upload(formData);
    dispatch({ type: UPDATE_USER, payload: { isProvider: type } });
    dispatch({
      type: CREATE_PROVIDER_ACC,
      payload: { ...res.data, idProof: fileRes.data.filename },
    });
    dispatch({
      type: ALERT_SET,
      message: 'Successfully created provider account!',
      severity: 'success',
    });
    dispatch({ type: BDROP_UNSET });
  } catch (error) {
    dispatch({ type: BDROP_UNSET });
    dispatch({ type: ALERT_ERROR });
  }
};

export const loadProviderData = (userId) => async (dispatch) => {
  try {
    const res = await ProviderAPI.getProvider(userId);
    dispatch({
      type: LOAD_PROVIDER_DATA,
      payload: res.data,
    });
  } catch (error) {
    dispatch({ type: BDROP_UNSET });
  }
};

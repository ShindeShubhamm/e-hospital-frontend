import ProviderAPI from '../../../api/ProviderAPI';
import UserAPI from '../../../api/UserAPI';
import {
  ALERT_ERROR,
  ALERT_SET,
  BDROP_SET,
  BDROP_UNSET,
  CREATE_PROVIDER_ACC,
  UPDATE_USER,
} from './types';

export const switchToProvider = (userId, type, data) => async (dispatch) => {
  dispatch({ type: BDROP_SET });
  try {
    const res = await ProviderAPI.createProvider({
      userId,
      type,
      data,
    });
    await UserAPI.update(userId, { isProvider: true });
    dispatch({ type: UPDATE_USER, payload: { isProvider: true } });
    dispatch({ type: CREATE_PROVIDER_ACC, payload: res.data });
    dispatch({
      type: ALERT_SET,
      message: 'Successfully created provider account!',
      severity: 'success',
    });
  } catch (error) {
    dispatch({ type: BDROP_UNSET });
    dispatch({ type: ALERT_ERROR });
  }
};

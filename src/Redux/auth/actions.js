import * as TYPES from './types';

export const signUpAction = (data) => (dispatch) =>{
    dispatch({
        type: TYPES.SIGN_UP_SUCCESS,
        payload: data
    });
};

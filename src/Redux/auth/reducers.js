import * as TYPES from './types'

const initialState = {
    userDetails:{},
}

const signUpReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch(type){
        case TYPES.SIGN_UP_SUCCESS:
            return {
                ...state,
                userDetails: payload,
            };
        default: 
        return state;

    }
}

export default signUpReducer;
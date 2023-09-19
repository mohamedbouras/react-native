import { SET_USER_ID } from './action';

// Initial state
const initialState = {
  userId: null,
};

// Reducer function
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_ID:
      return {
        ...state,
        userId: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;

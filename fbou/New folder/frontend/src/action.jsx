// Action types
export const SET_USER_ID = 'SET_USER_ID';

// Action creators
export const setUserId = (userId) => ({
  type: SET_USER_ID,
  payload: userId,
});

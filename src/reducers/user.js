import { SET_PERSONAL_USER } from '../actions';
// Esse reducer será responsável por tratar as informações da pessoa usuária

const initialState = {
  email: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
  case SET_PERSONAL_USER:
    return { ...state, email: action.emailInfo };
  default:
    return state;
  }
};

export default userReducer;

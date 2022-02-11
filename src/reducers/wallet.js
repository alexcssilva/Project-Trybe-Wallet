import { SET_PERSONAL_WALLET } from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = initialState, action) => {
  switch (action.type) {
  case SET_PERSONAL_WALLET:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        { ...action.walletInfo },
      ] };
  default:
    return state;
  }
};

export default walletReducer;

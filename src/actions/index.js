// Coloque aqui suas actions
export const SET_PERSONAL_USER = 'SET_PERSONAL_USER';
export const SET_PERSONAL_WALLET = 'SET_PERSONAL_WALLET';

export const setPersonalUser = (emailInfo) => (
  {
    type: SET_PERSONAL_USER,
    emailInfo,
  });

export const setPersonalWallet = (walletInfo) => (
  {
    type: SET_PERSONAL_WALLET,
    walletInfo,
  });

export const initStateRegister = {
  login: '',
  email: '',
  password: '',
};

export const initStateSignIn = {
  email: '',
  password: '',
};
export const initStateCreatePosts = {
  name: '',
  location: '',
};

export function formReducer(state, { type, payload }) {
  return (state = { ...state, [type]: payload });
}

export const initStateBtnShowHide = {
  passwordVisibility: true,
  btnShowHide: 'Show',
};
export function btnShowHideReducer(state, { _, payload }) {
  if (payload === false) {
    return (state = { passwordVisibility: payload, btnShowHide: 'Hide' });
  } else {
    return (state = { passwordVisibility: payload, btnShowHide: 'Show' });
  }
}

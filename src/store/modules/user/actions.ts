function signInSuccess(token: string) {
  return {
    type: '@user/SIGN_IN_SUCCESS',
    payload: { token },
  };
}
function logoutSuccess() {
  return {
    type: '@user/LOGOUT_SUCCESS',
    payload: {},
  };
}

export { signInSuccess, logoutSuccess };

function signInSuccess(token: string) {
  return {
    type: '@user/SIGN_IN_SUCCESS',
    payload: { token },
  };
}

export { signInSuccess };

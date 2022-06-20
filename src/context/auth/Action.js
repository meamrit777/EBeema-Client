export const LoginStart = (userCredentials) => ({
  type: "LOGIN_START",
});

export const LoginSucess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});
export const LoginFailuer = () => ({
  type: "LOGIN_FAILURE",
});

const USER_TOKEN_KEY = 'gt-ut'

const getUserToken = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(USER_TOKEN_KEY)
  }

  return undefined;
};

const setUserToken = (token: string) => {
  if (typeof window !== 'undefined') {
    return localStorage.setItem(USER_TOKEN_KEY, token)
  }

  return;
};

const removeUserToken = () => {
  if (typeof window !== 'undefined') {
    return localStorage.removeItem(USER_TOKEN_KEY)
  }

  return;
};

export {
  USER_TOKEN_KEY,
  getUserToken,
  setUserToken,
  removeUserToken
}

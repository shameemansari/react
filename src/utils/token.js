export const getLocalToken = (key = 'token') => {
  return localStorage.getItem(key) ?? null;
}

export const setLocalToken = (value = null, key = 'token') => {
  localStorage.setItem(key, value);
}

export const removeLocalToken = (key = 'token') => {
  const itemExist = getLocalToken(key);
  if(itemExist != null) {
    localStorage.removeItem(key);
  }
}



export const setUser = (userData) => {
  localStorage.setItem('user', JSON.stringify(userData));
}

export const getUser = () => {
  const user = localStorage.getItem('user');
  return user === null ? null : JSON.parse(user);
}

export const removeUser = () => {
  localStorage.removeItem('user');
}
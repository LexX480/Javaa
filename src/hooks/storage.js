


export const setUser = (userData) => {
  localStorage.setItem('user', JSON.stringify(userData));
}

export const getUser = () => {
  const user = localStorage.getItem('user');
  return user === null ? null : JSON.parse(user);
}

export const setCarts = (carts) => {
  localStorage.setItem('carts', JSON.stringify(carts));
}

export const getCarts = () => {
  const carts = localStorage.getItem('carts');
  return carts === null ? [] : JSON.parse(carts);
}

export const clearAll = () => {
  localStorage.clear();
}
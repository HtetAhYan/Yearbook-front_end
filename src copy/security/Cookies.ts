// cookie.js
import UniversalCookie from 'universal-cookie';

const cookies = new UniversalCookie();

export const setTokenCookie = (token:any) => {
  cookies.set('token', token, { path: '/' });
};
export const setUserCookie=(token:any)=>{
  cookies.set('user', token, { path: '/' });
}
export const getUserCookie = () => {
  return cookies.get('user');
};
export const removeUserCookie = () => {
  return cookies.remove('user', { path: '/' });
}
export const getTokenCookie = () => {
  return cookies.get('token');
};

export const removeTokenCookie = () => {
  cookies.remove('token', { path: '/' });
};

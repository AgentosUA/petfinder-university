import { reducer } from 'redux-chill';
import { GeneralState } from './state';
import cookieCutter from 'cookie-cutter'
import { login, logout, setSearchParams, setSidebarVisible, startup } from './actions'

const general = reducer(new GeneralState())
  .on(login, (state, { token, expiresIn }) => {
    state.isLoggedIn = true;
    cookieCutter.set('token', token)
    cookieCutter.set('expiresIn', expiresIn)
  })
  .on(logout, state => {
    state.isLoggedIn = false;
    cookieCutter.set('token', '', { expires: new Date(0) })
    cookieCutter.set('expiresIn', '', { expires: new Date(0) })
  })
  .on(setSidebarVisible, (state, payload) => {
    state.isSidebarVisible = payload
  })
  .on(setSearchParams, (state, searchParams) => {
    state.searchParams = searchParams
  })
  .on(startup, (state) => {
    const token = cookieCutter.get('token');
    const expiresIn = cookieCutter.get('expiresIn');
    const currentTime = new Date().getTime() / 1000;

    if (token && (Number(expiresIn) > currentTime)) {
      state.isLoggedIn = true;
    } else {
      state.isLoggedIn = false;
    }
  })

export { general };
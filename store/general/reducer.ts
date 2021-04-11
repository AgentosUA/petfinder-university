import { reducer } from 'redux-chill';
import { GeneralState } from './state';
import { login, logout, setSidebarVisible } from './actions'

const general = reducer(new GeneralState())
  .on(login, state => {
    state.isLoggedIn = true;
  })
  .on(logout, state => {
    state.isLoggedIn = false;
  })
  .on(setSidebarVisible, (state, payload) => {
    state.isSidebarVisible = payload
  })

export { general };
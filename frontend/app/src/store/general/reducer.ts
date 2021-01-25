import { reducer } from 'redux-chill';
import { GeneralState } from './state';
import { login, logout } from './actions'

const general = reducer(new GeneralState())
  .on(login, state => {
    state.isLoggedIn = true;
  })
  .on(logout, state => {
    state.isLoggedIn = false;
  })

export { general };
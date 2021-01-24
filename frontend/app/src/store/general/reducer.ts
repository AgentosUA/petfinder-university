import { reducer } from 'redux-chill';
import { GeneralState } from './state';
import { login } from './actions'

const general = reducer(new GeneralState())
  .on(login, state => {
    state.isLoggedIn = true;
  })

export { general };
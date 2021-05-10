import { reducer } from 'redux-chill';
import { GeneralState } from './state';
import { login, logout, setSearchParams, setSidebarVisible } from './actions'

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
  .on(setSearchParams, (state, searchParams) => {
    state.searchParams = searchParams
  })

export { general };
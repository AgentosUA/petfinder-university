import { reducer } from 'redux-chill';
import { ProfileState } from './state';
import cookieCutter from 'cookie-cutter'
import { getProfile } from './actions'

const profile = reducer(new ProfileState())
  .on(getProfile, (state) => {
    state.counter = state.counter + 1;
  });

export { profile };
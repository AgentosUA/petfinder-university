import { reducer } from 'redux-chill';
import { ProfileState } from './state';
import cookieCutter from 'cookie-cutter'
import { getProfile } from './actions'

const profile = reducer(new ProfileState())
  .on(getProfile.success, (state, profileInfo) => {
    console.log('reducer')
    state.profileInfo = profileInfo
  });

export { profile };
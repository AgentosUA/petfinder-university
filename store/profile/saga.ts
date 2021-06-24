import { profileService } from '@api';
import { Saga } from 'redux-chill';
import { call, put } from 'redux-saga/effects';
import { getProfile } from './actions';

class ProfileSaga {
  @Saga(getProfile)
  public *getProfile() {
    console.log('SAGA')
    // const data = yield call(profileService.profile);
    // yield put(getProfile.success(data));
  }
}

export { ProfileSaga }
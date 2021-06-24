import { profileService } from '@api';
import { Saga } from 'redux-chill';
import { call, put } from 'redux-saga/effects';
import { getProfile } from './actions';

class ProfileSaga {
  @Saga(getProfile)
  public *getProfile() {
    console.log('SAGA')
    alert('asdasd')
    // const data = yield call(profileService.profile);
    // console.log(data);
    // yield put(getProfile.success(data));
  }
}

export { ProfileSaga }
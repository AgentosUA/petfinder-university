import { Saga } from 'redux-chill';
import { startup } from './actions';

class GeneralSaga {
  @Saga(startup)
  public *startup() {
    console.log('asdsad');
    // alert('')
    // if (window.localStorage.getItem('token') && (Number(localStorage.getItem('expiresIn')) > new Date().getTime())) {
      // alert('')
    // }
  }
}

export { GeneralSaga }
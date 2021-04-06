import { Payload, Saga } from 'redux-chill';
import { login } from './actions';

class GeneralSaga {
  @Saga(login)
    public *login() {
      return true;
    }
}

export { GeneralSaga }
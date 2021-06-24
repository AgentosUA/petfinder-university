import { Saga } from 'redux-chill';
import { startup } from './actions';

class GeneralSaga {
  @Saga(startup)
  public *startup() {

  }
}

export { GeneralSaga }
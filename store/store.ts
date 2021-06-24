import { createStore as createReduxStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';
import { run } from 'redux-chill';
import { general } from './general';
import { profile } from './profile';
import { sagas } from './sagas';


const app = combineReducers({
  general,
  profile
})

export type State = ReturnType<typeof app>

const createStore = () => {
  const sagaMiddleware = createSagaMiddleware({
    onError: error => console.log(error, 'Saga error occured!')
  })

  const applied = applyMiddleware(sagaMiddleware);

  const store = createReduxStore(
    app,
    composeWithDevTools(applied),
    
  )

  run(sagaMiddleware, sagas);

  return store;
}

export default createStore();
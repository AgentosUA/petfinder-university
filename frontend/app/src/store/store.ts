import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';
import { run } from 'redux-chill';
import { general } from './general';
import { sagas } from './sagas';

const sagaMiddleware = createSagaMiddleware({
  onError: error => console.log(error, 'Saga error occured!')
})

const app = combineReducers({
  general
})

const applied = applyMiddleware(sagaMiddleware);

export type State = ReturnType<typeof app>
export const store = createStore(
  app,
  composeWithDevTools(applied),
)

run(sagaMiddleware, sagas);

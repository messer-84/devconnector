import {createStore, applyMiddleware} from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import createSagaMiddleware from 'redux-saga'
import myRootSaga from './sagas/rootSaga'



const configureStore = (history) => {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [
    thunk,
    sagaMiddleware,
    routerMiddleware(history)
  ];
  const store = createStore(
      rootReducer,
      composeWithDevTools(
          applyMiddleware(...middleware)
      )
  );
  // run root saga
  sagaMiddleware.run(myRootSaga);


  return store;
};


export default configureStore;
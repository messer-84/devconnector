import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import createSagaMiddleware from 'redux-saga'

import myRootSaga from './sagas/rootSaga'

// create saga middleware
const sagaMiddleware = createSagaMiddleware();

const initialState = {};

//mount saga-mid in store
const middleware = [thunk, sagaMiddleware];

const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);


// run root saga
sagaMiddleware.run(myRootSaga);

export default store;
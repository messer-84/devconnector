import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import createSagaMiddleware from 'redux-saga'

import myRootSaga from './sagas/rootSaga'

// создаем saga мидлвар
const sagaMiddleware = createSagaMiddleware();


// монтируем его в Store

const initialState = {};

const middleware = [thunk, sagaMiddleware];

const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);


// затем запускаем сагу
sagaMiddleware.run(myRootSaga);

export default store;
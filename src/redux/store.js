import { createStore } from "redux";
import { compose } from "redux";
import { applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/index.js';
import rootSaga from "./sagas/index.js";
const sagaMiddleware = createSagaMiddleware();
const store = compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension && window.devToolsExtension(),
)(createStore)(rootReducer);

sagaMiddleware.run(rootSaga);

export default store;
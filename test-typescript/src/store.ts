import { applyMiddleware, combineReducers, createStore } from "redux";
import countReducer from "./reducer/countReducers";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { all } from "redux-saga/effects";
import createSagaMiddleware, {} from "redux-saga";
import { counterSaga } from "./reducer/action";
const rootReducer = combineReducers({countReducer})

export function * rootSaga() {
    yield all([counterSaga()]);
}
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer,
    applyMiddleware(thunk,sagaMiddleware,logger));

export type RootState = ReturnType<typeof rootReducer>

sagaMiddleware.run(rootSaga);

export default store;

import { applyMiddleware, combineReducers, createStore } from "redux";
import countReducer from "./reducer/countReducers";
import logger from "redux-logger";
import thunk from "redux-thunk";
const rootReducer = combineReducers({countReducer})


const store = createStore(rootReducer,
    applyMiddleware(thunk,logger));

export type RootState = ReturnType<typeof rootReducer>

export default store;

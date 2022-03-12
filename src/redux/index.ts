import { combineReducers, createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from "./states/rootSagas";
import { rootReducer } from "./states/rootReducer";


function applyDevMiddlewares(...middlewares: any[]) {
    return process.env.NODE_ENV !== 'production' ? middlewares : []
}

const sagaMiddleware = createSagaMiddleware();

const mainReducer = combineReducers(rootReducer);

const store = createStore(
    mainReducer,
    applyMiddleware(
        sagaMiddleware,
        ...applyDevMiddlewares(logger)
    )
);

sagaMiddleware.run(rootSaga);

export const initialStoreState = store.getState();

export { store };
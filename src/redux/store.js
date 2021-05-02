import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger'

import userReducer from './reducers/userReducer'

const middleWares = [logger]


export const store = createStore(userReducer,applyMiddleware(...middleWares))
import {createStore, applyMiddleware} from 'redux';
import {persistStore,persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import logger from 'redux-logger'

import userReducer from './reducers/userReducer'

const middleWares = [logger]


const persistConfig = {
    key: 'root',
    storage,
  }
  
  const persistedReducer = persistReducer(persistConfig, userReducer)

export let store = createStore(persistedReducer,applyMiddleware(...middleWares))
export let persistor = persistStore(store)
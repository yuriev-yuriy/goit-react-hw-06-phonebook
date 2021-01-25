import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducer from './reducer';

const persistConfig = {
  key: 'root',
  storage,
};

// const rootReducer = combineReducers(reducer);

const persistedReducer = persistReducer(persistConfig, reducer);

// const store = configureStore(reducer, composeWithDevTools());
const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };

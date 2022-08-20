import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import { sliceAuth } from './redux/slices/auth';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { sliceRestaurant } from './redux/slices/restaurant';

const rootReducer = combineReducers({
  auth: sliceAuth,
  restaurant: sliceRestaurant
});

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = getDefaultMiddleware({
  immutableCheck: false
});

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
});

export const persistor = persistStore(store);

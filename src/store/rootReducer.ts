import {authReducer, articlesReducer} from '../slices';
import {combineReducers} from '@reduxjs/toolkit';
import {PersistConfig, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const reducers = combineReducers({
  auth: authReducer,
  articles: articlesReducer,
});
const persistConfig: PersistConfig<RootState> = {
  key: 'root',
  storage: storage,
  whitelist: ['auth'],
};

export type RootState = ReturnType<typeof reducers>;
export const rootReducer = persistReducer(persistConfig, reducers);

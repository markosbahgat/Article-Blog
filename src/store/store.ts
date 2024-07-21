import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import {persistStore} from 'redux-persist';
import {rootReducer, RootState} from './rootReducer';
import {getArticles} from 'middlewares/getArticles.middleware';

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

store
  .dispatch(getArticles({viewedDays: 7}))
  .then(res => console.log(res.payload));
export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

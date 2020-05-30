import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { Reducer } from 'react';
export default (reducers: Reducer<any, any>) => {
  const persistedReducer = persistReducer(
    {
      key: 'myMovieList',
      storage,
      whitelist: ['toWatch', 'watched'],
    },
    reducers
  );
  return persistedReducer;
};

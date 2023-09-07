import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  console.log('b red');
  const persistedReducers = persistReducer(
    {
      key: 'LA-PIZZA',
      storage,
      whitelist: ['auth'],
    },
    reducers
  );

  return persistedReducers;
};

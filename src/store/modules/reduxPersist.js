import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducers = persistReducer(
    {
      key: 'LA-PIZZA',
      storage,
      whitelist: ['auth', 'cart'],
    },
    reducers
  );

  return persistedReducers;
};

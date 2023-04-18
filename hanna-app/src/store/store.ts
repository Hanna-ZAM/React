import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cardFormReducer from './reducers/cardFormSlicer';
import formReducer from './reducers/formSlicer';
import searchReducer from './reducers/searchSlicer';
import { cardAPI } from './services/serviseCards';

const rootReducer = combineReducers({
  formReducer,
  cardFormReducer,
  searchReducer,
  [cardAPI.reducerPath]: cardAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cardAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

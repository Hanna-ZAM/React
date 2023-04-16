import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cardFormReducer from './reducers/cardFormSlicer';
import formReducer from './reducers/formSlicer';

const rootReducer = combineReducers({
  formReducer,
  cardFormReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

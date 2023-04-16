import { CardFormType } from 'components/form/cardForm';
import { createSlice } from '@reduxjs/toolkit';

interface cardFormState {
  formItem: Array<CardFormType>;
  created: boolean;
  error: string;
}

const initialState: cardFormState = {
  formItem: [],
  created: false,
  error: '',
};
export const cardFormSlicer = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addCardForm(state, action: PayloadAction<CardFormType>) {
      state.formItem.push(action.payload);
      state.created = false;
    },
    createNewCard(state, action: PayloadAction<boolean>) {
      state.created = action.payload;
    },
  },
});
export default cardFormSlicer.reducer;

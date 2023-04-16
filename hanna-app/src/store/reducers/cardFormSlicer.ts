import { CardFormType } from 'components/form/cardForm';
import { createSlice } from '@reduxjs/toolkit';

interface cardFormState {
  cards: Array<CardFormType>;
  isLoading: boolean;
  error: string;
}

const initialState: cardFormState = {
  cards: [],
  isLoading: false,
  error: '',
};
export const formSlicer = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addCardForm(state, action: PayloadAction<CardFormType>) {
      state.cards.push(action.payload);
    },
  },
});
export default formSlicer.reducer;

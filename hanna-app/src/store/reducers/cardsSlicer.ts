import { createSlice } from '@reduxjs/toolkit';
import { fetchCards, searchCards } from './ActionCreator';

export type cardType = {
  secret: string;
  cardId: string;
  server: string;
  farm: string;
  title?: string;
  author?: string;
  image?: string;
  views?: string;
  date?: string;
  description?: string;
  link?: boolean;
};

export interface cardsState {
  cards: cardsType[];
  isLoading: boolean;
  search: string;
  error: string;
}

const initialState: cardsState = {
  cards: [],
  isLoading: false,
  search: '',
  error: '',
};

export const cardsSlicer = createSlice({
  name: 'cards',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCards.fulfilled.type]: (state, action: PayloadAction<cardType[]>) => {
      state.isLoading = false;
      state.error = '';
      state.cards = action.payload;
    },
    [fetchCards.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchCards.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [searchCards.fulfilled.type]: (state, action: PayloadAction<cardType[]>) => {
      state.isLoading = false;
      state.error = '';
      state.cards = action.payload;
    },
    [searchCards.pending.type]: (state) => {
      state.isLoading = true;
    },
    [searchCards.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export default cardsSlicer.reducer;

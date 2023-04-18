import { createSlice } from '@reduxjs/toolkit';

interface searchState {
  search: string;
}

const initialState: searchState = {
  search: '',
};
export const searchSlicer = createSlice({
  name: 'search',
  initialState,
  reducers: {
    changeSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
  },
});
export default searchSlicer.reducer;

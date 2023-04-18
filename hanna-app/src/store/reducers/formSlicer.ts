import { createSlice } from '@reduxjs/toolkit';

type formFieldsType = {
  title?: string;
  author?: string;
  category?: string;
  file?: string;
  date?: string;
  gender?: string;
  isAgree?: boolean;
};
interface formState {
  formFields: formFieldsType;
  isLoading: boolean;
  error: string;
}

const initialState: formState = {
  formFields: {
    title: '',
    author: '',
    category: 'people',
    file: '',
    date: '',
    gender: 'male',
    isAgree: false,
  },
  isLoading: false,
  error: '',
};
export const formSlicer = createSlice({
  name: 'form',
  initialState,
  reducers: {
    changeFormField(state, action: PayloadAction<formFieldsType>) {
      for (const key in action.payload) {
        state.formFields[key] = action.payload[key];
      }
    },
  },
});
export default formSlicer.reducer;

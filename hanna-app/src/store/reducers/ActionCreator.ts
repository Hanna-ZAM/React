import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { useAppSelector } from '../../hooks/redux';

export const fetchCards = createAsyncThunk('card/fetchAll', async (_, thunkAPI) => {
  /*const {search} = useAppSelector(state=> state.searchReducer)
   console.log(search)*/
  try {
    const metod =
      /*search
            ? 'flickr.photos.search&text=' + search
            : */ 'flickr.photos.getRecent';
    const bases =
      'https://www.flickr.com/services/rest/?api_key=fd018fb8b522dc83b621f765fd3951a3&method=' +
      metod +
      '&safe_search=1&privacy_filter=1&&format=json&nojsoncallback=1';
    const response = await axios.get<cardsType[]>(bases);

    return response.data.photos.photo;
  } catch (e) {
    return thunkAPI.rejectWithValue('Не удалось загрузить пользователей');
  }
});

export const searchCards = createAsyncThunk('card/search', async (_, thunkAPI) => {
  const { search } = useAppSelector((state) => state.searchReducer);

  try {
    const metod = 'flickr.photos.search&text=' + search;
    const bases =
      'https://www.flickr.com/services/rest/?api_key=fd018fb8b522dc83b621f765fd3951a3&method=' +
      metod +
      '&safe_search=1&privacy_filter=1&&format=json&nojsoncallback=1';
    const response = await axios.get<cardsType[]>(bases);

    return response.data.photos.photo;
  } catch (e) {
    return thunkAPI.rejectWithValue('Не удалось загрузить пользователей');
  }
});

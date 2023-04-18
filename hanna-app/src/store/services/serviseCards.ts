import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { cardType } from '../reducers/cardsSlicer';

export const cardAPI = createApi({
  reducerPath: 'cardAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.flickr.com' }),
  tagTypes: ['Card'],
  endpoints: (build) => ({
    fetchAllcards: build.query<cardType[]>({
      query: (m = 'flickr.photos.getRecent') => ({
        url: `/services/rest/?api_key=fd018fb8b522dc83b621f765fd3951a3&method=${m}&&format=json&nojsoncallback=1`,
      }),
      providesTags: () => ['Cards'],
    }),
    fetchCardInfo: build.query<cardType>({
      query: (id: string, secret: string) => ({
        url: `/services/rest/?method=flickr.photos.getInfo&api_key=fd018fb8b522dc83b621f765fd3951a3&photo_id=${id}&secret=${secret}&&format=json&nojsoncallback=1`,
      }),
      providesTags: () => ['Card'],
    }),
  }),
});

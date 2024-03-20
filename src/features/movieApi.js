import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl, credential } from '../app/apis_cre';



export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    headers: {
      Authorization: credential
    }
  }),

  endpoints: (builder) => ({


    categoryMovie: builder.query({
      query: (query) => ({
        url: `/movie/${query.category}`,
        params: {
          page: query.page ?? 1
        },
        method: 'GET',
      }),
    }),


    movieDetail: builder.query({
      query: (query) => ({
        url: `/movie/${query}`,
        params: {

        },
        method: 'GET',
      }),
    }),

    movieVideo: builder.query({
      query: (query) => ({
        url: `/movie/${query}/videos`,
        params: {

        },
        method: 'GET',
      }),
    }),


    searchMovie: builder.query({
      query: (query) => ({
        url: 'search/movie',
        params: {
          query: query
        },
        method: 'GET'
      })
    }),



  })


});


export const { useCategoryMovieQuery,
  useSearchMovieQuery, useMovieDetailQuery, useMovieVideoQuery } = movieApi;
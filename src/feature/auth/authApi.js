
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../../contants/apis';





export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({

    userLogin: builder.mutation({
      query: (query) => ({
        url: '/users/login',
        body: query,
        method: 'POST'
      }),

    }),
    userRegister: builder.mutation({
      query: (query) => ({
        url: '/users/register',
        body: query,
        method: 'POST'
      }),

    })


  })
});

export const { useUserLoginMutation, useUserRegisterMutation } = authApi;
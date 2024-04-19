import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../../contants/apis';



export const orderApi = createApi({
  reducerPath: 'orderApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({

    orderCreate: builder.mutation({
      query: (query) => ({
        url: '/orders',
        body: query.body,
        headers: {
          Authorization: query.token
        },
        method: 'POST'
      }),
      invalidatesTags: ['Order']

    }),

    orderByUser: builder.query({
      query: (query) => ({
        url: `/orders/${query.userId}`,
        headers: {
          Authorization: query.token
        },
        method: 'GET'
      }),
      providesTags: ['Order']

    }),

    orderDetail: builder.query({
      query: (id) => ({
        url: `/orders/detail/${id}`,
        method: 'GET'
      }),
      providesTags: ['Order']

    }),



  })
});

export const { useOrderCreateMutation, useOrderByUserQuery, useOrderDetailQuery } = orderApi;
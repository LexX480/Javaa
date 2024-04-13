
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../../contants/apis';




export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ['Product'],
  endpoints: (builder) => ({

    getProducts: builder.query({
      query: () => ({
        url: '/products',
        method: 'GET'
      }),
      providesTags: ['Product']
    }),

    getTopProducts: builder.query({
      query: () => ({
        url: '/products/top',
        method: 'GET'
      }),
      providesTags: ['Product']
    }),

    getProductById: builder.query({
      query: (query) => ({
        url: `/products/${query}`,
        method: 'GET'
      }),
      providesTags: ['Product']
    }),


    addProduct: builder.mutation({
      query: (query) => ({
        url: '/products',
        body: query.body,
        method: 'POST',
        headers: {
          'Authorization': query.token
        }
      }),
      invalidatesTags: ['Product']


    }),

    updateProduct: builder.mutation({
      query: (query) => ({
        url: `/products/${query.id}`,
        body: query.body,
        method: 'PATCH',
        headers: {
          'Authorization': query.token
        }
      }),
      invalidatesTags: ['Product']

    }),


  })
});

export const { useGetProductsQuery, useGetProductByIdQuery, useAddProductMutation, useUpdateProductMutation, useGetTopProductsQuery } = productApi;
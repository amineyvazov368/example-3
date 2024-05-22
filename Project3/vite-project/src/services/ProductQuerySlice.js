import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const BASE_URL=  "http://localhost:7070/api/"

export const itemAPI = createApi({
    reducerPath: 'itemApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
    getItem:builder.query({
        query:()=>`products`
    }),

    // delete
     deleteItem:builder.mutation({
        query:(id)=>({
            url:`products/${id}`,
            method:"DELETE"
        })
     }),

    //  get id

    getItemById:builder.query({
        query:(id)=>({
            url:`products/${id}`,
            method:"GET"
        })
    }),
    postItem:builder.mutation({
        query:(newItem)=>({
            url:`products`,
            body:newItem,
            method:"POST",
            headers: {
                "Content-Type": "application/json",
              }
        })
    })
    })
  
})
  
  export const { useGetItemQuery, useGetItemByIdQuery,usePostItemMutation,useDeleteItemMutation } = itemAPI
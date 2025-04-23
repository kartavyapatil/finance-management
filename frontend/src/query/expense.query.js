// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const expenseApi = createApi({
//     reducerPath: 'expenseApi',
//     baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api/v1' }),
//     tagTypes: ['GetAllExpenses', 'GetExpenseDetails'],
//     endpoints: (builder) => ({
//         createExpense: builder.mutation({
//             query: (obj) => ({
//                 url: "/expense/create",
//                 method: "POST",
//                 body: obj,
//                 headers: {
//                     'Authorization': 'Bearer ' + localStorage.getItem("token")
//                 }
//             }),
//             invalidatesTags: ['GetAllExpenses']
//         }),

//         getAllExpenses: builder.query({
//             query: () => ({
//                 url: "/expense/all",
//                 method: "GET",
//                 headers: {
//                     'Authorization': 'Bearer ' + localStorage.getItem("token")
//                 }
//             }),
//             providesTags: ['GetAllExpenses']
//         }),
//         getTotalExpensePerCategory: builder.query({
//             query: () => ({
//                 url: "/expense/getTotalExpensePerCategory",
//                 method: "GET",
//                 headers: {
//                     'Authorization': 'Bearer ' + localStorage.getItem("token")
//                 }
//             }),
//             providesTags: ['GetAllExpenses']
//         }),
//         getExpensesGroupedByCategory: builder.query({
//             query: (name) => ({
//                 url: `/expense/getExpensesGroupedByCategory/${name}`,
//                 method: "GET",
//                 headers: {
//                     'Authorization': 'Bearer ' + localStorage.getItem("token")
//                 }
//             }),
//             providesTags: ['GetAllExpenses']
//         }),

//         getExpenseById: builder.query({
//             query: (_id) => ({
//                 url: `/expense/${_id}`,
//                 method: "GET",
//                 headers: {
//                     'Authorization': 'Bearer ' + localStorage.getItem("token")
//                 }
//             }),
//             providesTags: ['GetExpenseDetails']
//         }),

//         updateExpense: builder.mutation({
//             query: ({ _id, data }) => ({
//                 url: `/expense/${_id}`,
//                 method: "PUT",
//                 body: data,
//                 headers: {
//                     'Authorization': 'Bearer ' + localStorage.getItem("token")
//                 }
//             }),
//             invalidatesTags: ['GetAllExpenses', 'GetExpenseDetails']
//         }),

//         deleteExpense: builder.mutation({
//             query: (_id) => ({
//                 url: `/expense/${_id}`,
//                 method: "DELETE",
//                 headers: {
//                     'Authorization': 'Bearer ' + localStorage.getItem("token")
//                 }
//             }),
//             invalidatesTags: ['GetAllExpenses']
//         }),
//     }),
// });

// export const {
//     useCreateExpenseMutation,
//     useGetAllExpensesQuery,
//     useGetExpenseByIdQuery,
//     useUpdateExpenseMutation,
//     useDeleteExpenseMutation,
//     useGetTotalExpensePerCategoryQuery,
// useGetExpensesGroupedByCategoryQuery
// } = expenseApi;


// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const expenseApi = createApi({
//     reducerPath: 'expenseApi',
//     baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api/v1' }),
//     tagTypes: ['GetAllExpenses', 'GetExpenseDetails'],
//     endpoints: (builder) => ({
//         createExpense: builder.mutation({
//             query: (obj) => ({
//                 url: "/expense/create",
//                 method: "POST",
//                 body: obj,
//                 headers: {
//                     'Authorization': 'Bearer ' + localStorage.getItem("token")
//                 }
//             }),
//             invalidatesTags: ['GetAllExpenses']
//         }),

//         getAllExpenses: builder.query({
//             query: () => ({
//                 url: "/expense/all",
//                 method: "GET",
//                 headers: {
//                     'Authorization': 'Bearer ' + localStorage.getItem("token")
//                 }
//             }),
//             providesTags: ['GetAllExpenses']
//         }),

//         getTotalExpensePerCategory: builder.query({
//             query: () => ({
//                 url: "/expense/getTotalExpensePerCategory",
//                 method: "GET",
//                 headers: {
//                     'Authorization': 'Bearer ' + localStorage.getItem("token")
//                 }
//             }),
//             providesTags: ['GetAllExpenses']
//         }),

//         getExpensesGroupedByCategory: builder.query({
//             query: (name) => ({
//                 url: `/expense/getExpensesGroupedByCategory/${name}`,
//                 method: "GET",
//                 headers: {
//                     'Authorization': 'Bearer ' + localStorage.getItem("token")
//                 }
//             }),
//             providesTags: ['GetAllExpenses']
//         }),

//         getExpenseById: builder.query({
//             query: (_id) => ({
//                 url: `/expense/${_id}`,
//                 method: "GET",
//                 headers: {
//                     'Authorization': 'Bearer ' + localStorage.getItem("token")
//                 }
//             }),
//             providesTags: ['GetExpenseDetails']
//         }),

//         updateExpense: builder.mutation({
//             query: ({ _id, data }) => ({
//                 url: `/expense/${_id}`,
//                 method: "PUT",
//                 body: data,
//                 headers: {
//                     'Authorization': 'Bearer ' + localStorage.getItem("token")
//                 }
//             }),
//             invalidatesTags: ['GetAllExpenses', 'GetExpenseDetails']
//         }),

//         deleteExpense: builder.mutation({
//             query: (_id) => ({
//                 url: `/expense/${_id}`,
//                 method: "DELETE",
//                 headers: {
//                     'Authorization': 'Bearer ' + localStorage.getItem("token")
//                 }
//             }),
//             invalidatesTags: ['GetAllExpenses']
//         }),
//     }),
// });

// export const {
//     useCreateExpenseMutation,
//     useGetAllExpensesQuery,
//     useGetExpenseByIdQuery,
//     useUpdateExpenseMutation,
//     useDeleteExpenseMutation,
//     useGetTotalExpensePerCategoryQuery,
//     useGetExpensesGroupedByCategoryQuery
// } = expenseApi;



import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const expenseApi = createApi({
  reducerPath: 'expenseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api/v1' }),
  tagTypes: ['GetAllExpenses', 'GetExpenseDetails'], 
  endpoints: (builder) => ({
    createExpense: builder.mutation({
      query: (obj) => ({
        url: "/expense/create",
        method: "POST",
        body: obj,
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem("token")
        }
      }),
      invalidatesTags: ['GetAllExpenses'] 
    }),

    getAllExpenses: builder.query({
      query: () => ({
        url: "/expense/all",
        method: "GET",
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem("token")
        }
      }),
      providesTags: ['GetAllExpenses'] 
    }),

    getTotalExpensePerCategory: builder.query({
      query: () => ({
        url: "/expense/getTotalExpensePerCategory",
        method: "GET",
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem("token")
        }
      }),
      providesTags: ['GetAllExpenses'] 
    }),

    getExpensesGroupedByCategory: builder.query({
      query: (name) => ({
        url: `/expense/getExpensesGroupedByCategory/${name}`,
        method: "GET",
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem("token")
        }
      }),
      providesTags: ['GetAllExpenses']  
    }),

    getExpenseById: builder.query({
      query: (_id) => ({
        url: `/expense/${_id}`,
        method: "GET",
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem("token")
        }
      }),
      providesTags: ['GetExpenseDetails']
    }),

    updateExpense: builder.mutation({
      query: ({ _id, data }) => ({
        url: `/expense/${_id}`,
        method: "PUT",
        body: data,
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem("token")
        }
      }),
      invalidatesTags: ['GetAllExpenses', 'GetExpenseDetails']
    }),

    deleteExpense: builder.mutation({
      query: (_id) => ({
        url: `/expense/${_id}`,
        method: "DELETE",
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem("token")
        }
      }),
      invalidatesTags: ['GetAllExpenses'] 
    }),
  }),
});

export const {
  useCreateExpenseMutation,
  useGetAllExpensesQuery,
  useGetExpenseByIdQuery,
  useUpdateExpenseMutation,
  useDeleteExpenseMutation,
  useGetTotalExpensePerCategoryQuery,
  useGetExpensesGroupedByCategoryQuery
} = expenseApi;

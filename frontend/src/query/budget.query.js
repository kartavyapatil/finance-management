// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// export const budgetApi = createApi({
//     reducerPath: 'budgetApi',
//     baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api/v1' }),
//     tagTypes: ['GetAllBudgets', 'GetBudgetDetails','GetAllExpenses'],
//     endpoints: (builder) => ({
//         createBudget: builder.mutation({
//             query: (obj) => ({
//                 url: "/budget/create",
//                 method: "POST",
//                 body: obj,
//                 headers: {
//                     'Authorization': 'Bearer ' + localStorage.getItem("token")
//                 }
//             }),
//             invalidatesTags: ['GetAllBudgets']
//         }),

//         getAllBudgets: builder.query({
//             query: () => ({
//                 url: "/budget/all",
//                 method: "GET",
//                 headers: {
//                     'Authorization': 'Bearer ' + localStorage.getItem("token")
//                 }
//             }),
//             providesTags: ['GetAllBudgets']
//         }),

//         getBudgetById: builder.query({
//             query: (_id) => ({
//                 url: `/budget/${_id}`,
//                 method: "GET",
//                 headers: {
//                     'Authorization': 'Bearer ' + localStorage.getItem("token")
//                 }
//             }),
//             providesTags: ['GetBudgetDetails']
//         }),

//         updateBudget: builder.mutation({
//             query: ({ _id, data }) => ({
//                 url: `/budget/${_id}`,
//                 method: "PUT",
//                 body: data,
//                 headers: {
//                     'Authorization': 'Bearer ' + localStorage.getItem("token")
//                 }
//             }),
//             invalidatesTags: ['GetAllBudgets', 'GetBudgetDetails']
//         }),

//         deleteBudget: builder.mutation({
//             query: (_id) => ({
//                 url: `/budget/${_id}`,
//                 method: "DELETE",
//                 headers: {
//                     'Authorization': 'Bearer ' + localStorage.getItem("token")
//                 }
//             }),
//             invalidatesTags: ['GetAllBudgets','GetAllExpenses']
//         }),
//     }),
// });

// export const {
//     useCreateBudgetMutation,
//     useGetAllBudgetsQuery,
//     useGetBudgetByIdQuery,
//     useUpdateBudgetMutation,
//     useDeleteBudgetMutation
// } = budgetApi;
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const budgetApi = createApi({
    reducerPath: 'budgetApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api/v1' }),
    tagTypes: ['GetAllBudgets', 'GetBudgetDetails', 'GetAllExpenses'],
    endpoints: (builder) => ({
        createBudget: builder.mutation({
            query: (obj) => ({
                url: "/budget/create",
                method: "POST",
                body: obj,
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("token")
                }
            }),
            invalidatesTags: ['GetAllBudgets']
        }),

        getAllBudgets: builder.query({
            query: () => ({
                url: "/budget/all",
                method: "GET",
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("token")
                }
            }),
            providesTags: ['GetAllBudgets']
        }),

        getBudgetById: builder.query({
            query: (_id) => ({
                url: `/budget/${_id}`,
                method: "GET",
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("token")
                }
            }),
            providesTags: ['GetBudgetDetails']
        }),

        updateBudget: builder.mutation({
            query: ({ _id, data }) => ({
                url: `/budget/${_id}`,
                method: "PUT",
                body: data,
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("token")
                }
            }),
            invalidatesTags: ['GetAllBudgets', 'GetBudgetDetails']
        }),

        deleteBudget: builder.mutation({
            query: (_id) => ({
                url: `/budget/${_id}`,
                method: "DELETE",
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("token")
                }
            }),
            invalidatesTags: ['GetAllBudgets', 'GetAllExpenses']
        }),
    }),
});

export const {
    useCreateBudgetMutation,
    useGetAllBudgetsQuery,
    useGetBudgetByIdQuery,
    useUpdateBudgetMutation,
    useDeleteBudgetMutation
} = budgetApi;

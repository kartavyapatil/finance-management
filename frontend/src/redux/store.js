import { configureStore } from '@reduxjs/toolkit'
import {setupListeners} from "@reduxjs/toolkit/query"
import { userslice } from '../slice/user.slice'
import { AuthApi } from '../query/Auth.query'
import { budgetApi } from '../query/budget.query'
import { expenseApi } from '../query/expense.query'

export const store = configureStore({
  reducer: {
    [userslice.name]:userslice.reducer,
    [AuthApi.reducerPath]:AuthApi.reducer,
    [budgetApi.reducerPath]:budgetApi.reducer,
    [expenseApi.reducerPath]:expenseApi.reducer

  },
  middleware:(d)=>d().concat(AuthApi.middleware,budgetApi.middleware,expenseApi.middleware)
})
setupListeners(store.dispatch)
import { configureStore } from '@reduxjs/toolkit'

import selectedTokens from './selectedTokens'

const store = configureStore({ reducer: { selectedTokens } })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store

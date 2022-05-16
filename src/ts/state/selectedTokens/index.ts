import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from '^/state'
import { Token } from '^/state/types'

interface SelectedTokensState {
  selectedTokens: Token[]
}

const initialState: SelectedTokensState = {
  selectedTokens: []
}

export const selectedTokensSlice = createSlice({
  name: 'selectedTokens',
  initialState,
  reducers: {
    toggleToken: (state, action: PayloadAction<Token>) => {
      state.selectedTokens = state.selectedTokens.concat(action.payload)
    }
  }
})

export const { toggleToken } = selectedTokensSlice.actions

export const selectSelectedTokens = (state: RootState): SelectedTokensState => state.selectedTokens

export default selectedTokensSlice.reducer

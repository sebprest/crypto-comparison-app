import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from '^/state'
import { TokenId } from '^/state/types'

interface SelectedTokensState {
  selectedTokens: TokenId[]
}

const initialState: SelectedTokensState = {
  selectedTokens: []
}

export const selectedTokensSlice = createSlice({
  name: 'selectedTokens',
  initialState,
  reducers: {
    toggleToken: (state, action: PayloadAction<TokenId>) => {
      const selectedToken = action.payload

      if (state.selectedTokens.includes(selectedToken)) {
        state.selectedTokens.splice(state.selectedTokens.indexOf(selectedToken), 1)
      } else {
        state.selectedTokens = state.selectedTokens.concat(selectedToken)
      }
    }
  }
})

export const { toggleToken } = selectedTokensSlice.actions

export const selectSelectedTokens = (state: RootState): SelectedTokensState => state.selectedTokens

export default selectedTokensSlice.reducer

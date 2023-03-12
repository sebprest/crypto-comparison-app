import useSWR from 'swr'
import { API_ROOT } from '^/state/consts'
import fetcher from '../genericFetcher'
import { TokenId } from '../types'
import { TokensPriceHistories, TokenPriceHistory, fetchedTokenPriceData } from './types'

export const useTokensPriceHistories = (selectedTokens: TokenId[]): TokensPriceHistories => {
  async function fetchTokensPriceHistories (tokens: TokenId[]): Promise<TokenPriceHistory[]> {
    const fetchedTokenPrices: TokenPriceHistory[] = []

    for (const token of tokens) {
      const fetchedTokenPriceData = await fetcher<fetchedTokenPriceData>(
        `${API_ROOT}/coins/${token}/market_chart`,
        // TODO: Make these user configurable
        { queryParams: { vs_currency: 'usd', days: '30', interval: 'daily' } }
      )
      if (fetchedTokenPriceData === undefined) {
        break
      }
      fetchedTokenPrices.push({ tokenId: token, priceHistory: fetchedTokenPriceData.prices })
    }

    return fetchedTokenPrices
  }

  const { data, error } = useSWR([selectedTokens], fetchTokensPriceHistories)

  if (data === undefined) {
    return {
      data: [],
      isLoading: true
    }
  }

  return {
    data,
    isLoading: (data == null) && error === undefined
  }
}

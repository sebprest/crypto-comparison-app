import useSWR from 'swr'
import fetcher from '^/state/genericFetcher'
import { Token } from '^/state/types'
import { TokensList } from './types'

const API_ROOT = 'https://api.coingecko.com/api/v3'

export const useTokensList = (): TokensList => {
  const { data, error } = useSWR([`${API_ROOT}/coins/markets`, { queryParams: { vs_currency: 'usd' } }], fetcher<Token[]>)

  return {
    tokens: data,
    isLoading: (data == null) && error === undefined
  }
}

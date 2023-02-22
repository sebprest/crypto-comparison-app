import useSWR from 'swr'
import fetcher from '^/state/genericFetcher'
import { Token } from '^/state/types'
import { API_ROOT } from '^/state/consts'
import { TokensList } from './types'

export const useTokensList = (): TokensList => {
  const { data, error } = useSWR([`${API_ROOT}/coins/markets`, { queryParams: { vs_currency: 'usd' } }], fetcher<Token[]>)

  return {
    tokens: data,
    isLoading: (data == null) && error === undefined
  }
}

import useSWR from 'swr'
import { Token, TokensList } from './types'

const API_ROOT = 'https://api.coingecko.com/api/v3'

export const useTokensList = (): TokensList => {
  const fetcher = async (url: string): Promise<Token[] | undefined> => {
    const res = await fetch(url)

    if (!res.ok) {
      throw new Error('An error occurred while fetching the data')
    }

    return await res.json()
  }
  const { data, error } = useSWR(`${API_ROOT}/coins/markets?vs_currency=usd`, fetcher)

  return {
    tokens: data,
    isLoading: (data == null) && error === undefined
  }
}

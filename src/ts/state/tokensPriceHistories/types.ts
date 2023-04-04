export interface fetchedTokenPriceData {
  market_caps: Array<Record<number, number>>
  prices: Array<Record<number, number>>
  total_volume: Array<Record<number, number>>
}

export interface TokenPriceHistory {
  tokenId: string
  priceHistory: Array<Record<number, number>>
}

export interface TokensPriceHistories {
  data: TokenPriceHistory[]
  isLoading: boolean
}

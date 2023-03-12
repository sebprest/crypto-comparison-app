export interface fetchedTokenPriceData {
  market_caps: Array<Record<string, string>>
  prices: Array<Record<string, string>>
  total_volume: Array<Record<string, string>>
}

export interface TokenPriceHistory {
  tokenId: string
  priceHistory: Array<Record<string, string>>
}

export interface TokensPriceHistories {
  data: TokenPriceHistory[]
  isLoading: boolean
}

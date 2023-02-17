export type TokenId = string

export interface Token {
  id: TokenId
  symbol: string
  name: string
  current_price: number
  image: string
}

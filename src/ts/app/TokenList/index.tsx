import { useTokensList } from '^/state/tokens'
import TokenItem from './TokenItem'

const TokenList = (): JSX.Element | null => {
  const { tokens, isLoading } = useTokensList()

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (tokens === undefined) {
    return <p>There was an error while fetching data</p>
  }

  return (
    <div>
      {tokens.map(token => {
        return (
          <TokenItem key={token.id} token={token} />
        )
      })}
    </div>
  )
}

export default TokenList

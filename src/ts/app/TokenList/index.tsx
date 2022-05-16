import styled from 'styled-components'
import { useAppSelector } from '^/state/hooks'
import { selectSelectedTokens } from '^/state/selectedTokens'
import { useTokensList } from '^/state/tokens'
import { Token } from '^/state/tokens/types'
import TokenItem from './TokenItem'

const TokenList = (): JSX.Element | null => {
  const { tokens, isLoading } = useTokensList()
  const { selectedTokens } = useAppSelector(selectSelectedTokens)

  const tokenSelected = (token: Token): boolean => {
    return selectedTokens.includes(token)
  }

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (tokens === undefined) {
    return <p>There was an error while fetching data</p>
  }

  return (
    <Container>
      {tokens.map(token => {
        return (
          <TokenItem key={token.id} token={token} selected={tokenSelected(token)} />
        )
      })}
    </Container>
  )
}

const Container = styled.div`
  max-height: 512px;
  overflow: scroll;
`

export default TokenList

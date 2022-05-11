import styled from 'styled-components'
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
    <Container>
      {tokens.map(token => {
        return (
          <TokenItem key={token.id} token={token} />
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

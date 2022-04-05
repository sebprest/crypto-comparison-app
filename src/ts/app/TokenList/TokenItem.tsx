import styled from 'styled-components'
import Flex from '^/app/Layout/Flex'
import { Token } from '^/state/tokens/types'

interface Props {
  token: Token
}

const TokenItem: React.FC<Props> = ({ token }) => {
  return (
    <Container direction='row' justifyContent='space-between'>
      <Flex direction='row'>
        <Image src={token.image} />
        <span>{token.name}</span>
      </Flex>
      <span>${token.current_price}</span>
    </Container>
  )
}

const Container = styled(Flex)`
  padding: 4px;

  &:nth-child(even) {
    background-color: #ddd;
  }

  &:hover {
    background-color: #ccc;
  }
`

const Image = styled.img`
  max-width: 20px;
  margin-right: 4px;
`

export default TokenItem

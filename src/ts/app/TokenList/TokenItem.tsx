import { MouseEvent } from 'react'
import styled from 'styled-components'
import Flex from '^/app/Layout/Flex'
import { useAppDispatch } from '^/state/hooks'
import { toggleToken } from '^/state/selectedTokens'
import { Token } from '^/state/tokens/types'

interface Props {
  token: Token
  selected: boolean
}

const TokenItem: React.FC<Props> = ({ token, selected }) => {
  const dispatch = useAppDispatch()

  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('en-US', {
      currency: 'USD',
      style: 'currency'
    }).format(price)
  }

  const handleTokenClick = (event: MouseEvent<HTMLDivElement>): void => {
    event.preventDefault()
    dispatch(toggleToken(token))
  }

  return (
    <Container direction='row' justifyContent='space-between' onClick={handleTokenClick} selected={selected}>
      <Flex direction='row'>
        <Image src={token.image} />
        <span>{token.name}</span>
      </Flex>
      <span>{formatPrice(token.current_price)}</span>
    </Container>
  )
}

const Container = styled(Flex)<{selected: boolean}>`
  cursor: pointer;
  padding: 4px;

  background-color: ${({ selected }) => selected && '#0F0'};

  &:nth-child(even) {
    background-color: ${({ selected }) => selected ? '#0F0' : '#DDD'};
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

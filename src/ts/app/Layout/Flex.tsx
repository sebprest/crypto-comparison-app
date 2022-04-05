import styled from 'styled-components'

interface Props {
  direction?: 'column' | 'row'
  justifyContent?: 'space-between' | 'center'
}

const Flex = styled.div<Props>`
  display: flex;
  flex-direction: ${({ direction }) => direction ?? 'column'};
  justify-content: ${({ justifyContent }) => justifyContent ?? 'flex-start'};
`
export default Flex

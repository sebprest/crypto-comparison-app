import { useAppSelector } from '^/state/hooks'
import { selectSelectedTokens } from '^/state/selectedTokens'
import { useTokensPriceHistories } from '^/state/tokensPriceHistories'
import Flex from './Layout/Flex'
import PriceHistoriesChart from './PriceHistoriesChart'
import TokenList from './TokenList'

const App = (): JSX.Element => {
  const { selectedTokens } = useAppSelector(selectSelectedTokens)
  const { data } = useTokensPriceHistories(selectedTokens)

  return (
    <Flex direction='row' justifyContent='center'>
      <PriceHistoriesChart priceHistories={data} />
      <TokenList />
    </Flex>
  )
}

export default App

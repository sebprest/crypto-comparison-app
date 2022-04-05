import Flex from './Layout/Flex'
import TokenList from './TokenList'

const App = (): JSX.Element => {
  return (
    <Flex direction='row' justifyContent='center'>
      <div>Chart</div>
      <TokenList />
    </Flex>
  )
}

export default App

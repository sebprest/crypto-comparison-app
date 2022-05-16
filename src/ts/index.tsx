import ReactDOM from 'react-dom'
import { Normalize } from 'styled-normalize'
import { Provider } from 'react-redux'

import App from '^/app'
import store from '^/state'
import GlobalStyle from './globalStyle'

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <Normalize />
    <App />
  </Provider>,
  document.getElementById('app')
)

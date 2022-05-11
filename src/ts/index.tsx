import ReactDOM from 'react-dom'
import { Normalize } from 'styled-normalize'
import GlobalStyle from './globalStyle'

import App from '^/app'

ReactDOM.render(
  <>
    <GlobalStyle />
    <Normalize />
    <App />
  </>,
  document.getElementById('app')
)

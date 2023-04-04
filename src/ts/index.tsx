import ReactDOM from 'react-dom'
import { Normalize } from 'styled-normalize'
import { Provider } from 'react-redux'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

import App from '^/app'
import store from '^/state'
import GlobalStyle from './globalStyle'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <Normalize />
    <App />
  </Provider>,
  document.getElementById('app')
)

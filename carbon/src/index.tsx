import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'
import { AppProviders } from './context'

import 'styles/index.scss'

ReactDOM.render(
  <AppProviders>
    <App />
  </AppProviders>,
  document.getElementById('app')
)

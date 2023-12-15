import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import SimpleCounterComponent from './components/simpleCounterComponent'
import PureCounterComponent from './components/PureCounterComponent'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SimpleCounterComponent/>
    <PureCounterComponent/>
  </React.StrictMode>,
)

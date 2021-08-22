import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import './scripts/main.js'

const feather = require('feather-icons')

feather.replace()

ReactDOM.render(<App />, document.getElementById('wd'))

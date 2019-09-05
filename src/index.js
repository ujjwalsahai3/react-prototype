import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import appStore from './store/store'
import {Provider} from 'react-redux'
import './index.css'
import App from './components/App/App'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
    <Provider store={appStore}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    , 
    document.getElementById('root')
)

serviceWorker.unregister()

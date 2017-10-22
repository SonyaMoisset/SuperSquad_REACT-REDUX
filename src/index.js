import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import rootReducer from './reducers'

const store = createStore(rootReducer)
console.log('store', store)
console.log('getstate', store.getState())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
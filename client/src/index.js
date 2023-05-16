import React, { createContext } from 'react'
import ReactDom from 'react-dom'
import App from './App'
import UserStore from './store/UserStore'
import DataStore from './store/DataStore'

export const Context = createContext(null)

ReactDom.render(
  <Context.Provider value={{
    user: new UserStore(),
    data: new DataStore(),
  }}>
  <App />
  </Context.Provider>,
  document.getElementById('root')
);


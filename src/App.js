import React, {
  useReducer,
  useEffect,
  useMemo,
  useCallback,
  useState,
} from 'react'
import io from 'socket.io-client'
import { ThemeProvider } from 'styled-components'
import OrderTable from './components/OrderTable.jsx'
import SearchBar from './components/SearchBar.jsx'
import ThemeToggle from './ThemeToggle.js'
import { lightTheme, darkTheme } from './theme.js'
import {
  GlobalStyle,
  AppContainer,
  Title,
  StatusContainer,
  StatusText,
} from './App.style.js'

// Action types
const UPDATE_ORDERS = 'UPDATE_ORDERS'
const SET_SEARCH_TERM = 'SET_SEARCH_TERM'

// Reducer function
function reducer(state, action) {
  switch (action.type) {
    case UPDATE_ORDERS: {
      const { orders } = action.payload
      const updatedOrders = { ...state.orders }
      orders.forEach((order) => {
        updatedOrders[order.id] = order
      })
      return {
        ...state,
        orders: updatedOrders,
      }
    }
    case SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload,
      }
    default:
      return state
  }
}

const initialState = {
  orders: {},
  searchTerm: '',
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { orders, searchTerm } = state
  const [theme, setTheme] = useState('light')

  const themeMode = theme === 'light' ? lightTheme : darkTheme

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    const socket = io('http://localhost:4000')
    socket.on('order_event', (orderEvents) => {
      console.log('Received order events:', orderEvents)
      if (Array.isArray(orderEvents)) {
        dispatch({ type: UPDATE_ORDERS, payload: { orders: orderEvents } })
      } else {
        console.error('Received invalid order event:', orderEvents)
      }
    })

    return () => socket.disconnect()
  }, [])

  const filteredOrders = useMemo(() => {
    const orderArray = Object.values(orders)
    if (!searchTerm) return orderArray
    const searchPrice = parseFloat(searchTerm)
    return orderArray.filter((order) => {
      const orderPrice = order.price / 100
      return Math.abs(orderPrice - searchPrice) < 0.01 // Compare with a small tolerance
    })
  }, [orders, searchTerm])

  const handleSearch = useCallback((value) => {
    dispatch({ type: SET_SEARCH_TERM, payload: value })
  }, [])

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyle />
        <AppContainer>
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <img src="cloudkitchens_logo.jpeg" alt="Cloud Kitchen Logo" />
          <Title>City Storage Orders</Title>
          <SearchBar onSearch={handleSearch} />
          <StatusContainer>
            <StatusText>Total Orders: {Object.keys(orders).length}</StatusText>
            <StatusText>Matching Orders: {filteredOrders.length}</StatusText>
          </StatusContainer>
          <OrderTable orders={filteredOrders} />
        </AppContainer>
      </>
    </ThemeProvider>
  )
}

export default App

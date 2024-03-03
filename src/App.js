import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Customer from './pages/customer/Customer'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Customer />} />
      </Routes>
    </Router>
  )
}

export default App
